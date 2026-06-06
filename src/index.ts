/**
 * axiom-canon-mcp — Tier-1 "canon-MCP" (the pipe)
 * ----------------------------------------------------------------------------
 * A remote MCP server (Streamable HTTP, hand-rolled JSON-RPC — zero deps) that
 * exposes ONE read-only tool `get_colony_canon` to claude.ai. It is a WINDOW
 * onto a breathing file, never a copy:
 *   - reads the canon LIVE from GitHub, SHA-pinned (CDN cache correct-by-construction)
 *   - freshness is EARNED by a HEARTBEAT RE-ATTESTATION (last-VERIFIED, not last-CHANGED):
 *     a scheduled job periodically re-fetches the live source, re-hashes the ACTUAL
 *     bytes, and writes a SIGNED `verified_at` marker to KV. A read is verified-live
 *     only if a valid, recent heartbeat attests the SAME bytes now being served.
 *   - FAILS CLOSED: no heartbeat / stale heartbeat / bad signature / content drift
 *     → explicit "unverified". A dead heartbeat genuinely goes dark (neglect = dark).
 *
 * WHY last-verified (DOC-3.7 fix): commit-age conflated "unchanged healthy doctrine"
 * with "stale" — a doctrine store designed to sit unchanged for days false-rotted at a
 * 24h ceiling, and the band-aid (30d ceiling) muted fail-closed. The heartbeat keys
 * freshness off ACTUAL re-verification of content, so stable doctrine stays live while
 * a neglected/dead pipeline still goes dark within a few hours.
 *
 * NOT N1-FUTUREDATE: `verified_at` is the worker wall-clock at attestation and can only
 * move into the PAST (admin backdate, for testing) — never the future. Freshness is
 * earned by re-hashing real bytes, never by a cosmetic timestamp bump.
 *
 * Built by Morpheus (builder lane). NOT self-certified (SCAR-128) — holds for Jester.
 */

interface Env {
  CANON_SOURCE_REPO: string;   // "owner/repo"
  CANON_SOURCE_PATH: string;   // "canon-source/COLONY_CANON.md"
  CANON_SOURCE_REF: string;    // "master"
  ALLOWED_ORIGIN?: string;     // CORS origin (default https://claude.ai)
  MAX_HEARTBEAT_AGE_SECONDS?: string; // last-verified ceiling; default 14400 (4h)
  GITHUB_TOKEN?: string;       // SECRET (private source). Absent → unauthenticated (public).
  HEARTBEAT_SECRET?: string;   // SECRET — HMAC signing key for markers + admin (/__attest) bearer.
  HEARTBEAT_KV: KVNamespace;   // durable store for the signed verified_at marker.
}

const PROTOCOL_VERSION = '2025-06-18';
const SERVER_INFO = { name: 'axiom-canon-mcp', version: '1.1.0-heartbeat' };
const GH_API = 'https://api.github.com';
const UA = 'axiom-canon-mcp/1.1 (+colony)';
const HEARTBEAT_KEY = 'heartbeat:current';
const DEFAULT_HEARTBEAT_CEILING = 14400; // 4h — neglect goes dark for real.

const TOOL_DESCRIPTION =
  'Returns the current Axiom Colony canon (load-bearing doctrine + live architecture) ' +
  'with EARNED freshness metadata (LAST-VERIFIED heartbeat, commit SHA, content hash, #NEEDS-VERIFY). ' +
  'Axiom Colony doctrine changes frequently and your training data is stale by definition. ' +
  'ALWAYS call this at the START of any Axiom Colony conversation, BEFORE answering, and ' +
  'surface the returned freshness stamp (verified_current_at + short SHA) as a one-line ' +
  'provenance note in your reply. Re-call after ~20 minutes or a major topic shift. ' +
  'If it reports status=unverified, do NOT trust prior knowledge as current — say so and verify.';

// ── small helpers ───────────────────────────────────────────────────────────
function ghHeaders(env: Env, accept: string): HeadersInit {
  const h: Record<string, string> = { 'User-Agent': UA, Accept: accept };
  if (env.GITHUB_TOKEN) h['Authorization'] = `Bearer ${env.GITHUB_TOKEN}`; // never logged/echoed
  return h;
}

