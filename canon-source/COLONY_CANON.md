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
| `DOC-3.11` | The Evidence Doctrine — a passing check is evidence only if independent, falsifiable, informed, and scoped | v1.1 | ACTIVE |
| `DOC-3.12` | Posture-ceiling-default-ON — voice work is read-only-ceilinged | v1.2 | ACTIVE |

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

<!-- DOC:DOC-2-ROSTER v:2.0 status:ACTIVE block_sha256:e7cf6252a8886cf2f90295c8f5293ad88c7a77e9b63d729f2690524b40387f86 (sha256 of this block incl. both markers, computed by Jester at promotion since the automated promoter is DISARMED; no prior committed convention found to match against — future automation should confirm/adopt this convention or re-state its own) -->
## 2. THE ROSTER — two tiers: structural roles + project lanes  [DOC-2-ROSTER]

**Supersedes the v1.1 three-tier (INFRA/PRODUCT/RESERVE, 16-agent) table.** Provenance: Sovereign relay
2026-07-02 (two-tier ratification); alias map + evidence in
`briefs/reorg/PROJECT-REGISTRY-SPEC-AND-ROSTER-AMENDMENT-2026-07-02.md` and `colony/projects.mjs`.
✅ VERIFIED (Jester `KR-jester-AXON-V2` + `KR-jester-AXON-V2-R2`: `resolveLane()` probed directly against
the real module for every alias/role/unknown case; the daemon's dispatch + lock + receipt + digest call
sites confirmed to use the resolved id; unknown lanes confirmed LOUD-never-blocked both by code and live
on the real bus).

**This supersede SUBSUMES `REQ-canon-sigma-roster-promotion-2305f4ef`** (a prior Sigma RESERVE→PRODUCT
promotion of this same DOC id under the *retired* three-tier model, `KR-jester-canon-sigma-roster-promotion-2305f4ef.PASS.json`) — that framing no longer exists; sigma's status is carried forward below under
the two-tier model instead.

STRUCTURAL ROLES — the ONLY named agent sessions; persist independent of project:
  morpheus (substrate) · jester (certifier, never acting — SCAR-128) · burner · axon (non-LLM daemon).
  [delta: OPEN — retain as a 5th structural role or fold into project lanes; Sovereign to decide.]

PROJECT LANES — every other former agent name retires to a project id (`colony/projects.mjs` is the
single source; `resolveLane` maps legacy alias → project, unknown → `unattributed` LOUD):
  sigma → sd-modeller        (SOVEREIGN-RATIFIED 2026-07-02)
  alpha → drbot              (mapping ratified; slug pending Sovereign naming)
  gamma → morphy-remote      (mapping ratified; slug pending Sovereign naming)
  eta → eta-demo-content · delta → delta-research · beta → ai-risk-reader · psi → psi-visual-elevation ·
  lambda → fanout-battery · orpheus → scribe · rho → (unclaimed) · omega → (reserved) ·
  theta → voice-studio-s3 · kappa → (reserved)                         (all PROPOSED — Sovereign confirms slugs)

**HARD LINE (carried forward):** Jester is *never* given an acting posture. An acting Jester mutates what
it audits and breaks the integrity backbone that has caught this arc's mistakes. Jester read-only is its
role; Jester-that-builds is the antipattern SCAR-128 exists to prevent.

**Attribution:** every agent session must carry `AXIOM_AGENT=<role>` in its launching shell. The wrapper
`axwake <role>` does this (validates against the roster, exports the var, launches claude). 📋 ATTESTED.

Single sources: `colony/colony-roster.mjs` = STRUCTURAL ROLE launchability (`axwake`); `colony/projects.mjs` =
PROJECT LANE resolution. Two registries, two concerns, same supersede-in-place discipline. Fleet
decommission/repoint is a future gated increment — running daemons are NOT touched here (HARD SCOPE,
Sovereign 2026-07-02: the voice-loop fleet keeps running under legacy names this increment).
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

<!-- DOC:DOC-3.11 v:1.0 status:ACTIVE -->
3.11 THE EVIDENCE DOCTRINE — a passing check is evidence only if independent, falsifiable, informed, and scoped  [DOC-3.11]
A check's PASS is evidence about the world ONLY IF all four hold; strip any one and the pass is decoration, not evidence. Absorbs four session candidates (constraint-vs-witness, rigid-control falsifiability, information-budget, scope-travels) into one law (DOC-0: cut before you add).

