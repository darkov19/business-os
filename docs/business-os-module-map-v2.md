# Business OS Module Map v2

Status: Revised draft
Purpose: Update the Business OS module architecture based on the first stress test, while preserving the strengths of v1 and expanding coverage for finance, retention, SaaS, local services, education, marketplaces, experimentation, and team design.

Related:

- [business-os-module-map-v1.md](./deprecated/business-os-module-map-v1.md)
- [business-os-gap-resolution-v1.md](./deprecated/business-os-gap-resolution-v1.md)

---

## 1. Why v2 Exists

Version 1 established a strong core for:

- product businesses
- pivots
- premium brands
- route-to-market planning
- launch readiness
- expansion evaluation

The stress test showed that v1 needed more depth in:

- finance beyond pricing
- customer success and retention
- SaaS / digital product logic
- local service operations
- education / coaching businesses
- marketplace dependence
- experimentation and pilots
- org and team design

This version adds that missing coverage without rebuilding the architecture from scratch.

---

## 2. Design Rules For v2

### 2.1 Keep Decision Areas As The Core Structure

The system remains organized by decision areas, not by business-plan chapters.

### 2.2 Add Core Only When The Logic Is Universal

If a missing capability affects many business types, it becomes core.

### 2.3 Use Overlays For Business-Specific Complexity

If a missing capability is important but business-type-specific, it becomes an overlay.

### 2.4 Preserve AI-Runnability

Every module still needs to be convertible into:

- questions
- research steps
- artifacts
- decision gates

---

## 3. Module Layers

The Business OS continues to have three module layers:

1. Core Modules
2. Overlay Modules
3. Control Modules

---

## 4. Core Modules

### M01. Founder Context And Intent

Purpose:

- capture founder goals, ambition, constraints, resources, and motivation

Primary outputs:

- founder brief
- goals and constraints note

---

### M02. Current State And Pivot Diagnosis

Purpose:

- assess what exists today, what is working, what is not, and what should change

Primary outputs:

- current state memo
- pivot diagnosis

---

### M03. Business Definition

Purpose:

- define business type, customer type, offer type, revenue logic, and operating scope

Primary outputs:

- business definition note
- business model summary

---

### M04. Problem / Opportunity Definition

Purpose:

- define the problem, opportunity, or demand hypothesis the business is built around

Primary outputs:

- opportunity memo
- problem hypothesis

---

### M05. Customer Research

Purpose:

- define target users, segments, buying triggers, needs, and willingness to pay

Primary outputs:

- customer research brief
- segment analysis

---

### M06. Market, Competitor, And Alternatives Research

Purpose:

- map category structure, competitors, substitutes, and whitespace

Primary outputs:

- market and competitor memo
- category landscape

---

### M07. Positioning And Value Proposition

Purpose:

- define how the business should be understood and why it should win

Primary outputs:

- positioning memo
- value proposition statement

---

### M08. Offer Architecture

Purpose:

- define what is being sold, in what structure, at what boundaries, and to whom

Primary outputs:

- offer architecture document
- offer stack map

---

### M09. Costing, Pricing, And Unit Economics

Purpose:

- determine pricing logic, cost structure, and margin viability

Primary outputs:

- pricing and economics memo
- margin decision note

---

### M10. Operations, Delivery, And Supply System

Purpose:

- define how the offer is produced, delivered, fulfilled, or executed reliably

Primary outputs:

- operations playbook
- delivery model note

---

### M11. Brand, Messaging, And Trust Assets

Purpose:

- define how the business communicates, builds trust, and presents proof

Primary outputs:

- messaging framework
- trust asset checklist

---

### M12. Route-To-Market And Sales Architecture

Purpose:

- define where and how the business should sell

Expanded in v2 to cover:

- direct vs indirect channels
- online vs offline mix
- assisted vs self-serve vs pipeline-led sales
- marketplace participation
- direct-vs-channel conflict rules
- local service channel logic

