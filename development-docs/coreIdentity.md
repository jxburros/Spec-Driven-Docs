# [Project Name] — Core Identity

> **For AI Agents (OpenAI Codex, Anthropic Claude Code, GitHub Copilot, and other coding agents):**
>
> Read this file first before making changes to the codebase.
>
> This document defines the project’s identity, purpose, principles, boundaries, and decision-making frame. When implementation details are unclear, preserve the identity described here and consult the related development documents before making architectural, product, UX, or workflow decisions.
>
> Do not treat this file as a feature backlog. Treat it as the project’s north star.

---

## How to Use This Template

This template is intentionally adaptable.

A `coreIdentity.md` file may be short if a short document better serves the repo. The goal is not to fill every section. The goal is to give human contributors and AI agents enough context to understand what the project is, why it exists, what it must preserve, and what it must not become.

Sections are labeled as:

- **Required** — should appear in every `coreIdentity.md`.
- **Recommended** — useful for most projects, especially AI-agent-assisted repos.
- **Optional** — include only when the project needs that level of detail.

A small or early-stage repo may only need the required sections plus a brief anti-goals section. A mature repo, AI-heavy repo, privacy-sensitive app, or complex product may benefit from the full structure.

When in doubt, prefer a shorter document that agents will actually read over a long document filled with generic language.

---

## 1. Project Identity  
**Status: Required**

**[Project Name]** is a [type of project / application / system] designed to [primary purpose].

It exists to help [target users] [solve core problem / achieve core outcome] without [common pain, anti-pattern, or limitation].

This project is not merely [generic category]. It is a **[distinctive identity phrase]** that [explains what makes it different].

### Identity Statement  
**Status: Recommended**

> **"[One-sentence project worldview, metaphor, or guiding belief.]"**

Examples:

> "Relationships are living organisms, not static data."

> "The value of a development session lies in the insight gained, not the files saved."

> "Each repository owns its own definition of quality."

---

## 2. Core Purpose  
**Status: Required**

The purpose of this project is to [plain-language purpose].

It should help users answer or accomplish questions like:

- [Question or outcome 1]
- [Question or outcome 2]
- [Question or outcome 3]
- [Question or outcome 4]
- [Question or outcome 5]

The system should help [target users] by [primary value], especially when [important context or constraint].

---

## 3. Central Philosophy  
**Status: Required**

[Project Name] is built around the belief that [central product philosophy].

This means:

- [Philosophical implication 1]
- [Philosophical implication 2]
- [Philosophical implication 3]
- [Philosophical implication 4]

The project should prioritize [priority] over [thing to avoid].

When tradeoffs arise, favor [preferred direction] unless it clearly violates a hard constraint.

---

## 4. Identity Pillars / Core Principles  
**Status: Required for most repos; may be shortened for simple repos**

Use this section to define the ideas that should shape major features, UX decisions, technical direction, and AI-agent contributions.

Each pillar should ideally include:

- **The principle**
- **The mechanism**
- **The purpose**

For smaller repos, this section can be a short bullet list instead of full subsections.

---

### 1. [Principle Name]

**The Principle:**  
[What the project believes or values.]

**The Mechanism:**  
[How the app, architecture, workflow, or interface expresses this principle.]

**The Purpose:**  
[Why this matters for users, maintainers, or the project identity.]

---

### 2. [Principle Name]

**The Principle:**  
[What the project believes or values.]

**The Mechanism:**  
[How the app, architecture, workflow, or interface expresses this principle.]

**The Purpose:**  
[Why this matters.]

---

## 5. Target Users and Use Cases  
**Status: Recommended**

[Project Name] is designed for [primary audience].

It may also serve [secondary audiences], but those uses should not override the needs of the primary audience.

### Primary Users

#### [User Type 1]

These users need [need / motivation].

They use the project to:

- [Use case 1]
- [Use case 2]
- [Use case 3]

#### [User Type 2]

These users need [need / motivation].

They use the project to:

- [Use case 1]
- [Use case 2]
- [Use case 3]

### Secondary Users  
**Status: Optional**

#### [User Type 3]

These users may use the project to:

- [Use case 1]
- [Use case 2]

However, the project should not become [undesired product direction] just to serve this audience.

---

## 6. Core Experience  
**Status: Recommended**

The ideal user experience should feel like:

> **"[Short statement describing what the user should feel, know, or be able to say after using the project.]"**

The user should experience the project as:

- [Feeling / quality 1]
- [Feeling / quality 2]
- [Feeling / quality 3]
- [Feeling / quality 4]

The project should avoid making the user feel:

- [Negative feeling 1]
- [Negative feeling 2]
- [Negative feeling 3]

---

## 7. Product and Design Ethos  
**Status: Optional**

The project’s product and design direction should be guided by [design philosophy / metaphor / aesthetic].

### Visual and Interaction Style

The interface should feel:

- [Style trait 1]
- [Style trait 2]
- [Style trait 3]

The interface should avoid:

- [Avoided style trait 1]
- [Avoided style trait 2]
- [Avoided style trait 3]

### UX Priorities

Prioritize:

1. [UX priority 1]
2. [UX priority 2]
3. [UX priority 3]
4. [UX priority 4]

Do not prioritize visual novelty over clarity, trust, or the project’s core purpose.

---

