<!--
Change proposal template. Copy to P-NNNN-short-title.md (next unused number) and fill in.

Draft a proposal BEFORE implementing a structural change or a new capability that no existing
proposal covers. Do not ask whether to write one: write it with Status "Proposed", then stop
and ask the maintainer to approve, change, or reject it.

Rules:
- Describe the change as a delta against the current documents, not as a full rewrite.
- Keep it to one page. Small, obvious changes do not need a proposal.
- Status values: Proposed | Approved | Implemented | Rejected.
- Implement only when Status is Approved. "Approved by" must name a human maintainer.
- If the proposal breaks an HC-n or INV-n, it also needs a decision record in ../decisions/.
- When implemented and tested, apply the document changes listed below, set Status to
  Implemented, and move the file to archives/. Move Rejected proposals to archives/ too:
  they record what was considered.
-->

# P-NNNN — [Short title]

- **Status:** Proposed
- **Date:** YYYY-MM-DD
- **Approved by:** [Maintainer name, once approved]
- **Touches:** [HC-n / INV-n / roadmap item affected, or "none"]

## Why

[The problem or request, in a few sentences.]

## What changes

[The change, as a delta: what is added, modified, or removed.]

## Document changes on completion

[Which governance documents must be updated when this lands, and how: architecture.md sections, features.md entries, README, roadmap.]

## Open choices

[Decisions the maintainer needs to make, each with your recommendation.]

## Done when

[Observable completion criteria, including the validation to run.]
