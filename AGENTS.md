# AGENTS.md — Agent Instructions

> **Canonical instruction source for every AI agent and contributor in this repository.**
>
> Tool overlays (`CLAUDE.md`, `.github/copilot-instructions.md`) defer to this file.
>
> **Adopting Spec-Driven Docs in your own repository?** This file governs work on the Spec-Driven-Docs repository itself. You want `README.md` and `templates/AGENTS.md`.
>
> This file holds the **gates and repo facts**: precedence, what to read, when to stop, commands, paths, gotchas. The **procedures** (change workflow, changelog format, decision records, proposals, reporting) live once, in the `spec-driven-development` skill. Rules are not restated across files — follow the pointers.

---

## 1. Start Here

1. Load the development skill before reading the governance documents:
   - Claude Code: run `/spec-driven-development` (installed in `.claude/skills/`).
   - Other agents: read `skills/spec-driven-development/SKILL.md`.
2. Read the newest `CHANGELOG.md` entry's **Handover**, the active records in `development-docs/decisions/`, and open proposals in `development-docs/architecture-plans/`. In Claude Code the SessionStart hook prints these.
3. Read the documents your task requires (Section 3).

When asked to set up Spec-Driven Docs in another repository, use the `spec-driven-docs-setup` skill instead.

---

## 2. Instruction Hierarchy

Highest precedence first:

1. The user's explicit request
2. `development-docs/coreIdentity.md`
3. `development-docs/developmentManifesto.md`
4. `development-docs/architecture.md`
5. Approved proposals in `development-docs/architecture-plans/`
6. `development-docs/productRoadmap.md`
7. `AGENTS.md`
8. Tool-specific overlays
9. Existing code, tests, and documentation patterns

An **Active** decision record in `development-docs/decisions/` overrides the specific rule it names, within the scope it states, and nothing else.

If sources conflict, do not silently choose one. Name the conflict, make the smallest safe decision, and record it.

---

## 3. Read Before You Change

Read only what the task requires.

| Task | Read first |
|---|---|
| Any meaningful change | `development-docs/coreIdentity.md` — "What This Project Is Not" and Hard Constraints (`HC-n`) |
| Changing behavior, process, tests, CI, or agent rules | + `development-docs/developmentManifesto.md` |
| Changing structure, file layout, skills, hooks, or checks | + `development-docs/architecture.md` — Directory Map and Invariants (`INV-n`) |
| Structural decision or new capability | + `development-docs/architecture-plans/`; if no proposal covers it, draft one (Section 4) |
| New feature or change of direction | + `development-docs/productRoadmap.md` — current focus and Rejected list |
| Editing a template | + the "How to Use This Template" section of that file under `templates/` |

---

## 4. Stop and Ask

Stop before implementing, state what you found, and ask the maintainer when:

- The request breaks a Hard Constraint (`HC-n`) or an Architectural Invariant (`INV-n`).
- The request implements something the roadmap lists as Rejected / Out of Scope.
- The request contradicts a manifesto rule or an approved proposal.
- The task is ambiguous between approaches with different structural consequences.
- The change is destructive or hard to reverse and was not explicitly requested.

Then:

- **Deviation approved** → write a decision record in `development-docs/decisions/` *before* implementing. A deviation without a record is a defect, however well it works.
- **Structural change or new capability with no proposal** → draft a short proposal in `development-docs/architecture-plans/` with status `Proposed` and wait for approval. Do not ask whether to write one; write it.

Both procedures and their file formats are in the skill.

---

## 5. Project Summary

Spec-Driven-Docs is a documentation-first governance framework and template repository for AI-assisted and human-led software projects. It distributes document templates (`templates/`) and two portable agent skills (`skills/`), and it governs itself with a filled-in copy of the same system (`development-docs/`).

- `templates/`, `skills/`, and `guides/` are the product: what adopters copy and read. Judge every change by whether it helps someone add the system to their own repository. Their placeholders are intentional.
- Everything else exists to keep the product correct and to serve as a worked example. Keep it small; do not grow this repo's own process for its own sake.
- `development-docs/` is this repo's own filled-in copy. It must not contain placeholders.
- There is no application runtime. The only executable code is the zero-dependency test suite, the CI workflow, and the session hook.

---

## 6. Repo Rules

The non-negotiables are `HC-1`…`HC-5` in `development-docs/coreIdentity.md` and `INV-1`…`INV-8` in `development-docs/architecture.md`. Rules specific to day-to-day editing:

- Status labels (`**Status: Required**` etc.), bracketed placeholders, and "How to Use This Template" sections in `templates/` are part of the template format. Do not remove them or fill them in.
- A change to a skill must be mirrored in its guide in the same commit, and the reverse: `skills/spec-driven-development/SKILL.md` ↔ `guides/ai-guide.md`, `skills/spec-driven-docs-setup/SKILL.md` ↔ `guides/human-guide.md`.
- After editing anything under `skills/`, copy it to `.claude/skills/` (command below). After editing `.claude/hooks/` or `.claude/settings.json`, copy to `templates/.claude/`.
- When a live governance rule changes shape (a new section, ID scheme, or record type), make the matching change to the template under `templates/`.
- This repo keeps no operational records of its own (`features.md`, `newFeatures.md`, `current-checklist/`, `audits/`, `human-qa/`, `research/`, `design.json`). They exist only as templates under `templates/`. Do not recreate them at the root.
- `package.json` is the authoritative version. Before opening a pull request, ask the maintainer whether to bump it and by how much. Do not decide alone.

---

## 7. Commands

```bash
npm test                                   # all checks; no install needed
BASE_REF=origin/main npm test              # also require a new CHANGELOG entry vs. main (what CI runs)
cp -r skills/. .claude/skills/             # sync installed skills after editing skills/
cp -r .claude/hooks .claude/settings.json templates/.claude/   # sync hook into the template set
```

---

## 8. Important Paths

| Path | Purpose |
|---|---|
| `templates/` | The distributable template set, laid out as it should land in a target repo |
| `development-docs/` | This repo's live governance documents |
| `development-docs/decisions/` | Decision records for approved deviations (`D-NNNN-title.md`); `TEMPLATE.md` is the format |
| `development-docs/architecture-plans/` | Change proposals (`P-NNNN-title.md`); `TEMPLATE.md` is the format |
| `skills/` | Canonical source of the two portable skills |
| `.claude/skills/`, `.claude/hooks/`, `.claude/settings.json` | Installed skills and the SessionStart context hook |
| `guides/` | Long-form companions to the skills |
| `tests/` | Zero-dependency checks run by `npm test` and CI |

---

## 9. Gotchas

- Newest `CHANGELOG.md` entries go at the **top**, directly under the `# CHANGELOG` heading. Never edit or delete older entries.
- CI fails a pull request that changes files without adding a `CHANGELOG.md` entry.
- `npm test` fails if `skills/` and `.claude/skills/` differ, if a skill and its guide stop referencing the same governance paths, if a numbered section is duplicated, or if this file exceeds 200 lines.
- `templates/development-docs/design.json` is a placeholder for a contract generated by a design-contract app. Do not invent styling rules in it.
- Historical changelog entries cite old section numbers and old paths. They are project memory; leave them.

---

## 10. Done

A task is done when the Definition of Done in `development-docs/developmentManifesto.md` is satisfied. That is the only completion checklist.

Report honestly: what changed, what was validated and how, what was not completed, and any decision record or proposal created.