Primary outputs:

- route-to-market memo
- sales architecture map

---

### M13. Marketing And Growth System

Purpose:

- define how the business acquires demand, converts attention, and grows

Expanded in v2 to cover:

- acquisition
- conversion
- lifecycle marketing
- retention marketing
- local growth logic where relevant
- community-led growth where relevant

Primary outputs:

- marketing strategy plan
- growth system memo

---

### M14. Launch And Execution Planning

Purpose:

- define realistic launch sequencing, readiness, and dependencies

Primary outputs:

- launch plan
- readiness checklist

---

### M15. Legal, Finance, Risk, And Setup

Purpose:

- define business setup needs, major risks, compliance awareness, and structural readiness

Expanded in v2 to cover:

- import compliance awareness
- payment terms risk
- privacy / data risk where relevant
- contract sensitivity where relevant

Primary outputs:

- setup checklist
- risk readiness note

---

### M16. Metrics, Review Loops, And Pivot Rules

Purpose:

- define KPIs, review cadence, thresholds, and pivot triggers

Primary outputs:

- KPI framework
- review loop note

---

### M17. Financial Planning And Capital Allocation

Purpose:

- define how the business manages cash, working capital, budgets, capital needs, and financial tradeoffs beyond pricing

Main decisions:

- how much cash the business needs to operate
- how channel or inventory decisions affect cash flow
- where capital should be allocated first
- what financial strain exists in the current plan

Use when:

- product businesses
- import or inventory-heavy businesses
- wholesale / distributor models
- businesses planning scale or expansion

Primary outputs:

- financial planning memo
- cash pressure note
- capital allocation priorities

Dependencies:

- M08
- M09
- M10

---

### M18. Customer Success And Retention System

Purpose:

- define what happens after acquisition so users, buyers, learners, or clients stay satisfied and continue engaging

Main decisions:

- how onboarding should work
- how support should work
- how repeat behavior is encouraged
- how issues are handled
- how retention and referrals are improved

Use when:

- D2C brands
- SaaS
- services
- education businesses
- businesses where repeat use or reputation matters

Primary outputs:

- retention and success memo
- support system note
- referral / repeat behavior plan

Dependencies:

- M05
- M08
- M12
- M13

---

## 5. Overlay Modules

### O01. Asset And Capability Audit

Use when:

- pivot, expansion, or existing business context is involved

Purpose:

- identify reusable strengths, assets, capabilities, vendors, relationships, and reputation

---

### O02. Productization / Service Standardization

Use when:

- custom work must become repeatable

Purpose:

- define what can become structured, repeatable, and scalable

---

### O03. Inventory, Fulfillment, And Packaging

Use when:

- physical products are involved

Purpose:

- assess stock logic, packaging, shipping, returns, and fulfillment readiness

---

### O04. B2B Pipeline And Account Strategy

Use when:

- projects, accounts, or institutional sales matter

Purpose:

- define pipeline stages, proposal logic, account strategy, and relationship management

---

### O05. Distributor / Wholesale Readiness

Use when:

- indirect-channel growth is under consideration

Purpose:

- evaluate partner-channel viability and readiness

---

### O06. Import / Sourcing Evaluation

Use when:

- import dependence, MOQ pressure, or sourcing-model comparison is involved

Purpose:

- compare sourcing options and surface cost, lead-time, and risk implications

---

### O07. Expansion / New Category Smoke Test

Use when:

- a new category, adjacency, geography, or major channel shift is under evaluation

Purpose:

- decide whether to add now, test, defer, or reject

---

### O08. Offline Retail / Exhibition Readiness

Use when:

- offline display, popup, exhibition, or retail presence is relevant

Purpose:

- evaluate merchandising, stock burden, sales support, and event economics

---

### O09. Founder Dependency And Delegation Risk

Use when:

