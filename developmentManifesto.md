# [Project Name] — Development Manifesto

> **For AI Agents (OpenAI Codex, Anthropic Claude Code, GitHub Copilot, and other coding agents):**
>
> Read `development-docs/coreIdentity.md` first.
>
> This manifesto governs how development work should be performed after the project identity is understood. It defines the repo’s development values, change discipline, documentation expectations, architectural care, and definition of done.
>
> Treat this file as the working doctrine for the repository.
>
> Treat `development-docs/architecture.md` as a living source of truth. Update it carefully when actual architecture changes, and never allow it to drift away from the codebase.

---

## How to Use This Template  
**Status: Required**

This template is intentionally adaptable.

A `developmentManifesto.md` file may be short if a short document better serves the repo. The goal is not to fill every section. The goal is to define how human contributors and AI agents should make safe, consistent, identity-preserving changes.

Sections are labeled as:

- **Required** — should appear in every `developmentManifesto.md`.
- **Recommended** — useful for most projects, especially AI-agent-assisted repos.
- **Optional** — include only when the project needs that level of detail.
- **Required for AI-agent-assisted repos** — required when AI agents are expected to contribute code, docs, architecture, or maintenance work.

A small repo may only need the required sections. A complex automation system, AI-heavy repo, privacy-sensitive app, cross-repo tool, or multi-agent project may benefit from the full structure.

When in doubt, prefer a manifesto that agents can actually follow over a long document filled with generic ideals.

---

## 1. Purpose of This Manifesto  
**Status: Required**

This document defines how **[Project Name]** should be developed.

This repo is [brief description of the repo from a development perspective].

The purpose of this manifesto is to ensure that all development work is:

- [Value 1, e.g. safe]
- [Value 2, e.g. maintainable]
- [Value 3, e.g. evidence-driven]
- [Value 4, e.g. modular]
- [Value 5, e.g. respectful of user control]
- [Value 6, e.g. aligned with project identity]

This document should be used by:

- Human maintainers
- Human contributors
- AI coding agents
- Reviewers
- Future versions of the project

---

## 2. Development Standard  
**Status: Required**

The development standard for this project is simple:

> **Build the system so it is [core quality 1], [core quality 2], [core quality 3], and [core quality 4].**

Examples:

> **Build the system so it is safe to run unattended, easy to customize per repo, evidence-driven, and useful even when AI is unavailable.**

> **Build the system so it is local-first, forgiving to users, transparent in scoring, and modular enough to evolve without breaking trust.**

All development decisions should support this standard.

When tradeoffs arise, prefer:

- [Preferred tradeoff 1] over [thing to avoid]
- [Preferred tradeoff 2] over [thing to avoid]
- [Preferred tradeoff 3] over [thing to avoid]
- [Preferred tradeoff 4] over [thing to avoid]

---

## 3. Core Development Principles  
**Status: Required**

These principles apply to all development work in this repo.

For each principle, describe:

- **The rule**
- **Why it matters**
- **How contributors and agents should apply it**

---

### 1. [Principle Name]

**The Rule:**  
[Clear development rule.]

**Why It Matters:**  
[Reason this protects the product, users, maintainers, architecture, or future development.]

**How to Apply It:**  

- [Actionable practice 1]
- [Actionable practice 2]
- [Actionable practice 3]

---

### 2. [Principle Name]

**The Rule:**  
[Clear development rule.]

**Why It Matters:**  
[Reason.]

**How to Apply It:**  

- [Actionable practice 1]
- [Actionable practice 2]
- [Actionable practice 3]

---

### 3. [Principle Name]

**The Rule:**  
[Clear development rule.]

**Why It Matters:**  
[Reason.]

**How to Apply It:**  

- [Actionable practice 1]
- [Actionable practice 2]
- [Actionable practice 3]

---

## 4. Project-Specific Development Doctrine  
**Status: Recommended**

Use this section for development rules that are specific to this project’s domain.

Do not fill this section with generic advice. This section should explain what development means **for this repo specifically**.

