# [Project Name] — Architecture

> **For AI Agents (OpenAI Codex, Anthropic Claude Code, GitHub Copilot, and other coding agents):**
>
> Read this document before changing project structure, module boundaries, data flow, storage, persistence, external integrations, AI-provider behavior, build/runtime behavior, or generated artifact formats.
>
> This document is a living source of truth for the current architecture of the codebase.
>
> Update it carefully when actual architecture changes.
>
> Do not use this document as a roadmap, changelog, scratchpad, or speculative design document. It should describe the architecture that exists now.

Use `development-docs/architecture-plans/` for feature-specific structural plans that need unresolved choices or extra guidance. Move a plan into its `archives/` folder only after the feature is fully implemented and tested; do not use this document to hold speculative plans.

---

## How to Use This Template  
**Status: Required**

This template is intentionally adaptable.

An `architecture.md` file may be short if the project architecture is simple. The goal is not to fill every section. The goal is to give humans and AI agents enough accurate context to understand how the system is currently structured, where responsibilities live, how data moves, and what architectural boundaries must be preserved.

Sections are labeled as:

- **Required** — should appear in every `architecture.md`.
- **Recommended** — useful for most non-trivial repos.
- **Optional** — include only when the project needs that level of detail.
- **Required when applicable** — required when the repo has that architectural concern.

A small repo may only need the required sections. A complex app, automation system, AI-assisted repo, CLI, service, cross-repo tool, or stateful product may benefit from the full structure.

When in doubt, prefer an architecture document that is accurate and maintainable over one that is exhaustive but quickly becomes stale.

---

## 1. Architecture Summary  
**Status: Required**

[Project Name] is a [type of system/application/repo] that [briefly explain what the system does from an architectural perspective].

At a high level, the system:

1. [Major responsibility or flow step 1]
2. [Major responsibility or flow step 2]
3. [Major responsibility or flow step 3]
4. [Major responsibility or flow step 4]
5. [Major responsibility or flow step 5]

The architecture is designed around:

- [Architectural priority 1]
- [Architectural priority 2]
- [Architectural priority 3]
- [Architectural priority 4]

This document describes the current structure of the system and should be updated when that structure changes.

---

## 2. System Responsibilities  
**Status: Required**

This repo is responsible for:

- [Responsibility 1]
- [Responsibility 2]
- [Responsibility 3]
- [Responsibility 4]
- [Responsibility 5]

This repo is not responsible for:

- [Non-responsibility 1]
- [Non-responsibility 2]
- [Non-responsibility 3]
- [Non-responsibility 4]

Use this section to clarify what belongs inside this repo versus what belongs in external systems, target repos, user configuration, deployment environments, generated artifacts, or third-party services.

---

## 3. System Boundaries  
**Status: Required**

This section defines the major boundaries of the system.

### This Repo Owns

- [Owned system/component/data 1]
- [Owned system/component/data 2]
- [Owned system/component/data 3]
- [Owned system/component/data 4]

### External Systems Own

- [External system responsibility 1]
- [External system responsibility 2]
- [External system responsibility 3]

### User Configuration Owns

- [Configurable behavior 1]
- [Configurable behavior 2]
- [Configurable behavior 3]

### Generated Artifacts Own

- [Generated output 1]
- [Generated output 2]
- [Generated output 3]

### Human Maintainers Own

- [Human decision 1]
- [Human decision 2]
- [Human decision 3]

Architectural changes should preserve these boundaries unless there is an intentional project-level decision to revise them.

---

## 4. Directory and File Map  
**Status: Recommended; Required for non-trivial repos**

Use this section to explain the important files and directories in the repo.

Do not list every file unless the repo is small. Focus on files and directories future maintainers or AI agents need to understand before making changes.

