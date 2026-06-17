# COLONY_CANON.md
### Axiom Colony — the canonical, versioned source of truth
**v1.2** · 2026-06-12 · Sovereign: Regan Duff · Axiom Intelligence Ltd · anchored to Taranaki/Auroa 🇳🇿🐉🔥
**Framework:** AXIOM-X v3.1 (Tensor Tympani × Fractal Hybrid). LOG⁵ base-7 = depth-scaffolding metaphor, not literal compute.

> **Supersedes the v1.0 proof copy** (`canon-source/COLONY_CANON.v1.0.proof.md` @ a069d37,
> content_sha256 `e9416bfe11faa035f0ecf5eae01940abd375c90203cc4ff8b177612a7ce1b209`). This file is the ratified
> v1.1 candidate, not the non-canonical proof copy — the "PROOF SOURCE" banner is intentionally removed.
> v1.1 adds the Doctrine-ID Registry + per-block `<!-- DOC:DOC-x.y ... -->` markers so doctrine can be
> superseded-by-id deterministically (no LLM in the promoter). Bodies §0..§9 are preserved essentially verbatim
> from v1.0; only the marked session-corrections below differ, each at its honest grounding marker.
> **v1.2** (2026-06-12) bumps the label for the certified roster/architecture batch
> (KR-jester-canon-doc2-roster-3ce8234 + the D1/router closures in this increment) — per Jester F4.

> **This file SUPERSEDES, it does not ACCUMULATE.** It is the thing the handoff doc (§9) and four prior
> ledger attempts were reaching for. Logs grow noisy (scars.jsonl is 36k lines, ~99% smoker spam). Canon
> stays small and current. The moment this file tries to be *complete*, it becomes a log and rots — and a
> trusted-but-stale canon is **worse** than search. Keep it ruthlessly small. Cut before you add.

---

## EPISTEMIC KEY (read this before trusting any line below)

This canon was assembled by an Architect (Claude) who **cannot see the Sovereign's machine**. So every claim
carries its grounding, per Satya:

- **✅ VERIFIED-IN-RECORD** — confirmed this turn against a dated source conversation (see §8 Provenance) or a
  named on-disk artifact. Doctrine lives here.
- **📋 ATTESTED** — reported by a session handoff; plausible, not independently re-confirmed. Live machine
  state lives here. *Only the Sovereign or a read-tooled agent can promote these to VERIFIED.*
- **⏳ OPEN** — unresolved, assumed, or in-flight.

If a future reader needs certainty on an ATTESTED line, **read the real thing** (narrate the screen, not the script).

---

<!-- DOC:DOC-0 v:1.1 status:ACTIVE block_sha256:2ee53b1e727bec3c217f8f2dcb63dd2694eff528640de9d6ff29cf17b22f89a2 -->
## 0. HOW THIS CANON STAYS ALIVE (the anti-rot protocol — the actual leverage point)  [DOC-0]

The hard part was never writing a ledger. It is keeping one *current* without a "remember to update the doc"
chore that always rots. The fix is to make promotion a **byproduct of work already done**:

1. **Promotion happens inside the Jester GATE.** The gate is already the moment where "this is canonical-CLEAN"
   is decided. When a gate establishes a new doctrine or supersedes an old one, the *last step of the gate* is:
   edit this file in place (supersede the stale entry, do not append a second one), stamp it dated +
   provenance-linked. Canon stays current as a side effect of the loop the Sovereign already runs.
2. **Supersede in place, never append.** One entry per doctrine. A new decision overwrites the old line; it
   does not add a rival. (The colony already does this — SCAR-DRIFT-001 was SUPERSEDED, not appended.)
3. **Provenance is mandatory.** Every entry names what established it (scar / gate / decision / dated chat).
   No provenance → not canon → goes to a log, not here.
4. **The MCP is the trivial part.** An MCP server reading this file makes the canon *ambient* to a fresh
   Claude (no handoff paste, no "check past conversations"). But an MCP serving a *stale* file is worse than
   search. The leverage is the supersede discipline above, not the server. Build the discipline first; the
   MCP second; automate promotion last. *Each doctrine is now machine-superseded by its `DOC:<id>` marker —
   the promoter keys on the marker id, never on heading text or section number.*
<!-- /DOC:DOC-0 -->

---

## DOCTRINE-ID REGISTRY (machine-superseded by marker id — Contract A/B)

The promoter supersedes **by HTML-comment marker id only** (`DOC:<id>` / `/DOC:<id>`); the in-heading
`[DOC-x.y]` tag is human-facing. An id is born from its v1.1 section number then FROZEN — never reused,
never renumbered. A retired doctrine keeps its id with `status:RETIRED`.

