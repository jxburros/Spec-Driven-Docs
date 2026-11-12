# CLAUDE.md — Claude Instructions

> **Claude-specific overlay**
>
> Follow `AGENTS.md` first. This overlay adds only what is specific to Claude Code and does not restate `AGENTS.md`.

---

## 1. Skill Invocation

Before reading the governance documents, invoke `/spec-driven-development`. It is installed in `.claude/skills/`.

When asked to set up Spec-Driven Docs in another repository, invoke `/spec-driven-docs-setup` instead and complete its installation steps in the target repo.

The SessionStart hook (`.claude/hooks/session-start.sh`) prints the latest changelog handover, active decision records, and open proposals. Treat that output as context to act on, not as a substitute for loading the skill.

---

## 2. Claude Changelog Name

Use the changelog entry format from the `spec-driven-development` skill with this agent name unless the maintainer requests another:

```text
Agent: Claude Code (Claude)
```

---

## 3. Claude-Specific Cautions

Be especially careful to avoid:

- Overconfident claims without validation
- Treating AI-generated reasoning as evidence
- Removing useful documentation while trying to simplify
- Making destructive or mutating changes without explicit instruction

---

## 4. Custom Claude Instructions

- [Claude-specific rule, if any. Commands, paths, and gotchas belong in `AGENTS.md`, not here.]
