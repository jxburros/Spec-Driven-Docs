# CHANGELOG


## 2026-11-12 — Agent: Claude Code (Claude)

### Changed
- Implemented P-0001 (approved by the maintainer): removed this repository's own instances of the operational records from the root — `features.md`, `newFeatures.md`, `current-checklist/`, `audits/`, `human-qa/`, `development-docs/research/`, `development-docs/design.json`. Their templates under `templates/` are unchanged. The root is now `README.md`, `templates/`, `skills/`, `guides/`, plus a small self-governance set.
- `AGENTS.md`: removed those paths, the `features.md` rule, and `design.json` from the hierarchy and read-before table; added a rule not to recreate the records at the root.
- `development-docs/architecture.md`, `developmentManifesto.md`, `coreIdentity.md`: updated the directory map, live-governance description, Definition of Done, and the operational-records concept to match.
- `development-docs/productRoadmap.md`: shortened to current state, rejected directions, and open questions; added "growing this repository's own process" as a rejected direction, per the maintainer's stated direction.
- `tests/docs-smoke.test.mjs`: the live-set test no longer expects the removed paths; a new test fails if any of them reappears at the root or goes missing from `templates/`.
- P-0001 marked Implemented and moved to `development-docs/architecture-plans/archives/`.

### Not completed
- None for P-0001.
- Still open from earlier entries: `HC-3` wording, version bump decision.

### Notes
- Validation: `npm test` passes (13 of 13 with `BASE_REF=origin/main`); the session hook runs and reports no open proposals.
- P-0001's open choices were resolved with its recommendations: delete `features.md`, keep the four live documents, no `examples/` folder.
- No decision records.

### Handover
- Next agent should start with: `AGENTS.md`.
- Open questions: those in `development-docs/productRoadmap.md`, plus the `HC-3` wording.
- Risks or assumptions: none.

---

## 2026-11-12 — Agent: Claude Code (Claude)

### Changed
- Fixed the session hook (`.claude/hooks/session-start.sh` and its copy in `templates/.claude/`): it reported "Open proposals: None" while P-0001 was Proposed, because a `|` alternation held in a shell variable is not honored by `case`. Status matching now uses `grep -E`.

### Not completed
- None.

### Notes
- Validation: ran the hook with P-0001 present (listed), and with a temporary Active decision record and an Approved proposal (both listed); `npm test` passes.
- The earlier hook check on this date only exercised the single-pattern decision-record path, which is why the defect was missed.

### Handover
- Next agent should start with: P-0001; implement only if its status is Approved.
- Open questions: unchanged from the previous entry.
- Risks or assumptions: none.

---

## 2026-11-12 — Agent: Claude Code (Claude)

### Changed
- Reoriented the repository toward adopters, at the maintainer's request: it should read as templates and instructions for adding the system to another repository, not as a project about developing itself.
- `README.md` rewritten adopter-first: what you get, two ways to add it to your repository (a paste-ready agent instruction, or three copy commands), a "where to look" table by reader, and a single short section on contributing here.
- `docs/index.html` text now describes adoption instead of this repository's own documents.
- `development-docs/coreIdentity.md`: primary audience is stated as outside this repository; added "Not a project about developing itself" to What This Project Is Not.
- `development-docs/developmentManifesto.md`: added "Adopters first" as the first development principle.
- `AGENTS.md`: banner sending adopters to `README.md` and `templates/AGENTS.md`; Project Summary now names `templates/`, `skills/`, and `guides/` as the product and tells agents to keep this repo's own process small.
- `skills/README.md`: removed a maintenance note about this repo's installed copy (it is in `AGENTS.md`).
- Drafted `development-docs/architecture-plans/P-0001-trim-self-governance.md` (status Proposed).

### Not completed
- P-0001 is not implemented. It removes this repository's own operational-record instances from the root; that deletes files and changes structure, so it waits for maintainer approval.
- Open items from the previous entry are unchanged (HC-3 wording, roadmap direction, version bump).

### Notes
- Validation: `npm test` and `BASE_REF=origin/main npm test` pass.
- The agent instruction in the README assumes the repository is reachable at `https://github.com/jxburros/Spec-Driven-Docs`; this was not verified from an outside machine.
- Proposal created: P-0001. No decision records.