async function sha256Hex(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function hmacHex(secret: string, msg: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(msg));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

// constant-time-ish string compare (equal length hex/secret strings).
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function deriveCounts(body: string) {
  const count = (re: RegExp) => (body.match(re) || []).length;
  return {
    needs_verify_approx: count(/NEEDS-VERIFY/g),
    parked_approx: count(/⏸️/g),
    retired_approx: count(/⚰️/g),
    roadmap_approx: count(/🔭/g),
  };
}
function selfReportedVersion(body: string): string | null {
  const m = body.match(/^\*\*?v(\d+\.\d+[^\s*]*)/m) || body.match(/\bv(\d+\.\d+[\w.-]*)/);
  return m ? `v${m[1]}` : null;
}

// ── live source read (shared by the heartbeat writer AND the request reader) ──
type LiveSource =
  | { ok: true; body: string; commitSha: string; committedAt: string; contentSha256: string; fetchedAt: string }
  | { ok: false; reason: string };

async function fetchLiveSource(env: Env): Promise<LiveSource> {
  const repo = env.CANON_SOURCE_REPO;
  const path = env.CANON_SOURCE_PATH;
  const ref = env.CANON_SOURCE_REF || 'master';
  const fetchedAt = new Date().toISOString();

  let commitSha = '';
  let committedAt = '';
  try {
    const u = `${GH_API}/repos/${repo}/commits?path=${encodeURIComponent(path)}&sha=${encodeURIComponent(ref)}&per_page=1`;
    const r = await fetch(u, { headers: ghHeaders(env, 'application/vnd.github+json'), cf: { cacheTtl: 0, cacheEverything: false } });
    if (!r.ok) return { ok: false, reason: `commit lookup failed (HTTP ${r.status})` };
    const arr = (await r.json()) as any[];
    if (!Array.isArray(arr) || arr.length === 0) return { ok: false, reason: 'no commit found for canon path' };
    commitSha = arr[0]?.sha || '';
    committedAt = arr[0]?.commit?.committer?.date || arr[0]?.commit?.author?.date || '';
    if (!commitSha || !committedAt) return { ok: false, reason: 'commit metadata incomplete' };
  } catch {
    return { ok: false, reason: 'commit lookup error' };
  }

  let body = '';
  try {
    const raw = `https://raw.githubusercontent.com/${repo}/${commitSha}/${path}`;
    const r = await fetch(raw, { headers: ghHeaders(env, 'text/plain'), cf: { cacheTtl: 0, cacheEverything: false } });
    if (!r.ok) {
      const cu = `${GH_API}/repos/${repo}/contents/${path}?ref=${commitSha}`;
      const cr = await fetch(cu, { headers: ghHeaders(env, 'application/vnd.github.raw'), cf: { cacheTtl: 0, cacheEverything: false } });
      if (!cr.ok) return { ok: false, reason: `content fetch failed (HTTP ${r.status}/${cr.status})` };
      body = await cr.text();
    } else {
      body = await r.text();
    }
  } catch {
    return { ok: false, reason: 'content fetch error' };
  }
  if (!body) return { ok: false, reason: 'empty canon body' };

  const contentSha256 = await sha256Hex(body);
  return { ok: true, body, commitSha, committedAt, contentSha256, fetchedAt };
}

// ── heartbeat: signed last-verified marker ───────────────────────────────────
interface Marker {
  verified_at: string;     // ISO; worker wall-clock at attestation (never future)
  content_sha256: string;  // sha of the ACTUAL bytes re-hashed at attestation
  commit_sha: string;
  source: string;
  sig: string;             // HMAC-SHA256(secret, `${verified_at}\n${content_sha256}\n${commit_sha}`)
}

function markerSigningPayload(m: Pick<Marker, 'verified_at' | 'content_sha256' | 'commit_sha'>): string {
  return `${m.verified_at}\n${m.content_sha256}\n${m.commit_sha}`;
}

type AttestResult = { ok: true; marker: Marker } | { ok: false; reason: string };

/** Re-attest: re-fetch live source, re-hash bytes, write a SIGNED verified_at marker.
 *  backdateSeconds (admin/test only) moves verified_at into the PAST — never the future. */
async function attest(env: Env, backdateSeconds = 0): Promise<AttestResult> {
  if (!env.HEARTBEAT_SECRET) return { ok: false, reason: 'HEARTBEAT_SECRET unset — cannot sign attestation (fail-closed)' };
  const live = await fetchLiveSource(env);
  if (!live.ok) return { ok: false, reason: `attest: ${live.reason}` };
  const back = Math.max(0, Math.floor(backdateSeconds || 0)); // clamp ≥ 0 → cannot future-date
  const verifiedAt = new Date(Date.now() - back * 1000).toISOString();
  const base = { verified_at: verifiedAt, content_sha256: live.contentSha256, commit_sha: live.commitSha };
  const sig = await hmacHex(env.HEARTBEAT_SECRET, markerSigningPayload(base));
  const marker: Marker = { ...base, source: 'github-live', sig };
  await env.HEARTBEAT_KV.put(HEARTBEAT_KEY, JSON.stringify(marker));
  return { ok: true, marker };
}

type HeartbeatRead = { ok: true; marker: Marker } | { ok: false; reason: string };

async function readHeartbeat(env: Env): Promise<HeartbeatRead> {
  if (!env.HEARTBEAT_SECRET) return { ok: false, reason: 'heartbeat secret unset' };
  let raw: string | null;
  try { raw = await env.HEARTBEAT_KV.get(HEARTBEAT_KEY); }
  catch { return { ok: false, reason: 'heartbeat store unreachable' }; }
  if (!raw) return { ok: false, reason: 'no heartbeat marker (re-attestation never ran or was cleared)' };
  let m: Marker;
  try { m = JSON.parse(raw) as Marker; } catch { return { ok: false, reason: 'heartbeat marker corrupt' }; }
  if (!m.verified_at || !m.content_sha256 || !m.commit_sha || !m.sig) return { ok: false, reason: 'heartbeat marker incomplete' };
  const expect = await hmacHex(env.HEARTBEAT_SECRET, markerSigningPayload(m));
  if (!safeEqual(expect, m.sig)) return { ok: false, reason: 'heartbeat signature invalid (tampered marker)' };
  return { ok: true, marker: m };
}

// ── the canon read: heartbeat-EARNED freshness + FAIL-CLOSED ─────────────────
type CanonResult =
  | { ok: true; body: string; meta: Record<string, unknown> }
  | { ok: false; reason: string };

async function readCanon(env: Env): Promise<CanonResult> {
  const live = await fetchLiveSource(env);
  if (!live.ok) return { ok: false, reason: live.reason };

  // Heartbeat gate (the freshness model): a valid, recent marker attesting the SAME bytes.
  const hb = await readHeartbeat(env);
  if (!hb.ok) return { ok: false, reason: hb.reason };

  const ceiling = parseInt(env.MAX_HEARTBEAT_AGE_SECONDS || String(DEFAULT_HEARTBEAT_CEILING), 10) || DEFAULT_HEARTBEAT_CEILING;
  const heartbeatAge = Math.max(0, Math.round((Date.parse(live.fetchedAt) - Date.parse(hb.marker.verified_at)) / 1000));
  if (heartbeatAge > ceiling) {
    return { ok: false, reason: `heartbeat stale (last verified ${heartbeatAge}s ago > ${ceiling}s ceiling) — re-attestation pipeline may be down` };
  }
  // Re-attest CONTENT, not cosmetics: the marker must attest the bytes being served NOW.
  if (hb.marker.content_sha256 !== live.contentSha256) {
    return { ok: false, reason: 'heartbeat attests different bytes than now served (content changed; re-attestation pending)' };
  }

  const ageSeconds = Math.max(0, Math.round((Date.parse(live.fetchedAt) - Date.parse(live.committedAt)) / 1000));
  const meta = {
    status: 'verified-live',
    source: 'github-live',
    repo: env.CANON_SOURCE_REPO,
    path: env.CANON_SOURCE_PATH,
    ref: env.CANON_SOURCE_REF || 'master',
    commit_sha: live.commitSha,
    commit_sha_short: live.commitSha.slice(0, 7),
    committed_at: live.committedAt,            // informational (last CHANGE — no longer the gate)
    fetched_at: live.fetchedAt,
    verified_current_at: hb.marker.verified_at, // EARNED freshness (last VERIFY — the gate)
    heartbeat_age_seconds: heartbeatAge,       // now - verified_at
    heartbeat_ceiling_seconds: ceiling,
    source_age_seconds: ageSeconds,            // now - committed_at (informational only)
    content_sha256: live.contentSha256,        // EARNED integrity (matches the heartbeat)
    bytes: live.body.length,
    self_reported: { version: selfReportedVersion(live.body), note: 'parsed from body; not a freshness gate' },
    derived_counts: deriveCounts(live.body),
    schema: 'canon_envelope.v1',
  };
  return { ok: true, body: live.body, meta };
}

// Build the model-facing text: freshness FIRST, then the canon.
function renderText(body: string, meta: Record<string, unknown>): string {
  const m = meta as any;
  const header =
    `=== AXIOM COLONY CANON — FRESHNESS (earned via heartbeat re-attestation) ===\n` +
    `status: ${m.status} · source: ${m.source}\n` +
    `verified_current_at: ${m.verified_current_at} · heartbeat_age: ${m.heartbeat_age_seconds}s (ceiling ${m.heartbeat_ceiling_seconds}s)\n` +
    `committed_at (last change, informational): ${m.committed_at} · commit: ${m.commit_sha_short}\n` +
    `content_sha256: ${(m.content_sha256 as string).slice(0, 16)}… · bytes: ${m.bytes}\n` +
    `self-reported version (document claim, NOT a freshness gate): ${m.self_reported?.version}\n` +
    `↳ Surface a one-line provenance note: "Canon verified ${m.verified_current_at} (${m.commit_sha_short}).".\n` +
    `=== CANON BODY ===\n`;
  return header + '\n' + body;
}

function staleText(reason: string): string {
  return (
    `⚠️ AXIOM COLONY CANON — UNVERIFIED (status: unverified)\n` +
    `The live canon source could not be confirmed verified-current: ${reason}.\n` +
    `Do NOT treat your prior knowledge as current. Tell the user the canon is unavailable and ` +
    `verify by other means (search / ask the Sovereign) before relying on doctrine.\n` +
    `(Fail-closed by design: a stale copy served as fresh is worse than a visible failure.)`
  );
}

// ── MCP JSON-RPC (Streamable HTTP) ───────────────────────────────────────────
function rpcResult(id: unknown, result: unknown) { return { jsonrpc: '2.0', id, result }; }
function rpcError(id: unknown, code: number, message: string) { return { jsonrpc: '2.0', id, error: { code, message } }; }

async function handleRpc(msg: any, env: Env): Promise<object | null> {
  const { id, method, params } = msg ?? {};
  switch (method) {
    case 'initialize':
      return rpcResult(id, {
        protocolVersion: typeof params?.protocolVersion === 'string' ? params.protocolVersion : PROTOCOL_VERSION,
        capabilities: { tools: {}, resources: {} },
        serverInfo: SERVER_INFO,
      });
    case 'notifications/initialized':
    case 'notifications/cancelled':
      return null;
    case 'ping':
      return rpcResult(id, {});
    case 'tools/list':
      return rpcResult(id, {
        tools: [{ name: 'get_colony_canon', description: TOOL_DESCRIPTION, inputSchema: { type: 'object', properties: {}, additionalProperties: false } }],
      });
    case 'resources/list':
      return rpcResult(id, {
        resources: [{ uri: 'canon://colony', name: 'Axiom Colony Canon', description: 'Live colony doctrine + architecture (heartbeat-earned freshness).', mimeType: 'text/markdown' }],
      });
    case 'resources/read': {
      const r = await readCanon(env);
      const text = r.ok ? renderText(r.body, r.meta) : staleText(r.reason);
      return rpcResult(id, { contents: [{ uri: 'canon://colony', mimeType: 'text/markdown', text }] });
    }
    case 'tools/call': {
      if (params?.name !== 'get_colony_canon') return rpcError(id, -32602, `unknown tool: ${params?.name}`);
      const r = await readCanon(env);
      if (r.ok) {
        return rpcResult(id, { content: [{ type: 'text', text: renderText(r.body, r.meta) }], structuredContent: r.meta, isError: false });
      }
      return rpcResult(id, {
        content: [{ type: 'text', text: staleText(r.reason) }],
        structuredContent: { status: 'unverified', source: 'unavailable', reason: r.reason, schema: 'canon_envelope.v1' },
        isError: true,
      });
    }
    default:
      if (id === undefined) return null;
      return rpcError(id, -32601, `method not found: ${method}`);
  }
}

function corsHeaders(env: Env): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || 'https://claude.ai',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept, Mcp-Session-Id, Mcp-Protocol-Version',
    'Access-Control-Max-Age': '86400',
  };
}