## 8. AI Role and Boundaries  
**Status: Required for AI-agent-assisted repos; otherwise Recommended**

AI is [optional / required / assistive / consultative / local-first / BYOK / unavailable / limited] in this project.

The intended role of AI is to:

- [AI responsibility 1]
- [AI responsibility 2]
- [AI responsibility 3]

AI should not:

- [AI boundary 1]
- [AI boundary 2]
- [AI boundary 3]
- [AI boundary 4]

When AI features are unavailable, the project should [expected fallback behavior].

### AI-Agent Development Guidance  
**Status: Required for AI-agent-assisted repos**

When an AI coding agent works on this repo, it should:

- Preserve the project identity described in this document.
- Check proposed changes against the anti-goals and hard constraints.
- Prefer small, explainable changes over broad rewrites.
- Avoid introducing dependencies, services, or workflows that contradict the project’s philosophy.
- Update related documentation when behavior, setup, architecture, or user-facing features change.
- Log meaningful changes in `CHANGELOG.md`.

---

## 9. Data, Privacy, and Ownership Stance  
**Status: Recommended for user-data projects; Optional otherwise**

The project’s stance on data is:

> **[Short data/privacy/ownership principle.]**

Examples:

> "User data belongs to the user."

> "Privacy is a technical default, not just a promise."

> "Local-first operation is a non-negotiable standard."

The project should:

- [Data practice 1]
- [Data practice 2]
- [Data practice 3]

The project should not:

- [Forbidden data practice 1]
- [Forbidden data practice 2]
- [Forbidden data practice 3]

If sync, cloud storage, analytics, AI providers, telemetry, accounts, or external services are added, they must respect the following rules:

- [Rule 1]
- [Rule 2]
- [Rule 3]

---

## 10. What This Project Is  
**Status: Recommended**

This project is:

- A [identity / system type].
- A [core capability].
- A [workflow or experience].
- A [supporting system].
- A [tool for target audience].
- A [statement of intended scope].

---

## 11. What This Project Is Not  
**Status: Required**

This project is not:

- A replacement for [thing].
- A general-purpose [tool category].
- A fully autonomous [role].
- A system that should [undesired behavior].
- A place for [undesired pattern].
- A one-size-fits-all [category].

---

## 12. Hard Constraints / Never List  
**Status: Required if the repo has non-negotiables; Recommended otherwise**

To preserve the project’s identity, the following constraints are non-negotiable:

- **No [constraint name]:** [Explanation.]
- **No [constraint name]:** [Explanation.]
- **No [constraint name]:** [Explanation.]
- **No [constraint name]:** [Explanation.]
- **No [constraint name]:** [Explanation.]

These constraints should only change through an explicit, intentional project-level decision. They should not be bypassed as part of routine feature work.

---

## 13. Domain Model / Core Concepts  
**Status: Optional**

Use this section only if the project has important internal concepts that agents must understand before making changes.

The following concepts are central to the project:

### [Concept 1]

[Definition.]

This matters because [reason].

### [Concept 2]

[Definition.]

This matters because [reason.]

Examples of domain concepts:

- Relationship lifecycle states
- QA levels
- Task scoring models
- Narrative record types
- Workspace/session states
- Sync modes
- Permission boundaries
- User roles
- Local-first storage layers

---

## 14. Success Criteria  
**Status: Optional**

The project is succeeding when:

- [Success signal 1]
- [Success signal 2]
- [Success signal 3]
- [Success signal 4]

The project is drifting when:

- [Drift signal 1]
- [Drift signal 2]
- [Drift signal 3]
- [Drift signal 4]

---

## 15. Decision Filter for Future Changes  
**Status: Recommended; Required for AI-agent-assisted repos**

Before adding a feature, changing architecture, altering UX, or introducing a new dependency, ask:

1. **Does this reinforce the core purpose?**  
   If not, why should it belong?

2. **Does this preserve the project identity?**  
   A useful feature may still be wrong if it changes what the project is.

3. **Does this respect the anti-goals and hard constraints?**  
   Never bypass constraints casually.

4. **Does this make the project easier or harder to understand?**  
   Prefer clarity over cleverness.

5. **Does this serve the primary users?**  
   Secondary use cases should not distort the product.

6. **Does this introduce avoidable operational, privacy, or maintenance burden?**  
   Prefer sustainable complexity.

7. **Would this still make sense if AI were unavailable?**  
   If the project treats AI as optional, the core experience must survive without it.

---

## 16. Related Documents  
**Status: Recommended; Required if the repo uses the full starting-docs system**

This document defines the project identity. Use the other starting documents for more specific guidance:

- `development-docs/architecture.md` — technical structure, system boundaries, major components, and architectural decisions.
- `development-docs/productRoadmap.md` — planned features, priorities, milestones, and future direction.
- `development-docs/developmentManifesto.md` — development values, coding expectations, collaboration style, and contribution philosophy.
- `.github/copilot-instructions.md` — GitHub Copilot-specific repository instructions.
- `CLAUDE.md` — Claude-specific agent instructions.
- `AGENTS.md` — general AI-agent operating instructions.
- `CHANGELOG.md` — chronological record of meaningful changes.
- `README.md` — public-facing project overview, setup, usage, and contribution entry point.

When documents conflict, treat this file as the identity source, then resolve implementation details through the more specific document.
