# .github/copilot-instructions.md — GitHub Copilot Instructions

> **GitHub Copilot-specific overlay**
>
> Follow `AGENTS.md` first. This overlay adds only what is specific to Copilot and does not restate `AGENTS.md`.

---

## 1. Skill Invocation

Copilot has no slash-command skill loader and no session hook. Before reading the governance documents:

1. Read `skills/spec-driven-development/SKILL.md`.
2. Read the newest `CHANGELOG.md` entry's Handover, the records in `development-docs/decisions/`, and open proposals in `development-docs/architecture-plans/`.

When asked to set up Spec-Driven Docs in another repository, read `skills/spec-driven-docs-setup/SKILL.md` instead and complete its installation steps in the target repo.

---

## 2. Copilot Changelog Name

Use the changelog entry format from the `spec-driven-development` skill with this agent name unless the maintainer requests another:

```text
Agent: GitHub Copilot (Copilot)
```

---

## 3. Custom Copilot Instructions

- Commands, paths, and gotchas are maintained once, in `AGENTS.md` — do not duplicate them here.
