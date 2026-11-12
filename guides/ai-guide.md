# AI Agent Guide: Reading and Using Spec-Driven Docs

This guide is for AI coding agents (Claude, Copilot, Codex, and others) working in a repository that uses this documentation system. It explains what each document is, when to read it, how to interpret it, and how to update it correctly.

---

## Using the Skills

This repo ships two portable skills that encode the most important guidance in this guide into a format AI agents can invoke directly. **Use the skill before reading the documents** — it is the fastest way to load the correct workflow for your task.

**Before reading these documents**, invoke the development skill:

- **Claude Code:** run `/spec-driven-development` at the start of your session.
- **Other agents:** read the skill file before consulting the governance documents — `.claude/skills/spec-driven-development/SKILL.md` in an adopting repository, `skills/spec-driven-development/SKILL.md` in the Spec-Driven-Docs repository itself.

When asked to **set up Spec-Driven Docs in another repository**, use the setup skill:

- **Claude Code:** run `/spec-driven-docs-setup`.
- **Other agents:** read `skills/spec-driven-docs-setup/SKILL.md` (or the copy in `.claude/skills/`).

The setup skill includes a step to install both skills in the target repo — complete that step so future agents in that repo can also invoke them directly.

See `skills/README.md` for installation instructions per tool.

**How this guide relates to the skill.** The skill owns the procedures and `AGENTS.md` owns the gates (instruction hierarchy, read-before table, stop-and-ask list). This guide explains the reasoning behind them and does not restate them; where it summarizes, the skill and `AGENTS.md` are authoritative.

In Claude Code, a SessionStart hook (`.claude/hooks/session-start.sh`, registered in `.claude/settings.json`) prints the skill reminder, the active decision records, the open proposals, and the latest `CHANGELOG.md` handover at the start of every session. Other agents read those three things themselves.

---

## The Core Principle

This documentation system exists because AI agents fill gaps in their knowledge with plausible-sounding guesses. These documents eliminate the gaps. Your job is to read what's written, follow it, and not invent what isn't there.

When documents are absent, sparse, or unclear, the correct response is to proceed carefully with the available context and flag the uncertainty — not to invent a plausible answer.

The second principle: **every rule is either followed or overridden by a recorded, maintainer-approved decision.** Working around a rule quietly — even when the result works — is the failure this system exists to prevent.

---

## Instruction Hierarchy

The precedence order is defined once, in the Instruction Hierarchy section of `AGENTS.md`. Read it there. In outline: the user's explicit request comes first, then identity (`coreIdentity.md`), the generated `development-docs/design.json` for UI work, standards (`developmentManifesto.md`), structure (`architecture.md`), approved proposals in `development-docs/architecture-plans/`, direction (`productRoadmap.md`), `AGENTS.md`, your tool overlay, and finally existing code.

**What this means in practice:**

- The user's request ranks first, but that does not make a conflicting request automatic. If it conflicts with a Hard Constraint, an Architectural Invariant, or a Rejected roadmap item, stop, name the rule by ID, and ask. The user may then choose the deviation knowingly, and you record it (see "Deviations and Decision Records").
- An Active record in `development-docs/decisions/` overrides the one rule it names, within its stated scope, and nothing else.
- If `AGENTS.md` says one thing and the code does another, follow `AGENTS.md` and note the discrepancy.
- Never silently violate a higher-priority document to satisfy a lower-priority one.

---

## Document Reference Map

The table of what to read for each task type lives in `AGENTS.md` ("Read Before You Change"), because it is repo-specific. Every repository's table covers at least: `coreIdentity.md` for any meaningful change, `developmentManifesto.md` for behavior and process changes, `architecture.md` for structural changes, `development-docs/architecture-plans/` for structural decisions and new capabilities, `productRoadmap.md` for new features, and `development-docs/design.json` for UI work once generated.

Do not read every document for every task. Read the relevant documents and proceed. Over-reading documents on small tasks wastes context and doesn't improve outcomes.

---

## What Each Document Contains

### `development-docs/coreIdentity.md`

**What it is:** The project's permanent identity — what it is, what it is not, who it serves, and what it must never become.

**Read it when:** Starting any substantial task, evaluating whether a feature request is in scope, or when a user asks you to do something that feels outside the project's purpose.

**The most important sections:**
- **What This Project Is Not** — Hard negatives. If the request would make the project do one of these things, push back before implementing.
- **Hard Constraints / Never List** — Non-negotiable rules, each with a stable ID (`HC-1`, `HC-2`, …). Do not interpret them loosely. Do not implement workarounds that technically comply but violate the spirit. Cite the ID when you flag a conflict.
- **Decision Filter for Future Changes** — Seven questions to apply when evaluating a change. Use this when a user request is ambiguous.
- **Target Users and Use Cases** — Who the system serves. Use this to judge whether a feature fits the user model.