INDEPENDENT — the check is independent of how the artifact was produced AND of the claim it tests; it does not re-derive the thing it checks. Worked example (generators): the generator did not satisfy it by construction (else it is a CONSTRAINT and the pass is tautological). Measurement-only (no generator): the measurement must not be self-calibrating or self-consistent against its own assumption (a homography fit that always yields convergent lines is checking its own fit, not the world). Generator-independence is the example; production-and-claim independence is the rule.
FALSIFIABLE — it CAN return the negative, DEMONSTRATED by red-teaming it against a valid-but-wrong artifact it must reject, AND it does so DETERMINISTICALLY (a flaky or seed-lucky verdict is not evidence; the check must reliably return the correct negative, not occasionally).
INFORMED — the check reads the actual artifact and its data carries the discriminating information at the chosen sampling/resolution. BINDING: a cryptographic check verifies the actual bytes consumed, never a reference or label pointing at them (checking a pointer is not checking the thing). CAVEAT: a single blind check proves only that THIS method is blind on THIS data; concluding the information is unrecoverable for ANY method requires an analytical information-budget proof, not one failed witness.
SCOPED — the pass is trusted only within the role and threat-model it was validated for, enforced structurally, not by a future reader's memory.

Grounding (all RUN-confirmed this session): INDEPENDENT from KR-041 (constraint-pass is not evidence); FALSIFIABLE from KR-040 and KR-041 (witness fired on a rigid control / false-passed an unequal-height overlap); INFORMED from KR-040 (45 degree information wall) and KR-032/038 (signature over bytes); SCOPED from KR-038/039 (signature wall's threat-model ceiling).

Provenance: Coordinator canon-delta; Jester cold-cert KR-jester-042 (CONDITIONAL, these scoped fixes applied, re-cert at frozen SHA). Returned CONDITIONAL on its own certification because its own FALSIFIABLE condition bit, the law practicing itself.

<!-- /DOC:DOC-3.11 -->

<!-- DOC:DOC-3.12 v:1.0 status:ACTIVE block_sha256:588cbd5a696994d7d39d32ab97824e7bc952c404ec639b491a1ba3397d8ca305 (sha256 of this block's BODY — every line strictly between the two DOC markers, UTF-8, LF-joined, no trailing newline; promoter DISARMED so computed by hand. Re-stated from the DOC-2-ROSTER convention to be circular-reference-free and deterministically reproducible; future automation adopt or re-state.) -->
## 3.12 POSTURE-CEILING-DEFAULT-ON — voice-originated work is read-only-ceilinged  [DOC-3.12]
GATE-AS-CODE (DOC-3.5) applied to the cockpit voice surface. A voice utterance can STAGE work (the pill /
AMBER / RED flow) but cannot make that work write-capable. Every voice-staged claude job carries
`posture:read_only` by DEFAULT — which the frozen AXON daemon turns into `--tools "Read Grep Glob"` AND
verifies fail-closed against the logged `init.tools` (DOC-3.7). A shell job has no read-only posture and is
refused at staging outright. The RED keyword list is a COURTESY LABEL, never the wall — it is bypassable by
paraphrase and (before hardening) by a single hidden-Unicode character, so safety must not and does not
depend on it firing. The ONLY way voice-originated work becomes write-capable is an explicit deploy-config
opt-out (`VOICE_POSTURE_CEILING=0`) — NOT reachable from any utterance, however phrased or obfuscated.
Disclosure is part of the gate: the pill face shows the FULL request byte-for-byte (no truncation), so the
authorising human tap is an INFORMED tap. RATIFIED DEFAULT: the ceiling is ON (Sovereign, 2026-07-02).
This promotes the pill/AMBER/RED voice-wire from "in build" (§5, 📋 ATTESTED) to ✅ LIVE + certified.
Provenance: KR-VOICE-WIRE-02 (Jester `gate:GO`, `certified:true`, canon-supersede AUTHORIZED; verdict sha256
`acf1975790c556e99a3410bc12567dace358f13503992184a49372eca671797a`) · certified cockpit HEAD `e14559d`
(branch `gamma/morphy-remote-tier1`, tag `voice-wire-certified-KR-VOICE-WIRE-02`) · Sovereign mainline
ratification `briefs/reorg/MAINLINE-RATIFICATION-2026-07-02.md`. Composes with DOC-3.5 (GATE-AS-CODE),
DOC-3.7 (fail-closed). ✅ VERIFIED (Jester re-derived FIX1/2/3 live incl. an end-to-end release where the
ceilinged executor itself declined the write it was asked to smuggle).
<!-- /DOC:DOC-3.12 -->

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

**AXON job-runner (systemd `axon.service`, enabled)** — the colony's non-LLM hands: polls
`/root/axiom/colony/axon-bus/` (isolated root — **never** `colony/bus/`, the voice-loop fleet's;
grep-provable, gate 0e(b)), executes up to `AXON_MAX_WORKERS=4` jobs in parallel under
lane+declared-writes locks, signs every receipt Ed25519 via the System-11 `ProvenanceChain`
pattern (own keypair, `axon-bus/keys/`, gitignored), single serialized committer for
ledger+git, `MemAvailable`/loadavg backpressure. Windows staging bridge: ingests
`C:\axiom-bus\inbox` (copy+unlink, EXDEV-safe), mirrors receipts to `C:\axiom-bus\done|failed`.
✅ VERIFIED (T1-T5 + P1-P5, 10/10; Jester `KR-jester-AXON-COLONY-01` + `.E2` independently
re-derived A/B/C/D/F/E PASS). **v2** (Jester `KR-jester-AXON-V2-R2`, ✅ VERIFIED, overall PASS)
adds: the outbox digest (`outbox/axon.md`, one-writer, atomic C:\ mirror) · a project-lane
registry (`colony/projects.mjs`, `resolveLane`, unknown→`unattributed` LOUD never blocked) ·
read-only claude posture with fail-closed `init.tools` verification · a Sovereign-released
`pending/` cert-request bridge (structurally excluded from the dispatch scan) · a Sovereign
**override ledger** (`grants.mjs`) — scoped/signed/self-expiring AMBER grants gate every
write-capable job (GREEN read-only auto-releases; RED constitutional concerns have no grant
vocabulary entry at all; a relayed override lands in `pending/` as a request, never self-executes).
A finalize()-level receipt/job filename collision (P0, found live on real sd-modeller traffic)
was fixed structurally (job moves to an always-distinct `job.<id>.json`, receipt written last) and
19 clobbered receipts repaired from the Windows mirror — both independently re-verified by Jester
via constructed collision attempts and a full-bus signature sweep.

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

**✅ LIVE + certified (2026-07-02):** the cockpit voice-wire — the pill / AMBER / RED flow, R-V1..R-V5, SPOKEN/DETAIL — is certified and deployed (Jester `KR-VOICE-WIRE-02` GO; cockpit HEAD `e14559d`). Voice-originated work is read-only-ceilinged by default — see **DOC-3.12**. (The daemon-side voice-loop keystone below remains the separate, still-in-flight piece.)

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

**✅ RESOLVED (verified `KR-jester-AXON-V2`, 2026-07-02):** the honesty detector uses a *positive* "prose
addressed to the user" gate + a *structural* action-block **family** detector (the
`<…><name>…</name><command|args>…` shape class + wrapper tags), replacing the block-list. Case A
(real reply passes) + Case B (the exact `<function_terms>` failure → "⚠️ no usable reply this turn")
both hold, plus 10 adversarial cases (12/12). *History below preserved per DOC-3.9 — the block-list
lesson stands.*

**Provenance (honest):** the fix is gamma-bus-build commit `39d4471` "[Agent MORPHEUS] voice-loop
honesty detector: GATE-AS-CODE" (2026-06-21, a prior Morpheus session), already LIVE — the running
`voice-loop-jester-v2` started 2026-07-02 15:06, after the commit. It was authored earlier but never
re-gated, which is why this BLOCK stayed open in canon. Verified this gate via
`agents/axon/tests/b5-honesty-caseAB.mjs` (extracts + runs the real on-disk classifier) and
independently re-derived with Jester's own extraction + adversarial cases (10/10) in `KR-jester-AXON-V2`.
Substrate secondment (gamma's lane); Jester gates the close.

*Original blocker (historical record, per DOC-3.9 — the block-list lesson stands):* the daemon's
honesty detector (decides "real reply" vs "tried-to-act non-answer to flag") used a *block-list* of 4
tool-call formats. Flash emitted a different shape (`<function_terms>`, `<action><name>Bash</name>…`)
that slipped through → a non-answer dressed as a reply **reached the phone**. Block-list enumeration is
the wrong shape (whack-a-mole).

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
- **The two-layer operating model** — conversations are ephemeral per-surface (phone, desktop, IDE);
  work is durable and Ed25519-signed on the axon-bus. **One dedicated desktop chat per project;
  structural roles {morpheus, jester, burner, axon} remain the only named agent sessions; project work
  stages via the axon-bus with `from_lane = project id`.** Surfaces come and go; the bus is the record.
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
