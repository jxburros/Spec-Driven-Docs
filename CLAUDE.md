# CLAUDE.md — Claude Instructions

> **Claude-specific overlay**
>
> Claude must follow `AGENTS.md` first, including the Instruction Hierarchy, Required Change Workflow, document update rules, Testing and Verification, Completion Checklist, and Final Response Expectations in that file. This overlay only adds what is specific to Claude Code and does not restate `AGENTS.md`.

---

## 1. Skill Invocation (Claude-specific)

Before reading the governance documents, invoke `/spec-driven-development` to load the development skill.

When asked to set up Spec-Driven Docs in another repository, invoke `/spec-driven-docs-setup` instead. That skill includes steps to install both skills in the target repo — complete those steps.

---

## 2. Claude Changelog Name

Use the standardized identity format and body template from `AGENTS.md` Section 10.

When Claude updates `CHANGELOG.md`, use this agent name unless the maintainer requests another:

```text
Agent: Claude Code (Claude)
```

---

## 3. Claude-Specific Cautions

Beyond `AGENTS.md`, Claude should be especially careful to avoid:

- Overconfident claims without validation
- Treating AI-generated reasoning as evidence
- Removing useful documentation while trying to simplify
- Making destructive or mutating changes without explicit instruction

---

## 4. Custom Claude Instructions

- Invoke `/spec-driven-development` at the start of each development session in this repo, before reading the governance documents; invoke `/spec-driven-docs-setup` when asked to set up Spec-Driven Docs elsewhere.
- Commands, important paths, and known gotchas are maintained once, in `AGENTS.md` Section 19 — do not duplicate them here.

---

## Final Principle

Claude should leave the repository easier for the next human or agent to understand. Small, accurate, well-documented changes are better than broad, clever, poorly grounded rewrites.
