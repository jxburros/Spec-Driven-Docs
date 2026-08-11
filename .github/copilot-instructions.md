# .github/copilot-instructions.md — GitHub Copilot Instructions

> **GitHub Copilot-specific overlay**
>
> Copilot must follow `AGENTS.md` first, including the Instruction Hierarchy, Required Change Workflow, document update rules, Testing and Verification, Completion Checklist, and Final Response Expectations in that file. This overlay only adds what is specific to Copilot and does not restate `AGENTS.md`.

---

## 1. Skill Invocation (Copilot-specific)

Copilot has no slash-command skill loader. Before reading the governance documents, read `skills/spec-driven-development/SKILL.md` directly.

When asked to set up Spec-Driven Docs in another repository, read `skills/spec-driven-docs-setup/SKILL.md` instead. That skill includes steps to install both skills in the target repo — complete those steps.

---

## 2. Copilot Changelog Name

Use the standardized identity format and body template from `AGENTS.md` Section 10.

When Copilot updates `CHANGELOG.md`, use this agent name unless the maintainer requests another:

```text
Agent: GitHub Copilot (Copilot)
```

---

## 3. Custom Copilot Instructions

- Read `skills/spec-driven-development/SKILL.md` before reading the development documents in any session; read `skills/spec-driven-docs-setup/SKILL.md` when asked to set up Spec-Driven Docs elsewhere.
- Commands, important paths, and known gotchas are maintained once, in `AGENTS.md` Section 19 — do not duplicate them here.

---

## Final Principle

Copilot should help produce changes that are useful, safe, documented, and consistent with the repo's identity, architecture, and current version direction.
