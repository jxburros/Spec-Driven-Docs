# CHANGELOG


## 2026-07-04 — Agent: GitHub Copilot (Copilot)

### Changed
- Updated `skills/spec-driven-docs-setup/SKILL.md`: added Phase 3 step 6 to copy both skills (`spec-driven-development` and `spec-driven-docs-setup`) into the target repo's `.claude/skills/` directory and add skill invocation instructions to that repo's `AGENTS.md`. Renumbered subsequent steps (tool overlays → 7, README → 8, CHANGELOG → 9). Updated the Phase 4 changelog template to include the skill installation line.
- Updated `AGENTS.md`: filled placeholder sections 5 (Project Summary), 6 (Non-Negotiable Project Values), 15 (Domain-Specific Rules — Skill Usage, Template Rules, Skill and Guide Sync), and 19 (Custom Repo Instructions — real commands, paths, gotchas, maintainer preferences).
- Updated `CLAUDE.md`: added skill invocation instructions at the top of Section 1 (Required Reading); filled Section 8 (Custom Claude Instructions) with project-specific rules, priorities, avoided behaviors, and commands.
- Updated `.github/copilot-instructions.md`: added skill invocation instructions to Section 1 (Required Context); filled Section 11 (Custom Copilot Instructions) with project-specific rules, commands, paths, and gotchas.
- Updated `guides/ai-guide.md`: added a "Using the Skills" section at the top (before "The Core Principle") instructing agents to invoke the `spec-driven-development` skill before reading the documents and the `spec-driven-docs-setup` skill when setting up docs in another repo.
- Updated `guides/human-guide.md`: added Step 8 (Install the skills for AI agents) to the new-repo setup process, with copy commands and the exact `AGENTS.md` reference text; added Phase 6 (Install the skills) to the existing-repo adoption order.

### Not completed
- None.

### Notes
- Validation: `npm test` was not run; this is a documentation-only change. All changes are to markdown files only.
- The `development-docs/` template files were intentionally left as templates — they contain placeholder text by design.

### Handover
- Next agent should start with: invoking `/spec-driven-development` skill before reading the governance documents.
- Open questions: whether to pre-install the skills under `.claude/skills/` in this repo itself (currently they live under `skills/` only).
- Risks or assumptions: assumes `.claude/skills/` is the correct target directory for Claude Code skill installation; verify against latest Claude Code docs if the convention changes.

---


## 2026-07-02 — Agent: Claude Code (Claude)

### Changed
- Added `skills/spec-driven-development/SKILL.md`: a portable skill for AI agents doing development work in repos that use this doc system — per-task reading map, instruction hierarchy, change workflow, document update rules, changelog format, when to stop and ask, and completion reporting.
- Added `skills/spec-driven-docs-setup/SKILL.md`: a portable skill for AI agents creating customized, complete versions of the docs for a repo — evidence gathering from the repo, an infer/confirm/ask classification for every section, batched user questions (always-ask vs. ask-if-ambiguous vs. never-ask), dependency-ordered drafting, and a verification pass.
- Added `skills/README.md`: what the skills are and how to install them in Claude Code and other agent tools.
- Updated `README.md` with a Guides section and a Skills section pointing to the new directories.

### Not completed
- None.

### Notes
- Validation: ran `npm test` (docs smoke tests: required files present, relative markdown links resolve).
- Skills are written to be self-contained so they can be copied into other repositories without this repo.

### Handover
- Next agent should start with: keeping the two skills in sync with `guides/ai-guide.md` and `guides/human-guide.md` if the core templates change.
- Open questions: whether to also ship the skills pre-installed under `.claude/skills/` in this repo.
- Risks or assumptions: assumes the Agent Skills SKILL.md frontmatter format remains the preferred cross-tool convention.

---

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
