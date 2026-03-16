# Business OS Intent Map v2

Status: Revised draft
Purpose: Define how the Business OS should interpret user queries, detect primary and secondary intents, and route users into the correct workflows and modules in version 2.

Related:

- [business-os-intent-map-v1.md](./deprecated/business-os-intent-map-v1.md)
- [business-os-framework-v2.md](./business-os-framework-v2.md)

---

## 1. Intent Philosophy

The user should not need to know:

- which module they need
- which business framework to use
- which artifact should be created first

They should be able to ask in natural language.

The OS should then determine:

- what they are trying to do
- what business context applies
- what discovery is required
- what output is appropriate

---

## 2. Routing Model

The top-level routing logic remains:

`User Query -> Intent Detection -> Context Classification -> Discovery Questions -> Module Selection -> Decision Gates -> Artifact Output`

Version 2 keeps the same structure, but adds better support for:

- finance-heavy queries
- retention and post-sale queries
- local service queries
- SaaS / digital-product queries
- education and coaching queries

---

## 3. Primary Intents

### I01. Start From Scratch

Use when:

- the user has only an idea or a vague concept

Primary outcome:

- turn the vague concept into a structured business foundation

Typical modules:

- M01
- M03
- M04
- M05
- M06
- M07
- M08

Primary artifacts:

- founder brief
- business definition note
- opportunity memo
- business concept dossier

---

### I02. Validate An Idea

Use when:

- the user wants to test whether an idea is worth pursuing

Primary outcome:

- validate desirability and directional viability before larger effort

Typical modules:

- M04
- M05
- M06
- M07
- O14

Primary artifacts:

- validation memo
- assumptions log
- evidence tracker

---

### I03. Pivot Existing Business

Use when:

- an existing business needs a new model, offer, or direction

Primary outcome:

- determine what to preserve, what to stop, and what to build next

Typical modules:

- M01
- M02
- M03
- M08
- M09
- M12
- M14
- M17

Primary artifacts:

- pivot diagnosis memo
- asset audit
- pivot strategy dossier

---

### I04. Launch A New Product Or Service

Use when:

- the user needs launch structure for a defined or partially defined offer

Primary outcome:

- prepare an offer for launch with real operational and channel logic

Typical modules:

- M08
- M09
- M10
- M11
- M12
- M13
- M14

Primary artifacts:

- launch plan
- route-to-market memo
- launch dossier

---

### I05. Improve Sales Or Marketing

Use when:

- the business exists but growth is weak or inconsistent

Primary outcome:

- find the most likely growth bottlenecks and improve channel and messaging fit

Typical modules:

- M05
- M07
- M08
- M11
- M12
- M13
- M16

Primary artifacts:

- growth diagnosis memo
- route-to-market memo
- marketing plan

---

### I06. Fix Pricing, Economics, Or Capital Pressure

Use when:

- pricing is unclear
- margins are weak
- cash pressure is rising
- channel economics are uncertain

Primary outcome:

- create a more defensible pricing and financial model

Typical modules:

- M08
- M09
- M17
- M12 if channels matter

Primary artifacts:

- pricing and unit economics memo
- financial planning memo

---

### I07. Improve Operations Or Delivery

Use when:

- the business is struggling with execution, consistency, fulfillment, or delivery

Primary outcome:

- improve repeatability, quality, and reliability

Typical modules:

- M02
- M10
- M16
- O02
- O03 or O11 depending on business type

Primary artifacts:

- operations diagnosis
- operations playbook

---

### I08. Improve Retention, Support, Or Post-Sale Experience

Use when:

- repeat purchase is weak
- customers drop off
- support is messy
- reputation risk is rising

Primary outcome:

- improve the post-sale system and long-term customer value

Typical modules:

- M18
- M13
- M16

Primary artifacts:

- customer success and retention memo
- support system note

---

### I09. Evaluate Expansion / New Category

Use when:

- the user wants to add a new category, channel, geography, or adjacency

Primary outcome:

- determine whether to add, pilot, defer, or reject

Typical modules:

- M08
- M09
- M10
- M12
- M17
- O07
- O14

Primary artifacts:

- expansion smoke test memo
- expansion decision dossier

---

### I10. Document My Business

Use when:

- the user wants to convert notes and implicit thinking into structured business docs

Primary outcome:

- create a reusable business dossier and expose missing logic

Typical modules:

- depends on maturity and gaps

Primary artifacts:

- business master dossier
- artifact index
- open questions register

---

### I11. Diagnose What Is Broken

Use when:

- the business feels stuck and the real bottleneck is unclear

Primary outcome:

- identify the likeliest failure points and route to the right repair modules

Typical modules:

- M02
- M05
- M08
- M09
- M10
- M12
- M13
- M17
- M18

Primary artifacts:

- diagnosis memo
- repair plan

---

## 4. Secondary Intents

The router should also detect supporting sub-intents such as:

- research this market
- build a pricing model
- compare online vs offline channels
- build a distributor strategy
- test this expansion idea
- improve retention
- design a pilot
- create business docs

These should refine the route rather than override the primary intent unless they clearly dominate the request.

---

## 5. Clarification Rules

The OS should ask follow-up questions when:

- the user is both starting and diagnosing at once
- the business type is unclear
- the offer type is unclear
- the user wants launch advice without a defined offer
- the user wants channel advice without economics
- the user wants expansion advice without core-business context

Good clarifiers:

- Are you starting from scratch or changing an existing business?
- Is this mainly product, service, software, education, or some mix?
- Are you trying to launch, diagnose, or evaluate a new opportunity?

---

## 6. Priority Rules For Multi-Intent Queries

When multiple intents appear, the OS should prioritize:

1. immediate blocking issue
2. major business state transition
3. secondary optimization
4. documentation and packaging

Example:

If a user says:

- I want to launch this and also fix pricing, retention, and distributors

The likely route is:

- primary: launch
- secondary: pricing / capital
- secondary: route-to-market
- later: retention if relevant

---

## 7. v2 Routing Improvements

Compared with v1, the router should now better recognize:

- finance-heavy requests
- retention and support requests
- local operations requests
- SaaS / digital product requests
- education / coaching requests
- pilot / experimentation requests

---

## 8. Recommended Next Layer

The intent map decides why the user is here.

The context classifier decides what kind of business logic should activate next.
