# Skills

This directory contains two reusable skills for AI coding agents (Claude, Copilot, Codex, Cursor, and others) working with the Spec-Driven Docs system.

| Skill | Use it when |
|---|---|
| [`spec-driven-development/SKILL.md`](spec-driven-development/SKILL.md) | Doing development work in a repository that already has these docs. Teaches the agent which documents to read for each task type, the instruction hierarchy, the change workflow, and the Definition of Done. |
| [`spec-driven-docs-setup/SKILL.md`](spec-driven-docs-setup/SKILL.md) | Creating customized, complete versions of the documents for a repository — filling in the templates from evidence already in the repo and asking the user targeted questions only where evidence cannot answer. |

Both skills are self-contained: they can be copied into any repository (or a shared skills location) without the rest of this repo.

## What the skills cover

- `spec-driven-development` owns the procedures: session start, change workflow, decision records for approved deviations (`development-docs/decisions/`), per-change proposals (`development-docs/architecture-plans/`), the changelog entry format, and the completion report. The gates it relies on (instruction hierarchy, read-before table, stop-and-ask list) live in the target repo's `AGENTS.md`.
- `spec-driven-docs-setup` covers copying `templates/` into a repo, filling the documents from evidence, numbering Hard Constraints (`HC-n`) and Architectural Invariants (`INV-n`), and installing the skills, the session hook, and the changelog CI check.

## Installing the skills

Each skill is a folder containing a `SKILL.md` file with YAML frontmatter (`name`, `description`) followed by plain markdown instructions. This is the [Agent Skills](https://code.claude.com/docs/en/skills) format used by Claude Code, but the body is ordinary markdown that any LLM tool can consume.

### Claude Code

Copy the skill folders into the repo's `.claude/skills/` directory (project-level) or `~/.claude/skills/` (user-level, available in every repo):

```bash
mkdir -p .claude/skills
cp -r /path/to/Spec-Driven-Docs/skills/. .claude/skills/
```

Claude discovers them automatically; invoke with `/spec-driven-development` or `/spec-driven-docs-setup`, or Claude will use them when the task matches the description.

### Other agents (Copilot, Codex, Cursor, etc.)

Options, in order of preference:

1. **Reference from the agent's instruction file.** Install the skills under `.claude/skills/` as above; the template `AGENTS.md` ("Start Here") and the Copilot overlay already point agents at `.claude/skills/spec-driven-development/SKILL.md`.
2. **Paste the SKILL.md body into the conversation** when you want the agent to perform that task.
3. **Use the tool's native skill/rule mechanism** (e.g. Cursor rules, Copilot instructions) and point it at the file or copy the content in.

## Relationship to the guides

- `guides/ai-guide.md` is the full reference for agents reading these docs; the `spec-driven-development` skill is the actionable, task-oriented version of it.
- `guides/human-guide.md` explains manual setup for maintainers; the `spec-driven-docs-setup` skill automates that process with an agent, including the interview questions a human would otherwise answer while writing.
