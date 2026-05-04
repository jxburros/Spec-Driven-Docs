# [Project Name] — Product Roadmap

> **For AI Agents (OpenAI Codex, Anthropic Claude Code, GitHub Copilot, and other coding agents):**
>
> Read `development-docs/coreIdentity.md`, `development-docs/developmentManifesto.md`, and `development-docs/architecture.md` before implementing roadmap work.
>
> This roadmap describes the current version focus and planned future product direction.
>
> This file is **not** a sprint board, issue tracker, changelog, or daily implementation checklist.
>
> Do not update this file for ordinary implementation progress. Update it only near version boundaries, feature-version releases, or when product direction changes.

---

## How to Use This Template  
**Status: Required**

This template is intentionally version-oriented and fairly static.

The purpose of `productRoadmap.md` is to explain:

- What version is currently being built
- What major development items belong in that version
- What future versions are expected to contain
- What ideas are candidates for later
- What directions are deferred, rejected, or out of scope
- What product questions remain unresolved

This document should usually be updated only when:

- Starting a new full version
- Starting a new feature version
- Completing a full version or feature version
- Changing product direction
- Adding or removing a major planned capability
- Re-sequencing future versions
- Deferring or rejecting a significant roadmap item

This document should usually **not** be updated when:

- A small implementation task is completed
- A bug is fixed
- A refactor happens without product-direction impact
- A pull request changes implementation details
- A changelog entry would be more appropriate
- An issue tracker entry would be more appropriate
- `architecture.md` is the correct place to document a structural change

Sections are labeled as:

- **Required** — should appear in every `productRoadmap.md`.
- **Recommended** — useful for most repos.
- **Optional** — include only when helpful.
- **Required for AI-agent-assisted repos** — required when AI agents are expected to use the roadmap for development planning.

A short roadmap is acceptable if it clearly explains the current version focus and future version direction.

---

## Roadmap Status Legend  
**Status: Recommended**

Use these labels to describe roadmap items at a version level.

- ✅ **Released** — included in a completed version.
- 🚧 **Current Version** — planned for the version currently being built.
- 🔜 **Next Version** — planned for the next feature/full version after the current one.
- 🌱 **Future Candidate** — plausible future direction, not yet committed to a version.
- 🧊 **Deferred** — intentionally delayed.
- ❌ **Rejected / Out of Scope** — intentionally not planned.

These labels are for roadmap-level planning, not day-to-day task tracking.

---

## 1. Roadmap Purpose  
**Status: Required**

This roadmap describes the planned product direction for **[Project Name]**.

It exists to help humans and AI agents understand:

- What the project is currently building toward
- Which capabilities belong in the current version
- Which capabilities are planned for later versions
- Which ideas are intentionally deferred or rejected
- How future work should remain aligned with the project identity

This roadmap should be interpreted alongside:

- `development-docs/coreIdentity.md` — defines what the project is and must remain.
- `development-docs/developmentManifesto.md` — defines how the project should be developed.
- `development-docs/architecture.md` — defines the current technical structure.
- `CHANGELOG.md` — records what has actually changed.
- Issue trackers / project boards — track granular implementation work.

The roadmap guides direction, but it does not override the project identity, development manifesto, or current architecture.

---

## 2. Product Direction Summary  
**Status: Required**

[Project Name] is moving toward [high-level product direction].

The current roadmap is organized around the following product goals:

1. **[Goal 1]** — [Short explanation.]
2. **[Goal 2]** — [Short explanation.]
3. **[Goal 3]** — [Short explanation.]
4. **[Goal 4]** — [Short explanation.]

The project should prioritize:

- [Priority 1]
- [Priority 2]
- [Priority 3]
- [Priority 4]

The project should avoid:

- [Avoided direction 1]
- [Avoided direction 2]
- [Avoided direction 3]
- [Avoided direction 4]

---

## 3. Current Product State  
**Status: Recommended**

Use this section to summarize what already exists at the current release baseline.

This section should describe stable product capabilities, not every small implementation detail.

### Current Version / Baseline

**Current Version:** `[vX.Y / vX.Y.Z / pre-1.0 / MVP / alpha / beta]`  
**Current State:** `[Released / in development / partially released / internal-only]`  
**Last Roadmap Review:** `[YYYY-MM-DD]`