```text
/
├── [directory]/
│   ├── [file]              — [Purpose]
│   ├── [file]              — [Purpose]
│   └── [subdirectory]/
│       └── [file]          — [Purpose]
├── [directory]/
│   ├── [file]              — [Purpose]
│   └── [file]              — [Purpose]
├── development-docs/
│   ├── coreIdentity.md     — Project identity, principles, boundaries, and anti-goals
│   ├── architecture.md     — Current architecture and system structure
│   ├── productRoadmap.md   — Planned direction, priorities, and milestones
│   └── developmentManifesto.md — Development doctrine and contribution behavior
├── .github/
│   └── copilot-instructions.md — GitHub Copilot-specific instructions
├── CLAUDE.md               — Claude-specific agent instructions
├── AGENTS.md               — General AI-agent instructions
├── CHANGELOG.md            — Meaningful chronological change history
└── README.md               — Public-facing project overview, setup, and usage
```

### Directory Map Guidelines

The directory map should explain:

- Where major systems live
- Which files are entry points
- Which files contain shared utilities
- Which files contain configuration
- Which files are generated
- Which files are documentation sources of truth
- Which files agents should be careful editing

Avoid turning this section into a full file inventory unless that is genuinely useful.

---

## 5. Major Subsystems  
**Status: Required**

This section explains the main architectural parts of the system.

Each subsystem should include:

- What it does
- Where it lives
- What it depends on
- What depends on it
- Important boundaries or constraints

---

### [Subsystem 1 Name]

**Location:**  
`[path/to/files/or/directory]`

**Purpose:**  
[Explain what this subsystem does.]

**Responsibilities:**

- [Responsibility 1]
- [Responsibility 2]
- [Responsibility 3]

**Depends On:**

- [Dependency 1]
- [Dependency 2]

**Used By:**

- [Consumer 1]
- [Consumer 2]

**Important Boundaries:**

- [Boundary 1]
- [Boundary 2]
- [Boundary 3]

---

### [Subsystem 2 Name]

**Location:**  
`[path/to/files/or/directory]`

**Purpose:**  
[Explain what this subsystem does.]

**Responsibilities:**

- [Responsibility 1]
- [Responsibility 2]
- [Responsibility 3]

**Depends On:**

- [Dependency 1]
- [Dependency 2]

**Used By:**

- [Consumer 1]
- [Consumer 2]

**Important Boundaries:**

- [Boundary 1]
- [Boundary 2]
- [Boundary 3]

---

### [Subsystem 3 Name]

**Location:**  
`[path/to/files/or/directory]`

**Purpose:**  
[Explain what this subsystem does.]

**Responsibilities:**

- [Responsibility 1]
- [Responsibility 2]
- [Responsibility 3]

**Depends On:**

- [Dependency 1]
- [Dependency 2]

**Used By:**

- [Consumer 1]
- [Consumer 2]

**Important Boundaries:**

- [Boundary 1]
- [Boundary 2]
- [Boundary 3]

---

## 6. Execution Flow / Runtime Flow  
**Status: Recommended; Required for automation, CLI, server, workflow, pipeline, or multi-step systems**

Use this section to explain what happens when the system runs.

For apps, describe user/runtime flow.  
For CLIs, describe command flow.  
For automation repos, describe orchestration flow.  
For services, describe request flow.  
For libraries, describe call flow.

```text
[entry point]
  ├── [step 1]
  ├── [step 2]
  │     ├── [substep]
  │     └── [substep]
  ├── [step 3]
  └── [final output/state]
```

### Flow Notes

- [Important flow note 1]
- [Important flow note 2]
- [Important flow note 3]

### Failure Points

Important failure points include:

- [Failure point 1]
- [Failure point 2]
- [Failure point 3]

The system should handle these failures by:

- [Expected behavior 1]
- [Expected behavior 2]
- [Expected behavior 3]

---

## 7. Data Flow  
**Status: Recommended; Required when data moves between modules, services, storage, APIs, or generated artifacts**

Use this section to explain how important data moves through the system.

