# AGENTS.md — General Agent Instructions

> **Canonical AI-agent instruction source**
>
> This is the primary instruction document for AI agents, coding assistants, automation tools, and human-assisted development agents working in this repository.
>
> Tool-specific files such as `CLAUDE.md` and `.github/copilot-instructions.md` should defer to this file unless they explicitly describe tool-specific behavior. Those files must reference the Instruction Hierarchy in Section 1 instead of redefining it.

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
3. `development-docs/design.json` for UI and styling work, when it contains a generated design contract
4. `development-docs/developmentManifesto.md`
5. `development-docs/architecture.md`
6. Relevant plans in `development-docs/architecture-plans/` for structural decisions, when present
7. `development-docs/productRoadmap.md`
8. `AGENTS.md`
9. Tool-specific files such as `CLAUDE.md` or `.github/copilot-instructions.md`
10. Existing code, tests, and documentation patterns

If these sources conflict, do not silently choose one. Identify the conflict, make the smallest safe decision available, and document the issue clearly.

---

## 2. Required Documentation Access  
**Status: Usually keep**

At minimum:

- Read `development-docs/coreIdentity.md` before making code, architecture, product, UX, workflow, or documentation changes.
- Consult `development-docs/developmentManifesto.md` when changing development behavior, quality standards, AI behavior, testing expectations, automation, or contributor workflow.
- Consult `development-docs/architecture.md` before changing project structure, module boundaries, data flow, storage, persistence, build/runtime behavior, external integrations, or generated artifact formats.
- Consult `development-docs/design.json` before UI or styling work when it contains a generated design contract. The placeholder file is not a design contract and must not be filled in by agents.
- Check `development-docs/architecture-plans/` before structural decisions. If a relevant plan exists, follow it; if no plan exists and the decision needs more guidance or choices, pause and ask before creating one.
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
| UI or styling work | `development-docs/design.json` when generated, plus relevant identity and architecture context |
| Structural decision needing feature-specific guidance | Relevant `development-docs/architecture-plans/` plan, or ask before creating one |
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
| `development-docs/design.json` | **Visual contract:** Follow generated styling and design rules for UI work. The placeholder is not authoritative. |
| `development-docs/architecture-plans/` | **Decision guidance:** Consult existing feature-specific structural plans; archive plans after implementation and testing. |
| `development-docs/productRoadmap.md` | **Version direction:** Understand the current version focus and planned future versions without treating the roadmap as a task tracker. |
| `features.md` | **Capability inventory:** Maintain a granular checklist of capabilities believed to be implemented, whether tested or not. |
| `newFeatures.md` | **Historical intake:** Preserve feature ideas that may later move into the roadmap or current checklist. |
| `current-checklist/currentChecklist.md` | **Working context:** Organize the current sprint or working period; it is not a scope gate. |
| `README.md` | **Public entry point:** Keep setup, usage, features, and contributor-facing information accurate. |
| `CHANGELOG.md` | **Project memory:** Record meaningful changes, incomplete work, and continuity across development sessions. |
| `AGENTS.md` | **General agent rules:** Follow shared operating instructions for all agents. |
| `CLAUDE.md` | **Claude overlay:** Follow Claude-specific expectations after applying `AGENTS.md`. |
| `.github/copilot-instructions.md` | **GitHub Copilot overlay:** Follow Copilot-specific expectations after applying `AGENTS.md`. |

---

## 5. Project Summary  

Spec-Driven-Docs is a documentation-first governance framework and template repository for AI-assisted and human-led software projects.

It exists to give AI coding agents accurate, structured, hierarchical context about any project — replacing inference with explicit documents that define what the project is, how it should be built, and where it is going.

The project should help maintainers, developers, and AI agents by providing ready-to-use document templates and portable skills, especially when AI coding assistants are active contributors to a repo.

Important project context:

- The documents in `development-docs/` are intentionally templates containing placeholder text — they are the product this repo distributes, not completed governance documents for this repo itself.
- This repo is documentation-only: no application runtime, build artifact, or user-facing product.
- The skills in `skills/` are portable and self-contained — they work when copied to any repo independently of the rest of this repo.
- `guides/ai-guide.md` and `guides/human-guide.md` are the full reference companions to the two skills.