### Current Capabilities

The following capabilities are currently available or substantially implemented:

- ✅ **[Capability 1]:** [Brief explanation.]
- ✅ **[Capability 2]:** [Brief explanation.]
- ✅ **[Capability 3]:** [Brief explanation.]
- ✅ **[Capability 4]:** [Brief explanation.]

### Partially Built / Needs Completion

The following capabilities exist partially but need additional work:

- ⚠️ **[Partial capability 1]:** [What exists and what remains.]
- ⚠️ **[Partial capability 2]:** [What exists and what remains.]
- ⚠️ **[Partial capability 3]:** [What exists and what remains.]

### Current Product Constraints

The current product state has these important constraints:

- [Constraint 1]
- [Constraint 2]
- [Constraint 3]

---

## 4. Current Version Focus  
**Status: Required**

The current version is:

> **[Version Number / Version Name] — [Theme]**

### Version Goal

The goal of this version is to [clear version-level outcome].

This version should make the project:

- [Outcome 1]
- [Outcome 2]
- [Outcome 3]
- [Outcome 4]

### Why This Version Matters

[Explain why this version is the right next step.]

This version matters because:

- [Reason 1]
- [Reason 2]
- [Reason 3]

### Version Scope

This version includes:

- [Major capability 1]
- [Major capability 2]
- [Major capability 3]
- [Major capability 4]

This version does **not** include:

- [Out-of-scope item 1]
- [Out-of-scope item 2]
- [Out-of-scope item 3]

---

## 5. Current Version Development Items  
**Status: Required**

Use this section for the major development items that belong in the current version.

These should be product-level capabilities, not every small implementation task.

---

### 5.1 [Development Item Name]  
**Status:** 🚧 Current Version  
**Version Target:** `[vX.Y]`

#### Purpose

[Explain why this item belongs in the current version.]

#### Development Scope

This item includes:

- [Major scope item 1]
- [Major scope item 2]
- [Major scope item 3]

This item does not include:

- [Out-of-scope detail 1]
- [Out-of-scope detail 2]

#### Completion Standard

This item is complete when:

- [Product-level completion condition 1]
- [Product-level completion condition 2]
- [Product-level completion condition 3]

#### Dependencies / Sequencing Notes

- [Dependency or sequencing note 1]
- [Dependency or sequencing note 2]

#### Documentation Notes

When this item is completed, consider whether updates are needed to:

- `README.md`
- `CHANGELOG.md`
- `development-docs/architecture.md`
- `development-docs/coreIdentity.md`
- `development-docs/developmentManifesto.md`
- Agent instruction files

---

### 5.2 [Development Item Name]  
**Status:** 🚧 Current Version  
**Version Target:** `[vX.Y]`

#### Purpose

[Explain why this item belongs in the current version.]

#### Development Scope

This item includes:

- [Major scope item 1]
- [Major scope item 2]
- [Major scope item 3]

This item does not include:

- [Out-of-scope detail 1]
- [Out-of-scope detail 2]

#### Completion Standard

This item is complete when:

- [Product-level completion condition 1]
- [Product-level completion condition 2]
- [Product-level completion condition 3]

#### Dependencies / Sequencing Notes

- [Dependency or sequencing note 1]
- [Dependency or sequencing note 2]

---

### 5.3 [Development Item Name]  
**Status:** 🚧 Current Version  
**Version Target:** `[vX.Y]`

#### Purpose

[Explain why this item belongs in the current version.]

#### Development Scope

This item includes:

- [Major scope item 1]
- [Major scope item 2]
- [Major scope item 3]

#### Completion Standard

This item is complete when:

- [Product-level completion condition 1]
- [Product-level completion condition 2]
- [Product-level completion condition 3]

---

## 6. Current Version Completion Criteria  
**Status: Required**

The current version is complete when:

- [Version-level completion criterion 1]
- [Version-level completion criterion 2]
- [Version-level completion criterion 3]
- [Version-level completion criterion 4]
- [Version-level completion criterion 5]

The version should not be considered complete if:

- [Blocking condition 1]
- [Blocking condition 2]
- [Blocking condition 3]