```text
[input/config/user action/external event]
  → [parser/loader/entry point]
  → [processing subsystem]
  → [state/storage/output/API/generated artifact]
  → [consumer/user/external system]
```

### Primary Data Inputs

| Input | Source | Consumed By | Purpose |
|---|---|---|---|
| `[input name]` | `[source]` | `[module/subsystem]` | `[purpose]` |
| `[input name]` | `[source]` | `[module/subsystem]` | `[purpose]` |
| `[input name]` | `[source]` | `[module/subsystem]` | `[purpose]` |

### Primary Data Outputs

| Output | Created By | Consumed By | Purpose |
|---|---|---|---|
| `[output name]` | `[module/subsystem]` | `[consumer]` | `[purpose]` |
| `[output name]` | `[module/subsystem]` | `[consumer]` | `[purpose]` |
| `[output name]` | `[module/subsystem]` | `[consumer]` | `[purpose]` |

### Data Flow Rules

- [Rule 1]
- [Rule 2]
- [Rule 3]

---

## 8. State, Storage, and Persistence  
**Status: Recommended; Required for stateful apps, caches, local-first apps, databases, generated state, or automation state**

Use this section to explain what state exists, where it lives, and who owns it.

| State / Storage | Location | Owner | Persistence Model | Purpose |
|---|---|---|---|---|
| `[state name]` | `[path/database/browser storage/etc.]` | `[system/user/external service]` | `[temporary/local/persistent/remote/generated]` | `[purpose]` |
| `[state name]` | `[path/database/browser storage/etc.]` | `[system/user/external service]` | `[temporary/local/persistent/remote/generated]` | `[purpose]` |
| `[state name]` | `[path/database/browser storage/etc.]` | `[system/user/external service]` | `[temporary/local/persistent/remote/generated]` | `[purpose]` |

### Persistence Rules

- [Persistence rule 1]
- [Persistence rule 2]
- [Persistence rule 3]

### State Reset / Migration Behavior

[Explain what happens when state is reset, migrated, invalid, missing, stale, or incompatible.]

---

## 9. Configuration Model  
**Status: Recommended; Required when behavior is config-driven**

Use this section to explain how configuration works.

### Configuration Sources

| Config Source | Location | Purpose | Required? |
|---|---|---|---|
| `[config name]` | `[path/env/external source]` | `[purpose]` | `[yes/no]` |
| `[config name]` | `[path/env/external source]` | `[purpose]` | `[yes/no]` |
| `[config name]` | `[path/env/external source]` | `[purpose]` | `[yes/no]` |

### Configuration Precedence

When multiple configuration sources apply, precedence is:

1. [Highest priority config source]
2. [Next priority config source]
3. [Default behavior]
4. [Fallback behavior]

### Configuration Validation

Configuration should be validated by:

- [Validation mechanism 1]
- [Validation mechanism 2]
- [Validation mechanism 3]

Invalid configuration should result in:

- [Expected error behavior]
- [Expected fallback behavior]
- [Expected reporting behavior]

---

## 10. External Services and Integrations  
**Status: Recommended; Required when the repo talks to APIs, AI providers, databases, auth providers, GitHub, cloud services, deployment systems, or third-party tools**

Use this section to document every external service or integration the system depends on.

| Service / Integration | Used By | Purpose | Required? | Failure Behavior |
|---|---|---|---|---|
| `[service]` | `[module/subsystem]` | `[purpose]` | `[yes/no]` | `[behavior if unavailable]` |
| `[service]` | `[module/subsystem]` | `[purpose]` | `[yes/no]` | `[behavior if unavailable]` |
| `[service]` | `[module/subsystem]` | `[purpose]` | `[yes/no]` | `[behavior if unavailable]` |

### Integration Rules

- [Rule 1]
- [Rule 2]
- [Rule 3]

### Isolation Boundaries

Provider-specific or service-specific logic should live in:

- `[path/module]`
- `[path/module]`

Provider-specific logic should not be spread through:

- `[area to avoid]`
- `[area to avoid]`

---

## 11. AI Architecture and Provider Boundaries  
**Status: Required for AI-assisted repos; Optional otherwise**

Use this section to explain how AI is used architecturally.

AI is used for:

- [AI use case 1]
- [AI use case 2]
- [AI use case 3]

AI is not used for:

- [AI boundary 1]
- [AI boundary 2]
- [AI boundary 3]

### AI Providers

| Provider | Used By | Purpose | Required? | Fallback |
|---|---|---|---|---|
| `[provider]` | `[module/subsystem]` | `[purpose]` | `[yes/no]` | `[fallback behavior]` |
| `[provider]` | `[module/subsystem]` | `[purpose]` | `[yes/no]` | `[fallback behavior]` |

### AI Input and Output Boundaries

AI may receive:

- [Allowed input 1]
- [Allowed input 2]
- [Allowed input 3]

AI must not receive:

- [Forbidden input 1]
- [Forbidden input 2]
- [Forbidden input 3]

AI may produce:

- [Allowed output 1]
- [Allowed output 2]
- [Allowed output 3]

AI must not be treated as authoritative for:

- [Non-authoritative area 1]
- [Non-authoritative area 2]
- [Non-authoritative area 3]

### Provider Flexibility

The architecture should preserve room for:

- [Provider option 1]
- [Provider option 2]
- [Provider option 3]
- No-AI mode, if applicable

Provider-specific code should be isolated so the project can evolve without rewriting unrelated systems.

---

## 12. Security, Privacy, and Secrets Boundaries  
**Status: Recommended; Required for user-data, private-repo, automation, API-token, auth, deployment, or AI-provider projects**

Use this section to explain security-sensitive architecture.

### Secrets and Sensitive Values

| Secret / Sensitive Value | Used By | Purpose | Storage Location | Notes |
|---|---|---|---|---|
| `[secret/env var/token]` | `[module/subsystem]` | `[purpose]` | `[env/secret manager/etc.]` | `[notes]` |
| `[secret/env var/token]` | `[module/subsystem]` | `[purpose]` | `[env/secret manager/etc.]` | `[notes]` |

### Security Boundaries

The system must protect:

- [Boundary 1]
- [Boundary 2]
- [Boundary 3]

The system must not:

- [Forbidden behavior 1]
- [Forbidden behavior 2]
- [Forbidden behavior 3]

### Logging and Artifact Safety

Logs, reports, prompts, generated artifacts, and error messages should not expose:

- [Sensitive value 1]
- [Sensitive value 2]
- [Sensitive value 3]

### Mutating Operations

Operations that modify external systems, user data, generated state, repos, cloud resources, deployments, or third-party services must be:

- Explicit
- Documented
- Reviewable
- Scoped
- Safe by default
- Reversible where possible

---

## 13. Extension Points and Override Mechanisms  
**Status: Recommended; Required for plugin systems, config-driven systems, repo-defined behavior, custom workflows, or user-extensible apps**

Use this section to explain how the system can be extended or overridden.

| Extension Point | Location | Who Uses It | Purpose |
|---|---|---|---|
| `[extension point]` | `[path/config/API]` | `[user/dev/system]` | `[purpose]` |
| `[extension point]` | `[path/config/API]` | `[user/dev/system]` | `[purpose]` |
| `[extension point]` | `[path/config/API]` | `[user/dev/system]` | `[purpose]` |

### Override Rules

- [Rule 1]
- [Rule 2]
- [Rule 3]

### Default Behavior vs. Custom Behavior

Default behavior:

- [Default 1]
- [Default 2]
- [Default 3]

Custom behavior may override:

- [Override 1]
- [Override 2]
- [Override 3]

Custom behavior must not override:

- [Non-overridable rule 1]
- [Non-overridable rule 2]
- [Non-overridable rule 3]

---