Examples of project-specific doctrine:

- A QA automation repo may require evidence before interpretation.
- A local-first app may require offline functionality before cloud enhancements.
- A scoring app may require scoring transparency before gamification.
- A world-building app may require linked records before isolated notes.
- A sandbox app may require session safety before convenience features.

---

### [Doctrine Area 1]

[Explain the domain-specific development rule.]

Development work should:

- [Expected behavior 1]
- [Expected behavior 2]
- [Expected behavior 3]

Development work should not:

- [Avoided behavior 1]
- [Avoided behavior 2]
- [Avoided behavior 3]

---

### [Doctrine Area 2]

[Explain the domain-specific development rule.]

Development work should:

- [Expected behavior 1]
- [Expected behavior 2]
- [Expected behavior 3]

Development work should not:

- [Avoided behavior 1]
- [Avoided behavior 2]
- [Avoided behavior 3]

---

## 5. AI Role in Development  
**Status: Required for AI-agent-assisted repos; Recommended otherwise**

AI agents may help with:

- Code implementation
- Refactoring
- Tests
- Documentation
- Debugging
- Architecture analysis
- Changelog maintenance
- Issue investigation
- Review preparation

AI agents must not be treated as the final authority.

The source of truth is:

1. `development-docs/coreIdentity.md`
2. `development-docs/architecture.md`
3. `development-docs/productRoadmap.md`
4. `development-docs/developmentManifesto.md`
5. Existing code behavior
6. Tests, logs, reports, and other direct evidence
7. Human maintainer decisions

When these sources conflict, agents should not silently choose one. They should identify the conflict and make the smallest safe change consistent with the maintainer’s request.

AI-assisted development should be:

- Evidence-based
- Small in scope unless explicitly asked otherwise
- Reversible when possible
- Documented
- Aligned with the project identity
- Honest about uncertainty

AI-assisted development should not:

- Invent project direction
- Rewrite unrelated systems
- Ignore `architecture.md`
- Hide uncertainty
- Introduce undocumented architectural changes
- Treat generated code as correct without checking it
- Make destructive changes without explicit instruction

---

## 6. Change Discipline  
**Status: Required for AI-agent-assisted repos; Recommended otherwise**

Changes should be scoped, intentional, and explainable.

Prefer:

- Small, focused changes
- Clear naming
- Minimal unrelated refactoring
- Incremental improvements
- Explicit behavior changes
- Reversible decisions
- Documentation updates when behavior changes

Avoid:

- Broad rewrites without a clear reason
- Silent behavior changes
- Opportunistic refactors unrelated to the task
- Hidden coupling
- Clever abstractions that obscure intent
- Adding dependencies before checking whether existing tools are sufficient
- Changing product behavior without checking `coreIdentity.md` and `productRoadmap.md`

When a requested change conflicts with the project identity, manifesto, roadmap, or architecture, document the conflict rather than forcing the change through.

---

## 7. Architecture Source of Truth  
**Status: Required**

`development-docs/architecture.md` is a living source of truth for the codebase.

It should describe the real architecture of the project, including major systems, boundaries, data flow, dependencies, storage decisions, integration points, and important architectural tradeoffs.

Agents and contributors must treat `architecture.md` carefully.

### When to Update `architecture.md`

Update `architecture.md` when a change:

- Adds, removes, renames, or reorganizes a major subsystem
- Changes data flow between important components
- Changes storage, persistence, sync, or caching behavior
- Adds or removes an external service, API, provider, or integration
- Changes authentication, authorization, secrets, privacy, or security boundaries
- Changes build, deployment, runtime, or execution architecture
- Introduces a new architectural pattern or replaces an old one
- Changes where important business logic lives
- Changes repo structure in a way future agents must understand
- Makes the current architecture document materially inaccurate

### When Not to Update `architecture.md`

Do not update `architecture.md` for every small code change.

An architecture update is usually unnecessary when a change:

- Fixes a typo
- Adjusts styling without changing structure
- Updates copy
- Fixes a localized bug without changing design
- Adds a small helper function
- Refactors inside a module without changing module boundaries
- Updates tests without changing system behavior
- Makes a minor dependency version update without architectural impact

### How to Update `architecture.md`

When updating `architecture.md`:

- Be precise.
- Describe the architecture that now exists, not speculative future architecture.
- Keep it aligned with the current code.
- Note important tradeoffs or constraints.
- Preserve existing accurate information.
- Remove or revise stale information.
- Avoid turning it into a changelog.
- Avoid turning it into a roadmap.
- Avoid documenting every implementation detail.
- Prefer clear system explanations over exhaustive file listings.

If a change affects architecture but the agent is unsure how to update `architecture.md`, it should add a small, conservative note or flag the uncertainty rather than inventing details.

---

## 8. Safety, Privacy, and Non-Destructive Behavior  
**Status: Recommended; Required for user-data, automation, cross-repo, deployment, or security-sensitive repos**

Development work must protect users, maintainers, and connected systems.

The project should be safe to run in its intended context.

By default, development work must not:

- Delete user data
- Leak secrets
- Log sensitive values
- Send unnecessary private data to external services
- Mutate external systems without explicit permission
- Deploy automatically without clear intent
- Hide failures to make workflows appear successful
- Bypass project-defined safety rules

Any destructive or mutating capability must be:

- Explicit
- Opt-in
- Documented
- Reviewable
- Reversible where possible
- Separated from normal safe workflows

If the project handles secrets, tokens, private repos, user data, AI prompts, logs, files, or external integrations, development must treat those boundaries as first-class concerns.

---

## 9. Architecture and Modularity Expectations  
**Status: Recommended**

The architecture should make the project easier to understand, test, and evolve.

Prefer:

- Clear module boundaries
- Small reusable helpers
- Single-purpose components
- Explicit data flow
- Isolated provider-specific logic
- Testable business logic
- Interfaces or adapters around external services when useful
- Boring architecture that future maintainers can reason about

Avoid:

- Large unstructured files
- Hidden global state
- Circular dependencies
- Provider-specific assumptions spread through unrelated code
- Business logic buried inside UI-only components
- Copy-pasted logic across systems
- Over-abstracting before patterns are real
- Mixing unrelated responsibilities just because it is convenient

Architecture should support the product identity, not compete with it.

---

## 10. Testing, Validation, and Evidence Expectations  
**Status: Recommended; Required for QA, automation, safety-sensitive, or AI-assisted repos**

Development should be evidence-driven.

Use appropriate validation for the type of change:

- Tests
- Type checks
- Linting
- Build checks
- Manual verification
- Browser checks
- Logs
- Screenshots
- Reports
- Existing issue context
- Reproduction steps
- Before/after behavior comparison

Do not claim a change is complete unless it has been checked in a way appropriate to the risk.

When validation is incomplete, document what was and was not verified.

Preferred language:

- "Verified with [command/check]."
- "Not verified because [reason]."
- "This appears to fix [issue] based on [evidence]."
- "This may need follow-up because [uncertainty]."

Avoid language like:

- "Fixed everything" without evidence.
- "This cannot break anything."
- "The app works" when only one narrow path was checked.
- "The issue is definitely solved" when validation was partial.

---

## 11. Documentation Requirements  
**Status: Required**

Documentation is part of the product.

Development work should keep the starting docs aligned with the codebase.

Update documentation when a change affects:

- Setup
- Usage
- Features
- Configuration
- Commands
- Architecture
- Data flow
- External services
- AI behavior
- Security or privacy behavior
- Known limitations
- Development workflow
- User-facing behavior

### Documentation Sources of Truth

Use these documents intentionally:

- `development-docs/coreIdentity.md` — project identity, principles, boundaries, anti-goals, and decision filter.
- `development-docs/architecture.md` — current technical architecture and system structure.
- `development-docs/productRoadmap.md` — planned direction, milestones, and scope.
- `development-docs/developmentManifesto.md` — development doctrine and contribution behavior.
- `.github/copilot-instructions.md` — GitHub Copilot-specific instructions.
- `CLAUDE.md` — Claude-specific instructions.
- `AGENTS.md` — general agent instructions.
- `CHANGELOG.md` — meaningful chronological changes.
- `README.md` — public-facing overview, setup, usage, and contribution entry point.

### Changelog Updates

Update `CHANGELOG.md` when work meaningfully changes:

- User-facing behavior
- Developer-facing behavior
- Architecture
- Configuration
- Dependencies
- Documentation structure
- AI behavior
- Safety, privacy, or data handling
- Known limitations
- Bug fixes
- Feature status

When AI agents make changes, changelog entries should identify the agent when appropriate.

Example:

```md
- [OpenAI Codex] Updated the QA report generator to classify skipped checks separately from failed checks.
```

### README Updates

Update `README.md` when a change affects:

- What the project does
- How to install it
- How to run it
- How to configure it
- Which features exist
- Which limitations users should know
- Which commands users or contributors should use

### Architecture Updates

Update `development-docs/architecture.md` carefully when architecture changes.

Do not let architecture documentation drift. Do not update it casually. It should remain a reliable source of truth for future humans and agents.

---

## 12. Dependency and Configuration Philosophy  
**Status: Recommended**

Dependencies and configuration should be boring, understandable, and justified.

Prefer dependencies that are:

- Necessary
- Maintained
- Well-understood
- Compatible with the project’s runtime and deployment model
- Worth their long-term maintenance cost

Avoid dependencies that:

- Solve a tiny problem with a large package
- Add hidden network behavior
- Conflict with privacy or local-first goals
- Lock the project into one provider unnecessarily
- Increase bundle size or runtime complexity without clear value
- Duplicate functionality already available in the project

Configuration should be:

- Easy to read
- Easy to copy
- Explicit
- Hard to misuse
- Validated where appropriate
- Clear when invalid

Avoid clever configuration that only the original author understands.

---

## 13. Error Handling and Failure Honesty  
**Status: Recommended**

Failures should be visible, understandable, and honest.

The system should distinguish between:

- Success
- Failure
- Warning
- Skipped behavior
- Blocked behavior
- Timeout
- Partial completion
- Unsupported operation
- Missing configuration
- Inconclusive result

Do not hide failures behind vague success messages.

Partial results are acceptable when clearly marked.

Error messages should help a maintainer or user understand:

- What happened
- What was expected
- What likely caused the problem
- What can be tried next
- Whether anything was changed

---

## 14. Agent Operating Rules  
**Status: Required for AI-agent-assisted repos**

When working in this repo, AI agents must:

1. Read `development-docs/coreIdentity.md` before making changes.
2. Follow this manifesto.
3. Check `development-docs/productRoadmap.md` before implementing large or directional features.
4. Check `development-docs/architecture.md` before changing structure, dependencies, data flow, external integrations, storage, or major module boundaries.
5. Carefully update `development-docs/architecture.md` when actual architecture changes.
6. Make the smallest safe change that satisfies the request unless explicitly asked for broader work.
7. Avoid unrelated refactors.
8. Preserve existing behavior unless the task requires changing it.
9. Validate changes using appropriate tests, checks, builds, or manual verification.
10. Update `README.md` when setup, usage, features, or public-facing behavior changes.
11. Update `CHANGELOG.md` for meaningful changes.
12. Note incomplete work, blocked work, uncertainty, or skipped validation honestly.
13. Stop or ask for human guidance when a requested change conflicts with the project identity, safety rules, roadmap, or architecture.

Agents should not:

- Invent requirements.
- Ignore documented constraints.
- Rewrite architecture casually.
- Change architecture without updating `architecture.md` when needed.
- Update `architecture.md` with speculative future plans instead of current reality.
- Treat tests as unnecessary unless the repo has no relevant validation path.
- Delete or replace large sections of documentation without preserving accurate guidance.
- Hide uncertainty or unsupported assumptions.