### Handover
- Next agent should start with: P-0001; implement only if its status is Approved.
- Open questions: the three open choices in P-0001.
- Risks or assumptions: none beyond the above.

---

## 2026-11-12 — Agent: Claude Code (Claude)

### Changed
Implemented the eight changes from the system review, at the maintainer's request. The goal of all eight: every rule is either followed or overridden by a recorded decision, and what can be checked mechanically is checked.

1. **Decision log.** Added `development-docs/decisions/` with `TEMPLATE.md` and `archives/`. An approved deviation from a rule is written as `D-NNNN-title.md` before implementation, naming the rule, scope, approving maintainer, and review date.
2. **Rule IDs.** Hard Constraints are now `HC-n` (`coreIdentity.md`) and Architectural Invariants `INV-n` (`architecture.md`), in both the templates and this repo's live docs.
3. **CI and tests.** Added `.github/workflows/docs-checks.yml` (runs `npm test` on every pull request). Extended the suite to check: template set complete, live docs free of placeholders (INV-1), installed copies identical to source (INV-2), skill/guide path parity (INV-3), no dependencies (INV-4), `AGENTS.md` ≤ 200 lines (INV-5), numbered sections unique and ascending (INV-6), decision-record and proposal format (INV-7), and a new changelog entry relative to a base ref (INV-8, `tests/changelog-entry.test.mjs`).
4. **Session hook and installed skills.** Added `.claude/settings.json` and `.claude/hooks/session-start.sh` (read-only; prints the skill reminder, active decision records, open proposals, and the latest changelog handover). Installed both skills in `.claude/skills/`, so `/spec-driven-development` now exists in this repo.
5. **Short `AGENTS.md`.** Cut from 436 to about 150 lines: hierarchy, read-before table, stop-and-ask gates, repo rules, commands, paths, gotchas. Procedures moved to the `spec-driven-development` skill; generic safety, AI-behavior, and code-style advice was removed because the manifesto owns those topics. The hierarchy and read-before table are no longer restated in the skill or the AI guide.
6. **Manifesto contradictions.** The template manifesto now has one Definition of Done (the appended duplicate "## 7" and "## 8" sections are gone), one changelog format (the `[OpenAI Codex]`-style prefixes are gone), and a generic per-agent section instead of three near-identical ones.
7. **Templates separated from live governance.** Templates moved to `templates/`, laid out as they should land in a target repo, and now include `AGENTS.md`, overlays, a starter `CHANGELOG.md`, record templates, the session hook, and a shell-only changelog CI check. `development-docs/` now holds real, filled-in governance for this repo.
8. **Proposals.** `development-docs/architecture-plans/` now holds per-change proposals (`P-NNNN-title.md`, from `TEMPLATE.md`). "Ask before creating a plan" is replaced by "draft the proposal, then wait for approval"; proposals are archived when implemented or rejected.

Also updated both skills, both guides, `README.md`, `skills/README.md`, both overlays, and `features.md` to match.

### Not completed
- `development-docs/productRoadmap.md` sections "Current Version Focus" and "Planned Future Versions" are left blank with comments: only the maintainer can state direction.
- `development-docs/coreIdentity.md` has comment-marked gaps for secondary audiences and further anti-goals, for the same reason.
- No version bump was made and no pull request was opened; the maintainer has not been asked about a bump yet.
- `docs/index.html` (paused project page) was not reviewed against the new layout.

### Notes
- Validation: `npm test` passes (12 pass, 1 skipped without `BASE_REF`); `BASE_REF=origin/main npm test` passes after commit. Each new gate was also made to fail on purpose (guide missing a path, drifted installed skill, malformed decision record) and failed as expected. The hook was run by hand and lists an Active record when one exists.
- Not validated: the two GitHub Actions workflows have not run on GitHub yet; they will first run on the next pull request.
- The live `HC-1`…`HC-5` restate the five "Non-Negotiable Project Values" from the previous `AGENTS.md`. One wording change needs maintainer confirmation: `HC-3` ("No application runtime") now explicitly permits the zero-dependency test suite, CI workflows, and agent session hooks, because items 3 and 4 add those. The previous wording was "do not add build steps, application infrastructure, or runtime configuration".
- `INV-3` (skill/guide parity) compares which governance paths each file names. It catches a side that stops mentioning something; it cannot catch two texts that give different advice.
- No decision records or proposals were created.
- The folder name `architecture-plans/` was kept for proposals to avoid renaming a path that every document references.

