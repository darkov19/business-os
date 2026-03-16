# Business OS Context Classifier

Status: Revised draft
Purpose: Define how the Business OS should classify business context in version 2 so the same intent can be adapted correctly across product, service, software, education, channel-led, and hybrid business models.

Related:

- [business-os-context-classifier-v1.md](./deprecated/business-os-context-classifier-v1.md)
- [business-os-module-map.md](./business-os-module-map.md)

---

## 1. Why This Exists

Version 1 classified product, service, studio, ecommerce, B2B, distributor, and hybrid businesses well enough for Chitr and similar businesses.

The stress test showed that the classifier needed better first-class support for:

- SaaS / digital product businesses
- local service businesses
- education / coaching businesses
- marketplace-dependent businesses
- recurring-revenue logic

---

## 2. Classification Rule

The classifier should use multiple labels, not one label.

A business may be:

- a physical product business
- ecommerce-led
- B2B-adjacent
- premium-positioned
- import-dependent

all at once.

The purpose of the classifier is not taxonomy for its own sake.

It exists to activate:

- the right modules
- the right overlays
- the right warnings

---

## 3. Classification Dimensions

The classifier should work across these dimensions:

1. business model type
2. offer type
3. revenue model
4. sales model
5. delivery model
6. stage and maturity
7. complexity flags

---

## 4. Core Business Context Types

### C01. Physical Product Business

Use when:

- the business sells tangible goods

Typical needs:

- sourcing
- production
- packaging
- fulfillment
- margins

---

### C02. Service Business

Use when:

- the business sells time, expertise, execution, or outcomes

Typical needs:

- offer structuring
- delivery standardization
- capacity planning
- pipeline design

---

### C03. Studio / Creative Practice

Use when:

- the business is creator-led, project-led, or design-led

Typical needs:

- asset reuse
- productization
- founder dependency review
- trust via portfolio and proof

---

### C04. Ecommerce-Led Brand

Use when:

- digital discovery and online conversion are primary

Typical needs:

- PDP content
- conversion logic
- retention
- fulfillment

---

### C05. B2B / Project-Led Business

Use when:

- accounts, projects, and relationships drive revenue

Typical needs:

- proposals
- quoting
- payment terms
- account management

---

### C06. Distributor / Channel-Led Business

Use when:

- growth depends on intermediaries or partner channels

Typical needs:

- channel margins
- stock logic
- working capital
- partner incentives

---

### C07. Hybrid Business

Use when:

- two or more business models materially coexist

Typical needs:

- boundary management
- resource allocation
- channel conflict handling

---

### C08. SaaS / Digital Product Business

Use when:

- the business sells software, subscriptions, AI tools, or digital workflows

Typical needs:

- activation
- retention
- churn analysis
- roadmap logic
- platform / reliability concerns

---

### C09. Local Service Business

Use when:

- the business is geographically constrained and operationally field-driven

Typical needs:

- scheduling
- dispatch
- local SEO
- territory planning
- service recovery

---

### C10. Education / Coaching Business

Use when:

- the business sells transformation, teaching, coaching, cohorts, or memberships

Typical needs:

- curriculum
- delivery cadence
- learner outcomes
- engagement
- retention

---

## 5. Secondary Flags

In addition to core type, the classifier should detect flags such as:

- custom vs standardized
- premium vs value
- local vs national vs international
- import-dependent
- marketplace-dependent
- recurring revenue
- founder-dependent
- high working-capital pressure
- heavy support / success sensitivity

---

## 6. Revenue Model Signals

Version 2 should classify revenue logic more explicitly.

Examples:

- one-time transaction
- project-based
- recurring subscription
- retainer
- repeat purchase
- cohort-based
- wholesale / trade
- marketplace-mediated

This matters because retention, payback, and capital strain differ sharply by revenue model.

---

## 7. Stage And Maturity

The classifier should continue to detect:

- idea stage
- validation stage
- early launch
- operating but unstable
- established but pivoting
- expansion stage

Version 2 should also watch for:

- scaling without systems
- retention failure despite acquisition
- capital strain despite revenue

---

## 8. Minimum Classification Questions

The OS should ask a compact set of questions such as:

- Are you starting from scratch or does a business already exist?
- Is this mainly product, service, software, education, or some mix?
- Who primarily buys: end customers, businesses, channel partners, or learners?
- How does the business make money: one-time, subscription, projects, trade, or mixed?
- How is the offer delivered: shipped, in-person, digitally, project-based, or through partners?
- Is the business local, national, international, or hybrid?
- Are you validating, launching, operating, pivoting, or expanding?

---

## 9. Context To Overlay Activation

### Physical Product Business

Likely overlays:

- O03
- O05 if wholesale matters
- O06 if import matters
- O13 if marketplaces matter

### Service Business

Likely overlays:

- O02
- O11 if local
- O15 if founder-dependent

### Studio / Creative Practice

Likely overlays:

- O01
- O02
- O09

### SaaS / Digital Product Business

Likely overlays:

- O10
- O14
- O15

### Local Service Business

Likely overlays:

- O11
- O14
- O15

### Education / Coaching Business

Likely overlays:

- O12
- O14
- O15

### Marketplace-Dependent Business

Likely overlays:

- O13

Note:

Marketplace dependence should stay inside O13 and M12 in the current system.

---

## 10. Chitr Classification In The Current System

Chitr by Aalekh would likely classify as:

- physical product business
- studio / creative practice
- hybrid business
- ecommerce-led potential
- B2B designer-adjacent

Flags:

- premium
- partially standardized
- founder-sensitive
- possible future import-dependent expansion

This confirms that the current system still handles Chitr cleanly while expanding beyond it.

---

## 11. Recommended Next Layer

Once the business is classified, the OS should activate the correct module set and artifact expectations.