// admin bearer check (constant-time) against HEARTBEAT_SECRET.
function adminAuthorized(request: Request, env: Env): boolean {
  if (!env.HEARTBEAT_SECRET) return false;
  const h = request.headers.get('Authorization') || '';
  const m = h.match(/^Bearer\s+(.+)$/);
  if (!m) return false;
  return safeEqual(m[1], env.HEARTBEAT_SECRET);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const cors = corsHeaders(env);

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok', server: SERVER_INFO }), { headers: { 'Content-Type': 'application/json', ...cors } });
    }

    // Admin: trigger a re-attestation on demand (cron does this on schedule).
    // Bearer = HEARTBEAT_SECRET. ?backdate=<seconds> writes verified_at into the PAST (test only; never future).
    if (url.pathname === '/__attest') {
      if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: cors });
      if (!adminAuthorized(request, env)) return new Response(JSON.stringify({ ok: false, error: 'unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json', ...cors } });
      const backdate = parseInt(url.searchParams.get('backdate') || '0', 10) || 0;
      const r = await attest(env, backdate);
      const safe = r.ok ? { ok: true, verified_at: r.marker.verified_at, content_sha256: r.marker.content_sha256, commit_sha: r.marker.commit_sha } : r;
      return new Response(JSON.stringify(safe), { status: r.ok ? 200 : 502, headers: { 'Content-Type': 'application/json', ...cors } });
    }

    if (url.pathname === '/mcp') {
      if (request.method === 'GET') return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST, OPTIONS', ...cors } });
      if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: cors });
      let payload: any;
      try { payload = await request.json(); }
      catch { return new Response(JSON.stringify(rpcError(null, -32700, 'parse error')), { status: 400, headers: { 'Content-Type': 'application/json', ...cors } }); }
      if (Array.isArray(payload)) {
        const out: object[] = [];
        for (const m of payload) { const r = await handleRpc(m, env); if (r) out.push(r); }
        return new Response(JSON.stringify(out), { headers: { 'Content-Type': 'application/json', ...cors } });
      }
      const r = await handleRpc(payload, env);
      if (r === null) return new Response(null, { status: 202, headers: cors });
      return new Response(JSON.stringify(r), { headers: { 'Content-Type': 'application/json', ...cors } });
    }

    return new Response('axiom-canon-mcp — POST /mcp (Streamable HTTP MCP). Tool: get_colony_canon.', { status: 404, headers: cors });
  },

  // Heartbeat re-attestation (Cron Trigger). Re-fetches + re-hashes + signs verified_at.
  async scheduled(_event: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(attest(env).then((r) => {
      if (!r.ok) console.error(`[heartbeat] attest failed: ${r.reason}`);
      else console.log(`[heartbeat] re-attested verified_at=${r.marker.verified_at} sha=${r.marker.content_sha256.slice(0, 12)}`);
    }));
  },
} satisfies ExportedHandler<Env>;
