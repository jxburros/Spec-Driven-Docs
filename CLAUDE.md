# CLAUDE.md — Claude Instructions

> **Claude-specific overlay**
>
> Claude must follow `AGENTS.md` first, especially the Instruction Hierarchy in `AGENTS.md` Section 1.
>
> This file adds Claude-specific expectations and should not contradict the canonical instructions in `AGENTS.md`.

---

## How to Use This Template  
**Status: Keep and customize**

This file should usually be shorter than `AGENTS.md`.

Use it to define Claude-specific reading behavior, changelog naming, change process expectations, caution areas, and any repo-specific instructions Claude commonly needs repeated directly.

Do not duplicate all of `AGENTS.md` unless this repository needs Claude to see the rules directly.

---

## 1. Required Reading  
**Status: Usually keep**

Before making meaningful changes, Claude must:

1. Read and follow `AGENTS.md`.
2. Read `development-docs/coreIdentity.md`.
3. Consult `development-docs/developmentManifesto.md` when development standards, AI behavior, safety, validation, or workflow rules are relevant.
4. Consult `development-docs/architecture.md` before changing structure, data flow, storage, integrations, dependencies, generated artifacts, or major module boundaries.
5. Consult `development-docs/productRoadmap.md` before implementing new product capabilities or changing version scope.

If any required document is missing, proceed with available context and record the missing document in `CHANGELOG.md`.

---

## 2. Claude Change Process  
**Status: Usually keep**

Before editing:

1. Identify which project principles govern the request.
2. Inspect only the files relevant to the requested change.
3. Choose the smallest safe change that satisfies the request.
4. Preserve existing behavior unless the request explicitly changes it.
5. Avoid broad rewrites unless explicitly requested or clearly necessary.
6. Check whether documentation updates are required.

During implementation:

- Prefer clear, boring, maintainable code.
- Keep changes reviewable.
- Preserve existing conventions.
- Avoid unnecessary dependencies.
- Avoid speculative future architecture.
- Document uncertainty instead of hiding it.
- Continue with other requested tasks if one part is blocked.

After implementation:

- Run relevant validation when possible.
- Update `CHANGELOG.md`.
- Update `README.md` when behavior materially changes.
- Update `development-docs/architecture.md` carefully if architecture changed.
- Do not update `development-docs/productRoadmap.md` unless version scope or product direction changed.

---

## 3. Claude Changelog Name

Use the standardized identity format from `AGENTS.md` Section 10 and `CHANGELOG.md`.  
**Status: Usually keep**

When Claude updates `CHANGELOG.md`, use this agent name unless the maintainer requests another:

```text
Agent: Claude Code (Claude)
```

Preferred format:

```markdown
## YYYY-MM-DD — Agent: Claude Code (Claude)

### Changed
- ...

### Not completed
- ...

### Notes
- ...

### Handover
- Next agent should start with: ...
- Open questions: ...
- Risks or assumptions: ...
```

If all requested work was completed:

```markdown
### Not completed
- None.
```

Claude must record incomplete, blocked, skipped, or unverified work honestly.

---

## 4. Claude-Specific Cautions  
**Status: Usually keep and customize**

Claude should be especially careful to avoid:

- Large unrelated rewrites
- Overconfident claims without validation
- Treating roadmap ideas as current-version tasks
- Updating `productRoadmap.md` for ordinary implementation progress
- Leaving `architecture.md` stale after architectural changes
- Adding speculative architecture to `architecture.md`
- Removing useful documentation while trying to simplify
- Treating AI-generated reasoning as evidence
- Hiding incomplete validation
- Making destructive or mutating changes without explicit instruction

Claude should prefer small direct edits, clear explanations, honest uncertainty, explicit validation notes, and documentation that distinguishes current behavior from future plans.

---

## 5. Documentation and Source-of-Truth Updates  
**Status: Usually keep**

Update `README.md` when setup, commands, configuration, user-facing behavior, features, known limitations, required secrets, services, or dependencies change.

Update `CHANGELOG.md` when meaningful work is completed, work is incomplete or blocked, validation could not be run, a requested change was intentionally not made, or behavior/docs/setup/config/architecture changes.

Update `development-docs/architecture.md` when major systems, module boundaries, data flow, state, storage, persistence, integrations, build/runtime/deployment architecture, generated artifact formats, or configuration schema change.

Update `development-docs/productRoadmap.md` only when current version scope, product direction, future version sequencing, or major roadmap status changes.

---

## 6. Testing and Validation  
**Status: Usually keep**

Claude should run relevant validation when possible, such as tests, type checks, lint checks, build checks, script dry runs, config validation, manual verification, or documentation consistency review.

If validation cannot be run, Claude must not claim it was run. Record skipped or unavailable validation in `CHANGELOG.md`.

---

## 7. Final Response Expectations  
**Status: Usually keep**

When reporting completion, Claude should include what changed, which files changed, whether `CHANGELOG.md` was updated, whether `README.md` was updated, whether `architecture.md` was updated if relevant, which `development-docs/` files were consulted, what validation was run, what could not be completed, and any useful next step.

---

## 8. Custom Claude Instructions  
**Status: Customize**

### Project-Specific Claude Rules

- [Rule 1]
- [Rule 2]
- [Rule 3]

### Claude Should Prioritize

- [Priority 1]
- [Priority 2]
- [Priority 3]

### Claude Should Avoid

- [Avoided behavior 1]
- [Avoided behavior 2]
- [Avoided behavior 3]

### Important Repo Commands

```bash
[install command]
[test command]
[build command]
[lint command]
```

---

## Final Principle  
**Status: Usually keep**

Claude should leave the repository easier for the next human or agent to understand.

Small, accurate, well-documented changes are better than broad, clever, poorly grounded rewrites.
