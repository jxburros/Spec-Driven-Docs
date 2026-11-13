---
name: spec-driven-development
description: Develop in a repository governed by the Spec-Driven Docs system (AGENTS.md plus development-docs/coreIdentity.md, developmentManifesto.md, architecture.md, productRoadmap.md, decisions, and architecture-plans). Use when making code, documentation, configuration, or workflow changes in a repo that contains these files. Teaches the session-start routine, the change workflow, how to record a deviation as a decision, how to draft a change proposal, the changelog format, and how to report completion.
---

# Spec-Driven Development

You are working in a repository that uses the Spec-Driven Docs governance system. The repo's documents — not your assumptions — define what the project is, how it is built, and what "done" means. Read what is written, follow it, and do not invent what isn't there.

The system has one aim: every rule is either **followed** or **overridden by a recorded, maintainer-approved decision**. A quiet workaround is the failure this system exists to prevent.

This skill owns the **procedures**. `AGENTS.md` owns the **gates**: the instruction hierarchy, the read-before table, and the stop-and-ask list. Read them there; they are not repeated here.

## Step 0: Session start

1. Confirm the system is present: `AGENTS.md`, `CHANGELOG.md`, and `development-docs/` with `coreIdentity.md`, `developmentManifesto.md`, `architecture.md`, `productRoadmap.md`. Optional parts: `development-docs/design.json`, `development-docs/decisions/`, `development-docs/architecture-plans/`, `development-docs/research/`, `features.md`, `newFeatures.md`, `current-checklist/currentChecklist.md`, `audits/`, `human-qa/`, and a tool overlay such as `CLAUDE.md` or `.github/copilot-instructions.md`.
2. Read `AGENTS.md`: Instruction Hierarchy, Read Before You Change, Stop and Ask.
3. Read the newest `CHANGELOG.md` entry's Handover, every **Active** record in `development-docs/decisions/`, and every **Proposed** or **Approved** proposal in `development-docs/architecture-plans/`. A session hook may already have printed these.
4. Read the documents the read-before table lists for your task. Read only those; over-reading wastes context.

If a document is **missing**, proceed with what exists and record the missing file in your changelog entry.

If a document still contains **template placeholders** (`[Project Name]`, `[Rule 1]`), work only from the filled-in parts. Placeholder text is not an instruction. Do not invent content for unfilled sections; note them in your changelog entry and suggest the maintainer run the `spec-driven-docs-setup` skill.

## How to interpret the documents

- `coreIdentity.md` states **fixed properties**, not aspirations. Its Hard Constraints carry IDs (`HC-1`, `HC-2`, …). Do not implement something that complies with the wording while defeating the purpose.
- `architecture.md` states **current structure**. Its Architectural Invariants carry IDs (`INV-1`, …). If it contradicts the code, flag the discrepancy instead of guessing which is right.
- `productRoadmap.md` states **direction, not commitment**. "Planned" is not a specification, "Future Candidate" is not approved work, and "Rejected" must not be implemented without a decision record. An empty section means "ask", not "anything goes".
- `features.md` lists capabilities believed to exist; it is not proof of testing. `newFeatures.md` is idea intake; keep entries after they are promoted. `current-checklist/currentChecklist.md` organizes the working period; it is not a scope gate. `development-docs/research/` stays active; ask before adding research documents. `audits/` and `human-qa/` hold QA records; a fully processed report may move to its `archives/`.
- `development-docs/design.json` is authoritative for UI work only once a design-contract app has generated it. Never fill in the placeholder.

## Change workflow

Before editing:

1. Identify the governing documents and read the relevant sections.
2. Check the request against every `HC-n`, every `INV-n`, the roadmap's Rejected list, the manifesto, and approved proposals.
3. If it conflicts with any of them, **stop** and follow "Deviations" below.
4. If it is a structural change or a new capability and no proposal covers it, follow "Proposals" below.
5. Otherwise, identify the smallest safe change that satisfies the request.

During implementation:

- Preserve existing behavior unless the request changes it.
- Follow existing conventions. No unrelated refactors, speculative architecture, or "while I'm in here" additions.
- If you discover mid-task that the work breaks a rule, stop then. Do not finish first and report after.
- If one of several requested tasks is blocked, continue with the others and record the blocker.

After implementation:

- Run the validation commands listed in `AGENTS.md` (or `README.md` / the build files). **Never claim validation ran when it didn't.**
- Update the documents the change affects (table below).
- Check the Definition of Done in `developmentManifesto.md`. It is the only completion checklist.
- Append a changelog entry.
- Before opening a pull request, ask the maintainer whether the repo's authoritative version (commonly `package.json`) needs a patch, minor, or major bump. Do not open the pull request until that is answered.

## Deviations: decision records

A deviation is any change that breaks an `HC-n`, breaks an `INV-n`, implements a Rejected roadmap item, contradicts a manifesto rule, or departs from an approved proposal.

1. **Stop before implementing.** Tell the maintainer which rule (by ID) the request conflicts with, why, and what the compliant alternatives are.
2. **Wait for an explicit answer.** A user request that happens to conflict is not approval; the maintainer must choose the deviation knowingly.
3. **If approved, write the record first.** Copy `development-docs/decisions/TEMPLATE.md` to `development-docs/decisions/D-NNNN-short-title.md` using the next unused number. If the folder has no template, create the file with these fields: `Status` (Active), `Date`, `Deviates from` (the rule IDs), `Approved by` (the maintainer's name — never an agent), `Review by` (a date or "permanent"), then `Context`, `Decision`, `Scope`, `Consequences`.
4. **Implement within the stated scope only.** The record overrides the rule it names and nothing else.
5. **Cite the record** (`D-NNNN`) in the changelog entry and in your completion report.

Maintaining records:

- Never rewrite the substance of an approved record. Supersede it with a new one.
- When a record's review date has passed, tell the maintainer; do not extend it yourself.
- When a record is no longer Active (Expired, Superseded, Retired), move it to `development-docs/decisions/archives/`.
- If a deviation has become the normal way of working, propose changing the governing document and retiring the record.

If the maintainer declines, do the compliant alternative or leave the task undone, and record that in the changelog entry.

## Proposals: per-change plans

Draft a proposal before a structural change or new capability that no existing proposal covers. Small, obvious changes inside existing structure do not need one.

1. **Draft it; do not ask whether to draft it.** Copy `development-docs/architecture-plans/TEMPLATE.md` to `development-docs/architecture-plans/P-NNNN-short-title.md`. If the folder has no template, create the file with: `Status` (Proposed), `Date`, `Approved by`, `Touches` (rule IDs or "none"), then `Why`, `What changes`, `Document changes on completion`, `Open choices`, `Done when`.
2. Write the change as a **delta** against the current documents, on one page. Give a recommendation for each open choice.
3. **Stop and ask** the maintainer to approve, change, or reject it. Implement only when Status is Approved.
4. On completion: apply the listed document changes, set Status to Implemented, and move the file to `development-docs/architecture-plans/archives/`. Rejected proposals are archived too.

A proposal that breaks an `HC-n` or `INV-n` also needs a decision record.

## Which documents to update after a change

| Document | Update when | Do not update for |
|---|---|---|
| `CHANGELOG.md` | Every meaningful session | — |
| `README.md` | Setup, usage, commands, configuration, features, or public behavior changed | Internal refactors |
| `development-docs/architecture.md` | Structure, module boundaries, data flow, storage, integrations, build/deploy, or invariants changed | Bug fixes inside a module, typos, tests |
| `development-docs/productRoadmap.md` | Version scope or direction actually changed | Ordinary progress — the most common mistake |
| `features.md` | A capability was added, removed, or materially changed | Internal changes |

When updating `architecture.md`, describe what now exists, never a planned state. If unsure, add a small conservative note and flag the uncertainty.

## Changelog entry format

Add a new entry to `CHANGELOG.md` where the file's existing entries show new ones go (newest-first files: at the top). Never delete, reorder, or rewrite earlier entries. Take the agent name from your tool overlay.

```markdown
## YYYY-MM-DD — Agent: <Tool Name> (<Model Name>)

### Changed
- [What changed and why]

### Not completed
- [Anything incomplete, blocked, or skipped — or "None." only if truly everything was done]

### Notes
- [Validation run or not run, and why]
- [Decision records or proposals created, by ID; assumptions; missing or placeholder docs]

### Handover
- Next agent should start with: ...
- Open questions: ...
- Risks or assumptions: ...
```

## Reporting completion

State: what changed and in which files; what validation ran and its result, or why it could not run; which governance documents were consulted and which were updated; any decision record or proposal created, by ID; what was not completed; and a useful next step. Do not hide limitations.
