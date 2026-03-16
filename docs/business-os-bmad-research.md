# Business OS BMAD v6 Research v1

Status: Research note
Purpose: Capture what BMAD v6 does well, what should be learned from it, and how to adapt those patterns into a Business OS that works well with both Codex skills and Claude Code skills.

---

## 1. Bottom Line

BMAD v6 is useful to study not because we should copy its software-development content, but because it solves several architecture problems well:

- how to route users into the right workflow
- how to split a large system into modules
- how to pair specialized agents with guided workflows
- how to keep customization update-safe
- how to manage context efficiently
- how to make the system usable across different IDEs and agent environments

For Business OS, the right move is:

- copy the architectural patterns
- replace the software-development workflows with business workflows
- design the system around Codex skills as the main portable unit
- add Claude Code support through matching skills, slash commands, memory, and hooks where useful

---

## 2. What BMAD v6 Appears To Do Well

## 2.1 Modular Core + Domain Modules

BMAD v6 is built around a core plus separate modules. The official BMAD repository describes:

- a core framework
- multiple official modules
- custom modules through BMad Builder

This matters because it separates:

- universal orchestration logic
- domain-specific workflows

Source:

- https://github.com/bmad-code-org/BMAD-METHOD

## 2.2 Scale-Adaptive Routing

BMAD emphasizes that planning depth should adapt to project complexity rather than stay fixed. The official repo describes this as scale-adaptive behavior and multiple workflow tracks.

This is a strong pattern for Business OS too.

We should not force every business user through the same depth.

Instead:

- a vague idea gets lighter discovery
- a pivot gets diagnostic depth
- a new category expansion gets a smoke test
- a large enterprise-style business gets more governance

Sources:

- https://github.com/bmad-code-org/BMAD-METHOD
- https://bmadcodes.com/

## 2.3 Specialized Agents + Structured Workflows

BMAD combines:

- specialized agents
- structured workflows

That is one of the best lessons to copy.

The system should not rely only on “smart agents.”
It should also define repeatable workflows.

For Business OS, this means:

- agents for roles like strategist, researcher, pricing analyst, GTM architect
- workflows for intents like start, pivot, launch, diagnose, expand

Sources:

- https://github.com/bmad-code-org/BMAD-METHOD
- https://github.com/aj-geddes/claude-code-bmad-skills

## 2.4 Update-Safe Customization

BMAD v6 explicitly emphasizes persistent customization and custom modules surviving updates.

This is important for Business OS because users will want:

- their own business overlays
- local country overlays
- vertical-specific workflows
- custom prompt rules and templates

We should design for a stable core plus separately maintained custom content.

Sources:

- https://github.com/bmad-code-org/BMAD-METHOD
- https://github.com/bmadcode/BMAD-METHOD

## 2.5 Context Discipline

BMAD v6 emphasizes document sharding and structured workflow context loading. A community Claude Code implementation also emphasizes token optimization and helper patterns.

This matters a lot for Business OS because business discovery can create very large context quickly.

We should design for:

- progressive disclosure
- only loading the module currently needed
- keeping large research docs out of baseline context

Sources:

- https://github.com/bmad-code-org/BMAD-METHOD
- https://github.com/aj-geddes/claude-code-bmad-skills

---

## 3. What We Should Not Copy

We should not copy BMAD as-is.

The Business OS is not an agile software-delivery system.

So we should not inherit:

- PRD-centric assumptions as the universal default
- software story implementation structure as the center of everything
- engineering-specific agent roles as the main system metaphor
- dev-phase language where business language is clearer

In short:

- copy the operating model
- do not copy the domain content

---

## 4. What This Means For Business OS

The Business OS should become:

- a core orchestration layer
- plus business modules
- plus skills and commands
- plus update-safe overlays

It should behave like a business equivalent of BMAD Core + Builder, but for:

- business design
- business diagnosis
- market and customer research
- offer design
- pricing and finance
- operations
- channels and growth
- expansion and experimentation

---

## 5. Best Mapping For Our System

## 5.1 Core Layer

Equivalent to BMAD Core.

This should hold:

- intent routing
- context classification
- module selection
- decision-gate rules
- artifact rules
- shared question and evidence standards

For us, this is already mostly defined by the Business OS docs.

## 5.2 Business Module Layer

Equivalent to BMAD domain modules.

For us, modules should group related business workflows such as:

- Foundation Module
- Strategy Module
- Offer And Economics Module
- GTM Module
- Operations Module
- Expansion Module

## 5.3 Builder Layer

Equivalent to BMAD Builder.

This is critical if we want the system to be reusable beyond Chitr.

It should allow us later to add:

- India legal overlay
- physical product deep-pack
- SaaS deep-pack
- real estate service overlay
- distributor-model overlay
- creator-business overlay

## 5.4 Creative / Research Layer

Equivalent to BMAD's creative suite.

We likely want reusable workflows for:

- brainstorming
- market research
- competitor teardown
- customer interview planning
- positioning exploration

---

## 6. How To Use Codex Skills

Codex skills are a strong fit for this system.

OpenAI documents that a Codex skill is a directory with `SKILL.md` plus optional scripts, references, assets, and optional `agents/openai.yaml`. Codex uses progressive disclosure and can invoke skills explicitly or implicitly from their descriptions.

That fits our needs extremely well.

Key implications:

- each Business OS skill should be one focused job
- skill descriptions should be very explicit about when they should trigger
- references and templates should live alongside the skill, not inside one giant file
- the repo-level `.agents/skills` folder is the right home for project skills