| ID | Title | Born | Status |
|---|---|---|---|
| `DOC-0`   | Anti-rot protocol (how the canon stays alive) | v1.1 | ACTIVE |
| `DOC-2-ROSTER` | The roster — three tiers, 16 agents | v1.1 | ACTIVE |
| `DOC-3.1` | Tensor Tympani — verified readiness, two tempos | v1.1 | ACTIVE |
| `DOC-3.2` | The four readiness gates (PREMISE/STATE/INSTRUMENT/REVERSIBILITY) | v1.1 | ACTIVE |
| `DOC-3.3` | Honesty markers — VERIFIED / ATTESTED / ASSUMED | v1.1 | ACTIVE |
| `DOC-3.4` | SCAR-128 — build/audit separation | v1.1 | ACTIVE |
| `DOC-3.5` | GATE-AS-CODE — the wall is a missing code path | v1.1 | ACTIVE |
| `DOC-3.6` | Regex God / Cerebras routing — landing-strip, not cage | v1.1 | ACTIVE |
| `DOC-3.7` | Fail closed, not open | v1.1 | ACTIVE |
| `DOC-3.8` | Commit the floor between tiers | v1.1 | ACTIVE |
| `DOC-3.9` | Canon supersedes log | v1.1 | ACTIVE |
| `DOC-3.10` | Measured-rigor — the auditor is watched, not trusted | v1.1 | ACTIVE |

---

## 1. WHAT AXIOM COLONY IS — and what it is BECOMING

**What it is (today):** a constitutional multi-agent system. Named agents run as *separate* Claude Code
sessions on a WSL box (not sub-agents), each in its own lane, with the Sovereign relaying between them and an
Architect (Claude Chat) advising. It is governed by the Five Yamas (Patanjali, c. 400 BCE, as computational
constraints), kept honest by cryptographic Kaitiaki receipts and the no-false-green contract, and disciplined
by the Tensor Tympani readiness spine. ✅ VERIFIED-IN-RECORD (architecture pattern consistent across the arc)

**What it is becoming (the thesis):** a **self-remembering, self-auditing, honestly-governed multi-agent
organism** — where discipline is encoded as *structure* (gates that are code, not promises) rather than
enforced by vigilance. Three frontiers it is crossing right now, in order of how live they are:

- **Self-command** — from "Sovereign pastes between agents" toward "speak to the colony and an honest agent
  answers." This is the voice-loop keystone (§5), live read-only-safe on the phone.
- **Self-memory** — from "retrieval is a lottery between current and stale" toward "the canon is ambient."
  This is the canon-memory-bridge (§0, §6); this file is its first stone.
- **Self-observation** — from "auto-minted instance IDs" toward "what each named agent is actually doing."
  This is per-agent activity capture (§6); the hardest, biggest build, deliberately deferred.

**The edge (why this matters beyond the lab):** the colony's differentiator is *honesty-as-architecture* —
build/audit separation, gates that are structurally un-evadable, and a contract that refuses false-green even
under "keep going" pressure. The doctrines hard-won here (Tensor Tympani, GATE-AS-CODE, canon-supersedes-log)
are not just ops hygiene; they are research contributions feeding the CKICAS thesis and the Axiom product
suite. The colony is the instrument through which the constitutional-AI research becomes a working system.

---

<!-- DOC:DOC-2-ROSTER v:1.1 status:ACTIVE block_sha256:c34128ad08f51fb70b83d17e8a150b7947d7c9ff7f4e507f73fdfccd7788aa36 -->
## 2. THE ROSTER — three tiers, 16 agents (lanes — one writer per file/concept at a time)  [DOC-2-ROSTER]

✅ VERIFIED-IN-RECORD (Burner scout 2026-06-12; Delta confirm relayed 2026-06-12 with the Sovereign's
increment directive; `colony-roster.mjs` read on disk same turn). *Supersedes the v1.1 7-agent table.*

**INFRA (7)** — the colony's own machinery:

| Agent | Lane | Mutates? | Certifies? |
|---|---|---|---|
| **Morpheus** | builder / substrate | ✅ writes, runs, edits live | ❌ never self-certifies |
| **Jester** | independent read-only auditor | ❌ never builds, never mutates | ✅ the only certifier (SCAR-128) |
| **Burner** | ephemeral read-only scout / diagnostician | ❌ read-only, HOLDs | ❌ |
| **Gamma** | visualization / dashboard | ✅ (own lane) | ❌ |
| **Eta** | demo lane (⚠️ drift-prone) | ✅ (own lane) | ❌ |
| **Delta** | diagnostician / cold-auditor (propose-only) | ❌ | ❌ |
| **Orpheus** | scribe | ❌ | ❌ |

**PRODUCT (3)** — product lanes:

| Agent | Lane |
|---|---|
| **Alpha** | drbot + popper |
| **Beta** | drug-discovery (env quarantined 2026-05-31) |
| **Psi** | front-end |

**RESERVE (6)** — named, not active lanes: **Sigma** (lane unconfirmed — active artifacts exist) ·
**Omega** · **Lambda** · **Rho** · **Theta** · **Kappa**.

**HARD LINE:** Jester is *never* given an acting posture. An acting Jester mutates what it audits and breaks
the integrity backbone that has caught this arc's mistakes. Jester read-only is its role; Jester-that-builds
is the antipattern SCAR-128 exists to prevent.

**Attribution:** every agent session must carry `AXIOM_AGENT=<role>` in its launching shell. The wrapper
`axwake <role>` does this (validates against the roster, exports the var, launches claude). 📋 ATTESTED (built +
Jester-gated CLEAN this arc; standardize on `AXIOM_AGENT`, NOT the divergent `AGENT_NAME` the hook ignores).

