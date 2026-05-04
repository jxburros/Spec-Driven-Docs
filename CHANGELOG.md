# CHANGELOG


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
