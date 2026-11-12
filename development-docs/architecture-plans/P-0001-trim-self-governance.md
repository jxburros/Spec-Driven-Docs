# P-0001 — Trim this repository's own copy of the system

- **Status:** Proposed
- **Date:** 2026-11-12
- **Approved by:** pending maintainer approval
- **Touches:** INV-1, INV-7 (test file lists only; no rule is broken)

## Why

The maintainer wants this repository to read as a template and instructions for people adding the system to their own repositories, not as a project focused on developing itself. The README, project page, identity, and manifesto now say so. What remains is structural: the repository root still carries a full live instance of every record type, most of them empty, and they outnumber the three folders adopters actually need.

## What changes

Remove this repository's own instances of the operational records. The templates for all of them stay in `templates/` and are unaffected.

- Delete from the root: `features.md`, `newFeatures.md`, `current-checklist/`, `audits/`, `human-qa/`, `development-docs/research/`, `development-docs/design.json`.
- Keep at the root: `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`, `CHANGELOG.md`, the four documents in `development-docs/`, `development-docs/decisions/`, `development-docs/architecture-plans/`, `.claude/`, `tests/`.
- Shorten `development-docs/productRoadmap.md` to current state, rejected directions, and open questions.

Resulting root: `README.md`, `templates/`, `skills/`, `guides/`, plus a small self-governance set.

## Document changes on completion

- `development-docs/architecture.md`: directory map and subsystem list.
- `AGENTS.md`: Important Paths table; drop the `features.md` rule from Repo Rules.
- `development-docs/developmentManifesto.md`: remove the `features.md` item from the Definition of Done and the operational-records paragraph.
- `tests/docs-smoke.test.mjs`: remove the deleted paths from the live-set test (the template-set test keeps them).
- `README.md`: no change expected.

## Open choices

1. **Delete or keep `features.md`.** Recommendation: delete. Its content duplicates the README's "What you get" and the invariant list in `architecture.md`.
2. **Keep the live `development-docs/` at all, or reduce self-governance to `AGENTS.md` alone.** Recommendation: keep the four documents. They are short, they are the worked example the README points to, and the `HC-n` / `INV-n` IDs the tests cite live there.
3. **Where the worked example lives.** Alternative: move the filled-in example to `examples/` and stop presenting the root as one. Recommendation: not now; agent tools only read `AGENTS.md` and overlays from the root, so the root copy would have to exist anyway.

## Done when

- The listed paths are gone from the root and present under `templates/`.
- `npm test` passes.
- A new adopter reading the root listing sees `README.md`, `templates/`, `skills/`, and `guides/` as the obvious entry points.