### Release Documentation Requirements

Before this version is considered complete:

- `CHANGELOG.md` should summarize the version’s meaningful changes.
- `README.md` should reflect current setup, usage, and product behavior.
- `development-docs/architecture.md` should reflect any architecture changes.
- Agent instruction files should reflect any changed workflow expectations.
- This roadmap should be reviewed and updated for the next version focus.

---

## 7. Planned Future Versions  
**Status: Required**

Use this section to describe expected future version direction.

Future version entries should be stable enough to guide planning, but they do not need detailed implementation tasks.

---

### Version [vNext] — [Version Theme]  
**Status:** 🔜 Next Version

#### Version Goal

[Explain what this future version is intended to accomplish.]

#### Planned Capabilities

This version is expected to include:

- [Capability 1]
- [Capability 2]
- [Capability 3]
- [Capability 4]

#### Why This Comes Next

[Explain why this version follows the current version.]

#### Known Dependencies

- [Dependency 1]
- [Dependency 2]
- [Dependency 3]

#### Not Yet Decided

- [Open decision 1]
- [Open decision 2]

---

### Version [vFuture] — [Version Theme]  
**Status:** 🌱 Future Candidate / 🔜 Next Version

#### Version Goal

[Explain what this future version is intended to accomplish.]

#### Planned Capabilities

This version may include:

- [Capability 1]
- [Capability 2]
- [Capability 3]

#### Notes

- [Planning note 1]
- [Planning note 2]

---

### Version [vFuture] — [Version Theme]  
**Status:** 🌱 Future Candidate

#### Version Goal

[Explain what this future version is intended to accomplish.]

#### Candidate Capabilities

This version may include:

- [Capability 1]
- [Capability 2]
- [Capability 3]

#### Conditions for Inclusion

This version should only move forward if:

- [Condition 1]
- [Condition 2]
- [Condition 3]

---

## 8. Later Ideas / Future Candidates  
**Status: Recommended**

Use this section for ideas that may fit the project someday but are not yet committed to a version.

These ideas should not be implemented unless they are promoted into a current or future version section.

### Candidate Ideas

- 🌱 **[Idea 1]:** [Brief explanation.]
- 🌱 **[Idea 2]:** [Brief explanation.]
- 🌱 **[Idea 3]:** [Brief explanation.]
- 🌱 **[Idea 4]:** [Brief explanation.]

### Conditions for Promotion

A candidate idea may be promoted into a planned version when:

- It supports the project identity.
- It has a clear user or maintainer benefit.
- It does not violate anti-goals.
- It has a plausible implementation path.
- It fits the sequencing of the current roadmap.
- It does not create disproportionate maintenance burden.

---

## 9. Deferred Work  
**Status: Recommended**

Use this section for work that may be valuable but is intentionally delayed.

Deferred work is not rejected. It is simply not part of the current roadmap sequence.

- 🧊 **[Deferred item 1]:** [Why it is deferred.]
- 🧊 **[Deferred item 2]:** [Why it is deferred.]
- 🧊 **[Deferred item 3]:** [Why it is deferred.]

Deferred work may be revisited when:

- [Condition 1]
- [Condition 2]
- [Condition 3]

---

## 10. Rejected / Out-of-Scope Directions  
**Status: Recommended**

Use this section for ideas that should not be implemented unless the project direction changes intentionally.

Rejected items should usually connect back to `coreIdentity.md` anti-goals or hard constraints.

- ❌ **[Rejected direction 1]:** [Why this is out of scope.]
- ❌ **[Rejected direction 2]:** [Why this is out of scope.]
- ❌ **[Rejected direction 3]:** [Why this is out of scope.]

Agents should not implement rejected directions without explicit human approval and a roadmap update.

---

## 11. Version Planning Notes  
**Status: Optional**

Use this section for stable planning notes that affect version sequencing.

Examples:

- [Feature A] should happen before [Feature B].
- [Capability X] depends on [architecture change Y].
- [Integration Z] should wait until [security/privacy requirement] is solved.
- [AI feature] should wait until deterministic/non-AI behavior is strong.
- [Collaboration feature] should wait until single-user workflows are reliable.

### Sequencing Rules