---

## 15. Agent-Specific Instructions  
**Status: Optional**

Use this section when different coding agents need different rules.

If the repo does not need per-agent differences, omit this section and use only the general agent operating rules above.

---

### OpenAI Codex

1. Read `development-docs/coreIdentity.md` before starting any task.
2. Reference `development-docs/productRoadmap.md` to verify scope when implementing new features.
3. Reference `development-docs/architecture.md` before changing structure, dependencies, storage, or system boundaries.
4. Carefully update `development-docs/architecture.md` when actual architecture changes.
5. Prefer small, focused changes.
6. Add an entry to `CHANGELOG.md` under the current date, prefixed with `[OpenAI Codex]`, when appropriate.
7. Update `README.md` if changes affect setup, usage, features, or public behavior.
8. If a requested change conflicts with the Core Identity, architecture, or manifesto, stop and document the conflict instead of forcing the change.

---

### Anthropic Claude Code

1. Read `development-docs/coreIdentity.md` before starting any task.
2. Reference `development-docs/productRoadmap.md` and other domain docs as needed.
3. Reference `development-docs/architecture.md` before making architectural changes.
4. Carefully update `development-docs/architecture.md` when actual architecture changes.
5. Prefer making the smallest possible change that satisfies the requirement.
6. Add an entry to `CHANGELOG.md` under the current date, prefixed with `[Anthropic Claude Code]`, when appropriate.
7. Update `README.md` if changes affect setup, usage, features, or public behavior.
8. If a requested change conflicts with the Core Identity, architecture, or manifesto, document the conflict and explain why the change was not made.

---

### GitHub Copilot

1. Read `development-docs/coreIdentity.md` before starting any task.
2. Reference `development-docs/productRoadmap.md` for scope.
3. Reference `development-docs/architecture.md` before changing structure, dependencies, storage, or major system boundaries.
4. Carefully update `development-docs/architecture.md` when actual architecture changes.
5. Make surgical, precise changes. Do not refactor unrelated code.
6. Add an entry to `CHANGELOG.md` under the current date, prefixed with `[GitHub Copilot]`, when appropriate.
7. Update `README.md` if changes affect setup, usage, features, or public behavior.
8. If a requested change is incomplete, blocked, or conflicts with documented project direction, record what was not done and why.

---

## 16. Definition of Done  
**Status: Required**

A change is not complete just because the code was edited.

A change is complete when:

- The implementation satisfies the requested behavior.
- The change respects `development-docs/coreIdentity.md`.
- The change respects this manifesto.
- The change does not contradict `development-docs/productRoadmap.md` unless the roadmap is intentionally being updated.
- The change preserves or carefully updates `development-docs/architecture.md` when architecture changes.
- Existing behavior is preserved unless intentionally changed.
- Relevant tests, checks, builds, or manual validation have been run when possible.
- Validation gaps are documented honestly.
- Error handling is understandable.
- Documentation is updated where needed.
- `CHANGELOG.md` is updated for meaningful changes.
- `README.md` is updated when setup, usage, features, or public-facing behavior changes.
- Security, privacy, and data-handling expectations are preserved.
- Future maintainers can understand what changed and why.

---

## 17. Final Principle  
**Status: Recommended**

[Project Name] should be developed so that future maintainers can trust it.

Every change should make the project:

- Easier to understand
- Safer to run
- More aligned with its identity
- More useful to its intended users
- Easier for humans and AI agents to maintain responsibly

Build toward that.

---

## Minimum Useful Version

A short `developmentManifesto.md` can be complete with only:

1. Purpose of This Manifesto
2. Development Standard
3. Core Development Principles
4. AI Role in Development
5. Change Discipline
6. Architecture Source of Truth
7. Documentation Requirements
8. Agent Operating Rules
9. Definition of Done

That minimum version keeps the manifesto short while preserving the important rule: **`architecture.md` should stay accurate, current, and authoritative when architecture changes.**
