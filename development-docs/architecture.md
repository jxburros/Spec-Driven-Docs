# Spec-Driven-Docs — Architecture

> Living source of truth for how this repository is structured **now**. Not a roadmap, changelog, or design scratchpad.
>
> This is the live architecture document for this repository. The blank template that adopters copy is `templates/development-docs/architecture.md`.

---

## 1. Architecture Summary

The repository is documentation plus a thin layer of checks. It has four parts:

1. **Distributable content** — templates and skills that adopters copy into their own repositories.
2. **Explanatory content** — guides and the README.
3. **Live governance** — a filled-in instance of the system that governs this repository.
4. **Enforcement** — a zero-dependency test suite, a CI workflow, and a Claude Code session hook.

There is no application, build output, database, or external service integration.

---

## 2. Directory and File Map

```
AGENTS.md                      Canonical agent instructions (gates and repo facts)
CLAUDE.md                      Claude Code overlay
.github/copilot-instructions.md  GitHub Copilot overlay
.github/workflows/             CI: docs checks, dependency vulnerability scan
.claude/skills/                Installed copy of skills/ (identical)
.claude/hooks/session-start.sh SessionStart context hook (read-only)
.claude/settings.json          Registers the hook
development-docs/              Live governance for this repo
  coreIdentity.md              Identity and Hard Constraints (HC-n)
  developmentManifesto.md      Standards, rule ownership, Definition of Done
  architecture.md              This file; Invariants (INV-n)
  productRoadmap.md            Direction and rejected items
  design.json                  Placeholder; no generated contract yet
  decisions/                   Decision records D-NNNN, TEMPLATE.md, archives/
  architecture-plans/          Proposals P-NNNN, TEMPLATE.md, archives/
  research/                    Active curated research
templates/                     The template set, mirroring a target repo's layout
skills/                        Canonical source of the two portable skills
guides/                        ai-guide.md and human-guide.md
tests/                         node:test checks
docs/index.html                Static project page (Pages deployment is paused)
features.md, newFeatures.md    Capability inventory; idea intake
current-checklist/             Working-period checklist and archives/
audits/, human-qa/             QA records and archives/
CHANGELOG.md                   Append-only project memory, newest first
package.json                   Version source and the test script; no dependencies
```

---

## 3. Major Subsystems

### Templates (`templates/`)

Blank governance documents, overlays, record templates, a starter `CHANGELOG.md`, the session hook, and a shell-only CI check, arranged so that copying the folder's contents into a repository root installs the system. Skills are not duplicated here; the setup skill installs them from `skills/`.

### Skills (`skills/`, installed to `.claude/skills/`)

- `spec-driven-development` — the procedures an agent follows when working in a governed repository.
- `spec-driven-docs-setup` — how to produce filled-in documents for a repository from evidence and maintainer answers.

Each is self-contained (`HC-2`) and paired with a guide (`HC-5`).

### Live governance (`development-docs/`, `AGENTS.md`, overlays)

The same system, filled in for this repository. Rule ownership is listed in `development-docs/developmentManifesto.md`.

### Enforcement

- `tests/docs-smoke.test.mjs` — structural checks; the invariants below name what is tested.
- `tests/changelog-entry.test.mjs` — when `BASE_REF` or `GITHUB_BASE_REF` is set, requires a new changelog entry relative to that ref.
- `.github/workflows/docs-checks.yml` — runs `npm test` on every pull request with full history.
- `.claude/hooks/session-start.sh` — prints the skill reminder, active decision records, open proposals, and the latest changelog handover at session start.

---

## 4. Flows

**Session flow.** Agent starts → (Claude Code) hook prints context → agent loads the development skill → reads `AGENTS.md` gates → reads task-specific documents → works → appends a changelog entry → CI verifies structure and the changelog entry on the pull request.

**Deviation flow.** Request conflicts with `HC-n` / `INV-n` / rejected item → agent stops and asks → maintainer approves → decision record written → implementation → record stays Active (and is printed every session) until expired, superseded, or retired, then moves to `archives/`.

**Proposal flow.** Structural change or new capability with no covering proposal → agent drafts `P-NNNN` with status Proposed → maintainer approves → implementation → listed document changes applied → status Implemented → moved to `archives/`.

**Adoption flow.** Maintainer or agent runs the setup skill in a target repository → copies `templates/` contents → fills documents from evidence and answers → installs skills to `.claude/skills/`.

---

## 5. Architectural Invariants

Each invariant has a stable ID. Those marked *(tested)* are enforced by `npm test`.

- **INV-1** *(tested)* — Templates live only under `templates/`. Documents in `development-docs/` MUST NOT contain template placeholders or status labels.
- **INV-2** *(tested)* — Every file under `skills/` MUST have a byte-identical copy under `.claude/skills/`, and `.claude/hooks/` and `.claude/settings.json` MUST be byte-identical to their copies under `templates/.claude/`.
- **INV-3** *(tested)* — A skill and its paired guide MUST reference the same set of governance paths.
- **INV-4** *(tested)* — `package.json` MUST declare no dependencies; tests MUST run on Node's built-in test runner without an install step.
- **INV-5** *(tested)* — `AGENTS.md` and `templates/AGENTS.md` MUST each stay at or under 200 lines.
- **INV-6** *(tested)* — Numbered level-2 sections in any Markdown document MUST be unique and ascending.
- **INV-7** *(tested)* — Decision records and proposals MUST carry the fields in their folder's `TEMPLATE.md`, use an allowed status, and cite only `HC-n` / `INV-n` IDs that exist. Records that are no longer Active, and proposals that are Implemented or Rejected, MUST be in `archives/`.
- **INV-8** *(tested in CI)* — A pull request that changes files MUST add a dated entry to `CHANGELOG.md`.

ID rules: never renumber or reuse an ID. Retire an invariant by marking it `(retired YYYY-MM-DD, see D-NNNN)`.

If a requested change breaks an invariant, stop, name the ID, and ask. An approved deviation is recorded in `development-docs/decisions/` before implementation.

---

## 6. Known Tradeoffs

- **Copies instead of links.** `.claude/skills/` and `templates/.claude/` are copies, kept identical by a test, because symlinks are unreliable across platforms and target repositories need real files.
- **Path-parity is a proxy.** `INV-3` detects a skill or guide that stopped mentioning a governance path. It does not detect two texts that give different advice about the same path.
- **Instructions remain advisory for non-Claude agents.** Only Claude Code has a session hook. Other agents rely on `AGENTS.md` and on CI.
- **The changelog is one file.** Parallel branches that each add a top entry will conflict on merge.

---

## 7. When to Update This Document

Update it when the directory layout, a subsystem, a flow, a check, or an invariant changes. Describe what exists, never what is planned. Do not update it for wording edits inside existing documents.
