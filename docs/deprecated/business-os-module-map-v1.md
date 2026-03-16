# Business OS Module Map v1

Status: Draft for discussion
Purpose: Define the core decision-area modules of the Business OS, what each module is responsible for, when it should be activated, and how modules relate to one another.

---

## 1. Why The Module Map Matters

The module map is the core engine of the Business OS.

It turns the system from a general guide into a structured operating model.

The module map answers:

- what decisions the OS must support
- which modules are universal
- which modules are conditional
- what each module should produce
- what order modules should run in different situations

---

## 2. Design Principles

### 2.1 Organize By Decision Area

Modules should exist because they solve a real business decision, not because they fit a chapter in a conventional business plan.

### 2.2 Keep Modules Reusable

Each module should be reusable across startup, pivot, launch, diagnosis, and expansion workflows.

### 2.3 Separate Core From Overlay Logic

The core module should stay general.

Business-specific or channel-specific complexity should be handled through overlays and submodules.

### 2.4 Modules Must Be AI-Runnable

Each module should later support:

- input requirements
- question sets
- research logic
- evidence requirements
- outputs
- decision gates

### 2.5 Modules Should Produce Decisions, Not Just Notes

A module is useful only if it helps the user move from ambiguity to a clearer decision.

---

## 3. Module Layers

The OS should have three layers of modules:

1. Core Modules
2. Overlay Modules
3. Control Modules

### 3.1 Core Modules

These cover fundamental business decisions and are relevant in most workflows.

### 3.2 Overlay Modules

These activate when a business context or intent introduces special complexity.

### 3.3 Control Modules

These help govern how the system reasons, validates, and tracks decisions.

---

## 4. Core Modules

### M01. Founder Context And Intent

Purpose:

- understand founder motivation, ambition, constraints, and practical starting conditions

Main decisions:

- why this business should exist for this founder
- what constraints matter
- what success looks like

Typical use:

- start from scratch
- pivot
- diagnosis

Key outputs:

- founder brief
- goals and constraints note

Dependencies:

- none

---

### M02. Current State And Pivot Diagnosis

Purpose:

- assess an existing business before recommending change

Main decisions:

- what is working
- what is failing
- what should be preserved
- what should be stopped

Typical use:

- pivot
- diagnose
- improve operations
- improve sales

Key outputs:

- current state memo
- pivot diagnosis

Dependencies:

- M01 when founder context matters

---

### M03. Business Definition

Purpose:

- define what kind of business this is, what it sells, to whom, and in what geography or scope

Main decisions:

- business type
- customer type
- revenue logic
- offer category
- operating scope

Typical use:

- almost universal

Key outputs:

- business definition note
- business model summary

Dependencies:

- M01 recommended

---

### M04. Problem / Opportunity Definition

Purpose:

- define why the business should exist and what meaningful opportunity it is addressing

Main decisions:

- what need or opportunity matters
- why now
- why this business

Typical use:

- start from scratch
- validate idea
- pivot

Key outputs:

- opportunity memo
- problem hypothesis

Dependencies:

- M03 recommended

---

### M05. Customer Research

Purpose:

- understand who buys, what triggers buying, how they decide, and what they value

Main decisions:

- target customer priority
- ICP
- segment differences
- customer needs and willingness to pay

Typical use:

- nearly universal

Key outputs:

- customer profile
- segment analysis
- interview plan

Dependencies:

- M03
- M04 usually helpful

---

### M06. Market, Competitor, And Alternatives Research

Purpose:

- understand category structure, market signals, competitors, substitutes, and whitespace

Main decisions:

- how crowded the space is
- where differentiation may exist
- what evidence supports the opportunity

Typical use:

- start
- validate
- pivot
- expansion

Key outputs:

- market research memo
- competitor map
- category landscape

Dependencies:

- M03
- M04 useful
- M05 useful

---

### M07. Positioning And Value Proposition

Purpose:

- define how the business should be understood and why it should win

Main decisions:

- positioning choice
- differentiation
- core promise
- proof logic

Typical use:

- universal after basic customer and market clarity exists

Key outputs:

- positioning memo
- value proposition statement
- differentiation matrix

Dependencies:

- M05
- M06

---

### M08. Offer Architecture

Purpose:

- define what the business actually sells and how the offer system is structured

Main decisions:

- core offer
- entry offer
- premium tiers
- bundles
- offer boundaries

Typical use:

- universal

Key outputs:

- offer architecture doc
- offer stack map

Dependencies:

- M03
- M05
- M07

---

### M09. Costing, Pricing, And Unit Economics

Purpose:

- determine whether the business can price profitably and sustainably

Main decisions:

- cost structure
- pricing logic
- margin expectations
- channel implications

Typical use:

- launch
- pricing review
- channel planning
- expansion

Key outputs:

- pricing memo
- economics sheet
- margin decision note

Dependencies:

- M08
- M12 often needed for channel impact

---

### M10. Operations, Delivery, And Supply System

Purpose:

- define how the offer is delivered consistently and reliably

Main decisions:

- sourcing / production model
- quality model
- fulfillment / delivery model
- capacity limits

Typical use:

- launch
- improve operations
- expansion

Key outputs:

- operations playbook
- supply model
- capacity note

Dependencies:

- M08
- M09 often useful

---

### M11. Brand, Messaging, And Trust Assets

Purpose:

- define how the business communicates and what proof it uses to build trust

Main decisions:

- brand tone and direction
- messaging hierarchy
- trust assets needed
- proof system

Typical use:

- launch
- improve marketing
- document business

Key outputs:

- messaging framework
- trust asset checklist
- brand communication note

Dependencies:

- M07
- M08

---

### M12. Route-To-Market And Sales Architecture

Purpose:

- define where and how the business should sell

Main decisions:

- direct vs indirect channels
- online vs offline mix
- self-serve vs assisted vs pipeline-led sales
- channel sequencing

Typical use:

- launch
- improve sales
- expansion

Key outputs:

- channel strategy memo
- sales architecture map
- route-to-market recommendation

Dependencies:

- M05
- M07
- M08
- M09 strongly recommended

---

### M13. Marketing And Growth System

Purpose:

- define how the business gets attention, demand, and repeat behavior

Main decisions:

- acquisition strategy
- content strategy
- channel mix
- campaign logic
- retention and referral loops

Typical use:

- launch
- growth
- marketing improvement

Key outputs:

- marketing plan
- channel plan
- growth system memo

Dependencies:

- M05
- M07
- M11
- M12

---

### M14. Launch And Execution Planning

Purpose:

- define how the business or initiative goes live in a realistic sequence

Main decisions:

- launch readiness
- dependencies
- priorities
- milestone sequence

Typical use:

- launch
- relaunch
- pivot transition

Key outputs:

- launch plan
- readiness checklist
- milestone tracker

Dependencies:

- M08
- M09
- M10
- M11
- M12
- M13

---

### M15. Legal, Finance, Risk, And Setup

Purpose:

- cover practical structural readiness and risk awareness

Main decisions:

- setup needs
- compliance considerations
- working capital needs
- major business risks

Typical use:

- start
- launch
- expansion

Key outputs:

- readiness memo
- risk list
- setup checklist

Dependencies:

- M03
- M09
- M10

---

### M16. Metrics, Review Loops, And Pivot Rules

Purpose:

- define how the business measures progress and decides whether to continue, fix, or change course

Main decisions:

- success metrics
- review cadence
- warning thresholds
- pivot triggers

Typical use:

- launch
- improve
- expansion
- diagnose

Key outputs:

- KPI map
- review cadence
- decision rules

Dependencies:

- M08
- M09
- M12
- M13

---

## 5. Overlay Modules

Overlay modules activate only when the context classifier shows they are needed.

### O01. Asset And Capability Audit

Use when:

- existing business, pivot, or expansion is involved

Purpose:

- identify what assets, skills, vendors, audience, or reputation can be reused

---

### O02. Productization / Service Standardization

Use when:

- a custom business wants repeatability
- a studio wants to create products
- a service wants clearer packages

Purpose:

- define what can become structured, repeatable, and scalable

---

### O03. Inventory, Fulfillment, And Packaging

Use when:

- physical products are involved

Purpose:

- assess inventory logic, packaging, shipping, returns, and fulfillment burden

---

### O04. B2B Pipeline And Account Strategy

Use when:

- business sells through projects, accounts, or institutional buyers

Purpose:

- define pipeline stages, buyer roles, proposal logic, and account management

---