### Handover
- Next agent should start with: the session-hook output, then `AGENTS.md`.
- Open questions: confirm the `HC-3` wording; fill the roadmap's current version focus and rejected directions; decide whether `0.0.0` should be bumped for this change; the open product questions in `development-docs/productRoadmap.md`.
- Risks or assumptions: adopters who copied the old root-level templates have a different layout (old `AGENTS.md` section numbers, no `decisions/`); the guides describe the new layout only. Parallel branches that each add a top changelog entry will conflict on merge.

---

## 2026-08-11 — Agent: Claude Code (Claude)

### Changed
- Slimmed `CLAUDE.md` and `.github/copilot-instructions.md` down to true tool-specific deltas (skill-invocation method, changelog agent name, tool-specific cautions) instead of restating `AGENTS.md`'s hierarchy, change workflow, document tables, testing rules, completion checklist, and Custom Repo Instructions (commands/paths/gotchas), which now live only in `AGENTS.md` Section 19. Both overlays now explicitly point to `AGENTS.md` for the shared rules instead of duplicating them, matching the project's own Non-Negotiable Project Values (§6) about avoiding duplicated content.

### Not completed
- None.

### Notes
- Validation: ran `npm test` after the edit (4/4 passing) — file-presence and link-resolution checks still pass since section content, not file paths, changed.
- Historical `CHANGELOG.md` entries reference old section numbers in the overlay files (e.g. "Section 8", "Section 11" in the 2026-07-04 entry) — left as-is since changelog entries are append-only project memory, not living documentation.

### Handover
- Next agent should start with: no open follow-up from this change.
- Open questions: None.
- Risks or assumptions: Assumes the maintainer wants the overlays to be pure deltas going forward; if either tool later needs its own full command/path listing (e.g. divergent commands per tool), reintroduce it in that overlay rather than back into AGENTS.md.

---

## 2026-08-11 — Agent: Claude Code (Claude)

### Changed
- Fixed a duplication bug in `AGENTS.md`: a leftover, mislabeled "## 11. README Rules" block (actually near-duplicate changelog instructions) sat between Section 10 (Changelog Rules) and the real Section 11 (README Rules), leaving two sections numbered 11. Removed the duplicate block; sections 1–19 now number correctly with no repeated content.

### Not completed
- None.

### Notes
- Validation: ran `npm test` before and after the edit (4/4 passing) to confirm no links or required files broke.
- Found while reviewing the governance system end-to-end at the maintainer's request; no other structural defects were identified in that review.

### Handover
- Next agent should start with: no open follow-up from this change.
- Open questions: whether to reduce duplication across `AGENTS.md`, `CLAUDE.md`, and `.github/copilot-instructions.md` — the three overlays restate most of the same tables/checklists rather than the overlays deferring to `AGENTS.md` as the project's own values (§6) call for. Flagged for the maintainer to decide; not changed here since it wasn't requested.
- Risks or assumptions: None.

---

## 2026-08-10 — Agent: OpenAI Codex (GPT-5)

### Changed
- Added the operational documentation structure for design contracts, research, architecture plans, current checklists, automated audits, human QA, feature inventory, and historical feature intake.
- Updated `AGENTS.md`, `CLAUDE.md`, and `.github/copilot-instructions.md` with the new hierarchy, document roles, archive behavior, automatic `features.md` maintenance, and the version-bump question required before opening a pull request.
- Updated the human and AI guides, both portable skills, `skills/README.md`, `README.md`, `docs/index.html`, the core identity/manifesto/architecture/roadmap templates, and documentation smoke tests.

### Not completed
- None.

### Notes
- `development-docs/design.json` is a valid placeholder and must remain untouched until a design-contract app generates it.
- `package.json` remains at its existing version; no version bump was requested for this documentation-only change.
- The pull request was not opened in this pass so the version-bump confirmation can occur at the required point before PR creation.

### Handover
- Next agent should start with: `AGENTS.md`, then the relevant operational record for the task.
- Open questions: None.
- Risks or assumptions: archive folders are tracked with `.gitkeep` files so the requested structure exists before reports or plans are added.


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