## 14. Generated Artifacts and Outputs  
**Status: Recommended; Required when the repo generates files, reports, builds, issues, logs, state, exports, or deployable artifacts**

Use this section to explain generated outputs.

| Artifact / Output | Created By | Location | Purpose | Safe to Delete? |
|---|---|---|---|---|
| `[artifact]` | `[module/subsystem]` | `[path]` | `[purpose]` | `[yes/no/depends]` |
| `[artifact]` | `[module/subsystem]` | `[path]` | `[purpose]` | `[yes/no/depends]` |
| `[artifact]` | `[module/subsystem]` | `[path]` | `[purpose]` | `[yes/no/depends]` |

### Artifact Rules

- [Rule 1]
- [Rule 2]
- [Rule 3]

Generated artifacts should be:

- Predictable
- Readable where possible
- Named consistently
- Safe to inspect
- Excluded from source control when appropriate
- Preserved when needed for debugging or auditability

---

## 15. Build, Runtime, and Deployment Architecture  
**Status: Recommended; Required for deployable apps, CLIs, services, packages, desktop apps, mobile apps, or automation systems**

Use this section to explain how the project is built, run, and deployed.

### Local Development

```bash
[command]
```

Local development expects:

- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

### Build

```bash
[command]
```

Build output:

- [Output 1]
- [Output 2]

### Test / Validation

```bash
[command]
```

Validation includes:

- [Check 1]
- [Check 2]
- [Check 3]

### Runtime

The runtime environment is:

- [Runtime detail 1]
- [Runtime detail 2]
- [Runtime detail 3]

### Deployment

Deployment is handled by:

- [Deployment system/process]
- [Environment]
- [Trigger]
- [Manual/automatic behavior]

### Runtime Boundaries

- [Boundary 1]
- [Boundary 2]
- [Boundary 3]

---

## 16. Error Handling and Failure Modes  
**Status: Recommended**

Use this section to explain important failure modes and how the system handles them.

| Failure Mode | Where It Can Happen | Expected Behavior | User/Maintainer Visibility |
|---|---|---|---|
| `[failure mode]` | `[module/flow]` | `[behavior]` | `[how surfaced]` |
| `[failure mode]` | `[module/flow]` | `[behavior]` | `[how surfaced]` |
| `[failure mode]` | `[module/flow]` | `[behavior]` | `[how surfaced]` |

### Failure Handling Rules

- [Rule 1]
- [Rule 2]
- [Rule 3]

The system should distinguish between:

- Success
- Failure
- Warning
- Skipped behavior
- Blocked behavior
- Timeout
- Partial completion
- Invalid configuration
- Missing dependency
- Unsupported operation
- Inconclusive result

---

## 17. Architectural Invariants  
**Status: Required**

Architectural invariants are rules that should not be casually broken.

The following must remain true unless intentionally changed through a project-level architectural decision:

- [Invariant 1]
- [Invariant 2]
- [Invariant 3]
- [Invariant 4]
- [Invariant 5]

Examples:

- Core behavior must remain usable without AI.
- User data must remain local unless the user explicitly enables sync.
- Reports must remain understandable without AI interpretation.
- Provider-specific code must stay isolated.
- Generated artifacts must not contain secrets.
- External writes must be explicit and reviewable.
- Configuration overrides must not bypass safety rules.
- The public API must remain backward-compatible unless a breaking change is documented.

If a requested change violates an invariant, agents should stop and identify the conflict before proceeding.

---

## 18. Known Tradeoffs and Constraints  
**Status: Recommended**

Use this section to document important architectural tradeoffs.

| Tradeoff / Constraint | Current Decision | Reason | Revisit When |
|---|---|---|---|
| `[tradeoff]` | `[decision]` | `[reason]` | `[condition]` |
| `[tradeoff]` | `[decision]` | `[reason]` | `[condition]` |
| `[tradeoff]` | `[decision]` | `[reason]` | `[condition]` |

### Current Constraints