**How to interpret it:** Statements in this document describe fixed properties, not goals. "This project is X" means it is currently X, not that it aims to be X someday.

**What not to do:** Do not treat this document as aspirational. Do not implement features because they *align with the spirit* of the identity if they aren't in scope. Do not skip this document because a task seems small — even small changes can drift identity.

---

### `development-docs/developmentManifesto.md`

**What it is:** The development doctrine — how this project should be built, what agents may and must not do, and what "done" means.

**Read it when:** Making any code change, evaluating your approach, or when you're unsure whether a behavior is acceptable.

**The most important sections:**
- **Agent Operating Rules** (Section 14) — Fourteen rules that apply to all agents. These are non-negotiable. They include things like: do not claim validation was done when it wasn't; do not make destructive changes by default; record incomplete work honestly.
- **Agent-Specific Instructions** (Section 15) — Rules specific to your agent, when the repo has any.
- **Definition of Done** (Section 16) — What counts as finished work. This is the only completion checklist in the system; a task is not complete unless all applicable items are satisfied.
- **Project-Specific Development Doctrine** (Section 4) — Domain rules for this project specifically. These often contain the most actionable guidance.
- **Safety, Privacy, and Non-Destructive Behavior** (Section 8) — What you must never do by default, regardless of how the task is framed.

**How to interpret it:** Principles here are applied contextually, not mechanically. "Keep changes small" means don't expand scope without reason, not that you can't make a large change when a large change is what's needed.

