# AGENTS.md — Agent Instructions

> **Canonical instruction source for every AI agent and contributor in this repository.**
>
> Tool overlays (`CLAUDE.md`, `.github/copilot-instructions.md`) defer to this file.
>
> This file holds the **gates and repo facts**: precedence, what to read, when to stop, commands, paths, gotchas. The **procedures** (change workflow, changelog format, decision records, proposals, reporting) live once, in the `spec-driven-development` skill. Rules are not restated across files — follow the pointers.

---

## How to Use This Template  
**Status: Remove after customizing**

- **Usually keep** sections should be copied forward with minimal changes.
- **Customize** sections must be filled in for this repository from evidence or maintainer answers.
- Keep this file under 200 lines. It is loaded into every agent session, so every line costs context. Put only what an agent cannot infer from the code: precedence, gates, non-standard commands, and gotchas. Do not add generic coding advice.

---

## 1. Start Here  
**Status: Usually keep**

1. Load the development skill before reading the governance documents:
   - Claude Code: run `/spec-driven-development` (installed in `.claude/skills/`).
   - Other agents: read `.claude/skills/spec-driven-development/SKILL.md`.
2. Read the newest `CHANGELOG.md` entry's **Handover**, the active records in `development-docs/decisions/`, and open proposals in `development-docs/architecture-plans/`. In Claude Code the SessionStart hook prints these.
3. Read the documents your task requires (Section 3).

---

## 2. Instruction Hierarchy  
**Status: Usually keep**

Highest precedence first:

1. The user's explicit request
2. `development-docs/coreIdentity.md`
3. `development-docs/design.json` — UI and styling work only, and only once generated
4. `development-docs/developmentManifesto.md`
5. `development-docs/architecture.md`
6. Approved proposals in `development-docs/architecture-plans/`
7. `development-docs/productRoadmap.md`
8. `AGENTS.md`
9. Tool-specific overlays
10. Existing code, tests, and documentation patterns

An **Active** decision record in `development-docs/decisions/` overrides the specific rule it names, within the scope it states, and nothing else.

If sources conflict, do not silently choose one. Name the conflict, make the smallest safe decision, and record it.

---

## 3. Read Before You Change  
**Status: Usually keep; add repo-specific rows**

Read only what the task requires.

| Task | Read first |
|---|---|
| Any meaningful change | `development-docs/coreIdentity.md` — "What This Project Is Not" and Hard Constraints (`HC-n`) |
| Changing code behavior, tests, automation, or AI behavior | + `development-docs/developmentManifesto.md` |
| Changing structure, modules, data flow, storage, integrations, or dependencies | + `development-docs/architecture.md` — Directory Map and Invariants (`INV-n`) |
| Structural decision or new capability | + `development-docs/architecture-plans/`; if no proposal covers it, draft one (Section 4) |
| New feature or change of direction | + `development-docs/productRoadmap.md` — current focus and Rejected list |
| UI or styling work | + `development-docs/design.json`, only if it holds a generated contract |
| Secrets, user data, or destructive operations | + the Safety section of `development-docs/developmentManifesto.md` |
| [Repo-specific task type] | [Document or section] |

---

## 4. Stop and Ask  
**Status: Usually keep**

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
**Status: Customize**

[Project Name] is a [type of project] for [primary users]. It exists to [core purpose].

- [Fact an agent needs and cannot infer from the code.]
- [Fact an agent needs and cannot infer from the code.]

---

## 6. Repo Rules  
**Status: Customize**

The non-negotiables are the `HC-n` list in `development-docs/coreIdentity.md` and the `INV-n` list in `development-docs/architecture.md`. Do not repeat them here. List only day-to-day rules that are specific to this repo and not obvious from the code:

- [Rule, e.g. "Never edit files under `generated/`; change the generator instead."]
- [Rule.]
- [Version rule, e.g. "`package.json` is the authoritative version. Before opening a pull request, ask the maintainer whether to bump it and by how much."]

---

## 7. Commands  
**Status: Customize**

```bash
[install command]
[test command]
[lint / type-check / build command]
```

---

## 8. Important Paths  
**Status: Customize**

| Path | Purpose |
|---|---|
| `development-docs/decisions/` | Decision records for approved deviations (`D-NNNN-title.md`); `TEMPLATE.md` is the format |
| `development-docs/architecture-plans/` | Change proposals (`P-NNNN-title.md`); `TEMPLATE.md` is the format |
| `development-docs/research/` | Active curated research; not auto-archived |
| `features.md`, `newFeatures.md`, `current-checklist/` | Capability inventory, idea intake, working-period checklist (not a scope gate) |
| `audits/`, `human-qa/` | Automated and human QA records, each with `archives/` |
| `[path]` | [Purpose] |

---

## 9. Gotchas  
**Status: Customize**

- Newest `CHANGELOG.md` entries go at the **top**. Never edit or delete older entries.
- `development-docs/design.json` is a placeholder until a design-contract app generates it. Do not invent styling rules.
- [Repo-specific gotcha.]

---

## 10. Done  
**Status: Usually keep**

A task is done when the Definition of Done in `development-docs/developmentManifesto.md` is satisfied. That is the only completion checklist.

Report honestly: what changed, what was validated and how, what was not completed, and any decision record or proposal created.