### O05. Distributor / Wholesale Readiness

Use when:

- indirect channel expansion is under consideration

Purpose:

- evaluate whether distributor or reseller growth is viable

---

### O06. Import / Sourcing Evaluation

Use when:

- import, cross-border sourcing, or MOQ-heavy sourcing is involved

Purpose:

- evaluate duties, MOQs, working capital, lead times, and sourcing risk

---

### O07. Expansion / New Category Smoke Test

Use when:

- a new category, adjacency, channel, or geography is being considered

Purpose:

- decide whether to add now, pilot, defer, or reject

---

### O08. Offline Retail / Exhibition Readiness

Use when:

- offline stores, popups, exhibitions, or retail placements are relevant

Purpose:

- assess merchandising, stock logic, sales support, and economics

---

### O09. Founder Dependency And Delegation Risk

Use when:

- the business depends heavily on a founder's taste, labor, sales, or decision-making

Purpose:

- identify scale blockers caused by founder centrality

---

## 6. Control Modules

Control modules help govern the system across workflows.

### C01. Assumption Log

Purpose:

- record what is known, assumed, unverified, or validated

### C02. Evidence Tracker

Purpose:

- record what evidence exists and where it came from

### C03. Decision Gate Tracker

Purpose:

- record which decisions are ready, blocked, conditional, or deferred

### C04. Artifact Index

Purpose:

- track which outputs have been created and how they connect

### C05. Open Questions Register

Purpose:

- track unresolved business questions without losing them in conversation

---

## 7. Module Relationship Logic

Modules should not be treated as a rigid sequence, but some dependencies are strong.

### Foundational flow

Typical early sequence:

1. M01 Founder Context And Intent
2. M03 Business Definition
3. M04 Problem / Opportunity
4. M05 Customer Research
5. M06 Market And Competitor Research
6. M07 Positioning And Value Proposition
7. M08 Offer Architecture

### Build and launch flow

Typical mid-stage sequence:

1. M09 Costing, Pricing, And Unit Economics
2. M10 Operations, Delivery, And Supply System
3. M11 Brand, Messaging, And Trust Assets
4. M12 Route-To-Market And Sales Architecture
5. M13 Marketing And Growth System
6. M14 Launch And Execution Planning

### Control and monitoring flow

Typical later sequence:

1. M15 Legal, Finance, Risk, And Setup
2. M16 Metrics, Review Loops, And Pivot Rules

Overlay and control modules should attach where needed rather than forming a separate linear track.

---

## 8. Example Routing Scenarios

### Scenario A: Start From Scratch

Likely modules:

- M01
- M03
- M04
- M05
- M06
- M07
- M08
- M12

Control modules:

- C01
- C02
- C05

### Scenario B: Pivot Studio Into Product Brand

Likely modules:

- M01
- M02
- M03
- M05
- M07
- M08
- M09
- M10
- M12
- M14

Overlay modules:

- O01
- O02
- O03
- O09

Control modules:

- C01
- C02
- C03

### Scenario C: Evaluate New Category

Likely modules:

- M05
- M08
- M09
- M10
- M12

Overlay modules:

- O06 if imports or MOQs are involved
- O07 expansion smoke test

Control modules:

- C01
- C02
- C03

---

## 9. Chitr Stress Test

For Chitr by Aalekh, the module map appears to cover the important problem spaces.

Most relevant core modules:

- M01 Founder Context And Intent
- M02 Current State And Pivot Diagnosis
- M05 Customer Research
- M07 Positioning And Value Proposition
- M08 Offer Architecture
- M09 Costing, Pricing, And Unit Economics
- M10 Operations, Delivery, And Supply System
- M12 Route-To-Market And Sales Architecture
- M13 Marketing And Growth System
- M14 Launch And Execution Planning

Most relevant overlays:

- O01 Asset And Capability Audit
- O02 Productization / Service Standardization
- O03 Inventory, Fulfillment, And Packaging
- O07 Expansion / New Category Smoke Test
- O09 Founder Dependency And Delegation Risk

This indicates the module map is directionally strong for both Chitr's current pivot and future category expansion.

---

## 10. Recommended Next Step

After the module map, the next design layer should be:

1. artifact map
2. decision-gate philosophy
3. standard module spec template

The module map defines the engine.
The artifact map defines what the engine produces.
