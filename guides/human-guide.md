# Human Guide: Setting Up and Customizing Spec-Driven Docs

This guide is for developers, team leads, and project maintainers who want to use this documentation system in their own projects — whether starting fresh or adopting it into an existing repo.

---

## What This System Is

Spec-Driven Docs is a documentation-first governance framework for software projects that use AI coding assistants. Instead of hoping AI agents will infer your intentions from code alone, this system gives them a structured, hierarchical set of documents that define *what the project is*, *how it should be built*, *what the architecture looks like*, and *where it's going*.

The core idea: **if you don't write down what your project is and isn't, every AI agent will fill in the blanks differently.** These documents are the blanks filled in.

The system works equally well for purely human teams — it just makes implicit decisions explicit.

---

## The Document Map

Every document has a distinct scope. Understanding this prevents duplication and conflicts.

| File | What It Governs | Update Frequency |
|------|-----------------|------------------|
| `development-docs/coreIdentity.md` | What the project *is* — its values, constraints, non-negotiables | Rarely; only when the project's fundamental purpose changes |
| `development-docs/developmentManifesto.md` | How the project *is built* — standards, principles, AI rules, Definition of Done | When standards change or new agent rules are needed |
| `development-docs/architecture.md` | What the system *looks like* — structure, data flow, integrations | When architecture changes |
| `development-docs/design.json` | Generated UI styling and design contract | When the design-contract app regenerates it; leave the placeholder untouched |
| `development-docs/architecture-plans/` | Change proposals (`P-NNNN`), drafted before structural changes or new capabilities | An agent drafts one, you approve it, it is archived when implemented |
| `development-docs/decisions/` | Decision records (`D-NNNN`): every deviation you approved from a rule | Whenever you approve a deviation; archive when no longer active |
| `development-docs/research/` | Curated research for features and processes | Keep active; add research as needed |
| `development-docs/productRoadmap.md` | Where the project *is going* — versions, features, deferrals | When product direction changes; never for ordinary progress |
| `features.md` | Granular checklist of capabilities believed to be implemented | Whenever feature coverage changes; testing status is separate |
| `newFeatures.md` | Historical intake of possible future features | Whenever a new idea is captured; retain promoted entries |
| `current-checklist/currentChecklist.md` | Organizational checklist for the current sprint or working period | As working priorities change; it is not a scope gate |
| `audits/` and `human-qa/` | Automated and human QA records, respectively | Add records when tests are performed; archive fully processed reports |
| `AGENTS.md` | Gates and repo facts for *all AI coding agents*, kept under 200 lines | When commands, paths, gotchas, or the project summary change |
| `.claude/settings.json`, `.claude/hooks/session-start.sh` | Claude Code session hook that prints active decisions, open proposals, and the last handover | Rarely |
| `.github/workflows/spec-docs-checks.yml` | CI check that a pull request adds a `CHANGELOG.md` entry | Rarely |
| `CLAUDE.md` | Instructions specific to *Claude* | When Claude-specific behavior needs adjusting |
| `.github/copilot-instructions.md` | Instructions specific to *GitHub Copilot* | When Copilot-specific behavior needs adjusting |
| `CHANGELOG.md` | Record of *what changed and who did it* | Every meaningful change |
| `README.md` | Entry point for *humans discovering the project* | When setup, features, or configuration changes |

The documents form a **hierarchy**: identity and values override standards, standards override architecture decisions, architecture decisions override roadmap priorities, and all of these inform agent instructions.

---

## Using This as a Template for a New Repo

### Step 1: Copy the file structure

Copy the contents of this repo's `templates/` folder into your repo root. The folder mirrors the layout the files should have in your repo:

```bash
cp -rn <path-to-spec-driven-docs>/templates/. .
chmod +x .claude/hooks/session-start.sh
```

`-n` keeps any file you already have. If you already have a `.claude/settings.json`, merge the `SessionStart` hook from the template into it by hand.

That gives you:

```
development-docs/
  coreIdentity.md
  developmentManifesto.md
  architecture.md
  productRoadmap.md
  design.json
  research/
  decisions/            (TEMPLATE.md, archives/)
  architecture-plans/   (TEMPLATE.md, archives/)
current-checklist/
  currentChecklist.md
  archives/
audits/
  archives/
human-qa/
  archives/
features.md
newFeatures.md
AGENTS.md
CLAUDE.md
.github/copilot-instructions.md
.github/workflows/spec-docs-checks.yml
.claude/settings.json
.claude/hooks/session-start.sh
CHANGELOG.md
```

`README.md` is yours; the template set does not include one.

### Step 2: Fill in coreIdentity.md first

This is the most important document to get right. It anchors every other decision. Fill it in before touching anything else.

Key questions to answer honestly:
- What does this project do? (one sentence)
- What does it absolutely not do?
- Who uses it and what do they need?
- What would make the project "drift" from its purpose?

Do not write aspirational identity. Write what is actually true today, or what you are firmly committing to. The "What This Project Is Not" and "Hard Constraints / Never List" sections are especially important — AI agents read these to know when to push back or ask questions.

Give every hard constraint a stable ID (`HC-1`, `HC-2`, …) and word it with MUST / MUST NOT, so that anyone can tell whether a change breaks it. Never renumber or reuse an ID; decision records, changelog entries, and tests cite them.

### Step 3: Fill in developmentManifesto.md

This document defines your team's development standards and the rules AI agents must follow. The sections that most need customization:

- **Project-Specific Development Doctrine**: Your domain rules (e.g., "never write raw SQL," "all state must be in the store," "no inline styles")
- **AI Role in Development**: What agents may and must not do in this specific project
- **Agent-Specific Instructions**: Different instructions for Claude vs. Copilot vs. Codex if needed
- **Definition of Done**: What actually counts as finished work on this project, including the real validation commands. Keep exactly one Definition of Done; every other document points to it