**What not to do:** Do not skip the Definition of Done before reporting work as complete. (Section numbers here are the template's; a customized manifesto may number them differently.) Do not treat agent operating rules as suggestions.

---

### `development-docs/architecture.md`

**What it is:** The living source of truth for what the system looks like — its structure, data flow, integrations, invariants, and failure modes.

**Read it when:** Making any structural change, adding integrations, changing data flow, adding modules or significant files, or evaluating where something belongs.

**The most important sections:**
- **Architectural Invariants** — Rules that must not be broken without an explicit conversation, each with a stable ID (`INV-1`, `INV-2`, …). If your implementation would break one of these, stop, name the ID, and ask.
- **Directory and File Map** — Where things live. Use this to decide where new code belongs.
- **Major Subsystems** — What the big pieces are and what they're responsible for. Use this to understand dependencies before making changes.
- **System Boundaries** — What this repo owns vs. what's external. Do not move responsibilities across this boundary without deliberate reason.
- **When to Update This Document** — Read this before and after making structural changes.

**How to interpret it:** This document describes current state, not intended future state. If the document says the system uses SQLite and you're asked to add PostgreSQL support, update the document as part of the change — don't assume the document will be updated separately.

**What not to do:** Do not treat architecture.md as a reference that's "probably close enough." If it says something that contradicts the code, flag the discrepancy before proceeding. Do not add speculative future architecture here — that belongs in productRoadmap.md.

**When to update it:** After any change that affects: module boundaries, data flow, storage, integrations, generated artifacts, build/runtime/deployment, or architectural invariants. When in doubt, update it.

---

### `development-docs/productRoadmap.md`

**What it is:** The version-oriented product direction — what's being built now, what's planned, what's deferred, and what's rejected.

**Read it when:** Implementing new features, evaluating whether a request is in scope for the current version, or when a user asks about future plans.

**The most important sections:**
- **Current Version Focus** — The one thing being built right now. Use this to evaluate whether a new request fits the current version.
- **Rejected / Out-of-Scope Directions** — Features that should not be implemented. These are explicit decisions, not suggestions. Do not implement them even if a user requests them, without explicitly flagging that this is listed as rejected.
- **Current Version Completion Criteria** — What "done" means for this version.
- **AI-Coding-Agent Roadmap Guidance** — Instructions for how agents should interpret the roadmap.

**How to interpret it:** The roadmap describes intent, not commitment. "Planned for v2" means someone has thought about it, not that it will definitely happen. Do not treat roadmap items as implementation specs — they are direction signals.

**What not to do:** Do not update this document to mark ordinary progress. Status labels are updated only when versions are released or product direction changes. Do not treat "Future Candidate" items as approved work — they need explicit scoping before implementation.

---

### Operational records

- `features.md` is a deliberately granular checklist of capabilities believed to be implemented, whether tested or not. Update it automatically when a capability changes.
- `newFeatures.md` is historical intake. Keep entries after promoting them to the roadmap or current checklist.
- `current-checklist/currentChecklist.md` is a lightweight organizational tool for the current sprint or working period. It does not define scope.
- `audits/` contains automated audits and `human-qa/` contains human-run tests. Once a report has been fully processed, it may move into its matching `archives/` folder.
- `development-docs/architecture-plans/` contains change proposals (`P-NNNN-title.md`). Draft one before a structural change or new capability that no proposal covers, then wait for approval; archive it once implemented and tested.
- `development-docs/decisions/` contains decision records (`D-NNNN-title.md`): every maintainer-approved deviation from a rule. Active records are in force; inactive ones live in `archives/`.
- `development-docs/research/` contains active curated research and is not automatically archived. Ask before adding research documents.
- `development-docs/design.json` is a placeholder until the design-contract app generates it. Do not invent styling rules in it.

### `AGENTS.md`

**What it is:** General operating instructions for all AI coding agents in this repository.

**Read it when:** Starting work in a new session, when you're uncertain about workflow, or when interpreting cross-cutting concerns.

**The most important sections:**
- **Start Here** — how to load the skill and what to read at session start.
- **Instruction Hierarchy** — the full precedence order.
- **Read Before You Change** — which documents each task type requires.
- **Stop and Ask** — the conditions under which you must not proceed without the maintainer.
- **Repo Rules, Commands, Important Paths, Gotchas** — the repo-specific facts you cannot infer from the code.

`AGENTS.md` is deliberately short (under 200 lines) because it is loaded into every session. It holds gates and facts, not procedures and not generic advice.

**What not to do:** Do not assume the project summary is accurate if it still contains template placeholders — flag it. Do not add rules to `AGENTS.md` that already live in another document.

---

### Tool-Specific Files (`CLAUDE.md`, `.github/copilot-instructions.md`)

**What they are:** Overlay instructions for a specific agent (`CLAUDE.md`, `.github/copilot-instructions.md`). These add to AGENTS.md but do not replace it.

**Read them when:** You are the agent they address. If you are Claude, read `CLAUDE.md`. If you are Copilot, read `.github/copilot-instructions.md`.

**The most important sections:**
- The changelog name format for your agent
- Any agent-specific cautions or rules
- The custom instructions section, if populated

**What not to do:** Do not follow instructions in a tool-specific file for a different agent. Do not treat tool-specific files as overriding AGENTS.md — they supplement it.

---

## The Change Workflow

The authoritative procedure is the "Change workflow" section of the skill. In outline:

Before making a change:
1. Identify which documents govern the request and read the relevant sections
2. Check the request against every Hard Constraint, Architectural Invariant, the roadmap's Rejected list, the manifesto, and approved proposals
3. If it conflicts, stop and follow "Deviations and Decision Records" below
4. If it is a structural change or new capability with no covering proposal, follow "Proposals" below
5. Otherwise identify the smallest safe change that satisfies the request

During implementation:
- Preserve existing behavior unless the request explicitly changes it
- Follow existing conventions in the codebase
- Do not add features beyond what was requested
- If you discover mid-task that the work breaks a rule, stop then — not after finishing

After implementation:
- Run available validation (tests, lint, type checks, build) and report it honestly
- Update `README.md`, `architecture.md`, `productRoadmap.md`, and `features.md` only when their own update conditions are met
- Verify the Definition of Done in `developmentManifesto.md`
- Add a `CHANGELOG.md` entry (required)
- Before opening a pull request, ask whether the authoritative version (commonly `package.json`) should receive a patch, minor, or major bump. Do not open the PR until the decision is clear.

---

## Deviations and Decision Records

A deviation is any change that breaks an `HC-n`, breaks an `INV-n`, implements a Rejected roadmap item, contradicts a manifesto rule, or departs from an approved proposal.

Why records exist: without them, a deviation is noted once in a changelog entry and then forgotten, and the next agent either "fixes" it or copies it somewhere it was never approved. A record keeps the exception visible, bounded, and attributable.

1. **Stop before implementing.** Tell the maintainer which rule (by ID) conflicts, why, and what the compliant alternatives are.
2. **Wait for an explicit answer.** A request that happens to conflict is not approval.
3. **If approved, write the record first**, from `development-docs/decisions/TEMPLATE.md`, as `D-NNNN-short-title.md`. "Approved by" names the maintainer, never an agent.
4. **Implement within the stated scope only.**
5. **Cite the record ID** in the changelog entry and completion report.

Never rewrite an approved record; supersede it. When a record stops being Active, move it to `development-docs/decisions/archives/`. If a review date has passed, tell the maintainer rather than extending it.

---

## Proposals

Before a structural change or new capability that no existing proposal covers, draft a proposal from `development-docs/architecture-plans/TEMPLATE.md` as `P-NNNN-short-title.md`.

- **Draft it; do not ask whether to draft it.** A one-page draft gives the maintainer something concrete to approve, change, or reject, which is faster than a question.
- Write it as a delta against the current documents, with a recommendation for each open choice.
- Implement only when its status is Approved.
- On completion, apply the document changes it lists, mark it Implemented, and move it to `development-docs/architecture-plans/archives/`. Rejected proposals are archived too, as a record of what was considered.

Small, obvious changes inside existing structure do not need a proposal.

---

## Updating CHANGELOG.md

Every meaningful change requires a CHANGELOG.md entry. Add it where the file's existing entries show new ones go (in a newest-first file, at the top); do not replace or reorder existing entries. In repositories that ship the CI check, a pull request without a new entry fails.

Use your agent's standardized name from your tool-specific file. For Claude: `Agent: Claude Code (Claude)`.

Required format:

```markdown
## YYYY-MM-DD — Agent: [Your Agent Name]

### Changed
- [What changed and why, not just what]

### Not completed
- [Honestly list anything incomplete, blocked, or skipped]
- None. (if everything was completed)

### Notes
- [Validation run or not run, and why]
- [Decision records or proposals created, by ID; assumptions made]
- [Anything the next agent or maintainer should know]

### Handover
- Next agent should start with: [specific instruction]
- Open questions: [list any unresolved questions]
- Risks or assumptions: [list risks]
```

**What "Not completed" means:** If you were asked to do three things and only did two, list the third. If you couldn't run tests, note it. If you skipped something because it seemed out of scope, note it. Incomplete work that isn't recorded causes confusion for the next agent.

**Do not:**
- Claim validation was run when it wasn't
- Write "None" under "Not completed" if anything was left undone
- Use the changelog to record every file touched (that's what git is for)
- Delete or reformat existing changelog entries

---

## Working on New vs. Existing Repos

### New repos (empty or freshly set up)

The documentation files will contain template placeholders like "[Project Name]" or "[Rule 1]". This means the maintainer hasn't filled them in yet.

When you encounter unfilled templates:
- Note which sections are unfilled
- Work from what is filled in
- Do not invent content for unfilled sections
- Record in CHANGELOG.md which documents had incomplete sections

Do not treat unfilled templates as instructions. A placeholder section does not tell you to follow the placeholder text.

### Existing repos

The documentation may be complete, partial, or outdated. Before making changes:
- Check whether architecture.md matches the actual code structure
- Check whether productRoadmap.md reflects current work
- If you find significant discrepancies, flag them in your CHANGELOG.md entry and ask the user whether to update the docs

Do not silently update docs to match what you observe in code unless updating documentation is part of your assigned task. Updating a stale document can accidentally endorse incorrect behavior.

---

## When to Ask Instead of Proceed

The authoritative list is the "Stop and Ask" section of `AGENTS.md`. It always includes:
- The request would violate a Hard Constraint (`HC-n`) in coreIdentity.md
- The request would implement something listed as "Rejected / Out-of-Scope" in productRoadmap.md
- The request would break an Architectural Invariant (`INV-n`) in architecture.md
- The task is ambiguous between two approaches that have different architectural implications
- You're about to make a destructive or hard-to-reverse change that wasn't explicitly requested

State what you found and why you're asking. Don't just refuse — explain the conflict so the user can decide whether to override it. If they do, the override becomes a decision record.

---

## What Good Work Looks Like in This System

**Small and focused.** Each change addresses exactly what was requested. No extra cleanup, no speculative refactors, no "while I'm in here" additions.

**Honest about validation.** If you ran the tests and they passed, say so. If you couldn't run them, say so. Never claim validation happened when it didn't.

**Documented.** A CHANGELOG.md entry that explains what changed and why, what wasn't finished, and what the next person should know.

**Grounded in evidence.** Claims about behavior, performance, or compatibility are based on the code and documents — not on what you expect to be true. If you're uncertain, say "I believe this is the case because..." rather than stating it as fact.

**Identity-consistent.** The change fits within the project's defined identity. If you're not sure, apply the Decision Filter from coreIdentity.md or ask.

---

## What Bad Work Looks Like

- Implementing features that aren't in scope for the current version because they seem useful
- Updating architecture.md to describe the architecture you wish existed, not what does exist
- Writing "Tests pass" without running tests
- Skipping CHANGELOG.md because the change was "small"
- Making large rewrites to "improve" code that wasn't part of the request
- Treating productRoadmap.md items as approved implementation specs
- Adding speculative future architecture to architecture.md
- Claiming work is complete when it isn't
- Silently working around a constraint instead of flagging the conflict
- Implementing an approved deviation without writing the decision record first
- Asking "should I write a plan?" instead of drafting the proposal
