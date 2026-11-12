# Spec-Driven-Docs — Core Identity

> Read this before any meaningful change. It describes fixed properties of the project, not aspirations.
>
> This is the live identity document for this repository. The blank template that adopters copy is `templates/development-docs/coreIdentity.md`.

---

## 1. Project Identity

Spec-Driven-Docs is a documentation-first governance framework and template repository for AI-assisted and human-led software projects.

### Identity Statement

It gives every agent and human who works in a repository the same explicit context and the same procedures, so that development moves in the intended direction and any deviation is an active, recorded decision rather than a passive workaround.

---

## 2. Core Purpose

AI coding agents fill gaps in their knowledge with plausible guesses. This project replaces those gaps with a small set of documents, each owning one question:

- What the project is and must never become (`coreIdentity.md`)
- How it is built and what "done" means (`developmentManifesto.md`)
- What the system looks like now (`architecture.md`)
- Where it is going and what is rejected (`productRoadmap.md`)
- Which rules have been deliberately overridden (`decisions/`)

---

## 3. Target Users

The primary audience is outside this repository:

- **Maintainers and team leads** adopting the system in a new or existing repository.
- **AI coding agents** (Claude Code, GitHub Copilot, Codex, and others) setting the system up in, or working in, a repository that uses it.
- **Human contributors** in those repositories.

Contributors to this repository itself are a secondary audience and should not drive the design.

---

## 4. AI Role and Boundaries

AI agents are expected contributors to this repository. They may edit documents, templates, skills, guides, tests, CI, and hooks within the rules below.

Agents must not:

- Approve their own deviation from a rule. Only the maintainer approves decision records and proposals.
- Fill a template placeholder or an unknown section with invented content.
- Choose a version bump. The maintainer decides.

---

## 5. What This Project Is

- A set of governance document templates, distributed in `templates/`.
- Two portable agent skills, distributed in `skills/`.
- Guides explaining the system to humans and to agents.
- A working example: this repository governs itself with the same system.

---

## 6. What This Project Is Not

- **Not an application, library, or CLI.** There is nothing to build, install, or deploy.
- **Not a project about developing itself.** Its purpose is to be added to other repositories. This repository's own governance exists only to keep the templates and skills correct and to serve as a worked example; it must stay small and must not crowd out adopter-facing material.
- **Not an issue tracker or sprint board.** Granular task tracking belongs in an issue tracker.
<!-- Further anti-goals: not yet defined. Maintainer to fill in. -->

---

## 7. Hard Constraints / Never List

Each constraint has a stable ID. Cite the ID in decision records, proposals, changelog entries, and tests.

- **HC-1 — Templates stay templates.** Files under `templates/` MUST keep their bracketed placeholders, status labels, and "How to Use This Template" sections. They MUST NOT be filled with content for any specific project, including this one.
- **HC-2 — Skills stay portable.** Each folder under `skills/` MUST work when copied alone into another repository. A skill MUST NOT depend on a file that exists only in this repository.
- **HC-3 — No application runtime.** The repository MUST NOT gain an application, a build step, or a third-party dependency. Executable code is limited to the zero-dependency test suite, CI workflows, and agent session hooks.
- **HC-4 — No invented content.** Unknown facts MUST be marked with an explanatory comment. They MUST NOT be replaced with plausible filler, in this repo's documents or in the guidance the skills give.
- **HC-5 — Skills and guides stay in sync.** A change to a skill MUST be mirrored in its paired guide in the same change, and the reverse.

ID rules: never renumber or reuse an ID. Retire a constraint by marking it `(retired YYYY-MM-DD, see D-NNNN)`.

A request that conflicts with a constraint is neither refused outright nor worked around. The agent stops, names the ID, and asks. If the maintainer approves, the deviation is recorded in `development-docs/decisions/` before implementation.

---

## 8. Core Concepts

- **Governance documents** — the four documents in `development-docs/` plus `AGENTS.md`.
- **Instruction hierarchy** — the precedence order among sources, defined once in `AGENTS.md`.
- **Hard Constraint (`HC-n`)** — a non-negotiable identity rule, defined here.
- **Architectural Invariant (`INV-n`)** — a structural rule that must stay true, defined in `architecture.md`.
- **Decision record (`D-NNNN`)** — a maintainer-approved deviation from a rule, in `development-docs/decisions/`.
- **Proposal (`P-NNNN`)** — a per-change plan drafted before a structural change or new capability, in `development-docs/architecture-plans/`, archived when implemented.
- **Overlay** — a tool-specific instruction file that defers to `AGENTS.md`.
- **Operational records** — the freeform records the templates provide to adopters: `features.md`, `newFeatures.md`, `current-checklist/`, `audits/`, `human-qa/`, `development-docs/research/`, `development-docs/design.json`. This repository does not keep its own.

---

## 9. Related Documents

- `development-docs/developmentManifesto.md` — standards and Definition of Done
- `development-docs/architecture.md` — current structure and invariants
- `development-docs/productRoadmap.md` — direction and rejected items
- `development-docs/decisions/` — recorded deviations from this document
- `AGENTS.md` — hierarchy, read-before table, stop-and-ask gates

---

## 10. When to Update This Document

Rarely. Update it only when the maintainer changes what the project is, who it serves, or a Hard Constraint. Do not update it for ordinary work.