- the founder is a major delivery, sales, or decision bottleneck

Purpose:

- surface scale risk caused by over-centralized founder dependency

---

### O10. SaaS / Digital Product Overlay

Use when:

- the business sells software, digital tools, AI products, or productized digital workflows

Purpose:

- add software-specific logic such as roadmap, activation, retention, analytics, and reliability

---

### O11. Local Service Operations Overlay

Use when:

- the business is geographically bound and service-delivery-heavy

Purpose:

- add local operations logic such as scheduling, dispatch, service recovery, and territory planning

---

### O12. Education / Coaching Overlay

Use when:

- the offer is centered on teaching, coaching, transformation, cohorts, or communities

Purpose:

- add curriculum, learning outcome, engagement, and delivery-cadence logic

---

### O13. Marketplace / Platform Strategy Overlay

Use when:

- the business relies materially on marketplaces or third-party platforms

Purpose:

- evaluate platform economics, ranking dependence, catalog control, and account risk

---

### O14. Experimentation And Pilot Design Overlay

Use when:

- the business needs structured testing before large commitments

Purpose:

- define experiments, pilots, success thresholds, and learning loops

---

### O15. Organization And Team Design Overlay

Use when:

- growth is being constrained by role ambiguity, delegation gaps, or team design

Purpose:

- identify role needs, hiring priorities, and operational ownership structure

---

## 6. Control Modules

### C01. Assumption Log

Purpose:

- track known facts, assumptions, and unknowns

### C02. Evidence Tracker

Purpose:

- track evidence sources and their strength

### C03. Decision Gate Tracker

Purpose:

- track whether major decisions are approved, conditional, deferred, or blocked

### C04. Artifact Index

Purpose:

- track what outputs exist and how they relate

### C05. Open Questions Register

Purpose:

- preserve unresolved questions across sessions and workflows

---

## 7. Routing Implications In v2

### Scenario A: Chitr-Style Pivot Into Product Brand

Most relevant core modules:

- M01
- M02
- M05
- M07
- M08
- M09
- M10
- M12
- M13
- M14
- M17

Most relevant overlays:

- O01
- O02
- O03
- O07
- O09
- O14

### Scenario B: Local Service Business Launch

Most relevant core modules:

- M01
- M03
- M04
- M05
- M08
- M09
- M10
- M12
- M13
- M14
- M18

Most relevant overlays:

- O11
- O14
- O15

### Scenario C: SaaS / AI Business

Most relevant core modules:

- M01
- M03
- M04
- M05
- M06
- M07
- M08
- M09
- M12
- M13
- M16
- M18

Most relevant overlays:

- O10
- O14
- O15

### Scenario D: Import-Led Distributor Business

Most relevant core modules:

- M03
- M08
- M09
- M10
- M12
- M15
- M17

Most relevant overlays:

- O05
- O06
- O13
- O14

### Scenario E: Education / Coaching Business

Most relevant core modules:

- M01
- M03
- M04
- M05
- M07
- M08
- M09
- M12
- M13
- M14
- M18

Most relevant overlays:

- O12
- O14
- O15

---

## 8. What v2 Fixes

Compared with v1, this version improves:

- financial realism beyond pricing
- post-sale and retention thinking
- SaaS and digital-product adaptability
- local service business coverage
- education and coaching coverage
- marketplace dependence logic
- experiment and pilot structure
- team and delegation logic

---

## 9. What Still Remains Outside v2

This version is stronger, but it still does not fully specialize for every domain.

Still likely to require later overlays:

- regulated industries
- healthcare businesses
- franchise systems
- deep manufacturing businesses
- multi-country compliance-heavy businesses

That is acceptable for v2.

---

## 10. Recommended Next Step

To make v2 usable, the next documents should be:

1. artifact map v2
2. standard module spec template
3. question bank v1
4. evidence rubric v1

Once those exist, the framework will be ready to move from architecture into implementation.
