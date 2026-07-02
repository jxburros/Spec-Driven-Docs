---
name: spec-driven-docs-setup
description: Create customized, complete versions of the Spec-Driven Docs (coreIdentity.md, developmentManifesto.md, architecture.md, productRoadmap.md, AGENTS.md, tool overlays, CHANGELOG.md, README.md) for a repository. Use when adopting the doc system in a new or existing repo, or when the docs still contain template placeholders. Fills templates from evidence already in the repo and asks the user targeted questions only where evidence cannot answer.
---

# Spec-Driven Docs Setup

You are helping a maintainer produce customized, complete versions of the Spec-Driven Docs for a specific repository. The finished documents will govern every future AI agent and contributor in this repo, so the standard is: **accurate over complete, evidence over invention, and honest questions over plausible guesses.**

Incorrect documentation is worse than no documentation — agents will act on whatever you write. Never fill a section with content you cannot support with repo evidence or a user answer.

## The core method

For every template section, classify it into one of three buckets:

1. **Infer** — the repo contains direct evidence (code, configs, tests, CI, README, git history). Fill it in from that evidence.
2. **Infer, then confirm** — evidence suggests an answer but intent matters (e.g. "this looks local-first — is that a deliberate constraint or an accident of history?"). Draft it, mark it, and confirm with the user before finalizing.
3. **Ask** — the answer lives only in the maintainer's head (values, direction, hard constraints, target users, what's rejected). Never invent these; ask.

If the user can't or won't answer something, leave the section blank with an explanatory comment rather than guessing:

```markdown
<!-- Not yet defined. Maintainer to fill in. See src/services/ for current behavior. -->
```

## Phase 1: Gather evidence from the repo

Before asking the user anything, build an evidence base. Investigate as applicable:

- **README and existing docs** — stated purpose, setup, features, limitations, contribution rules
- **Manifest/build files** (`package.json`, `pyproject.toml`, `Cargo.toml`, `go.mod`, Makefile, Dockerfile, etc.) — language, dependencies, scripts, entry points, install/test/build/lint commands
- **Directory structure** — modules, layering, where business logic vs. UI vs. infrastructure lives
- **Code itself** — data flow, storage (databases, files, localStorage), external services and APIs called, auth, generated artifacts, configuration schema
- **Tests and CI workflows** — what validation exists, what the team actually runs, quality gates
- **Git history** — active areas, recent direction, whether large refactors happened, contributor patterns
- **Issues/PRs if accessible** — current priorities, rejected proposals, known pain points
- **Existing agent files** (`AGENTS.md`, `CLAUDE.md`, `.cursorrules`, `.github/copilot-instructions.md`) — rules already in force that must be preserved or migrated

Record findings as you go; you will cite this evidence in the drafts and in your questions ("I see X in the code — is that intentional?" is a far better question than "what are your constraints?").

Also determine the starting state:

- **Templates already copied in** (placeholders like `[Project Name]` present) → complete them in place.
- **No docs yet** → copy the template set from the Spec-Driven-Docs repo (or recreate its structure): `development-docs/{coreIdentity,developmentManifesto,architecture,productRoadmap}.md`, `AGENTS.md`, tool overlays, `CHANGELOG.md`, and update `README.md`.
- **Partially customized docs** → treat existing filled-in content as authoritative unless it contradicts the code; flag contradictions to the user rather than silently rewriting.

## Phase 2: Ask the user targeted questions

Ask questions **in one or two batches**, not a drip-feed. Group them by document, keep the total small (roughly 5–12), and offer your evidence-based best guess with each question so the user can just confirm. Skip any question the evidence already answers decisively.

### Always ask (evidence cannot answer these)

- **Identity:** What is this project in one sentence, and what must it never become? (Offer a draft from the README.) What's the distinctive identity — what makes it different from the generic category?
- **Hard constraints / Never list:** Any non-negotiables? (Prompt with candidates observed in code: "no telemetry", "local-first", "no new runtime dependencies", "never call external APIs without rate limits"...) This is the highest-value section in the whole system — push for specifics.
- **Target users:** Who is the primary audience, and is there a secondary audience that should *not* drive the design?
- **AI role and boundaries:** What may AI agents do here, and what must they never do (e.g. touch migrations, edit generated files, deploy, modify CI)?
- **Roadmap:** What is the current version focus (the one thing being built now)? What is planned next? What has been considered and **rejected**? (Rejected directions prevent the most agent mistakes.)
- **Definition of Done specifics:** What must pass before work counts as done (specific test/lint/build commands, review requirements)? Confirm the commands you found in Phase 1.

### Ask only if evidence is ambiguous

