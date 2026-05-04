# CHANGELOG


## 2026-05-04 — Agent: Claude Code (Claude)

### Changed
- Added `guides/human-guide.md`: comprehensive guide for humans on setting up and customizing this documentation system for new and existing repos, including section-by-section breakdown of required vs. optional content, adoption order, best practices, and common mistakes.
- Added `guides/ai-guide.md`: comprehensive guide for AI coding agents on how to read and use this documentation system, including the instruction hierarchy, per-document reference map, change workflow, CHANGELOG update format, and what good vs. bad work looks like in this system.

### Not completed
- None.

### Notes
- Validation: documentation-only change; no build or test tooling available to run.
- Both guides were written from the actual content of all existing repo documents.

### Handover
- Next agent should start with: reviewing the guides for accuracy against any future doc changes.
- Open questions: whether to link to these guides from README.md, AGENTS.md, or CLAUDE.md.
- Risks or assumptions: guides reflect current template state; if core docs are heavily customized, sections of the guides may need updating.

---

## 2026-05-04 — Agent: OpenAI Codex (GPT-5.3-Codex)

### Changed
- Clarified hierarchy delegation by updating tool-specific docs to explicitly reference AGENTS.md Section 1.
- Consolidated canonical Definition of Done into `development-docs/developmentManifesto.md` and added cross-document update ownership guidance.
- Standardized changelog identity format and added handover protocol fields in agent instruction docs.
- Expanded `README.md` with setup, usage, configuration, and contributing guidance.

### Not completed
- None.

### Notes
- Existing `Changelog.md` file remains in repo; `CHANGELOG.md` is now the canonical file name referenced by docs.

### Handover
- Next agent should start with: deciding whether to delete or redirect legacy `Changelog.md` to avoid filename confusion on case-insensitive systems.
- Open questions: whether to fully customize all placeholder sections in core docs now or in later iterations.
- Risks or assumptions: assumes maintainers want strict uppercase `CHANGELOG.md` as canonical naming.
