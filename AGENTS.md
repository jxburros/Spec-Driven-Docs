# AGENTS.md — General Agent Instructions

> **Canonical AI-agent instruction source**
>
> This is the primary instruction document for AI agents, coding assistants, automation tools, and human-assisted development agents working in this repository.
>
> Tool-specific files such as `CLAUDE.md` and `.github/copilot-instructions.md` should defer to this file unless they explicitly describe tool-specific behavior.

---

## How to Use This Template  
**Status: Keep and customize**

This file is a hybrid static instruction document and repo-specific template.

- **Usually keep** sections should be copied forward with minimal changes.
- **Customize** sections should be adapted for this repository.
- **Optional** sections should be included only if relevant.
- **Required for AI-agent-assisted repos** sections should remain when agents are expected to make code, doc, test, or workflow changes.

---

## 1. Instruction Hierarchy  
**Status: Usually keep**

When working in this repository, agents must follow this instruction hierarchy:

1. User request
2. `development-docs/coreIdentity.md`
3. `development-docs/developmentManifesto.md`
4. `development-docs/architecture.md`
5. `development-docs/productRoadmap.md`
6. `AGENTS.md`
7. Tool-specific files such as `CLAUDE.md` or `.github/copilot-instructions.md`
8. Existing code, tests, and documentation patterns

If these sources conflict, do not silently choose one. Identify the conflict, make the smallest safe decision available, and document the issue clearly.

---

## 2. Required Documentation Access  
**Status: Usually keep**

At minimum:

- Read `development-docs/coreIdentity.md` before making code, architecture, product, UX, workflow, or documentation changes.
- Consult `development-docs/developmentManifesto.md` when changing development behavior, quality standards, AI behavior, testing expectations, automation, or contributor workflow.
- Consult `development-docs/architecture.md` before changing project structure, module boundaries, data flow, storage, persistence, build/runtime behavior, external integrations, or generated artifact formats.
- Consult `development-docs/productRoadmap.md` before implementing new product capabilities, changing version scope, or making directional product decisions.

If a referenced document is missing, proceed with the available context, but document the missing file in `CHANGELOG.md`.

---

## 3. Document Decision Tree  
**Status: Usually keep**

| Task Type | Required Context |
|---|---|
| Any meaningful change | `development-docs/coreIdentity.md` |
| New feature, tool, or user-facing capability | `development-docs/productRoadmap.md` |
| Refactor, file navigation, system restructuring, or dependency changes | `development-docs/architecture.md` |
| AI behavior, automation, testing, QA, safety, or development-process changes | `development-docs/developmentManifesto.md` |
| Setup, usage, configuration, scripts, commands, or public behavior | `README.md` |
| Meaningful completed work, incomplete work, or blocked work | `CHANGELOG.md` |
| Agent-specific behavior | `AGENTS.md`, then tool-specific files |

---

## 4. Document Mission Table  
**Status: Usually keep**

| Document | Agent Mission |
|---|---|
| `development-docs/coreIdentity.md` | **Guardrails:** Understand what the project is, what it protects, who it serves, and what it must not become. |
| `development-docs/developmentManifesto.md` | **Standards:** Understand how the project should be developed, validated, documented, and maintained. |
| `development-docs/architecture.md` | **Navigation and truth:** Understand the current system structure, data flow, module boundaries, and integration points. |
| `development-docs/productRoadmap.md` | **Version direction:** Understand the current version focus and planned future versions without treating the roadmap as a task tracker. |
| `README.md` | **Public entry point:** Keep setup, usage, features, and contributor-facing information accurate. |
| `CHANGELOG.md` | **Project memory:** Record meaningful changes, incomplete work, and continuity across development sessions. |
| `AGENTS.md` | **General agent rules:** Follow shared operating instructions for all agents. |
| `CLAUDE.md` | **Claude overlay:** Follow Claude-specific expectations after applying `AGENTS.md`. |
| `.github/copilot-instructions.md` | **GitHub Copilot overlay:** Follow Copilot-specific expectations after applying `AGENTS.md`. |

---

## 5. Project Summary  
**Status: Customize**

[Project Name] is a [brief description of the repository].

It exists to [primary purpose].

The project should help [target users / maintainers / developers] by [core value].

Important project context:

- [Context item 1]
- [Context item 2]
- [Context item 3]
- [Context item 4]

Agents should keep the project aligned with `development-docs/coreIdentity.md`.

---