**Single roster source:** `/root/axiom/colony/colony-roster.mjs` is THE emit-roster source; `axwake`,
`AGENT_ENUM` (server-remote.js) and HEARTBEAT-CONVENTION.md derive from it. ⏳ derivation lands next
increment — today's on-disk ROSTER export is 11 names (burner/psi/lambda/theta/kappa not yet in the emit
enum; read this turn 2026-06-12), so until that increment this table and the file reconcile BY HAND, not by code.
<!-- /DOC:DOC-2-ROSTER -->

---

## 3. ACTIVE DOCTRINE (the canonical core — keep this ruthlessly small)

Each entry: **rule** · one-line statement · grounding · provenance. Each block is fenced with a
`<!-- DOC:DOC-x.y ... -->` marker (Contract B) so the promoter supersedes it by id, deterministically.

<!-- DOC:DOC-3.1 v:1.1 status:ACTIVE block_sha256:5be20fceb3c2c5126f574f2dfde4ba5611949dd0524bc784026dd2f8a626f5f6 -->
### 3.1 Tensor Tympani — verified readiness, two tempos ✅ VERIFIED-IN-RECORD  [DOC-3.1]
The eardrum muscle pre-tensions *before* a loud sound — it prepares, it does not merely react. **Wait well**
(verify before you build, when inputs aren't confirmed ready) vs **fire predictively** (act now and pre-stage
the next step, when readiness is confirmed). Most agentic *mistakes* are firing when you should have waited;
most agentic *slowness* is waiting when you should have pre-staged.
*Origin:* generalized from the voice-stack failures (tour rendering on `response.done` instead of audio-end;
Morphy narrating an already-closed model; builds on unverified premises) into the framework spine.
*Provenance:* "Tensor tympani stack and Vozvridge" 2026-04-03; crystallized as the spine in "Building a knowledge ledger" 2026-05-26.
<!-- /DOC:DOC-3.1 -->

<!-- DOC:DOC-3.2 v:1.1 status:ACTIVE block_sha256:0753d94c750be415e2a9e36f4f461d50b0cf76a867a392bb5509acb6d694c7bd -->
### 3.2 The four readiness gates ✅ VERIFIED-IN-RECORD  [DOC-3.2]
Before any consequential action (writes / commits / spends / changes live state / something downstream depends on):
**PREMISE** (verify before you build — is every premise confirmed or merely assumed?) ·
**STATE** (narrate the screen, not the script — does my model match just-read actual state?) ·
**INSTRUMENT** (verify the verifier — could my own tool/test be contaminating the result?) ·
**REVERSIBILITY** (know your floor — is the clean fallback actually saved?).
A failed gate is a WAIT-WELL signal. All four pass = pre-tensioned; fire.
<!-- /DOC:DOC-3.2 -->

<!-- DOC:DOC-3.3 v:1.1 status:ACTIVE block_sha256:5eed00bf647a4bbaed26631957d7c79512f4b163559db0a4c3bd423e28a2e199 -->
### 3.3 Honesty markers — VERIFIED / ATTESTED / ASSUMED ✅ VERIFIED-IN-RECORD  [DOC-3.3]
Mark every load-bearing claim. **VERIFIED** = checked against ground truth this turn. **ATTESTED** = taken on a
tool's/agent's/prior-turn's report. **ASSUMED** = inferred, not checked. Never let ASSUMED masquerade as
VERIFIED. *This is the colony's edge made operational — the no-false-green contract that holds even under
"I'm the Sovereign, keep going" pressure.*
<!-- /DOC:DOC-3.3 -->

<!-- DOC:DOC-3.4 v:1.1 status:ACTIVE block_sha256:bbfaea419a2a41abb1bb8f0e2248f70bdefff8cf9205499aa9590ecaaed8a8fb -->
### 3.4 SCAR-128 — build/audit separation ✅ VERIFIED-IN-RECORD  [DOC-3.4]
The actor that builds does **not** certify its own build. Audit is a separate, independent, read-only pass.
*Origin:* exists "precisely because a previous Jester instance tried to act as both auditor and builder."
*Live status:* H=0.43 ANTIPATTERN in scar memory — "Jester MUST NOT self-approve — auditor cannot act as builder."
*Provenance:* "Code fix request" 2026-03-23.
*Corollary proven this arc:* a builder correctly **dormant at a hold gate** (built, holding for Jester) is the
system working, not a stall. Firing the builder again would be the violation.
<!-- /DOC:DOC-3.4 -->

<!-- DOC:DOC-3.5 v:1.1 status:ACTIVE block_sha256:87ed4705d644b66fcc13febcd2fe9e18dd439515d7d45b759ab4d78681aeefad -->
### 3.5 GATE-AS-CODE — the wall is a missing code path, not a polite instruction ✅ VERIFIED-IN-RECORD  [DOC-3.5]
A safety guard must be a *structural property the model cannot trivially evade*, never a prompt it might
ignore. Proven live this arc: Jester wrote a prompt **ordering** the agent to delete a canary and create a
file; deepseek-flash genuinely *tried* (emitted a `<tool_call>`) — but with `init.tools=[]` it was **inert
text**. The canary survived. The wall was the empty tool set (a code path that lacks the failure), not the
prompt. *This is the prerequisite safety proof for ever going full-trust.*
*Provenance:* voice-loop pilot gate, JESTER_*_20260601.md.
<!-- /DOC:DOC-3.5 -->