- [Constraint 1]
- [Constraint 2]
- [Constraint 3]

### Intentional Non-Goals

- [Non-goal 1]
- [Non-goal 2]
- [Non-goal 3]

---

## 19. Current Configuration Snapshot  
**Status: Optional**

Use this section only when a configuration summary helps agents understand the system quickly.

This section is a snapshot, not the primary source of truth.

The authoritative source is:

```text
[path/to/config/file]
```

Update this section when configuration meaningfully changes, but do not duplicate large config files unless the summary adds clarity.

| Configured Item | Enabled? | Mode / Type | Notes |
|---|---:|---|---|
| `[item]` | `[yes/no]` | `[mode/type]` | `[notes]` |
| `[item]` | `[yes/no]` | `[mode/type]` | `[notes]` |
| `[item]` | `[yes/no]` | `[mode/type]` | `[notes]` |

---

## 20. Architecture Reference / Appendices  
**Status: Optional**

Use appendices for detailed reference material that is useful but too specific for the main architectural overview.

Good appendix material includes:

- Config schemas
- Result state tables
- Event names
- Label conventions
- Generated JSON structures
- Command mappings
- Error code meanings
- Tool catalogs
- Provider capability tables
- Supported file formats
- Migration notes
- Data model details

---

### Appendix A — [Reference Topic]

| Field / Value | Meaning |
|---|---|
| `[field/value]` | `[meaning]` |
| `[field/value]` | `[meaning]` |
| `[field/value]` | `[meaning]` |

---

### Appendix B — [Reference Topic]

```json
{
  "example": "structure"
}
```

---

### Appendix C — [Reference Topic]

[Reference details.]

---

## 21. When to Update This Document  
**Status: Required**

Update `development-docs/architecture.md` when a change:

- Adds, removes, renames, or reorganizes a major subsystem
- Changes data flow between important components
- Changes state, storage, persistence, sync, or caching behavior
- Adds or removes an external service, API, provider, database, or integration
- Changes authentication, authorization, secrets, privacy, or security boundaries
- Changes build, deployment, runtime, packaging, or execution architecture
- Introduces a new architectural pattern or replaces an old one
- Changes where important business logic lives
- Changes repo structure in a way future agents must understand
- Changes generated artifact formats, report formats, export formats, or state formats
- Changes configuration schema, config precedence, or required environment variables
- Changes public APIs, CLI commands, routes, workflows, or integration contracts
- Makes the current architecture document materially inaccurate

### Usually Do Not Update This Document For

An architecture update is usually unnecessary when a change:

- Fixes a typo
- Updates copy
- Adjusts styling without changing structure
- Fixes a localized bug without changing design
- Adds a small helper function inside an existing module
- Refactors inside a module without changing module boundaries
- Updates tests without changing system behavior
- Makes a minor dependency version update without architectural impact
- Updates `README.md`, `CHANGELOG.md`, or roadmap content without architecture impact

### How to Update This Document

When updating this file:

- Describe the architecture that now exists.
- Do not describe speculative future architecture unless clearly labeled as a constraint or known planned transition.
- Keep the document aligned with the current codebase.
- Preserve accurate existing information.
- Remove or revise stale information.
- Keep examples current.
- Avoid turning this file into a changelog.
- Avoid turning this file into a roadmap.
- Avoid documenting every implementation detail.
- Prefer clear system explanations over exhaustive file listings.
- Make conservative updates when unsure.

If an agent changes architecture but is unsure how to update this file, it should document the uncertainty clearly rather than inventing details.

---

## Minimum Useful Version

A short `architecture.md` can be complete with only:

1. Architecture Summary
2. System Responsibilities
3. System Boundaries
4. Directory and File Map
5. Major Subsystems
6. Data Flow
7. External Services and Integrations
8. Architectural Invariants
9. When to Update This Document

If those sections accurately describe the current system and help future agents avoid unsafe architectural changes, the document is doing its job.