- [Sequencing rule 1]
- [Sequencing rule 2]
- [Sequencing rule 3]

### Product Risks

| Risk | Affected Version | Mitigation |
|---|---|---|
| `[risk]` | `[version]` | `[mitigation]` |
| `[risk]` | `[version]` | `[mitigation]` |
| `[risk]` | `[version]` | `[mitigation]` |

---

## 12. Open Product Questions  
**Status: Recommended**

Use this section for unresolved product questions that affect roadmap direction.

These are not implementation tasks. They are decisions that may shape future versions.

1. [Open question 1]
2. [Open question 2]
3. [Open question 3]
4. [Open question 4]

### Decision Notes

When a question is resolved:

- Update the relevant roadmap section if direction changes.
- Update `coreIdentity.md` if the decision changes project identity or boundaries.
- Update `architecture.md` if the decision changes system structure.
- Record meaningful decisions in `CHANGELOG.md` when appropriate.

---

## 13. AI-Coding-Agent Roadmap Guidance  
**Status: Required for AI-agent-assisted repos**

AI agents may use this roadmap to understand product direction and version scope.

AI agents should:

- Check whether requested work belongs to the current version.
- Prefer current-version work over future-version work unless instructed otherwise.
- Avoid implementing future-candidate ideas unless they have been promoted.
- Avoid treating this file as a granular task list.
- Use issue trackers or human instructions for specific implementation tasks.
- Check `architecture.md` before making architectural changes.
- Update `architecture.md` carefully if roadmap work changes architecture.
- Update `CHANGELOG.md` for meaningful completed changes.
- Update `README.md` when user-facing behavior, setup, or usage changes.

AI agents should not:

- Mark roadmap items complete after a single small PR unless the version-level completion standard is met.
- Add new roadmap items casually during implementation.
- Remove deferred or rejected items without explicit direction.
- Treat future candidates as approved scope.
- Use this roadmap to override `coreIdentity.md`.
- Use this roadmap to override the development manifesto.
- Use this roadmap to override current architecture.

If a requested change conflicts with this roadmap, the agent should identify the conflict and ask for direction or document the issue clearly.

---

## 14. Roadmap Maintenance Rules  
**Status: Required**

This roadmap should remain fairly static.

Update this file when:

- A new full version begins.
- A new feature version begins.
- A full version or feature version is completed.
- Product direction changes.
- A major capability is added to or removed from the planned roadmap.
- A future version is promoted into the current version.
- A candidate idea is promoted, deferred, or rejected.
- Major sequencing changes.
- Open product questions are resolved in a way that changes future direction.

Do not update this file for:

- Ordinary implementation progress.
- Small bug fixes.
- Minor refactors.
- Small UI copy changes.
- Routine dependency updates.
- PR-by-PR task completion.
- Changelog-level details.
- Architecture-only details that belong in `architecture.md`.
- Issue-level details that belong in an issue tracker.

### Relationship to Other Documents

Use the right document for the right kind of change:

| Change Type | Update This File? | Better Location |
|---|---:|---|
| Major version direction changes | Yes | `productRoadmap.md` |
| Current version scope changes | Yes | `productRoadmap.md` |
| Small completed tasks | No | `CHANGELOG.md` / issue tracker |
| Bug fixes | Usually no | `CHANGELOG.md` |
| Architecture changes | Only if direction changes | `architecture.md` |
| Setup or usage changes | No, unless roadmap direction changes | `README.md` |
| Development process changes | No, unless roadmap direction changes | `developmentManifesto.md` |
| Identity or anti-goal changes | Only if product direction changes | `coreIdentity.md` |

### Review Cadence

Review this roadmap:

- At the start of each full version
- At the start of each feature version
- Before declaring a version complete
- When product direction changes
- When future work needs to be re-sequenced

---

## Minimum Useful Version

A short `productRoadmap.md` can be complete with only:

1. Roadmap Purpose
2. Product Direction Summary
3. Current Product State
4. Current Version Focus
5. Current Version Development Items
6. Planned Future Versions
7. Open Product Questions
8. Roadmap Maintenance Rules

If those sections clearly explain what is being built now, what is planned next, and when the roadmap should change, the document is doing its job.