Agents should keep the project aligned with `development-docs/coreIdentity.md`.

---

## 6. Non-Negotiable Project Values  

Agents must preserve these values:

- **Template accuracy:** documents in `development-docs/` must remain useful templates — placeholder sections are intentional and must not be replaced with invented content.
- **Skill portability:** the two skills in `skills/` must remain self-contained and work when copied to any repo without this repo's supporting files.
- **Document consistency:** when a skill or guide changes, all referencing files must be updated in the same change. Skills and guides are pairs; keep them in sync.
- **No runtime dependencies:** do not add build steps, application infrastructure, or runtime configuration to this repo.
- **Honest uncertainty:** never fill a template placeholder with invented content — use an explanatory comment to mark what is unknown.

If a requested change conflicts with these values, identify the conflict before implementing.

- **Capability traceability:** keep `features.md` current when a capability is added, removed, or materially changed; do not claim testing merely because a capability is listed.
- **Generated design authority:** treat `development-docs/design.json` as agent-readable styling authority only after the design-contract app has generated it.

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

### Version and Pull Request Rules

`package.json` is the authoritative version source for this repository. Before opening a pull request, ask the maintainer whether the change should bump the version. If a bump is approved, ask whether it should be patch, minor, or major before changing the version. Do not change the version or open the pull request until that decision is clear. Keep `package-lock.json` synchronized when its root package metadata mirrors the version.

---

## 10. Changelog Rules
**Status: Usually keep**

Every meaningful development session must update `CHANGELOG.md` (exact uppercase filename).

If `CHANGELOG.md` does not exist, create it.

The changelog must be iterative and append-only.

Never delete previous entries or rewrite history to hide incomplete work.

### Standardized Agent Identity Format

Use this heading format for all contributors and models:

```markdown
## YYYY-MM-DD — Agent: <Tool Name> (<Model Name>)
```

Examples:
- `Agent: OpenAI Codex (GPT-5.3-Codex)`
- `Agent: Claude Code (Claude)`
- `Agent: GitHub Copilot (Copilot)`

Use this body format unless the repository already has a clear changelog convention:

```markdown
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

If everything requested was completed, write:

```markdown
### Not completed
- None.
```

Record incomplete, blocked, skipped, or unverified work honestly.

## 11. README Rules  
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

### Skill Usage

When working in this repository:

- **Before reading the development documents, invoke the `spec-driven-development` skill.** For Claude Code: run `/spec-driven-development` at the start of the session. For other agents: read `skills/spec-driven-development/SKILL.md` before consulting the governance documents.
- When asked to set up Spec-Driven Docs in another repository: invoke the `spec-driven-docs-setup` skill (`/spec-driven-docs-setup` in Claude Code, or read `skills/spec-driven-docs-setup/SKILL.md`). The setup skill includes steps to copy and install both skills in the target repo — complete those steps.

### Template Rules

- Status labels (`**Status: Required**`, `**Status: Customize**`, etc.) in the template files are part of the template format — do not remove or alter them.
- Placeholder text in brackets (`[Project Name]`, `[Rule 1]`, etc.) is intentional template content. Never replace it with invented content in the source template files.
- When editing a template, preserve the "How to Use This Template" section at the top — new adopters rely on it.

### Skill and Guide Sync

- `skills/spec-driven-development/SKILL.md` corresponds to `guides/ai-guide.md`. Changes to one must be reflected in the other.
- `skills/spec-driven-docs-setup/SKILL.md` corresponds to `guides/human-guide.md`. Changes to one must be reflected in the other.

### Operational Documentation Rules

- `features.md` is a simple, granular inventory of capabilities believed to be implemented. Agents should update it automatically when feature coverage changes; a listed feature does not mean it has passed QA.
- `newFeatures.md` is historical intake. Keep entries after they are promoted into the roadmap or current checklist.
- `current-checklist/currentChecklist.md` is an organizational aid for the current sprint or working period. It does not limit work and should not be treated as a source of product scope.
- `audits/` contains automated audits; `human-qa/` contains human-run QA. Once the useful information has been fully processed, the source report may be moved into its matching `archives/` folder.
- `development-docs/research/` contains curated, active research and is not automatically archived.
- `development-docs/architecture-plans/` contains feature-specific structural plans. Agents must ask before creating a new plan; a fully implemented and tested plan may be moved into `archives/`.
- These records are intentionally freeform and may use different file formats. Do not impose a universal metadata schema unless the maintainer asks for one.

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
- [ ] `features.md` was updated when feature coverage changed.
- [ ] If opening a pull request, the maintainer was asked whether `package.json` should receive a patch, minor, or major version bump.
- [ ] Any incomplete, blocked, or intentionally skipped work was documented.
- [ ] Definition of Done from `development-docs/developmentManifesto.md` was satisfied or exceptions were documented.
- [ ] `CHANGELOG.md` includes `Handover` notes when useful for the next agent.

---

## 18. Final Response Expectations  
**Status: Usually keep**

When reporting completion, summarize what changed, which files changed, whether `README.md` and `CHANGELOG.md` were updated, whether `architecture.md` was updated if relevant, which `development-docs/` files were consulted, what validation was run, what could not be completed, and any useful next step.

Do not hide limitations. Do not claim validation was performed if it was not.

---

## 19. Custom Repo Instructions  

### Important Commands

```bash
npm install     # install test dependencies
npm test        # smoke tests: required files present, markdown links resolve
```

### Important Paths

| Path | Purpose |
|---|---|
| `skills/spec-driven-development/SKILL.md` | Portable skill for development work in any repo using Spec-Driven Docs |
| `skills/spec-driven-docs-setup/SKILL.md` | Portable skill for setting up Spec-Driven Docs in a new or existing repo |
| `skills/README.md` | Installation instructions for each skill per agent tool |
| `development-docs/` | Template documents — intentionally contain placeholders |
| `development-docs/design.json` | Placeholder for the app-generated styling contract; do not invent content |
| `development-docs/research/` | Active curated research for features and processes |
| `development-docs/architecture-plans/` | Feature-specific structural plans and their `archives/` folder |
| `current-checklist/currentChecklist.md` | Current sprint or working-period organizational checklist |
| `audits/` | Automated audit reports and processed-report archives |
| `human-qa/` | Human-run QA reports and processed-report archives |
| `features.md` | Granular checklist of capabilities believed to be implemented |
| `newFeatures.md` | Historical intake list for possible roadmap or checklist promotion |
| `guides/ai-guide.md` | Full AI agent reference (corresponds to `spec-driven-development` skill) |
| `guides/human-guide.md` | Full human setup guide (corresponds to `spec-driven-docs-setup` skill) |

### Known Gotchas

- The `development-docs/` files are intentionally filled with placeholders — agents must not replace them with invented content.
- Editing SKILL.md files requires corresponding updates to the guides, and vice versa. Always check both when changing either.
- `npm test` checks required file presence and link resolution; run it after moving or renaming any file.
- `AGENTS.md`, `CLAUDE.md`, and `.github/copilot-instructions.md` in this repo are both templates (meant to be copied) and live governance documents — they contain "How to Use This Template" guidance alongside real operating instructions.

### Additional Gotchas

- `development-docs/design.json` is intentionally only a placeholder until a design-contract app generates it.
- `features.md` is an implementation inventory, not a test report; list capabilities that are believed to exist even when QA is incomplete.
- Archive folders preserve processed source material; research remains active unless the maintainer establishes a separate archive policy.

### Maintainer Preferences

- Keep the `spec-driven-development` and `spec-driven-docs-setup` skills in sync with `guides/ai-guide.md` and `guides/human-guide.md` respectively.
- When adding a new feature to the doc system, update both the skill and the guide for that feature in the same commit.

---

## Final Principle  
**Status: Usually keep**

Leave the repository better than you found it: aligned with project identity, safe to run, honest about uncertainty, documented where needed, consistent with the current architecture, and compatible with the current version direction.