- Data/privacy stance (ask if the repo handles user data and the stance isn't evident)
- Whether observed patterns are conventions to enforce or accidents to ignore (e.g. "all state goes through the store — rule or habit?")
- Domain terminology that appears in code but isn't defined anywhere
- Which AI tools the team actually uses (determines which overlay files to keep — delete or leave empty the others)
- Version numbering / release conventions, if history doesn't show them

### Do not ask

- Anything the repo answers directly (language, structure, dependencies, commands that exist in scripts/CI)
- Generic philosophy questions with obvious defaults ("do you value maintainability?") — keep the template's general principles unless the user objects
- Section-by-section permission — draft everything you can, then review together

## Phase 3: Draft the documents in dependency order

Write them in this order, because later documents reference earlier ones:

1. **`development-docs/coreIdentity.md`** — anchors everything. Sections that must be real: Project Identity, Core Purpose, Target Users, AI Role and Boundaries, What This Project Is, What This Project Is Not, Hard Constraints / Never List. Write what is true today, not aspirations. Drop optional sections that don't apply (e.g. Product/Design Ethos for a backend library) instead of filling them with filler.
2. **`development-docs/developmentManifesto.md`** — keep the general principles and the Agent Operating Rules mostly as-is; the real customization is the Project-Specific Development Doctrine (domain rules like "never write raw SQL"), AI Role in Development, Agent-Specific Instructions (only for tools the team uses), and the Definition of Done with the repo's actual validation commands.
3. **`development-docs/architecture.md`** — describe **only what exists now**, from your Phase 1 evidence. Prioritize: Architecture Summary, Directory and File Map, Major Subsystems, data flow, external integrations, and Architectural Invariants. Leave unknown sections blank with a comment. Never write speculative or wished-for architecture.
4. **`development-docs/productRoadmap.md`** — Current Product State (what exists), Current Version Focus, next version, Future Candidates, and especially Rejected / Out-of-Scope Directions, all from the user's Phase 2 answers. Keep it version-level; it is not a sprint board.
5. **`AGENTS.md`** — keep the standard workflow/hierarchy sections; customize Project Summary, Non-Negotiable Project Values, Domain-Specific Rules, and Custom Repo Instructions (real commands, important paths, known gotchas). Write it last-but-one so it can reference the now-real documents.
6. **Tool-specific overlays** (`CLAUDE.md`, `.github/copilot-instructions.md`, etc.) — fill the custom sections (rules, priorities, commands) for tools the team uses; delete or leave minimal the ones they don't. Overlays must defer to `AGENTS.md`, not duplicate it.
7. **`README.md`** — ensure it covers what the project does, setup, usage, key commands, and known limitations. Update rather than replace if a real README exists.
8. **`CHANGELOG.md`** — create if missing; append an entry (format below) recording the setup.

Finishing rules for every document:

- Remove all remaining `[placeholders]`, the "How to Use This Template" section, and the `**Status: Required/Recommended/Optional**` labels — a completed doc should not look like a template.
- Delete example blocks that were illustrating how to fill the template.
- Keep each doc's "when to update this document" guidance — future agents need it.
- Don't duplicate content across documents; cross-reference instead. Each doc owns its domain (identity vs. standards vs. structure vs. direction).
- Shorter and accurate beats longer and generic. A 200-word accurate section outperforms 2,000 words of filler.

## Phase 4: Review and verify

1. **Consistency pass:** the docs must not contradict each other or the code (e.g. architecture.md says PostgreSQL, code uses SQLite). Fix or flag every conflict.
2. **Placeholder scan:** search all edited files for `[`, `TODO`, `TBD`, and "Status:" leftovers; each remaining blank must have an explanatory comment.
3. **Link check:** relative links between documents resolve.
4. **User review:** present a summary of what you inferred (with the evidence), what they told you, and what remains blank for them to fill. Apply their corrections.
5. **Changelog entry:** append to `CHANGELOG.md`:

```markdown
## YYYY-MM-DD — Agent: <Tool Name> (<Model Name>)

### Changed
- Set up Spec-Driven Docs: customized coreIdentity, developmentManifesto, architecture, productRoadmap, AGENTS.md, [overlays].

### Not completed
- [Sections intentionally left blank and why, or "None."]

### Notes
- [What was inferred from repo evidence vs. answered by the maintainer]
- [Contradictions found between existing docs/code and how they were resolved]

### Handover
- Next agent should start with: reading AGENTS.md and development-docs/coreIdentity.md.
- Open questions: [unanswered questions for the maintainer]
- Risks or assumptions: [inferences the maintainer should double-check]
```

## Anti-patterns to avoid

- **Inventing identity or constraints** the user never stated — the whole system exists to stop agents guessing; don't guess while building it
- **Aspirational documentation** — describing the architecture or standards the team wishes it had
- **Leaving template placeholders** in "completed" docs — an `AGENTS.md` that still says `[Project Name]` signals the docs are unmaintained
- **Filling every optional section** — empty filler dilutes the sections that matter; delete what doesn't apply
- **Duplicating rules across documents** — one owner per rule, cross-reference elsewhere
- **Silently overwriting existing customized content** — flag conflicts, don't erase decisions
- **One question at a time** — batch questions; respect the user's time