## 6. Non-Negotiable Project Values  
**Status: Customize**

Agents must preserve these values:

- [Value 1]
- [Value 2]
- [Value 3]
- [Value 4]
- [Value 5]

Examples:

- Core functionality should remain usable without mandatory AI.
- User data should remain local-first unless the user explicitly enables sync.
- Generated reports should remain understandable without AI interpretation.
- AI should assist rather than become the authority.
- Configuration should be explicit, readable, and backward-compatible where practical.
- Accessibility should remain a first-class product quality.
- Automation should remain safe to run unattended.
- Human review should remain part of important decision points.

If a requested change conflicts with these values, identify the conflict before implementing.

---

## 7. Required Change Workflow  
**Status: Usually keep**

For every meaningful task:

1. Align with context. Read the required starting docs for the task type.
2. Identify the governing principles. Note which project values or manifesto rules apply.
3. Inspect relevant files. Do not make blind changes.
4. Make the smallest safe change. Preserve existing behavior unless the request requires changing it.
5. Avoid unrelated refactors. Do not expand scope without a clear reason.
6. Validate appropriately. Run relevant tests, checks, builds, or manual verification when possible.
7. Update documentation. Keep `README.md`, `architecture.md`, and other docs accurate when affected.
8. Update `CHANGELOG.md`. Record completed work, incomplete work, and important notes.
9. Report honestly. Do not claim completion for skipped, blocked, or unverified work.

When given multiple requested tasks:

- Attempt to complete as many as feasible in the current pass.
- Prefer completing the full requested scope when safe and reasonable.
- Do not stop after one task unless blocked.
- If one task is blocked, continue with other tasks that can be completed.
- Document incomplete or blocked items in `CHANGELOG.md`.

---

## 8. Architecture Source-of-Truth Rules  
**Status: Usually keep**

`development-docs/architecture.md` is a living source of truth for the current architecture.

Consult it before changing:

- Project structure
- Module boundaries
- Data flow
- Storage, persistence, sync, or caching behavior
- External services or integrations
- AI-provider architecture
- Security boundaries
- Build, runtime, deployment, packaging, or execution architecture
- Generated artifact formats
- Configuration schema or precedence
- Public APIs, commands, routes, workflows, or integration contracts

Update `architecture.md` carefully when actual architecture changes.

Do not update `architecture.md` for every small code edit. Do not turn it into a roadmap, changelog, or exhaustive file inventory.

---

## 9. Product Roadmap Rules  
**Status: Usually keep**

`development-docs/productRoadmap.md` is a version-oriented direction document.

It is not a sprint board, PR checklist, daily task tracker, changelog, or substitute for issue tracking.

Consult the roadmap when implementing a new feature, changing product scope, choosing between competing approaches, deciding whether a feature belongs in the current version, or considering future compatibility.

Do not update the roadmap for ordinary implementation progress.

Update `productRoadmap.md` only when version scope or product direction changes.

Use `CHANGELOG.md` for completed work. Use issue trackers for granular tasks. Use `architecture.md` for current system structure.

---

## 10. Changelog Rules  
**Status: Usually keep**

Every meaningful development session must update `CHANGELOG.md`.

If `CHANGELOG.md` does not exist, create it.

The changelog must be iterative and append-only.

Never delete previous entries or rewrite history to hide incomplete work.

Use this format unless the repository already has a clear changelog convention:

```markdown
## YYYY-MM-DD — Agent Name

### Changed
- ...

### Not completed
- ...

### Notes
- ...
```

If everything requested was completed, write:

```markdown
### Not completed
- None.
```

Record incomplete, blocked, skipped, or unverified work honestly.

---

## 11. README Rules  
**Status: Usually keep**

Update `README.md` when a change materially affects how the project is used, configured, understood, or operated.

Material changes include setup instructions, required dependencies, required secrets, workflow behavior, config schema, commands, scripts, feature availability, user-facing behavior, generated artifacts, AI behavior, external integrations, state handling, safety limitations, known limitations, and contributor workflow.

Do not update `README.md` for purely internal refactors unless they change how users, maintainers, contributors, or future agents interact with the project.

---

## 12. Testing and Verification  
**Status: Usually keep**

Run relevant validation after changes whenever possible.

Appropriate validation may include unit tests, integration tests, end-to-end tests, type checks, linting, build checks, script dry runs, config validation, manual UI verification, generated artifact inspection, and documentation review.

