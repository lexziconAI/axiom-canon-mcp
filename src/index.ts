/**
 * axiom-canon-mcp — Tier-1 "canon-MCP" (the pipe)
 * ----------------------------------------------------------------------------
 * A remote MCP server (Streamable HTTP, hand-rolled JSON-RPC — zero deps) that
 * exposes ONE read-only tool `get_colony_canon` to claude.ai. It is a WINDOW
 * onto a breathing file, never a copy:
 *   - reads the canon LIVE from GitHub, SHA-pinned (CDN cache correct-by-construction)
 *   - freshness is EARNED out-of-band (commit date + SHA + content hash), never
 *     read from the document body
 *   - FAILS CLOSED: if the live source / commit lookup fails, it returns an
 *     explicit "unverified — search to confirm" result, never a fossil dressed as fresh.
 *
 * Built by Morpheus (builder lane). NOT self-certified (SCAR-128) — holds for Jester.
 * Source repo/path/ref are CONFIG (wrangler vars) → swapping the proof source for
 * the ratified canon's real home later is config-only, no rebuild.
 */

interface Env {
  CANON_SOURCE_REPO: string;   // "owner/repo"
  CANON_SOURCE_PATH: string;   // "canon-source/COLONY_CANON.v1.0.proof.md"
  CANON_SOURCE_REF: string;    // "main"
  ALLOWED_ORIGIN?: string;     // CORS origin (default https://claude.ai)
  MAX_SOURCE_AGE_SECONDS?: string; // hard staleness ceiling; "0"/unset = disabled
  GITHUB_TOKEN?: string;       // SECRET (private source). Absent → unauthenticated (public).
}

const PROTOCOL_VERSION = '2025-06-18';
const SERVER_INFO = { name: 'axiom-canon-mcp', version: '1.0.0-tier1' };
const GH_API = 'https://api.github.com';
const UA = 'axiom-canon-mcp/1.0 (+colony)';

const TOOL_DESCRIPTION =
  'Returns the current Axiom Colony canon (load-bearing doctrine + live architecture) ' +
  'with EARNED freshness metadata (commit date, commit SHA, content hash, #NEEDS-VERIFY). ' +
  'Axiom Colony doctrine changes frequently and your training data is stale by definition. ' +
  'ALWAYS call this at the START of any Axiom Colony conversation, BEFORE answering, and ' +
  'surface the returned freshness stamp (date + short SHA + #NEEDS-VERIFY) as a one-line ' +
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

// Cheap, clearly-labelled-as-approximate register counts (never authoritative).
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

// ── the canon read: EARNED freshness + FAIL-CLOSED ───────────────────────────
type CanonResult =
  | { ok: true; body: string; meta: Record<string, unknown> }
  | { ok: false; reason: string };

async function readCanon(env: Env): Promise<CanonResult> {
  const repo = env.CANON_SOURCE_REPO;
  const path = env.CANON_SOURCE_PATH;
  const ref = env.CANON_SOURCE_REF || 'main';
  const fetchedAt = new Date().toISOString();

  // 1) EARNED freshness — latest commit touching this path (out-of-band; the body can't forge it).
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
  } catch (e) {
    return { ok: false, reason: 'commit lookup error' };
  }

  // 2) Fetch the bytes SHA-PINNED (immutable URL → any CDN cache is correct by construction).
  let body = '';
  try {
    const raw = `https://raw.githubusercontent.com/${repo}/${commitSha}/${path}`;
    const r = await fetch(raw, { headers: ghHeaders(env, 'text/plain'), cf: { cacheTtl: 0, cacheEverything: false } });
    if (!r.ok) {
      // private repos don't serve raw.githubusercontent without cookies → fall back to contents API.
      const cu = `${GH_API}/repos/${repo}/contents/${path}?ref=${commitSha}`;
      const cr = await fetch(cu, { headers: ghHeaders(env, 'application/vnd.github.raw'), cf: { cacheTtl: 0, cacheEverything: false } });
      if (!cr.ok) return { ok: false, reason: `content fetch failed (HTTP ${r.status}/${cr.status})` };
      body = await cr.text();
    } else {
      body = await r.text();
    }
  } catch (e) {
    return { ok: false, reason: 'content fetch error' };
  }
  if (!body) return { ok: false, reason: 'empty canon body' };

  // 3) EARNED integrity + derived freshness.
  const contentSha256 = await sha256Hex(body);
  const ageSeconds = Math.max(0, Math.round((Date.parse(fetchedAt) - Date.parse(committedAt)) / 1000));

  // 4) Hard staleness ceiling (optional) → fail closed if the source is too old.
  const ceiling = parseInt(env.MAX_SOURCE_AGE_SECONDS || '0', 10);
  if (ceiling > 0 && ageSeconds > ceiling) {
    return { ok: false, reason: `source older than ceiling (${ageSeconds}s > ${ceiling}s)` };
  }

  const meta = {
    status: 'verified-live',
    source: 'github-live',
    repo,
    path,
    ref,
    commit_sha: commitSha,
    commit_sha_short: commitSha.slice(0, 7),
    committed_at: committedAt,        // EARNED (out-of-band)
    fetched_at: fetchedAt,            // worker wall-clock
    source_age_seconds: ageSeconds,   // fetched_at - committed_at
    content_sha256: contentSha256,    // EARNED integrity
    bytes: body.length,
    self_reported: {                  // document CLAIMS — never authoritative
      version: selfReportedVersion(body),
      note: 'parsed from body; not a freshness gate',
    },
    derived_counts: deriveCounts(body),
    schema: 'canon_envelope.v1',
  };
  return { ok: true, body, meta };
}

