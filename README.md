# Spec-Driven-Docs

A repository and explanation of a spec-driven development system for AI-assisted and human-led software projects.

## Setup

This repository is documentation-first and has no required build tooling.

1. Clone the repo.
2. Open the root docs and read in this order:
   - `AGENTS.md`
   - `development-docs/coreIdentity.md`
   - `development-docs/developmentManifesto.md`
   - `development-docs/architecture.md`
   - `development-docs/productRoadmap.md`

## Usage

Use this repo as a baseline template for spec-driven development governance:

- Start from `development-docs/coreIdentity.md` to define project identity.
- Use `development-docs/developmentManifesto.md` to define quality, safety, and Definition of Done.
- Use `development-docs/architecture.md` as architecture source-of-truth.
- Use `development-docs/productRoadmap.md` for version-level direction.
- Use `CHANGELOG.md` for append-only change history and handoff notes.

## Configuration

There is no runtime configuration. Configuration in this repository is policy-based and document-based:

- **Instruction precedence:** Defined in `AGENTS.md` Section 1.
- **Canonical Definition of Done:** `development-docs/developmentManifesto.md` Section 7.
- **Update ownership rules:** Each target doc owns its own "when to update" section.
- **Agent identity format:** `CHANGELOG.md` entries should use `Agent: <Tool Name> (<Model Name>)`.

## Contributing

When making meaningful changes:

1. Follow instruction hierarchy in `AGENTS.md`.
2. Make the smallest safe change.
3. Validate changes where possible.
4. Append a `CHANGELOG.md` entry with completed, incomplete, and handover notes.