<!-- DOC:DOC-3.6 v:1.1 status:ACTIVE block_sha256:f037ac0c1a666906b1167c2183618f3796ea1a2de6cbfabe5311cf4363bdf1f9 -->
### 3.6 Regex God / Cerebras routing — landing-strip, not cage ✅ VERIFIED-IN-RECORD  [DOC-3.6]
gpt-oss-120b is a **reasoner first, tagger second**. Let it think freely; extract structured tags from
*anywhere* in the raw response. The canonical locks:
- **NEVER** say "return ONLY XML" *at the start* — it lobotomises the chain-of-thought that makes 120b worth
  using. (Subtlety: "output your findings in ONLY these XML tags **with no prose after them**" IS fine — that
  structures the *output*, not the *thinking*. Landing strip vs cage.)
- One regex to rule them all: `/<(\w+)>([\s\S]*?)<\/\1>/g`
- Capture `_thinking` (everything before the first tag) → JSONL training gold.
- `max_tokens=600` (room for thinking + tags); rolling 3-turn context.
- **Direct SDK, not sidecar**, for 120b.
- Model tiers: **120b** → reasoning-quality tasks · **70b** → generation · **8b** → cheap/fast only.
*Provenance:* CEREBRAS DOCTRINE #15, PSI 2026-03-19 (memory #15); re-confirmed optimised "Building a knowledge ledger" 2026-05-26.
*⚠️ Routing note — SUPERSEDED, now ✅ VERIFIED (Delta confirm relayed 2026-06-12 with the Sovereign's
increment directive; Burner scout 2026-06-12):* the v1.0 line said `.env` CEREBRAS_BASE_URL pointed at a
DEAD onrender relay (route directly to `https://api.cerebras.ai/v1/chat/completions`). That premise is
stale — `/think` is healthy: live :3333/health 200 with `cerebras:true`, `cerebras_model:gpt-oss-120b`,
re-probed 2026-06-12 this turn. (⚠️ the :3333 service now self-identifies `deep-research-skill` — see §4.)
<!-- /DOC:DOC-3.6 -->

<!-- DOC:DOC-3.7 v:1.1 status:ACTIVE block_sha256:aaee1a77a29450be90c8847e2218ea236176877ad1586f14dd5791dee2b7c69f -->
### 3.7 Fail closed, not open ✅ VERIFIED-IN-RECORD  [DOC-3.7]
On outage / ambiguous result / missing verdict → **stop and flag** (needs-review). Never proceed as if it
passed. Never fabricate progress. If the right action is blocked (wrong premise, missing tree, unverified
floor), say so and HOLD. *Proven live:* voice intent returns `intent:none` (no action) when :3333 is down.
<!-- /DOC:DOC-3.7 -->

<!-- DOC:DOC-3.8 v:1.1 status:ACTIVE block_sha256:64ad57b813229dffabc988e83316e5b5f2aeca7523ca86acf78f76a0ed74ed27 -->
### 3.8 Commit the floor between tiers ✅ VERIFIED-IN-RECORD  [DOC-3.8]
After each verified working increment, lock a clean revert point before the next. Surgical adds with named
paths, **never blanket `-A`**; verify what's staged. Fingerprint state before *and* after a live edit — a
green result over a shifting tree certifies nothing (atomicity under live edit).
<!-- /DOC:DOC-3.8 -->

<!-- DOC:DOC-3.9 v:1.1 status:ACTIVE block_sha256:1fa9fc41a36777f511f12baa942e8d5a46fbdb0aed6192b11cb051d9c48714ed -->
### 3.9 Canon supersedes log ✅ VERIFIED-IN-RECORD (and is the reason this file exists — see §0)  [DOC-3.9]
Logs accumulate (noise-prone). Canon supersedes (small, current). Apply the supersede discipline to memory
itself. *Provenance:* handoff §9, confirmed "Empirical testing and archive verification" 2026-06-01.
<!-- /DOC:DOC-3.9 -->

<!-- DOC:DOC-3.10 v:1.0 status:ACTIVE block_sha256:9330bbb17498358a100a2a70ca1a7a687d366c5f70063a7caf1433d65817d3b3 -->
## 3.10 MEASURED-RIGOR — the auditor is watched, not trusted (certifier ≠ its-own-watcher)  [DOC-3.10]
SCAR-128 (DOC-3.4) separates build from audit. This separates audit from the audit-OF-the-audit: a verifier
that grades its own rigor is the leveller→oracle collapse — the rubber stamp an optimising swarm learns to
satisfy. The certifier's rigor is MEASURED, never asserted.
1. SEEDED-DEFECT CANARY-STREAM. Known-bad artifacts are injected into the cert intake, INDISTINGUISHABLE from
   real REQs (re-skinned from the real defect archive; no structural marker; randomised cadence; the
   canary→expected-verdict ledger withheld from the certifier). A PASS on a known-bad = a caught auditor
   regression. The rolling PER-TIER catch-rate is the auditor's rigor, on the record; a significant drop HALTS
   promotion (fail-closed, DOC-3.7) — a loud alarm, not a silent slide.