Sources:

- https://developers.openai.com/codex/skills
- https://github.com/openai/skills

### Recommended Codex Pattern

Use Codex skills as the main portable execution unit:

- one skill per entry workflow
- one skill per shared utility where needed
- keep most logic instruction-first
- add scripts only where deterministic behavior matters

Examples:

- `start-business`
- `validate-business-idea`
- `pivot-business`
- `launch-product-or-service`
- `pricing-diagnosis`
- `expansion-smoke-test`
- `document-business`

Shared utility skills:

- `business-os-router`
- `business-os-research`
- `business-os-artifact-builder`

---

## 7. How To Use Claude Code Skills

Claude Code also supports reusable skill-like behavior through skills, slash commands, project memory, and hooks.

Anthropic documents:

- project memory in `CLAUDE.md`
- skill configuration with frontmatter such as `name`, `description`, `allowed-tools`, `context: fork`, and `hooks`
- dynamic context injection
- custom slash-command style invocation
- hook-based automation and enforcement

Sources:

- https://code.claude.com/docs/en/slash-commands
- https://code.claude.com/docs/en/memory
- https://code.claude.com/docs/en/hooks-guide
- https://code.claude.com/docs/en/hooks

### Recommended Claude Code Pattern

Use Claude Code for:

- team-shared project instructions in `CLAUDE.md`
- manual workflow entry through slash-style skills
- forked subagent research for heavy exploration work
- hook-based guardrails for workflow enforcement where appropriate

Useful examples:

- a hook that warns if a business artifact is created without updating the assumption log
- a skill that forks a research subagent for competitor research
- a project `CLAUDE.md` that tells Claude where the Business OS docs live and how to route work

---

## 8. Recommended System Shape

The best structure is likely:

1. `Business OS Core`
2. `Business Domain Modules`
3. `Workflow Skills`
4. `Artifact Templates`
5. `Overlays`
6. `Memory / Rules / Hooks`

### 8.1 Business OS Core

Contains:

- routing rules
- context classifier
- module map
- artifact map
- gate philosophy
- evidence rubric

### 8.2 Business Domain Modules

Contains the actual business specs:

- customer research
- positioning
- offer architecture
- pricing
- finance
- operations
- channels
- marketing
- retention
- expansion

### 8.3 Workflow Skills

These are the user-facing operating entry points.

Examples:

- start from scratch
- validate idea
- pivot business
- launch new line
- improve sales
- fix economics
- evaluate expansion
- document business
- diagnose business

### 8.4 Artifact Templates

These should standardize outputs such as:

- founder brief
- customer research brief
- pricing memo
- route-to-market memo
- launch dossier
- expansion decision dossier

### 8.5 Overlays

These should remain separate and installable:

- India overlay
- physical product overlay
- SaaS overlay
- local service overlay
- education overlay
- import and distributor overlay

### 8.6 Memory / Rules / Hooks

For Claude Code:

- `CLAUDE.md`
- `.claude/rules/`
- hooks for guardrails

For Codex:

- `AGENTS.md`
- skill descriptions
- skill-local references and templates

---

## 9. Recommended Folder Strategy

If we want this to work well in Codex first and stay portable to Claude Code, the cleanest repo structure is likely:

```text
.agents/
  skills/
    business-os-router/
    start-business/
    validate-business-idea/
    pivot-business/
    launch-product-or-service/
    improve-sales-or-marketing/
    fix-pricing-or-capital/
    improve-operations/
    improve-retention/
    expansion-smoke-test/
    document-business/
    diagnose-business/
docs/
  business-os-framework.md
  business-os-*.md
  templates/
  overlays/
.claude/
  CLAUDE.md
  rules/
  commands/
```

This is an inference from the official Codex skill layout and Claude Code project-memory / skill docs.

---

## 10. What We Should Build Next

The best next steps are:

1. create `business-os-module-spec-template.md`
2. create `business-os-artifact-templates.md`
3. create `business-os-question-bank.md`
4. create `business-os-evidence-rubric.md`
5. create the first `business-os-router` skill
6. create the first 2-3 entry workflow skills

Recommended first skills:

1. `business-os-router`
2. `start-business`
3. `pivot-business`
4. `expansion-smoke-test`

That gives us:

- one orchestration skill
- one greenfield workflow
- one brownfield workflow
- one expansion workflow

This is enough to prove the system.

---

## 11. Practical Recommendation

Use Codex skills as the primary implementation target.

Reason:

- the skill packaging model is very clean
- repo-local skill discovery is straightforward
- the progressive-disclosure model fits the Business OS well
- the skill standard is explicit and reusable

Then add Claude Code support as a compatibility layer using:

- project memory
- Claude skills / slash-style commands
- optional hooks for workflow guardrails

That gives us one strong core system with two execution environments.

---

## 12. Sources

- BMAD official repository: https://github.com/bmad-code-org/BMAD-METHOD
- BMAD site: https://bmadcodes.com/
- BMAD Claude Code adaptation example: https://github.com/aj-geddes/claude-code-bmad-skills
- OpenAI Codex skills docs: https://developers.openai.com/codex/skills
- OpenAI skills repo: https://github.com/openai/skills
- Claude Code skills / slash command docs: https://code.claude.com/docs/en/slash-commands
- Claude Code memory docs: https://code.claude.com/docs/en/memory
- Claude Code hooks guide: https://code.claude.com/docs/en/hooks-guide
- Claude Code hooks reference: https://code.claude.com/docs/en/hooks
