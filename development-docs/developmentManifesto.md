# Spec-Driven-Docs — Development Manifesto

> Read `development-docs/coreIdentity.md` first. This manifesto governs how work in this repository is performed and what "done" means.
>
> This is the live manifesto for this repository. The blank template that adopters copy is `templates/development-docs/developmentManifesto.md`.

---

## 1. Purpose

This repository's product is guidance that other agents and maintainers will act on. An error here is copied into every adopting repository, so accuracy and internal consistency matter more than speed or volume.

---

## 2. Core Development Principles

1. **Smallest safe change.** Do what was asked. No unrelated refactors or speculative additions.
2. **Evidence over invention.** Claims come from the repository or the maintainer. Unknowns are marked, not guessed.
3. **One owner per rule.** A rule is stated in one document. Other documents point to it. If you are about to write a rule a second time, link instead.
4. **Shorter and accurate beats longer and generic.** Agents read every line. Remove advice an agent would follow anyway.
5. **Honest reporting.** Never claim validation that did not run. Record incomplete and blocked work.
6. **Deviations are decisions.** A rule is either followed or overridden by an approved decision record. There is no third state.

---

## 3. Project-Specific Doctrine

### Templates

- Templates live only under `templates/`, laid out as they should land in a target repository.
- Preserve placeholders, status labels, and "How to Use This Template" sections (`HC-1`).
- When a live governance document changes shape (a new section, ID scheme, or record type), make the matching change in its template in the same change.

### Skills and guides

- `skills/` is the canonical source. `.claude/skills/` is an installed copy and must be identical (`INV-2`).
- Each skill has a paired guide; change both together (`HC-5`, `INV-3`).
- The skill owns procedures. The guide explains reasoning and gives the human-readable walkthrough. Neither restates the instruction hierarchy; both point to `AGENTS.md`.

### Rule ownership

| Rule | Owner |
|---|---|
| Instruction hierarchy, read-before table, stop-and-ask gates, commands, paths, gotchas | `AGENTS.md` |
| Hard Constraints (`HC-n`) | `development-docs/coreIdentity.md` |
| Architectural Invariants (`INV-n`), directory map | `development-docs/architecture.md` |
| Definition of Done, development principles | this document |
| Change workflow, changelog entry format, decision-record and proposal procedures, completion report | `skills/spec-driven-development/SKILL.md` |
| Decision-record and proposal file formats | `TEMPLATE.md` in each folder |
| Version direction, rejected items | `development-docs/productRoadmap.md` |

### Operational records

`features.md`, `newFeatures.md`, `current-checklist/`, `audits/`, `human-qa/`, and `development-docs/research/` are intentionally freeform. Do not impose a metadata schema on them unless the maintainer asks.

---

## 4. Change Discipline

- Follow the change workflow in the `spec-driven-development` skill.
- A structural change or new capability starts with a proposal in `development-docs/architecture-plans/`. Draft it; do not ask whether to draft it. Implement only after the maintainer approves.
- A change that breaks an `HC-n` or `INV-n` needs an approved decision record in `development-docs/decisions/` before implementation.
- `package.json` is the authoritative version. Before opening a pull request, ask the maintainer whether to bump it and whether the bump is patch, minor, or major. Keep `package-lock.json` in step.

---

## 5. Safety

- Do not delete repository content, rewrite history, or push to other repositories unless explicitly asked.
- Do not put secrets or personal data in documents, examples, tests, or changelog entries.
- The session hook must stay read-only and must never fail a session.
- `CHANGELOG.md` is append-only: add new entries at the top and never edit or delete older ones.

---

## 6. Validation

- `npm test` must pass. It needs no install.
- CI runs the same suite on every pull request with `BASE_REF` set, which additionally requires a new `CHANGELOG.md` entry.
- A rule that can be checked mechanically should be checked. When you add such a rule, add a test and name the `INV-n` or `HC-n` in the test title.
- Passing tests show that structure is intact. They do not show that guidance is correct; read what you changed.

---

## 7. Definition of Done

This is the only Definition of Done for the repository. Other documents point here.

A change is done only when all applicable items are true:

- The requested scope is implemented with the smallest safe change.
- The documents required by the read-before table in `AGENTS.md` were consulted.
- No `HC-n` or `INV-n` is broken, **or** an approved decision record covers the deviation.
- `npm test` passes, and any validation that could not be run is stated.
- Skill changes are mirrored in the paired guide and copied to `.claude/skills/`.
- Live-document shape changes are mirrored in `templates/`.
- `CHANGELOG.md` has a new entry at the top in the standard format, including incomplete or blocked work and handover notes.
- `README.md` is updated when setup, usage, layout, or contributor workflow changed.
- `development-docs/architecture.md` is updated when structure, invariants, or checks changed.
- `development-docs/productRoadmap.md` is updated only when version scope or direction changed.
- `features.md` is updated when capability coverage changed.
- Any proposal this change completes is marked Implemented and moved to `archives/`.
- Before a pull request is opened, the maintainer was asked about a version bump.

---

## 8. When to Update This Document

Update it when development standards, rule ownership, validation requirements, or the Definition of Done change. Do not update it for ordinary work.
