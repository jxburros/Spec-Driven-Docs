# Spec-Driven-Docs

A repository and explanation of a spec-driven development system for AI-assisted and human-led software projects.

## Setup

This repository is documentation-first and has no required build tooling.

1. Clone the repo.
2. Open the root docs and read in this order:
   - `AGENTS.md`
   - `development-docs/coreIdentity.md`
   - `development-docs/design.json` for UI/styling work when it contains a generated contract
   - `development-docs/developmentManifesto.md`
   - `development-docs/architecture.md`
   - relevant plans in `development-docs/architecture-plans/` for structural decisions
   - `development-docs/productRoadmap.md`

## Usage

Use this repo as a baseline template for spec-driven development governance:

- Start from `development-docs/coreIdentity.md` to define project identity.
- Use `development-docs/developmentManifesto.md` to define quality, safety, and Definition of Done.
- Use `development-docs/architecture.md` as architecture source-of-truth.
- Use `development-docs/productRoadmap.md` for version-level direction.
- Use `development-docs/design.json` as the generated styling contract when it is populated; leave the placeholder untouched.
- Use `development-docs/architecture-plans/` for feature-specific structural plans, and ask before creating a new plan.
- Use `CHANGELOG.md` for append-only change history and handoff notes.

### Operational records

- `features.md` is a small, granular checklist of capabilities believed to be implemented, whether tested or not. Agents update it automatically when feature coverage changes.
- `newFeatures.md` is historical intake for ideas that may later be promoted into the roadmap or current checklist. Promoted entries remain in the file.
- `current-checklist/currentChecklist.md` organizes the current sprint or working period. It is not a scope gate.
- `audits/` holds automated audit reports and `human-qa/` holds human-run QA reports. Fully processed reports may move into their matching `archives/` folders.
- `development-docs/research/` holds active curated research and is not automatically archived.
- `development-docs/architecture-plans/archives/` holds plans after the feature is fully implemented and tested.

These operational records are intentionally freeform and may use different formats.

### Guides

- `guides/human-guide.md` — how maintainers set up and customize the docs.
- `guides/ai-guide.md` — how AI agents should read and use the docs.

### Skills for AI agents

The `skills/` directory contains two portable skills (Agent Skills `SKILL.md` format, usable by Claude Code and adaptable to any LLM tool):

- `skills/spec-driven-development/` — for doing development work in a repo that uses these docs (what to read per task, hierarchy, workflow, Definition of Done).
- `skills/spec-driven-docs-setup/` — for creating customized, complete versions of the docs for a repo from evidence in the repo, including which questions to ask the maintainer.

See `skills/README.md` for installation instructions per tool.

## Configuration

There is no runtime configuration. Configuration in this repository is policy-based and document-based:

- **Instruction precedence:** Defined in `AGENTS.md` Section 1.
- **Canonical Definition of Done:** `development-docs/developmentManifesto.md` Section 7.
- **Update ownership rules:** Each target doc owns its own "when to update" section.
- **Agent identity format:** `CHANGELOG.md` entries should use `Agent: <Tool Name> (<Model Name>)`.
- **Version source:** `package.json` is authoritative. Before opening a pull request, agents ask whether to make a patch, minor, or major version bump.

## Contributing

When making meaningful changes:

1. Follow instruction hierarchy in `AGENTS.md`.
2. Make the smallest safe change.
3. Validate changes where possible.
4. Append a `CHANGELOG.md` entry with completed, incomplete, and handover notes.
