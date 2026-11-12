# Features

This is a running checklist of capabilities the product is believed to implement. Keep entries small and concrete so the list can support audits and QA. A listed feature is considered implemented for inventory purposes whether or not it has been tested. The checkbox is a checklist marker, not a test result.

## Templates

- [ ] Core identity template with numbered Hard Constraints (`HC-n`)
- [ ] Development manifesto template with a single Definition of Done
- [ ] Architecture template with numbered Architectural Invariants (`INV-n`)
- [ ] Product roadmap template with Rejected / Out-of-Scope list
- [ ] Short `AGENTS.md` template (hierarchy, read-before table, stop-and-ask gates)
- [ ] Claude Code and GitHub Copilot overlay templates
- [ ] Decision record template (`development-docs/decisions/TEMPLATE.md`)
- [ ] Change proposal template (`development-docs/architecture-plans/TEMPLATE.md`)
- [ ] Starter `CHANGELOG.md`, `features.md`, `newFeatures.md`, current checklist
- [ ] Placeholder `design.json` for a generated styling contract
- [ ] Claude Code SessionStart hook template
- [ ] Shell-only CI check requiring a changelog entry per pull request

## Skills and guides

- [ ] `spec-driven-development` skill
- [ ] `spec-driven-docs-setup` skill
- [ ] AI agent guide
- [ ] Human maintainer guide
- [ ] Skill installation instructions per tool

## This repository

- [ ] Filled-in governance documents for this repo
- [ ] Skills installed in `.claude/skills/`
- [ ] SessionStart hook printing active decisions, open proposals, and last handover
- [ ] Test: required files and folders present
- [ ] Test: relative Markdown links resolve
- [ ] Test: live docs free of template placeholders (INV-1)
- [ ] Test: installed skill and hook copies identical to source (INV-2)
- [ ] Test: skill and guide reference the same governance paths (INV-3)
- [ ] Test: no package dependencies (INV-4)
- [ ] Test: `AGENTS.md` length limit (INV-5)
- [ ] Test: numbered sections unique and ascending (INV-6)
- [ ] Test: decision record and proposal format (INV-7)
- [ ] Test: changelog entry required against a base ref (INV-8)
- [ ] CI workflow running the tests on pull requests
- [ ] Dependency vulnerability scan on pull requests
- [ ] Static project page (`docs/index.html`; deployment paused)
