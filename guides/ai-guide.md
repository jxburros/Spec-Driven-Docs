# AI Agent Guide: Reading and Using Spec-Driven Docs

This guide is for AI coding agents (Claude, Copilot, Codex, and others) working in a repository that uses this documentation system. It explains what each document is, when to read it, how to interpret it, and how to update it correctly.

---

## The Core Principle

This documentation system exists because AI agents fill gaps in their knowledge with plausible-sounding guesses. These documents eliminate the gaps. Your job is to read what's written, follow it, and not invent what isn't there.

When documents are absent, sparse, or unclear, the correct response is to proceed carefully with the available context and flag the uncertainty — not to invent a plausible answer.

---

## Instruction Hierarchy

When instructions conflict, follow this precedence order (highest to lowest):

1. **User's explicit request** in the current session
2. `development-docs/coreIdentity.md` — Project identity and non-negotiable constraints
3. `development-docs/developmentManifesto.md` — Development standards, AI operating rules, Definition of Done
4. `development-docs/architecture.md` — System structure and architectural invariants
5. `development-docs/productRoadmap.md` — Version scope and product direction
6. `AGENTS.md` — General agent instructions and workflow
7. Tool-specific files (`CLAUDE.md`, `.github/copilot-instructions.md`) — Your agent's specific instructions
8. Existing code — Actual implemented behavior

**What this means in practice:** If a user asks you to do something that conflicts with a coreIdentity.md constraint, follow the constraint and explain the conflict. If AGENTS.md says one thing and the code does another, follow AGENTS.md and note the discrepancy. Never silently violate a higher-priority document to satisfy a lower-priority one.

---

## Document Reference Map

Use this table to know which documents to read before starting a task.

| Task Type | Documents to Read |
|-----------|-------------------|
| Any meaningful change | AGENTS.md Section 1 (hierarchy), coreIdentity.md |
| Changing code behavior | + developmentManifesto.md (principles, Definition of Done) |
| Changing structure, modules, data flow, integrations | + architecture.md |
| Implementing a new feature | + productRoadmap.md (is this in scope for current version?) |
| Changing AI agent behavior or safety rules | + developmentManifesto.md Section 14 (Agent Operating Rules) |
| Updating documentation | Check architecture.md Section 21 (When to Update) |
| Anything touching secrets, data, or destructive operations | developmentManifesto.md Section 8 (Safety) |

Do not read every document for every task. Read the relevant documents and proceed. Over-reading documents on small tasks wastes context and doesn't improve outcomes.

---

## What Each Document Contains

### `development-docs/coreIdentity.md`

**What it is:** The project's permanent identity — what it is, what it is not, who it serves, and what it must never become.

**Read it when:** Starting any substantial task, evaluating whether a feature request is in scope, or when a user asks you to do something that feels outside the project's purpose.

**The most important sections:**
- **What This Project Is Not** — Hard negatives. If the request would make the project do one of these things, push back before implementing.
- **Hard Constraints / Never List** — Non-negotiable rules. Treat these as absolute. Do not interpret them loosely. Do not implement workarounds that technically comply but violate the spirit.
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
- **Agent-Specific Instructions** (Section 15) — Rules specific to your agent. Check whether there's a subsection for you (Claude, Copilot, Codex, etc.).
- **Definition of Done** (Section 16) — What counts as finished work. A task is not complete unless all items here are satisfied.
- **Project-Specific Development Doctrine** (Section 4) — Domain rules for this project specifically. These often contain the most actionable guidance.
- **Safety, Privacy, and Non-Destructive Behavior** (Section 8) — What you must never do by default, regardless of how the task is framed.

**How to interpret it:** Principles here are applied contextually, not mechanically. "Keep changes small" means don't expand scope without reason, not that you can't make a large change when a large change is what's needed.

**What not to do:** Do not skip Section 16 (Definition of Done) before reporting work as complete. Do not treat agent operating rules as suggestions.

---

### `development-docs/architecture.md`

**What it is:** The living source of truth for what the system looks like — its structure, data flow, integrations, invariants, and failure modes.

**Read it when:** Making any structural change, adding integrations, changing data flow, adding modules or significant files, or evaluating where something belongs.

**The most important sections:**
- **Architectural Invariants** — Rules that must not be broken without an explicit conversation. If your implementation would break one of these, stop and ask.
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

### `AGENTS.md`

**What it is:** General operating instructions for all AI coding agents in this repository.

**Read it when:** Starting work in a new session, when you're uncertain about workflow, or when interpreting cross-cutting concerns.

**The most important sections:**
- **Instruction Hierarchy** (Section 1) — The full precedence order. Read this first if you haven't already.
- **Required Change Workflow** (Section 7) — The seven-step process to follow when making changes.
- **Project Summary** (Section 5) — This project's specific description. Read to orient yourself.
- **Non-Negotiable Project Values** (Section 6) — Values that override feature requests.
- **Completion Checklist** (Section 17) — Verify these before reporting work as done.
- **Domain-Specific Rules** (Section 15) — Project-specific rules not covered in other documents.

**What not to do:** Do not skip the completion checklist. Do not assume the project summary is accurate if it still contains template placeholders — flag it.

---

### Tool-Specific Files (`CLAUDE.md`, `.github/copilot-instructions.md`)

**What they are:** Overlay instructions for a specific agent. These add to AGENTS.md but do not replace it.

**Read them when:** You are the agent they address. If you are Claude, read `CLAUDE.md`. If you are Copilot, read `.github/copilot-instructions.md`.

**The most important sections:**
- The changelog name format for your agent
- Any agent-specific cautions or rules
- The custom instructions section, if populated

**What not to do:** Do not follow instructions in a tool-specific file for a different agent. Do not treat tool-specific files as overriding AGENTS.md — they supplement it.

---

## The Change Workflow

Before making a change:
1. Identify which documents govern the request (use the reference map above)
2. Read the relevant sections — not the full documents unless needed
3. Identify the smallest safe change that satisfies the request
4. Check whether the change would violate any invariants, constraints, or "never" rules
5. If the request conflicts with a document, state the conflict before implementing

During implementation:
- Preserve existing behavior unless the request explicitly changes it
- Prefer clear, maintainable code over clever solutions
- Follow existing conventions in the codebase
- Do not add features beyond what was requested
- Document uncertainty — do not hide it

After implementation:
- Verify against the Definition of Done (developmentManifesto.md Section 16)
- Run available validation (tests, lint, type checks, build)
- Update CHANGELOG.md (required)
- Update README.md if user-facing behavior, setup, or features changed
- Update architecture.md if architecture changed
- Verify the completion checklist in AGENTS.md Section 17

---

## Updating CHANGELOG.md

Every meaningful change requires a CHANGELOG.md entry. Append to the file; do not replace or reorder existing entries.

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
- [Assumptions made]
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

Ask the user before proceeding when:
- The request would violate a Hard Constraint or "Never" rule in coreIdentity.md
- The request would implement something listed as "Rejected / Out-of-Scope" in productRoadmap.md
- The request would break an Architectural Invariant in architecture.md
- The task is ambiguous between two approaches that have different architectural implications
- You're about to make a destructive or hard-to-reverse change that wasn't explicitly requested

State what you found and why you're asking. Don't just refuse — explain the conflict so the user can decide whether to override it.

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