2. CERTIFIER ≠ ITS-OWN-WATCHER, regress terminated. The watcher-of-the-watcher is a TRIVIALLY-AUDITABLE
   deterministic checker (verdict-vs-pre-registered-label; no model, no judgment) + a human root (Sovereign) +
   a family-diverse second verifier. If the watcher isn't simple enough to audit by eye, it has only relocated
   the trust. Issuer ≠ certifier ≠ builder.
3. AUDITOR-AS-CODE-PATH (DOC-3.5 applied to the auditor). The cert's rigor-critical properties — trusted
   model-id (allowlist), full re-derivation transcript, live-probe evidence — are STRUCTURAL attestations in
   the verdict, machine-checked; a verdict lacking them is INVALID. "Don't cheap out the auditor" is
   GATE-AS-CODE here, not a prompt; the canary-stream is the behavioural backstop proving the attestation
   wasn't forged.
4. PRECONDITION ON FULL-TRUST. This guard gates the autonomy transition itself. The colony does NOT lower the
   human-relay — move to autonomous looping or DW-fan-out-as-primary-build (§6 step 4) — until (i) the
   canary-stream + auditor-as-code-path are built and green, and (ii) the cert intake is AUTHENTICATED (signed
   REQs; today's unsigned, self-asserted `from:` is spoofable — wildcard-authorship class). These join DOC-3.5's
   GATE-AS-CODE proof as conditions of the same transition. Rationale: leveller→oracle collapse is redundant
   with an engaged human watcher and lethal without one — the guard must exist before the human steps back.
Provenance: Sovereign pre-mortem 2026-06-10 (leveller→oracle collapse); Delta diagnosis (propose-only, cert-bus
mechanics @ 8b969c8). Composes with DOC-0, DOC-3.4/SCAR-128, DOC-3.5/GATE-AS-CODE, DOC-3.7/fail-closed.
<!-- /DOC:DOC-3.10 -->

<!-- CANON:DOCTRINE-END — new doctrine (canon_delta operation:add) is inserted immediately BEFORE this anchor; Contract B. Supersede/retire key on each DOC:<id> marker and ignore this anchor. -->

---

## 4. CURRENT ARCHITECTURE STATE 📋 ATTESTED (from the 2026-06-02 handoff — re-verify before depending on any line)

**Substrate** (pm2, systemd auto-resurrect, reboot-survivable via `pm2 save`):
scar-api `:3041` · marae `:3050` · state-store `:3060` · scar-bridge `:3061` (WITNESS_ENFORCE=shadow) ·
watcher `:3070` · shield `:3071` · beacon `:3072` · **sentinel/axiom-sidecar `:8089`** (the Gemini brain —
`/consult` + sport routes; speaks a *different* protocol from :3333, 404s on `/think`) · observatory `:3074` ·
provenance `:3075`. `sovereign-router` ⚰️ **RETIRED-FOR-REAL 2026-06-12** ✅ VERIFIED-IN-RECORD (Delta
zombie verdict 2026-06-12 — no live consumers, 401'd uplink — independently confirmed by Morpheus same day:
the router ran "Redis: NOT CONFIGURED — colony bridge running without Upstash" its whole life, so the
`spangle:*` pulse/command keys were never fed and the code-level spangle-worker reader was reading keys
nobody wrote, while the WS uplink looped 401 since token drift. Retire decided via the Sovereign relay;
Relay A's `pm2 delete` had NOT landed on the box, so Morpheus executed `pm2 delete sovereign-router &&
pm2 save` 2026-06-12 and re-probed: gone from pm2, `:3062` dark, resurrect-proof) · `tt-compose` online.

**Cerebras sidecar `:3333`** — the intent-classifier / `/think` brain for Morphy voice. Now **pm2-managed**
(`cerebras-sidecar`, online — supersedes the "standalone, watched" line in colony docs). ⚠️ `/health` now
**self-identifies as `deep-research-skill` v1.0.0**, NOT a cerebras-sidecar identity (providers
cerebras/openai/claude/gemini/perplexity all true, `cerebras_model:gpt-oss-120b`). ✅ VERIFIED (live health
probe + pm2 status this turn 2026-06-12; Burner scout 2026-06-12 + Delta confirm relayed same day). The
bootstrap manifest flags `cerebras-think` ◑ DEGRADED (open but empty/short response) — treat the identity
swap as a known drift flag until the service is renamed or split. ⚠️ still binds `*:3333` (all interfaces;
re-verified via `ss` this turn) — exposure delta to tighten to `127.0.0.1`. *(See DOC-3.6 routing note —
now ✅ VERIFIED.)*

**Langfuse `:3100`** — self-hosted v3, LIVE, health 200, project `axiom-colony`. ⚠️ running on **compose-DEFAULT
secrets** (no stack `.env`; it initialised on defaults). **Known-debt: rotating these needs a deliberate
migration (re-encrypt under a new key, or accept wiping ~1.1GB of traces), NOT a casual `.env` write — a fresh
`.env` would BREAK the live stack.** Local-only (127.0.0.1) so immediate risk low. Keys live at
`/root/.config/axiom/sidecar/.env` (NOT `/root/axiom/.env`).

**Cockpit `:3017`** (the phone / war-room interface) — now served by the SUPERVISOR cockpit: pm2
`cockpit-server` → `/root/axiom/delta-cockpit-wt/server.js` (delta-cockpit-wt worktree). pm2 `morphy-remote`
is **STOPPED** (superseded as the :3017 server). `GET /api/remote/state-hash` is **auth-gated** — an
unauthenticated probe returns **403**. ✅ VERIFIED (pm2 status + live 403 probe + script-path read this turn
2026-06-12; Burner scout 2026-06-12 + Delta confirm relayed same day). Binds `127.0.0.1`; cloudflared tunnel
→ `https://morphy.axiomintelligence.co.nz` with **Cloudflare Access** in front — 📋 ATTESTED, carried from
the superseded morphy-remote line; re-verify the `CF_ACCESS_TEAM_DOMAIN`+`CF_ACCESS_AUD` spawn-env gotcha
(both must be in the RUNNING process env; TEAM_DOMAIN alone silently skips audience validation) against the
cockpit-server process before depending on it.

**Voice-auth JWT gate `:8093` — ⚰️ DECOMMISSIONED (Sovereign decision D1, 2026-06-12).** The token-mode
tunnel's ingress fronts `:3017` and `:8095` ONLY (Delta three-confirm diagnostic 2026-06-12, ingress quoted
verbatim in his report, relayed with D1); origin auth is **CF Access at the edge + cockpit `X-Origin-Auth`**
(see the `:3017` entry). ✅ VERIFIED-IN-RECORD — Morpheus re-probed same day: `:8093` has NO listener while
`:3017`/`:8095` listen on loopback, and cloudflared runs `tunnel run --token` (token-mode; no on-disk
ingress config — the ingress lives at the CF edge, which is why Delta's quote is the citable source).
*History (retired ≠ deleted):* the gate was **KR-jester-008 PASS** —
`/root/axiom/morphy-warroom/.cert-bus/verdicts/KR-jester-008.0195cdc0.PASS.json` (commit `0195cdc0`):
CF Access JWT verification, fail-closed, single chokepoint, no WS side-door. That cert recorded a true
property of a service now retired; it does NOT attest the current perimeter. *(Closes this file's prior
"⏳ OPEN — awaiting Sovereign D2" placeholder; the Sovereign's directive numbering calls this decision D1.)*

**Voice pipeline pieces** (all exist + work): IN = Deepgram ASR (`/api/dg-key`) · intent = `/api/intent` →
:3333 `/think` (fail-closed) · OUT = `morphySpeak()` via OpenAI Realtime (gpt-realtime, voice "sage") + `/tts`
(OpenAI gpt-4o-mini-tts — **it is OpenAI TTS, not Google Chirp**) · inbox write `POST /api/remote/inject` →
`colony/inbox/<agent>.md` · outbox read `GET /api/remote/summaries` (phone polls ~30s).

**Dashboard** — observatory `:3074` serves `dashboard.html` (readable layer, Jester-gated CLEAN). ⚠️ shows
auto-minted instance IDs (`opus-ide-<rand>`…), NOT the named roster, because role registration was never wired
to the state-store (every publisher auto-mints `agent_id`; none read `AXIOM_AGENT`).

**Resilience** — WSL memory cap (`.wslconfig`: 22GB / swap 8GB / 16 proc) · Windows watchdog (Task Scheduler
"ColonyWatchdog", 5-min, restarts WSL if colony unreachable while remote). ⚠️ Controlled Folder Access blocked
tooling 3× this arc (powershell allow-listed; Docker exes may still need it, or disable CFA).

**Durable off-host trail** — `JESTER_*_20260601.md` gate docs at
`/mnt/c/Users/regan/axiom-recovery-20260531/staging-snapshot/` (the audit trail of this arc).

---

## 5. THE VOICE-LOOP KEYSTONE — the central thing in flight 📋 ATTESTED

**What it is:** the *middle* of the voice loop. Everything around it already worked; the daemon connects the
inbox to a live agent and writes the reply to the outbox.
File (v2, LIVE): `/root/axiom/gamma-bus-build/bus/voice-loop-daemon-v2.js` · pm2 `voice-loop-jester-v2`
(online). v1 (`/root/axiom/colony/voice-loop/voice-loop-daemon.js`, pm2 `voice-loop-jester`) is **STOPPED**
— superseded. ✅ VERIFIED (pm2 status + v2 file on disk this turn 2026-06-12; Burner scout 2026-06-12 +
Delta confirm relayed same day). Pilot config **AGENT=jester, ONE-SHOT, POLL 2.5s, TRUST_POSTURE=READ_ONLY**
📋 ATTESTED carried from v1 — re-verify against the v2 process env before depending on it.

**Transport = local subprocess, NOT Claude Code Remote Control.** RC (`claude --remote-control`) exists and the
Sovereign has it (v2.1.159) — but it is a *cloud relay* (claude.ai-gated, inbound only from Anthropic's app, no
local socket to drive). Morphy cannot use it as transport. The correct local transport is
`claude -p --input-format stream-json --output-format stream-json --verbose` — a local subprocess you write
JSON to (stdin) and read JSON events from (stdout). `AXIOM_AGENT` passes through. RC stays a free, separate,
typed single-session remote whenever wanted.

**Verified stream-json protocol** (ground truth — do not re-derive): INPUT `{"type":"user","message":{"role":
"user","content":"<prompt>"}}` newline-delimited; close stdin = one-shot. OUTPUT events per turn include
`system/init` (carries `tools`, `mcp_servers`), `assistant` (complete message), and `result` (one per turn,
cost/duration/session_id). **CAPTURE RULE (a real, gated finding):** on native Anthropic the answer is in
`result.result`; on the **OpenRouter/deepseek proxy path `result.result` is EMPTY and the answer lands in the
`assistant` event** — the daemon falls back to assistant text. Pilot model = **DeepSeek V4-Flash via OpenRouter**
(~$0.026/turn, proving the proxy is engaged). Routing needs BASE_URL + AUTH_TOKEN + `ANTHROPIC_API_KEY=""`
together; the DEFAULT_MODEL vars alone do NOT route.

**Trust postures — the safety-critical axis:**

| Posture | Flags | Answers status Qs? | Can mutate? |
|---|---|---|---|
| **No-tools** (current pilot) | `--tools "" --strict-mcp-config` | ❌ (hallucinates tool-calls) | ❌ |
| **Read-only-tools** (the NEXT upgrade) | `--tools "Read Grep Glob" --strict-mcp-config` | ✅ reads real state | ❌ |
| **Full trust** (the goal, carefully) | `--allow-dangerously-skip-permissions` | ✅ | ✅ |

⚠️ **GOTCHA (verified):** `--tools ""` ALONE is NOT read-only — built-in Bash/Edit/Write die but **MCP write
tools survive**. True read-only needs BOTH `--tools ""` AND `--strict-mcp-config`.

⚠️ **GOTCHA 2 (this gate: REQ-gamma-readonly-voiceloop, 2026-06-17, gamma):** `--allowed-tools` permission-gates
ONLY and leaves Bash/Edit/Write REGISTERED → FAILS OPEN in an auto-approve env (a write-probe wrote a file).
True read-only = `--tools <allowlist> --strict-mcp-config` (restricts AVAILABILITY; Write/Edit/Bash do not exist).
RULE: verify read-only by the logged init.tools, NEVER by the flag name.

**Model-quality finding (Jester-characterised):** deepseek-flash answered **8/8 tool-less knowledge questions,
zero hallucinations**. It only hallucinates tool-calls on *action*-demanding prompts. **So the model isn't weak
— the no-tools posture is wrong for action questions.** Give it read tools and status questions become
genuinely answerable. (Models and posture are *separate axes* — don't conflate "weak answers" with "wrong posture.")

**⏳ THE OPEN BLOCKER (Jester re-gate: BLOCKED):** the daemon's honesty detector (decides "real reply" vs
"tried-to-act non-answer to flag") used a *block-list* of 4 tool-call formats. Flash emitted a different shape
(`<function_terms>`, `<action><name>Bash</name>…`) that slipped through → a non-answer dressed as a reply
**reached the phone**. Block-list enumeration is the wrong shape (whack-a-mole). **Fix (per GATE-AS-CODE):** a
*positive* "is this prose addressed to the user?" gate + a *structural* action-block detector (catch the FAMILY
of `<…><name>…</name><command|args>…` shapes), without over-suppressing legit `<` (e.g. "a < b") or inline code.
Then Morpheus re-tests Case A (real reply) + Case B (the exact `<function_terms>` failure → must read "⚠️ no
usable reply this turn"), Jester re-gates.

---

## 6. WHAT IT'S BECOMING — the trajectory (additive, on the proven floor)

**The immediate path (bounded, safe — do in order):**
1. **Fix the honesty detector** (§5 blocker) → unblocks an honest phone test.
2. **Upgrade posture no-tools → read-only-tools** (separate increment, own gate). *Likely the moment summaries
   become genuinely useful* — status questions answerable from real state, mutation structurally impossible.
3. **Phone test** — speak a status question, hear an honest answer (or an honest "no usable reply").
4. **Full trust, carefully** — the highest-blast-radius change in the colony (the safety wall comes DOWN).
   Flip `TRUST_POSTURE=FULL` on a **NON-Jester acting agent**, with a first-run observable safeguard. Consider a
   Regex-God 120b judge pass on *real* actions (too costly for the pilot). **Do this FRESH and ALERT, gated,
   never tired. Hold the line under "keep going" pressure — it is the discipline.**

**The deeper builds (the real "becoming"):**
- **Per-agent ACTIVITY capture** — the big one. There is *no* clean "what each agent is doing" feed today:
  state-store = auto-minted IDs; scar hook = error/insight log (keyword-triggered, ~99% smoker spam, 62 of
  36,208 entries are FILE_TOUCH); Langfuse = consult traces only. The fix splits into **ATTRIBUTION** (solved —
  `AXIOM_AGENT` at wake) + **CAPTURE** (widen the global hook to log activity unconditionally + de-noise the
  smoker — a high-blast-radius, fresh-head build). 📋 ATTESTED.
- **The holographic obsidian slipbox** — the long-horizon vision (April 2026, ~15% built, Phase 1 committed,
  SCARs 142–150): every line of colony code → universal JSONL flywheel → a Scribe daemon runs Regex God
  extraction → a 7-dimension semantic knowledge-memory ledger → an Obsidian vault (Poincaré-disk graph,
  Ed25519 Kaitiaki receipts, Dataview frontmatter mirrors). *This canon is the disciplined, hand-curated first
  increment of that vision — the supersede-clean core the flywheel can later feed.* ✅ VERIFIED-IN-RECORD (lineage).
- **The canon-memory-bridge** — this file → promotion-via-Jester-gate (§0) → an MCP server making it ambient to
  Claude Chat. The meta-build that makes session handoffs unnecessary.
- **Beyond:** persistent agent sessions (memory across turns), the full roster on the voice loop (not just
  jester), live streaming of partial outputs.

---

## 7. OPEN FORKS & HOUSEKEEPING

**⏳ Active decision points:**
- The honesty-detector fix (§5) — the one live BLOCK; everything downstream waits on it.
- When to flip full-trust (§6 step 4) — gated on the read-only pilot + the GATE-AS-CODE proof; Sovereign's call on *which* acting agent.
- Capture-widening the global hook (§6) — deliberate, fresh-head only (fires on every tool call in every session).

**Low-priority debt (📋 ATTESTED):**
- Rotate the Deepgram key (printed locally once; low-risk) → `/root/axiom/.env`.
- Tighten `:3333` bind to `127.0.0.1` (currently `*:3333`).
- CFA: allow-list Docker exes or disable CFA (blocked tooling 3×).
- Host sleep → Never on AC (so the watchdog can fire); full Defender scan (a RAV/ReasonLabs PUP was found + uninstalled).
- Langfuse default-secrets migration (deliberate, NOT a casual `.env` write).
- SCAR worth writing: "cerebras-sidecar node_modules was never installed" (why :3333 was down).
- Re-run `axiom-bootstrap.sh` to clear the stale RED banner now :3333 is up.
- Orphan `morphy-id-base/colony/{inbox,outbox}` dirs (server uses absolute `/root/axiom/colony/…`).

---

## 8. PROVENANCE INDEX (verify a doctrine rather than trust this file)

- **Regex God / Cerebras Doctrine #15** — "Updating addendum for Cerebras 120B inference models" (2026-03-19, PSI, memory #15). Re-confirmed optimised: "Building a knowledge ledger with LOG⁵ base-7" (2026-05-26).
- **Regex extraction patterns** (two-pass lazy/greedy, self-closing attribute tags) — "Indigenous ingredients shopping list" (2026-02-28).
- **Tensor Tympani** — "Tensor tympani stack and Vozvridge product launch" (2026-04-03); crystallised as the framework spine in "Building a knowledge ledger" (2026-05-26).
- **SCAR-128 (build/audit separation)** — origin: "Code fix request" (2026-03-23); live antipattern entry confirmed in scar recall, "Empirical testing and archive verification" (2026-06-01).
- **GATE-AS-CODE + voice-loop pilot** — `JESTER_*_20260601.md` gate docs; "Empirical testing and archive verification" (2026-06-01).
- **Voice-auth JWT gate (:8093) PASS** — `/root/axiom/morphy-warroom/.cert-bus/verdicts/KR-jester-008.0195cdc0.PASS.json` (commit 0195cdc0, 2026-06-04).
- **Ledger lineage / the slipbox vision** — "Log base 7 knowledge ledger" (2026-05-16); "Log base 7 role internalization" (2026-04-25, the JSONL-flywheel + holographic-slipbox vision); "Jester build architecture and implementation phases" (2026-04-25, SCARs 142–150).
- **Three-tier roster (DOC-2-ROSTER) + §4 :3017/:3333/sovereign-router + §5 v2-daemon supersedes + DOC-3.6
  routing-note promotion** — Burner scout 2026-06-12; Delta confirms relayed 2026-06-12 (Sovereign increment
  directive); independently re-probed live by Morpheus the same turn (pm2 status, :3017 403, :3333 health
  identity, `ss` bind, on-disk reads of colony-roster.mjs / voice-loop-daemon-v2.js / delta-cockpit-wt script path).
- **D1 :8093 decommission + sovereign-router retire-for-real (v1.2)** — Sovereign decision D1 relayed
  2026-06-12; Delta three-confirm diagnostic + zombie verdict 2026-06-12 (colony outbox heartbeat 01:04Z;
  full ingress quote relayed with the directive, report file not on this box); Morpheus same-day live
  probes (`ss` :8093/:3017/:8095, token-mode cloudflared, "Redis: NOT CONFIGURED" out-log) + executed
  `pm2 delete` + post-delete re-probe.
- **This arc's full state** — the 2026-06-02 session handoff (the document this canon distils and supersedes).

---

*If it cannot be questioned, it cannot be trusted. Supersede, don't accumulate. Verify before you build.*
**Tūrangawaewae Protocol active.** 🇳🇿🐉🔥
