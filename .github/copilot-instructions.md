# .github/copilot-instructions.md — GitHub Copilot Instructions

> **GitHub Copilot-specific overlay**
>
> GitHub Copilot must follow `AGENTS.md` first, especially the Instruction Hierarchy in `AGENTS.md` Section 1.
>
> This file adds Copilot-specific guidance for code suggestions, edits, documentation updates, and completion behavior.

---

## How to Use This Template  
**Status: Keep and customize**

This file should be concise enough for Copilot to apply consistently.

For complete shared agent behavior, see `AGENTS.md`.

---

## 1. Required Context  
**Status: Usually keep**

Before starting any development work in this repository, invoke the `spec-driven-development` skill:

- **Claude Code:** run `/spec-driven-development` before reading the development documents.
- **Other agents:** read `skills/spec-driven-development/SKILL.md` at the start of the session.

When asked to set up Spec-Driven Docs in another repository, use the `spec-driven-docs-setup` skill and complete the step in that skill to install both skills in the target repo.

Before making meaningful changes, GitHub Copilot should follow `AGENTS.md`.

At minimum:

- Read `development-docs/coreIdentity.md` before changing code, UX, product behavior, workflow, or documentation.
- Read `development-docs/design.json` before UI or styling work when it contains a generated design contract. Do not invent content for its placeholder.
- Consult `development-docs/developmentManifesto.md` when development standards, safety, testing, AI behavior, or automation behavior are relevant.
- Consult `development-docs/architecture.md` before changing structure, dependencies, data flow, storage, integrations, or major module boundaries.
- Check relevant plans in `development-docs/architecture-plans/` before structural decisions. Pause and ask before creating a missing plan.
- Consult `development-docs/productRoadmap.md` before implementing new features or changing product direction.

Do not make blind changes without understanding the relevant source-of-truth documents.

---

## 2. Trigger-Based Documentation Access  
**Status: Usually keep**

| Task Type | Read / Consult |
|---|---|
| All meaningful tasks | `AGENTS.md` and `development-docs/coreIdentity.md` |
| New feature or product capability | `development-docs/productRoadmap.md` |
| Refactor, restructuring, file navigation, dependency change | `development-docs/architecture.md` |
| UI or styling work | `development-docs/design.json` when generated |
| Structural decision needing feature-specific guidance | Relevant `development-docs/architecture-plans/` plan, or ask before creating one |
| AI behavior, automation, QA, validation, safety, or workflow change | `development-docs/developmentManifesto.md` |
| Setup, usage, commands, config, or public-facing behavior | `README.md` |
| Completed, incomplete, or blocked work | `CHANGELOG.md` |

| Document | Copilot Mission |
|---|---|
| `coreIdentity.md` | Preserve project identity and anti-goals. |
| `developmentManifesto.md` | Follow development standards and safety expectations. |
| `architecture.md` | Find existing logic and keep architecture documentation accurate. |
| `productRoadmap.md` | Understand current-version scope and future direction without treating it as a task tracker. |
| `README.md` | Keep public setup and usage information accurate. |
| `CHANGELOG.md` | Preserve project memory. |

---

## 3. Change Workflow  
**Status: Usually keep**

For each task, Copilot should:

1. Align the change with `coreIdentity.md`.
2. Consult the relevant docs using the decision tree above.
3. Inspect the files directly related to the request.
4. Make the smallest safe change that satisfies the request.
5. Preserve existing behavior unless explicitly asked to change it.
6. Avoid broad unrelated refactors.
7. Add or update tests when appropriate.
8. Run relevant validation when possible.
9. Update `CHANGELOG.md`.
10. Update `README.md` when behavior, setup, usage, configuration, or workflow materially changes.
11. Update `development-docs/architecture.md` carefully if actual architecture changes.
12. Do not update `development-docs/productRoadmap.md` unless version scope or product direction changes.
13. Update `features.md` automatically when feature coverage changes.
14. Before opening a pull request, ask whether `package.json` should receive a patch, minor, or major version bump; do not open the PR until that decision is clear.

When scope is broad or open-ended, complete the requested scope thoroughly, but do not expand beyond project identity, current roadmap scope, or architecture without explicit direction.

---

## 4. Copilot Changelog Name

Use the standardized identity format from `AGENTS.md` Section 10 and `CHANGELOG.md`.  
**Status: Usually keep**

When GitHub Copilot updates `CHANGELOG.md`, use this agent name unless the maintainer requests another:

```text
Agent: GitHub Copilot (Copilot)
```

Preferred format:

```markdown
## YYYY-MM-DD — Agent: GitHub Copilot (Copilot)

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

Do not delete previous changelog entries.

---

## 5. Coding Guidance  
**Status: Usually keep and customize**

Prefer focused reviewable diffs, clear names, small functions, existing project conventions, explicit error handling, backward-compatible changes where practical, tests for new logic and bug fixes, and documentation for non-obvious behavior.

Avoid large unrelated rewrites, silent failures, hidden magic, hardcoded assumptions that conflict with project direction, speculative architecture, unnecessary dependencies, duplicated logic, secret exposure, and treating future roadmap ideas as already implemented.

When adding behavior, keep configuration understandable, generated output readable, extension points preserved, local/offline/no-AI behavior preserved when required, provider-specific logic isolated when relevant, and accessibility expectations preserved when UI is involved.

---

## 6. Testing and Validation  
**Status: Usually keep**

Write or update tests when appropriate for new functions, changed business logic, bug fixes, edge cases, public APIs, integration points, and critical user workflows.

Run relevant checks when possible:

```bash
[test command]
[build command]
[lint command]
[typecheck command]
```

If checks cannot be run, document that in `CHANGELOG.md`. Do not claim validation was performed if it was not.

---

## 7. Documentation Updates  
**Status: Usually keep**

Update documentation when the change affects setup, usage, configuration, commands, features, workflows, generated artifacts, public APIs, AI behavior, safety/privacy behavior, known limitations, or developer experience.

Update `README.md` when material behavior changes.

Update `development-docs/architecture.md` carefully when actual architecture changes. Do not turn it into a roadmap, changelog, or exhaustive file inventory.

Do not update `development-docs/productRoadmap.md` for ordinary implementation progress. Update it only for version-scope or product-direction changes.

Every meaningful change must be recorded in `CHANGELOG.md`. Record incomplete, blocked, skipped, or unverified work honestly.

---

## 8. Safety and AI Rules  
**Status: Customize; required for AI, automation, user-data, cross-repo, or deployment projects**

Do not introduce default behavior that deletes user data, deletes repository files, pushes code to external repositories, modifies production systems, deploys automatically without explicit intent, runs destructive commands, hides failures, leaks secrets, sends unnecessary private data to external services, or treats AI guesses as verified facts.

When working on AI behavior:

- Ground AI output in evidence.
- Preserve uncertainty.
- Keep structured outputs reliable when scripts consume them.
- Keep provider-specific logic isolated where possible.
- Preserve no-AI operation if required by project identity.
- Do not let AI silently override human decisions.

---

## 9. Completion Checklist

Canonical DoD lives in `development-docs/developmentManifesto.md` Section 7. This local checklist is a quick aid only.  
**Status: Usually keep**

Before considering work complete:

- [ ] Requested scope was addressed as fully as practical.
- [ ] Relevant starting docs were consulted.
- [ ] Existing behavior was preserved unless intentionally changed.
- [ ] Changes are focused and reviewable.
- [ ] Tests or validation were run when possible.
- [ ] Skipped validation was documented.
- [ ] `CHANGELOG.md` was updated.
- [ ] `README.md` was updated if material behavior changed.
- [ ] `architecture.md` was updated if architecture changed.
- [ ] `productRoadmap.md` was updated only if version scope or product direction changed.
- [ ] Incomplete or blocked work was documented.

---

## 10. Final Response Expectations  
**Status: Usually keep**

When reporting completion, include what changed, files changed, whether `README.md` and `CHANGELOG.md` were updated, whether `architecture.md` was updated if relevant, which `development-docs/` files were consulted, what validation was run, what could not be completed, and recommended next steps if useful.

---

## 11. Custom Copilot Instructions  

### Project-Specific Rules

- Invoke the `spec-driven-development` skill (read `skills/spec-driven-development/SKILL.md`) before reading the development documents in any session.
- When asked to set up Spec-Driven Docs in another repository, use the `spec-driven-docs-setup` skill (read `skills/spec-driven-docs-setup/SKILL.md`) and complete the step to install both skills in the target repo.
- Treat `development-docs/` files as templates: never replace placeholder text with invented content.
- When editing a SKILL.md file, check the corresponding guide and update it in the same change.
- Keep `features.md` as a simple inventory of capabilities believed to be implemented, whether tested or not, and update it automatically when feature coverage changes.
- Treat `current-checklist/currentChecklist.md` as organizational context, not a scope gate.
- Ask before creating a new research or architecture-plan document. Fully processed audit, human-QA, and architecture-plan files may move into their archive folders.
- Leave placeholder `development-docs/design.json` untouched until the design-contract app generates it.
- Before opening a pull request, ask whether `package.json` should receive a patch, minor, or major version bump.

### Important Commands

```bash
npm install   # install test dependencies
npm test      # smoke tests: required file presence and link resolution
```

### Important Paths

| Path | Purpose |
|---|---|
| `skills/spec-driven-development/SKILL.md` | Portable development-workflow skill |
| `skills/spec-driven-docs-setup/SKILL.md` | Portable docs-setup skill |
| `development-docs/` | Template documents — contain intentional placeholders |
| `development-docs/design.json` | Placeholder for generated styling contract |
| `development-docs/research/` | Active curated research |
| `development-docs/architecture-plans/` | Feature-specific structural plans and archives |
| `current-checklist/currentChecklist.md` | Current sprint or working-period checklist |
| `audits/` and `human-qa/` | Automated and human QA records with archives |
| `features.md` and `newFeatures.md` | Capability inventory and historical feature intake |
| `guides/ai-guide.md` | Full AI agent reference |
| `guides/human-guide.md` | Full human setup guide |

### Known Gotchas

- The `development-docs/` files are intentional templates — placeholder text must not be replaced with invented content.
- Changing a skill requires checking the corresponding guide, and vice versa.
- `npm test` checks file presence and link resolution; run it after moving or renaming files.

---

## Final Principle  
**Status: Usually keep**

Copilot should help produce changes that are useful, safe, documented, and consistent with the repo’s identity, architecture, and current version direction.
