# Business OS Intent Map v1

Status: Draft for discussion
Purpose: Define how the Business OS should interpret a user's query, identify their underlying intent, and route them into the right workflows, modules, and outputs.

---

## 1. Why The Intent Map Matters

The Business OS should not start from documents.

It should start from user intent.

Different users arrive with very different needs:

- some only have a vague idea
- some already run a business
- some want to fix one broken part
- some want to test a new category
- some want structured documentation

If the system does not classify intent correctly, it will ask the wrong questions and generate the wrong outputs.

---

## 2. Routing Model

The top-level routing logic should be:

`User Query -> Intent Detection -> Context Classification -> Workflow Selection -> Module Selection -> Artifact Output`

The first layer is intent detection.

---

## 3. Intent Design Principles

### 3.1 Intent First, Not Module First

The user should not need to know which business module they need.

They should be able to say:

- I want to start a business
- I want to launch a product
- my sales are weak
- should I add this new category

The system should do the routing.

### 3.2 Allow Fuzzy Real-World Queries

Users will rarely ask in structured language.

The intent layer should handle queries like:

- I have an idea but I don't know where to start
- my current business is not working
- I want to turn this service into products
- can you help me price this
- should I sell online or through distributors

### 3.3 Support Multi-Intent Queries

A user may ask for more than one thing at once.

Example:

- I want to start a business and figure out marketing and pricing

The router should identify:

- primary intent
- secondary intents
- recommended sequence

### 3.4 Ask Clarifying Questions When Needed

If intent is ambiguous, the system should ask a short clarifying question before choosing a workflow.

---

## 4. Core Intents

The first version of the OS should support the following primary intents.

### 4.1 Start From Scratch

When to use:

- user has an idea or vague concept
- no existing business system is in place
- user wants structured help to build from zero

Example queries:

- I want to start a business
- I have a business idea
- help me build this from scratch

Primary outcome:

- convert vague idea into a structured business foundation

Likely modules:

- founder context
- business definition
- problem / opportunity
- customer research
- market research
- positioning
- offer architecture
- initial route-to-market

Likely outputs:

- founder brief
- business concept note
- early validation plan

---

### 4.2 Validate An Idea

When to use:

- user has an idea but needs to test whether it is worth pursuing
- user wants research and validation before deeper planning

Example queries:

- is this a good business idea
- help me validate this idea
- what should I research before starting

Primary outcome:

- test viability before investing too much

Likely modules:

- problem / opportunity
- customer research
- competitor research
- value proposition
- demand evidence
- assumptions log

Likely outputs:

- idea validation memo
- research plan
- key assumptions tracker

---

### 4.3 Pivot Existing Business

When to use:

- user already runs a business
- current model is weak, declining, or changing
- user wants to reposition, productize, or change business model

Example queries:

- my current business is not working
- I want to pivot this business
- we want to move from services to products

Primary outcome:

- understand what to preserve, what to change, and what to build next

Likely modules:

- founder context
- current state / pivot diagnosis
- asset audit
- business definition
- offer architecture
- pricing
- channel architecture
- launch planning

Likely outputs:

- pivot diagnosis memo
- asset reuse audit
- pivot strategy document

---

### 4.4 Launch A New Product Or Service

When to use:

- user has a business or clear concept
- needs help defining launch structure
- may already know the offer

Example queries:

- help me launch this product line
- I want to launch a new service
- prepare a launch framework

Primary outcome:

- define launch-ready plan with dependencies, messaging, channels, and ops

Likely modules:

- offer architecture
- productization / standardization
- pricing
- operations
- channel strategy
- marketing
- launch planning

Likely outputs:

- launch strategy doc
- launch readiness checklist
- launch execution plan

---

### 4.5 Improve Sales Or Marketing

When to use:

- user wants growth help
- business exists but traction is weak
- user wants better channels, funnel, messaging, or campaigns

Example queries:

- help me improve sales
- my marketing is not working
- how should I sell this online and offline

Primary outcome:

- diagnose why growth is weak and what sales/marketing system should change

Likely modules:

- customer research
- positioning
- offer architecture
- route-to-market
- marketing system
- messaging and trust assets
- metrics review

Likely outputs:

- growth diagnosis memo
- channel strategy doc
- marketing plan

---

### 4.6 Fix Pricing Or Unit Economics

When to use:

- user is unsure what to charge
- margins are weak
- channel economics are unclear

Example queries:

- help me price this
- are my margins healthy
- can I sell through distributors and still make money

Primary outcome:

- make pricing and economics more defensible

Likely modules:

- business definition
- offer architecture
- costing
- pricing
- channel economics
- finance and cash flow review

Likely outputs:

- pricing memo
- unit economics sheet
- pricing decision note

---

### 4.7 Improve Operations Or Delivery

When to use:

- the business is struggling with execution
- production, service delivery, sourcing, or fulfillment are weak

Example queries:

- operations are messy
- fulfillment is breaking
- help me standardize this service

Primary outcome:

- improve repeatability, quality, and reliability

Likely modules:

- current state diagnosis
- productization / standardization
- operations and supply system
- quality logic
- metrics and review loops

Likely outputs:

- operations diagnosis
- standardization plan
- delivery playbook

---

### 4.8 Evaluate Expansion / New Category

When to use:

- user wants to add a new category, line, channel, geography, or adjacency

Example queries:

- should I add wallpaper
- should I start wholesale
- should I import this product and sell it

Primary outcome:

- determine whether to add now, test, defer, or reject

Likely modules:

- expansion evaluation
- customer fit
- capability fit
- economics
- channel fit
- operational risk
- strategic fit

Likely outputs:

- expansion smoke test memo
- pilot recommendation
- risk register

---

### 4.9 Document My Business

When to use:

- user already has business knowledge in their head or notes
- wants structured documentation for clarity or execution

Example queries:

- help me document this business
- turn this into a proper framework
- create business docs from these notes

Primary outcome:

- convert messy or implicit business thinking into structured artifacts

Likely modules:

- depends on business maturity
- may require partial routing through multiple modules first

Likely outputs:

- business master dossier
- structured strategy docs
- gap list of what is still missing

---

### 4.10 Diagnose What Is Broken

When to use:

- user feels stuck
- symptoms exist but root cause is unclear

Example queries:

- my business is stuck
- I don't know why this isn't working
- help me figure out what is wrong

Primary outcome:

- identify the most likely problem areas and route to the right modules

Likely modules:

- founder context
- current state diagnosis
- customer
- offer
- pricing
- channels
- operations
- metrics

Likely outputs:

- business diagnosis memo
- root-cause hypotheses
- prioritized repair plan

---

## 5. Secondary Intents

The router should also detect supporting sub-intents such as:

- research this market
- create a pricing model
- prepare launch docs
- improve brand messaging
- build a sales pipeline
- evaluate offline vs online channels

These should refine the workflow, not replace the primary intent unless they clearly dominate the query.

---

## 6. Intent Priority Rules

When a query contains multiple intents, the system should prioritize:

1. immediate diagnostic or blocking problem
2. primary business state transition
3. secondary optimization requests
4. document generation requests

Example:

If user says:

- I want to launch this business and need pricing, marketing, and distributor strategy

The system should classify:

- primary intent: launch a new product or service
- secondary intents: pricing, marketing, channel strategy

---

## 7. Clarification Rules

The system should ask follow-up questions if:

- intent is too broad
- multiple intents conflict
- user maturity is unclear
- current business state is unknown
- business type is unclear

Good clarification questions should be short and practical.

Examples:

- Are you starting from scratch or does a business already exist?
- Are you trying to validate an idea, launch something, or fix a problem?
- Is this mainly a product business, service business, or both?

---

## 8. Intent To Workflow Map

### Start From Scratch

Recommended workflow:

1. founder context
2. business definition
3. problem / opportunity
4. customer
5. market
6. positioning
7. offer
8. initial launch path

### Validate An Idea

Recommended workflow:

1. problem / opportunity
2. customer
3. market and alternatives
4. assumptions log
5. demand evidence plan
6. viability review

### Pivot Existing Business

Recommended workflow:

1. founder context
2. current state diagnosis
3. asset audit
4. pivot thesis
5. offer redesign
6. economics
7. channels
8. launch / transition plan

### Launch A New Product Or Service

Recommended workflow:

1. offer definition
2. pricing
3. operations readiness
4. channel strategy
5. marketing
6. launch planning

### Improve Sales Or Marketing

Recommended workflow:

1. customer and buying behavior review
2. positioning and messaging review
3. offer review
4. channel review
5. funnel diagnosis
6. growth plan

### Fix Pricing Or Unit Economics

Recommended workflow:

1. offer clarity
2. cost structure
3. pricing logic
4. channel economics
5. finance review
6. pricing recommendation

### Improve Operations Or Delivery

Recommended workflow:

1. current state diagnosis
2. workflow mapping
3. standardization review
4. sourcing / delivery review
5. QA / QC review
6. improvement plan

### Evaluate Expansion / New Category

Recommended workflow:

1. strategic fit
2. customer fit
3. demand evidence
4. capability fit
5. economics
6. channel fit
7. operational risk
8. recommendation

### Document My Business

Recommended workflow:

1. current knowledge capture
2. maturity assessment
3. gap detection
4. targeted module routing
5. artifact generation

### Diagnose What Is Broken

Recommended workflow:

1. symptom capture
2. current state review
3. metrics review
4. root-cause hypotheses
5. module routing
6. repair plan

---

## 9. Intent Output Types

Each intent should produce at least one primary artifact.

### Primary artifacts by intent

- Start From Scratch -> Business concept dossier
- Validate An Idea -> Validation memo
- Pivot Existing Business -> Pivot strategy memo
- Launch A New Product Or Service -> Launch plan
- Improve Sales Or Marketing -> Growth diagnosis and plan
- Fix Pricing Or Unit Economics -> Pricing and economics memo
- Improve Operations Or Delivery -> Operations improvement memo
- Evaluate Expansion / New Category -> Expansion smoke test memo
- Document My Business -> Business master dossier
- Diagnose What Is Broken -> Diagnosis and repair plan

---

## 10. Red Flags In Intent Routing

The router should slow down and ask more questions when:

- the user asks for a polished business plan too early
- the user wants scaling advice before validation
- the user mixes too many objectives without priorities
- the user wants channel advice without economics
- the user wants expansion without stability in the current business

---

## 11. Recommended Next Step

After the intent map, the next design layer should be:

1. context classifier
2. module map
3. artifact map
4. decision-gate philosophy

The intent map decides where the user enters.
The context classifier decides how the system should adapt from there.