Do not claim that something was tested if it was not tested.

If validation cannot be run, document that honestly in `CHANGELOG.md` under `Not completed` or `Notes`.

---

## 13. Safety, Privacy, and Data Rules  
**Status: Customize; required for user-data, automation, AI, cross-repo, deployment, or private-repo projects**

Do not introduce default behavior that deletes user data, deletes repository files, pushes code changes to external repositories, modifies production systems, deploys automatically without explicit intent, runs destructive commands, hides failures, suppresses important logs, leaks secrets, sends unnecessary private data to external services, creates excessive duplicate issues, or treats AI guesses as verified facts.

Any destructive, mutating, external, or cross-repo behavior must be explicit, documented, opt-in, reviewable, scoped, safe by default, and reversible where possible.

Secrets must not appear in logs, reports, generated artifacts, AI prompts, issue bodies, error messages, changelog entries, or README examples.

---

## 14. AI Behavior Rules  
**Status: Customize; required for AI-assisted repos**

When working with AI-related code, prompts, model configuration, generated analysis, deduplication, recommendations, or agent workflows:

- Keep AI grounded in collected evidence.
- Make uncertainty explicit.
- Prevent invented facts.
- Prefer structured outputs when downstream code consumes AI results.
- Keep human-readable summaries clear.
- Keep AI optional when the project identity requires it.
- Preserve no-AI or report-only operation where practical.
- Keep provider-specific logic isolated where possible.
- Do not allow AI output to override human decisions without explicit design.
- Do not present AI guesses as verified test results.

---

## 15. Domain-Specific Rules  
**Status: Customize**

Use this section for rules that are specific to this repository’s domain.

### Custom Repo Rules

- [Repo-specific rule 1]
- [Repo-specific rule 2]
- [Repo-specific rule 3]
- [Repo-specific rule 4]

---

## 16. Code Style  
**Status: Usually keep and customize as needed**

Prefer clear maintainable code, small focused functions, explicit parameters, helpful error messages, defensive parsing, predictable paths, consistent generated output, backward-compatible changes where practical, comments for non-obvious logic, and existing project conventions.

Avoid large unrelated rewrites, silent failures, hidden magic, hardcoded assumptions that conflict with project direction, secret exposure, duplicated logic, brittle parsing, vague errors, mixing unrelated concerns, and over-abstracting before patterns are real.

---

## 17. Completion Checklist  
**Status: Usually keep**

Before finishing a task, confirm:

- [ ] `development-docs/coreIdentity.md` was considered.
- [ ] `development-docs/developmentManifesto.md` was consulted when relevant.
- [ ] `development-docs/architecture.md` was consulted when relevant.
- [ ] `development-docs/productRoadmap.md` was consulted when relevant.
- [ ] The requested change was implemented as directly and safely as possible.
- [ ] Existing behavior was preserved unless intentionally changed.
- [ ] Relevant validation was run, or skipped validation was documented.
- [ ] `CHANGELOG.md` was appended to or created.
- [ ] `README.md` was updated if user-facing behavior, setup, usage, commands, configuration, or workflow changed.
- [ ] `development-docs/architecture.md` was updated if architecture changed.
- [ ] `development-docs/productRoadmap.md` was updated only if version scope or product direction changed.
- [ ] Any incomplete, blocked, or intentionally skipped work was documented.

---

## 18. Final Response Expectations  
**Status: Usually keep**

When reporting completion, summarize what changed, which files changed, whether `README.md` and `CHANGELOG.md` were updated, whether `architecture.md` was updated if relevant, which `development-docs/` files were consulted, what validation was run, what could not be completed, and any useful next step.

Do not hide limitations. Do not claim validation was performed if it was not.

---

## 19. Custom Repo Instructions  
**Status: Customize**

### Important Commands

```bash
[install command]
[test command]
[build command]
[lint command]
[dev command]
```

### Important Paths

| Path | Purpose |
|---|---|
| `[path]` | `[purpose]` |
| `[path]` | `[purpose]` |
| `[path]` | `[purpose]` |

### Known Gotchas

- [Gotcha 1]
- [Gotcha 2]
- [Gotcha 3]

### Maintainer Preferences

- [Preference 1]
- [Preference 2]
- [Preference 3]

---

## Final Principle  
**Status: Usually keep**

Leave the repository better than you found it: aligned with project identity, safe to run, honest about uncertainty, documented where needed, consistent with the current architecture, and compatible with the current version direction.
