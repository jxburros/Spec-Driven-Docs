# Spec-Driven-Docs — Product Roadmap

> Version-level direction. Not a sprint board, task tracker, or changelog.
>
> This is the live roadmap for this repository. The blank template that adopters copy is `templates/development-docs/productRoadmap.md`.
>
> Direction belongs to the maintainer. Sections that only the maintainer can answer are marked with a comment and left blank rather than guessed.

---

## 1. Current Product State

- **Version:** `0.1.0` (`package.json`). No release has been tagged.
- **What it provides:** see "What you get" in `README.md`.
- **Constraints:** `HC-1`…`HC-5` in `development-docs/coreIdentity.md`.

---

## 2. Rejected / Out-of-Scope Directions

Agents must not implement a rejected direction without flagging the rejection and obtaining a decision record.

- ❌ **Becoming an application, CLI, or library.** Out of scope by `HC-3`.
- ❌ **Growing this repository's own process.** The product is what adopters copy; see "What This Project Is Not" in `development-docs/coreIdentity.md`.

<!-- Further rejected directions: not yet defined. Maintainer to fill in. -->

---

## 3. Open Product Questions

These are undecided. Agents must not resolve them by implementing an answer.

- **Current version focus and next versions.** Not yet stated by the maintainer.
- **Design contract.** `templates/development-docs/design.json` is a placeholder for output of a design-contract app. The app and its output format are not defined in this repository.
- **Project page.** `docs/index.html` exists and the GitHub Pages deployment workflow is disabled (`.github/workflows/pages.yml.disabled`). Whether and when to re-enable it is undecided.
- **Enforcement for non-Claude agents.** Only Claude Code has a session hook. Whether to ship equivalents for other tools is undecided.
- **Changelog structure.** A single file conflicts across parallel branches. Whether to move to per-change fragments is undecided.
- **Stable release.** What `1.0.0` should contain is undecided.

---

## 4. Guidance for Agents

- "Planned" items are direction, not specifications. A new capability still starts with a proposal in `development-docs/architecture-plans/`.
- Do not mark progress here. Completed work goes in `CHANGELOG.md`.
- An open question above means "ask the maintainer", not "anything goes".

---

## 5. When to Update This Document

Update it only when version scope or product direction changes, or when the maintainer answers one of the open questions. Do not update it for ordinary implementation progress.
