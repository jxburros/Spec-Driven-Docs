# Spec-Driven-Docs

A set of templates and agent skills you add to your own repository so that every AI agent and human working in it starts with the same context and follows the same procedures — and so that any departure from your project's rules is a decision you made, not a workaround an agent chose.

## What you get

Copying this system into a repository gives it:

- **Four governance documents**, each answering one question:
  - `development-docs/coreIdentity.md` — what the project is and must never become
  - `development-docs/developmentManifesto.md` — how it is built, and the single Definition of Done
  - `development-docs/architecture.md` — what the system looks like now
  - `development-docs/productRoadmap.md` — where it is going, and what is rejected
- **A short `AGENTS.md`** that every agent loads: which document wins when sources conflict, what to read before each kind of task, and when to stop and ask you.
- **Numbered rules.** Hard constraints (`HC-1`, `HC-2`, …) and architectural invariants (`INV-1`, …) that agents, records, and tests can cite.
- **Decision records** (`development-docs/decisions/`). When a request conflicts with a rule, the agent stops and asks. If you approve the exception, it is written down first, with its scope and a review date.
- **Proposals** (`development-docs/architecture-plans/`). Before a structural change or new capability, the agent drafts a one-page plan and waits for your approval.
- **A changelog with handover notes**, so each session picks up where the last one stopped.
- **Enforcement.** A Claude Code session hook that shows active decisions, open proposals, and the last handover at the start of every session, and a CI check that fails a pull request with no changelog entry.
- **Two agent skills**: one that sets the system up in your repository, one that agents follow when working in it.

## Add it to your repository

### Option 1: have an agent set it up

Give your coding agent this instruction from inside your repository:

```text
Clone https://github.com/jxburros/Spec-Driven-Docs to a temporary folder outside this repository,
then follow skills/spec-driven-docs-setup/SKILL.md from that clone to set up Spec-Driven Docs here.
```

The agent copies the templates, fills them in from evidence in your code, and asks you a short batch of questions for what only you can answer: identity, hard constraints, direction, and what is rejected. It does not guess those.

### Option 2: set it up by hand

From your repository root:

```bash
cp -rn /path/to/Spec-Driven-Docs/templates/. .
```

```bash
chmod +x .claude/hooks/session-start.sh
```

```bash
mkdir -p .claude/skills && cp -r /path/to/Spec-Driven-Docs/skills/. .claude/skills/ && rm .claude/skills/README.md
```

`-n` leaves any file you already have untouched. Then fill in the documents by following [`guides/human-guide.md`](guides/human-guide.md), starting with `coreIdentity.md`.

## Where to look

| You are | Start with |
|---|---|
| A maintainer adopting the system | [`guides/human-guide.md`](guides/human-guide.md) |
| An agent asked to set the system up | [`skills/spec-driven-docs-setup/SKILL.md`](skills/spec-driven-docs-setup/SKILL.md) |
| An agent working in a repository that already uses it | [`skills/spec-driven-development/SKILL.md`](skills/spec-driven-development/SKILL.md), then [`guides/ai-guide.md`](guides/ai-guide.md) for the reasoning |
| Installing the skills in a specific tool | [`skills/README.md`](skills/README.md) |
| Looking for a filled-in example | [`AGENTS.md`](AGENTS.md) and [`development-docs/`](development-docs/) in this repository |

## What is in this repository

| Path | What it is |
|---|---|
| `templates/` | **The template set.** Laid out exactly as it should land in your repository root. |
| `skills/` | **The two skills**: `spec-driven-docs-setup` and `spec-driven-development`. |
| `guides/` | **The guides**: `human-guide.md` for maintainers, `ai-guide.md` for agents. |
| Everything else | This repository's own copy of the system, which keeps the templates honest and serves as a worked example. You do not copy it. |

## Contributing to this repository

Work here is governed by the same system. Start with [`AGENTS.md`](AGENTS.md). Checks run with no install:

```bash
npm test
```

---

## Project Stewardship

This project is developed by **Jeffrey** through **JX Holdings, LLC**. GitHub: [`jxburros`](https://github.com/jxburros).
