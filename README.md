# Spec-Driven-Docs

A documentation-first governance system for AI-assisted and human-led software projects.

Its aim: every agent and human who works in a repository gets the same context and the same procedures, and any deviation from the project's rules is an active, recorded decision rather than a quiet workaround.

## What is in this repository

| Path | What it is |
|---|---|
| `templates/` | The template set. Copy its contents into your repository root. |
| `skills/` | Two portable agent skills: `spec-driven-development` and `spec-driven-docs-setup`. |
| `guides/` | `human-guide.md` for maintainers, `ai-guide.md` for agents. |
| `development-docs/`, `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md` | This repository's own filled-in governance, which doubles as a working example. |
| `.claude/` | Installed skills and the Claude Code SessionStart hook. |
| `tests/`, `.github/workflows/docs-checks.yml` | Checks that keep the system consistent. |

## How the system works

- **Four governance documents**, each owning one question: `coreIdentity.md` (what the project is and must never become), `developmentManifesto.md` (how it is built and the single Definition of Done), `architecture.md` (what exists now), `productRoadmap.md` (direction and rejected items).
- **Stable rule IDs.** Hard Constraints are `HC-n`; Architectural Invariants are `INV-n`. Records, changelog entries, and tests cite them.
- **Decision records** (`development-docs/decisions/D-NNNN-*.md`). When a request conflicts with a rule, the agent stops and asks. If the maintainer approves the deviation, it is written down before implementation, with scope and a review date.
- **Proposals** (`development-docs/architecture-plans/P-NNNN-*.md`). Before a structural change or new capability, the agent drafts a one-page proposal and waits for approval. It is archived when implemented.
- **A short `AGENTS.md`** holding the gates: instruction hierarchy, what to read per task, when to stop and ask, commands, paths, gotchas. Procedures live in the development skill. Each rule is stated in one place.
- **Enforcement.** A Claude Code SessionStart hook prints the active decisions, open proposals, and last handover into every session. CI fails a pull request that adds no `CHANGELOG.md` entry or breaks a tested invariant.
- **Operational records.** `features.md` (capabilities believed to exist, tested or not), `newFeatures.md` (idea intake), `current-checklist/` (working-period checklist, not a scope gate), `audits/` and `human-qa/` (QA records), `development-docs/research/` (active research), `development-docs/design.json` (placeholder for a generated styling contract). These are intentionally freeform.

## Using it in your repository

With an agent: install the skills (see `skills/README.md`) and run the `spec-driven-docs-setup` skill. It fills the documents from evidence in your repo and asks you only what evidence cannot answer.

By hand:

```bash
cp -rn /path/to/Spec-Driven-Docs/templates/. .
```

```bash
chmod +x .claude/hooks/session-start.sh
```

```bash
mkdir -p .claude/skills && cp -r /path/to/Spec-Driven-Docs/skills/. .claude/skills/
```

Then follow `guides/human-guide.md`.

## Working in this repository

```bash
npm test
```

No install is needed. To run the same checks as CI, including the changelog-entry requirement:

```bash
BASE_REF=origin/main npm test
```

Start with `AGENTS.md`. In short:

1. Load the `spec-driven-development` skill.
2. Make the smallest safe change; stop and ask if it conflicts with an `HC-n` or `INV-n`.
3. Keep skills, guides, installed copies, and templates in step (`AGENTS.md`, Repo Rules).
4. Add a `CHANGELOG.md` entry at the top.

`package.json` is the authoritative version. Agents ask the maintainer about a version bump before opening a pull request.

---

## Project Stewardship

This project is developed by **Jeffrey** through **JX Holdings, LLC**. GitHub: [`jxburros`](https://github.com/jxburros).