The general principles (test your work, don't hide failures, keep changes small) should stay mostly as-is unless your team genuinely works differently.

### Step 4: Fill in architecture.md

Describe the current architecture honestly. Sections you should prioritize:

- **Architecture Summary**: One paragraph that an engineer could read to orient themselves
- **Directory and File Map**: Where things live and why
- **Major Subsystems**: What the big pieces are and how they relate
- **Execution Flow**: What happens when the system runs
- **Architectural Invariants**: Rules that must not be broken without a deliberate conversation. Number them `INV-1`, `INV-2`, …. Wherever an invariant can be checked by a test or CI job, add the check and name the ID in it — a checked rule cannot be skipped quietly

Do not fill in sections you don't know yet. Blank or "TBD" is better than invented architecture. Agents treat this file as ground truth — if you write something incorrect here, agents will make decisions based on it.

### Step 5: Fill in productRoadmap.md

Focus on:
- **Current Product State**: What already exists
- **Current Version Focus**: The one thing you're building right now
- **Rejected / Out-of-Scope Directions**: What you've decided not to do

The roadmap's main value is telling agents "don't implement this yet" and "this idea is off the table." Future version planning is secondary.

### Step 5a: Add the operational records

- Leave `development-docs/design.json` as a placeholder until the design-contract app generates it.
- Use `features.md` as a simple, granular checklist of capabilities believed to be implemented, whether tested or not.
- Keep `newFeatures.md` as historical intake even after ideas are promoted to the roadmap or current checklist.
- Use `current-checklist/currentChecklist.md` as an organizational aid for the current sprint or working period, not as a scope gate.
- Keep `development-docs/research/` active for curated research.
- `development-docs/architecture-plans/` holds change proposals. Agents draft a proposal before a structural change or new capability and wait for your approval; fully implemented and tested proposals move into `archives/`.
- `development-docs/decisions/` holds decision records. Leave it empty at setup; see "Deviations and decision records" below.
- Store automated audit reports in `audits/` and human-run QA reports in `human-qa/`; move fully processed reports into their matching archive folders.

### Step 6: Update AGENTS.md project sections

The template `AGENTS.md` is short on purpose: it is loaded into every agent session, and research on agent instruction files shows that long, generic ones cost context without improving results. Fill in:

- Project Summary
- Repo Rules — only rules that are specific to your repo and not obvious from the code
- Commands
- Important Paths
- Gotchas
- Any repo-specific rows in the Read Before You Change table

Leave Start Here, Instruction Hierarchy, Stop and Ask, and Done as they are. Do not copy your `HC-n` or `INV-n` lists into `AGENTS.md`, and keep the file under 200 lines.

### Step 7: Customize the agent-specific files

For Claude: Fill in the "Custom Claude Instructions" section of `CLAUDE.md` with any Claude-specific rules, important commands, and paths.

For Copilot: Fill in the "Custom Copilot Instructions" section of `.github/copilot-instructions.md`.

If you don't use one of these agents, you can leave the file empty or delete it.

### Step 8: Install the skills for AI agents

Copy both skill folders into the repository so AI agents can invoke them directly:

```bash
mkdir -p .claude/skills
cp -r <path-to-spec-driven-docs>/skills/spec-driven-development \
      <path-to-spec-driven-docs>/skills/spec-driven-docs-setup \
      .claude/skills/
```

If copying from the source repo isn't practical, create `.claude/skills/spec-driven-development/SKILL.md` and `.claude/skills/spec-driven-docs-setup/SKILL.md` and paste in the content from those files verbatim.

The template `AGENTS.md` ("Start Here") and the overlay templates already tell agents to load the skill from `.claude/skills/`, so no further wiring is needed.

For Claude Code, the session hook copied in Step 1 runs at every session start. Check it once:

```bash
sh .claude/hooks/session-start.sh
```

It should print the skill reminder, active decision records, open proposals, and the latest changelog handover. It only reads files.

### Step 9: Update README.md

Replace the template README with a genuine project README. It should cover:
- What the project does
- How to set it up
- How to run it
- Key commands
- Known limitations

### Step 10: Initialize CHANGELOG.md

Add an initial entry recording who set up the project and what was filled in. New entries go at the top of the file. If you use GitHub Actions, `.github/workflows/spec-docs-checks.yml` fails any pull request that does not add an entry; delete the workflow if you do not want that gate.

---

## Adopting This System in an Existing Repo

Adopting this system mid-project is valuable but requires care. Incorrect or outdated documentation is worse than no documentation, because agents will act on it.

### Recommended adoption order

**Phase 1 (Understand before writing)**

Before writing anything, read the existing codebase enough to answer:
- What does this system actually do today?
- What are the real constraints and invariants?
- What do you wish every new developer knew on day one?

**Phase 2 (Start with coreIdentity and the "never" lists)**

Fill in what the project *is not* and *must not become* first. These are usually clearer than positive identity statements. The "Hard Constraints / Never List" in coreIdentity.md is the highest-value section to fill in early, because it immediately prevents agents from making bad suggestions.

**Phase 3 (Document existing architecture accurately)**

Map what exists now in architecture.md. Do not describe the architecture you wish you had — describe what is actually there. You can note aspirational future state separately if useful.

**Phase 4 (Fill in the manifesto and roadmap)**

Encode your existing team standards in developmentManifesto.md. Put current work in the roadmap as "Current Version" and past decisions in "Deferred" or "Rejected."

**Phase 5 (Add agent files last)**

AGENTS.md and the tool-specific files should be the last things you fill in, because they reference everything else. Writing them last means you can reference your actual documents rather than placeholders.

**Phase 6 (Install the skills)**

After completing the agent files, install both skills so AI agents can invoke them directly:

```bash
mkdir -p .claude/skills
cp -r <path-to-spec-driven-docs>/skills/spec-driven-development \
      <path-to-spec-driven-docs>/skills/spec-driven-docs-setup \
      .claude/skills/
```

Then confirm the session hook runs (see Step 8 above). This ensures future agents working in the repo load the skills immediately rather than relying only on the governance documents.

When adopting mid-project, existing code may already break a constraint you have just written down. Do not leave that implicit: for each case, either fix the code or approve a decision record in `development-docs/decisions/`.

### What to do when you can't fill everything in

Leave the section with a comment explaining what's unknown or why it's blank. For example:

```markdown
## Major Subsystems
<!-- Not yet documented. See the source code in src/services/ for the actual structure. -->
```

Agents will skip a blank section rather than invent content. A comment clarifies the blank is intentional.

---

## Deviations and decision records

The point of the system is that every rule is either followed or deliberately overridden — never quietly worked around.

When a request conflicts with a Hard Constraint (`HC-n`), an Architectural Invariant (`INV-n`), a Rejected roadmap item, a manifesto rule, or an approved proposal, the agent stops and tells you which rule is in the way and what the compliant alternatives are. You then choose:

- **Decline** — the agent does the compliant alternative or leaves the task undone.
- **Approve the deviation** — the agent writes a decision record from `development-docs/decisions/TEMPLATE.md` (`D-NNNN-short-title.md`) *before* implementing. It names the rule, the reason, the exact scope, you as approver, and a review date.
- **Change the rule** — if the rule is simply wrong now, edit the governing document instead.

Only you approve a record; an agent cannot approve its own deviation. Active records are shown to Claude Code at every session start, so exceptions stay visible. When a record expires or is superseded, it moves to `development-docs/decisions/archives/`.

Review the active records at each release. A long list of active deviations from one rule means the rule should change.

## Proposals

For a structural change or a new capability, the agent drafts a one-page proposal from `development-docs/architecture-plans/TEMPLATE.md` (`P-NNNN-short-title.md`) and waits. It does not ask whether to write one. You approve, edit, or reject it; the agent implements only an Approved proposal, then applies the document updates the proposal lists and archives it. Rejected proposals are archived too, so the next agent can see what was already considered.

---

## Section-by-Section: What's Required vs. Optional

### coreIdentity.md

| Section | Required? | Notes |
|---------|-----------|-------|
| Project Identity | Required | Every agent reads this first |
| Core Purpose | Required | Used to evaluate whether changes are in scope |
| Central Philosophy | Recommended | Helps with ambiguous decisions |
| Identity Pillars | Recommended | Five principles is usually better than twenty |
| Target Users and Use Cases | Required | Agents use this to understand who the system serves |
| Core Experience | Optional | More useful for product/design-facing projects |
| Product and Design Ethos | Optional | Skip for backend/infrastructure projects |
| AI Role and Boundaries | Required | Defines what AI agents may/must not do |
| Data, Privacy, and Ownership | Required if handling user data | Skip if the project has no user data |
| What This Project Is | Required | Keep short — three to five bullet points |
| What This Project Is Not | Required | This section prevents the most AI mistakes |
| Hard Constraints / Never List | Required | These are read as non-negotiable rules; number them `HC-n` |
| Domain Model / Core Concepts | Recommended | Prevents agents from using the wrong terminology |
| Success Criteria | Recommended | Helps agents flag when something looks wrong |
| Decision Filter | Optional | Useful for teams that need to say "no" frequently |
| Related Documents | Recommended | Cross-links help agents navigate |

### developmentManifesto.md

| Section | Required? | Notes |
|---------|-----------|-------|
| Purpose | Keep | Don't delete — it explains the file to new agents |
| Development Standard | Recommended | One sentence about how things should be built |
| Core Development Principles | Required | Keep the general principles; customize as needed |
| Project-Specific Doctrine | Required | This is your most important customization |
| AI Role in Development | Required | Define what agents may and must not do |
| Change Discipline | Required | Scope rules prevent creeping rewrites |
| Architecture Source of Truth | Required | Tells agents when to update architecture.md |
| Safety, Privacy, Non-Destructive | Required | Do not weaken these sections |
| Architecture and Modularity | Recommended | Useful for larger codebases |
| Testing and Validation | Required | At minimum, specify what counts as validated |
| Documentation Requirements | Required | Specifies when docs must be updated |
| Dependency Philosophy | Optional | Most useful for strict dependency policies |
| Error Handling | Recommended | Especially important for user-facing systems |
| Agent Operating Rules | Required | The fourteen rules should stay mostly unchanged |
| Agent-Specific Instructions | Optional | Only if agents need different rules; overlays are the preferred home |
| Definition of Done | Required | Must match your actual team standards; the only one in the system |
| Final Principle | Keep | Don't delete |

### architecture.md

Fill in what you know. Leave unknown sections blank with a comment. Do not speculate.

The most important sections:
- Architecture Summary
- Directory and File Map
- Major Subsystems
- Architectural Invariants
- When to Update This Document

### productRoadmap.md

The most important sections:
- Current Product State
- Current Version Focus
- Rejected / Out-of-Scope Directions
- AI-Coding-Agent Roadmap Guidance

Future version planning can be minimal until you know what's actually next.

---

## Best Practices

**Keep documents honest, not aspirational.** Documents that describe what you want instead of what exists cause agents to make wrong decisions. Mark aspirational content clearly: "Future state: ..." or move it to productRoadmap.md.

**Shorter and accurate beats longer and stale.** A 200-word coreIdentity.md that's accurate is more valuable than a 2,000-word one that's 40% outdated.

**The "Never List" is the highest-value thing you can write.** The more specific the constraints, the better agents behave. "Never call the external API without rate-limiting" is more useful than "be careful with external APIs."

**Update docs when behavior changes, not when ideas change.** If you're still deciding whether to do something, don't put it in architecture.md. Put it in productRoadmap.md under "Open Product Questions."

**Enforce what you can.** Instructions are advisory; an agent can skip them. A CI check or a hook cannot be skipped. Whenever a rule can be verified mechanically, verify it, and keep prose for the judgment calls.

**Review the docs when something goes wrong.** If an AI agent did something you didn't want, the first question is: "Is there a document that should have prevented this?" Usually the answer is yes, and the fix is updating that document.

**Treat CHANGELOG.md as a conversation log, not a git log.** The changelog records decisions, blockers, and handoff notes — not just what code changed. Future agents and teammates will thank you.

---

## Common Mistakes

**Writing docs after the work is done.** Documentation written after implementation tends to describe the result rather than the constraints. Write the constraints before the work, even if briefly.

**Conflicting documents.** If architecture.md says "we use PostgreSQL" and the code uses SQLite, agents will be confused. Keep documents in sync. The instruction hierarchy determines which document wins when they conflict, but the real fix is eliminating conflicts.

**Treating productRoadmap.md as a sprint board.** Mark items done by updating the status label. Don't delete past items — the history of "Rejected" decisions is valuable.

**Leaving agent files as templates.** An AGENTS.md that still says "[Project Name]" in the Project Summary is worse than no AGENTS.md, because it signals the documentation isn't maintained.

**Duplicating content across files.** Each document owns a specific domain. If you find yourself writing the same thing in two places, one of them is wrong. Cross-reference with a link instead.

---

## Keeping Docs Current

A documentation system that becomes stale is worse than no documentation system.

### Version check before pull requests

Treat `package.json` as the authoritative version source. Before an agent opens a pull request, it should ask whether the change needs a version bump. If yes, the maintainer should choose patch, minor, or major. Do not make that choice silently.

**After each sprint or major change:**
- Check whether architecture.md reflects the current state
- Add a CHANGELOG.md entry
- Update README.md if setup or behavior changed

**After each version release:**
- Update productRoadmap.md status labels
- Move released features to "Current Product State"
- Review coreIdentity.md for drift
- Review the active records in `development-docs/decisions/`: expire, renew, or turn each into a rule change

**When something breaks unexpectedly:**
- Check whether the failure mode should be documented in architecture.md
- Check whether a principle in developmentManifesto.md was violated
- Add a note to CHANGELOG.md about what happened

**Assign ownership.** At least one person should be responsible for reviewing docs each release. Documentation without an owner tends to go stale.