// Build the model-facing text: freshness FIRST, then the canon. (Refuter F12/F13.)
function renderText(body: string, meta: Record<string, unknown>): string {
  const m = meta as any;
  const header =
    `=== AXIOM COLONY CANON — FRESHNESS (earned, out-of-band) ===\n` +
    `status: ${m.status} · source: ${m.source}\n` +
    `committed_at: ${m.committed_at} · commit: ${m.commit_sha_short} · age: ${m.source_age_seconds}s\n` +
    `content_sha256: ${(m.content_sha256 as string).slice(0, 16)}… · bytes: ${m.bytes}\n` +
    `self-reported version (document claim, NOT a freshness gate): ${m.self_reported?.version}\n` +
    `derived counts (approx): NEEDS-VERIFY≈${m.derived_counts?.needs_verify_approx}, ` +
    `parked≈${m.derived_counts?.parked_approx}, retired≈${m.derived_counts?.retired_approx}\n` +
    `↳ Surface a one-line provenance note in your answer: "Canon as of ${m.committed_at} (${m.commit_sha_short}).".\n` +
    `=== CANON BODY ===\n`;
  return header + '\n' + body;
}

function staleText(reason: string): string {
  return (
    `⚠️ AXIOM COLONY CANON — UNVERIFIED (status: unverified)\n` +
    `The live canon source could not be confirmed fresh: ${reason}.\n` +
    `Do NOT treat your prior knowledge as current. Tell the user the canon is unavailable and ` +
    `verify by other means (search / ask the Sovereign) before relying on doctrine.\n` +
    `(Fail-closed by design: a stale copy served as fresh is worse than a visible failure.)`
  );
}

// ── MCP JSON-RPC (Streamable HTTP) ───────────────────────────────────────────
function rpcResult(id: unknown, result: unknown) {
  return { jsonrpc: '2.0', id, result };
}
function rpcError(id: unknown, code: number, message: string) {
  return { jsonrpc: '2.0', id, error: { code, message } };
}

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
      return null; // notification — no response
    case 'ping':
      return rpcResult(id, {});
    case 'tools/list':
      return rpcResult(id, {
        tools: [
          {
            name: 'get_colony_canon',
            description: TOOL_DESCRIPTION,
            inputSchema: { type: 'object', properties: {}, additionalProperties: false },
          },
        ],
      });
    case 'resources/list':
      return rpcResult(id, {
        resources: [
          { uri: 'canon://colony', name: 'Axiom Colony Canon', description: 'Live colony doctrine + architecture (earned freshness).', mimeType: 'text/markdown' },
        ],
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
        return rpcResult(id, {
          content: [{ type: 'text', text: renderText(r.body, r.meta) }],
          structuredContent: r.meta,
          isError: false,
        });
      }
      // FAIL CLOSED — explicit unverified result routes the model to verify, never a fossil.
      return rpcResult(id, {
        content: [{ type: 'text', text: staleText(r.reason) }],
        structuredContent: { status: 'unverified', source: 'unavailable', reason: r.reason, schema: 'canon_envelope.v1' },
        isError: true,
      });
    }
    default:
      if (id === undefined) return null; // unknown notification
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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const cors = corsHeaders(env);

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok', server: SERVER_INFO }), {
        headers: { 'Content-Type': 'application/json', ...cors },
      });
    }

    if (url.pathname === '/mcp') {
      if (request.method === 'GET') {
        // No server-initiated stream in this stateless server.
        return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST, OPTIONS', ...cors } });
      }
      if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: cors });
      let payload: any;
      try {
        payload = await request.json();
      } catch {
        return new Response(JSON.stringify(rpcError(null, -32700, 'parse error')), {
          status: 400, headers: { 'Content-Type': 'application/json', ...cors },
        });
      }
      // Single or batch.
      if (Array.isArray(payload)) {
        const out: object[] = [];
        for (const m of payload) {
          const r = await handleRpc(m, env);
          if (r) out.push(r);
        }
        return new Response(JSON.stringify(out), { headers: { 'Content-Type': 'application/json', ...cors } });
      }
      const r = await handleRpc(payload, env);
      if (r === null) return new Response(null, { status: 202, headers: cors }); // notification ack
      return new Response(JSON.stringify(r), { headers: { 'Content-Type': 'application/json', ...cors } });
    }

    return new Response('axiom-canon-mcp — POST /mcp (Streamable HTTP MCP). Tool: get_colony_canon.', {
      status: 404, headers: cors,
    });
  },
} satisfies ExportedHandler<Env>;
