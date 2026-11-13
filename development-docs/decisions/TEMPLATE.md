<!--
Decision record template. Copy to D-NNNN-short-title.md (next unused number) and fill in.

Write a record BEFORE implementing whenever the maintainer approves a deviation from:
a Hard Constraint (HC-n), an Architectural Invariant (INV-n), a Rejected roadmap item,
a manifesto rule, or an approved proposal.

Rules:
- One deviation per file. Keep it short.
- "Approved by" must name a human maintainer. An agent cannot approve its own deviation.
- A record overrides only the rule it names, within the scope it states.
- Never edit the substance of an approved record. To change it, write a new record and set
  the old one to "Superseded by D-NNNN".
- Status values: Active | Expired | Superseded by D-NNNN | Retired.
- When a record is no longer Active, move it to archives/.
- If the deviation should become the rule, change the governing document, then retire the record.
-->

# D-NNNN — [Short title]

- **Status:** Active
- **Date:** YYYY-MM-DD
- **Deviates from:** [HC-n / INV-n / roadmap Rejected item / manifesto section / P-NNNN]
- **Approved by:** [Maintainer name]
- **Review by:** [YYYY-MM-DD, or "permanent"]

## Context

[What was requested and why the governing rule conflicts with it.]

## Decision

[What is allowed, stated precisely.]

## Scope

[Exactly which files, features, or situations this covers. Everything else still follows the rule.]

## Consequences

[What this costs, what to watch for, and what would make the record unnecessary.]
