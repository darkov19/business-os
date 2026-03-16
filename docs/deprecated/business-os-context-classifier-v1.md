# Business OS Context Classifier v1

Status: Draft for discussion
Purpose: Define how the Business OS should classify the user's business context so that the same intent can be adapted correctly across different business models, operating realities, and go-to-market structures.

---

## 1. Why The Context Classifier Matters

Intent alone is not enough.

Two users may say:

- help me launch this business

But the correct workflow depends on context.

Examples:

- a physical product brand needs sourcing, pricing, fulfillment, and channel decisions
- a service business needs scope definition, delivery model, and pipeline design
- a studio pivoting into products needs productization and asset reuse logic
- a B2B supplier needs account strategy, pricing tiers, and sales process design

The context classifier ensures the OS does not give generic advice.

---

## 2. Classifier Goal

The classifier should identify:

- what kind of business this is
- what kind of offer the business sells
- how the business captures revenue
- how customers buy
- how the business delivers value
- which overlays and modules should activate

---

## 3. Classification Model

The classifier should work across five dimensions.

### 3.1 Business Model Type

Examples:

- physical product business
- service business
- studio / agency
- ecommerce brand
- B2B supplier
- marketplace-based seller
- distributor / reseller model
- hybrid business

### 3.2 Offer Type

Examples:

- standardized products
- custom products
- standardized services
- custom services
- project-based work
- subscription
- digital product
- mixed offer stack

### 3.3 Sales Model

Examples:

- self-serve online
- assisted selling
- consultation-led sales
- outbound sales
- distributor / partner-led sales
- retail / offline sales
- hybrid model

### 3.4 Delivery Model

Examples:

- made to order
- stocked inventory
- local fulfillment
- service delivery by team
- project-based execution
- third-party manufacturing
- job work
- import-led sourcing

### 3.5 Stage And Maturity

Examples:

- idea stage
- validation stage
- early launch
- operating but unstable
- established but pivoting
- ready for expansion

---

## 4. Design Principles

### 4.1 Use Multiple Labels, Not One Label

Most businesses are not pure single-type businesses.

Example:

Chitr by Aalekh may be classified as:

- physical product business
- studio-origin business
- ecommerce-led potential
- B2B designer-adjacent
- hybrid business

The classifier should allow multiple tags.

### 4.2 Classify For Decision Usefulness

The purpose is not taxonomy for its own sake.

The purpose is to activate the right modules, questions, and warnings.

### 4.3 Detect Hidden Complexity

Some businesses appear simple but are structurally complex.

Examples:

- product business with custom orders
- online brand with offline channel ambitions
- service business trying to become productized
- import business with weak working capital

The classifier should surface these realities early.

---

## 5. Core Context Types

The following context types should be first-class in v1.

### 5.1 Physical Product Business

Definition:

Sells tangible goods that require sourcing, production, inventory, packaging, fulfillment, or installation.

Examples:

- wall art brand
- home decor brand
- furniture business
- fashion accessories brand

Key activated modules:

- offer architecture
- productization
- pricing and unit economics
- sourcing and operations
- fulfillment
- channel strategy

Key risks:

- inventory
- QC
- shipping damage
- weak margins
- channel mismatch

---

### 5.2 Service Business

Definition:

Sells expertise, execution, time, or outcomes rather than standardized physical goods.

Examples:

- consulting
- agency work
- design services
- coaching
- specialized local services

Key activated modules:

- offer design
- scope definition
- delivery model
- capacity planning
- pricing
- sales pipeline

Key risks:

- poor standardization
- founder dependency
- underpricing
- inconsistent delivery

---

### 5.3 Studio / Creative Practice

Definition:

A creator-led or design-led business with a strong custom or project-based component and a strong creative identity.

Examples:

- design studio
- art studio
- branding studio
- architectural visualization practice

Key activated modules:

- current state diagnosis
- asset reuse audit
- productization or standardization
- portfolio trust logic
- pricing
- B2B / referral pipeline

Key risks:

- custom work complexity
- inconsistent margins
- weak conversion from creative strength to business clarity

---

### 5.4 Ecommerce-Led Brand

Definition:

A business where digital discovery and online conversion are primary growth mechanisms.

Examples:

- D2C product brand
- online-first niche product company
- digital-led home decor brand

Key activated modules:

- positioning
- product detail content
- conversion system
- retention
- channel economics
- logistics

Key risks:

- weak conversion
- poor content
- high CAC
- returns burden

---

### 5.5 B2B / Project-Led Business

Definition:

A business that sells through account relationships, project cycles, repeat buyers, or institutional customers.

Examples:

- vendors serving architects
- design suppliers
- contract manufacturing
- business services

Key activated modules:

- ICP
- pipeline design
- account strategy
- pricing tiers
- proposals and quoting
- delivery reliability

Key risks:

- long sales cycles
- payment delays
- founder-led selling bottlenecks

---

### 5.6 Distributor / Channel-Led Business

Definition:

A business where growth depends significantly on intermediaries rather than direct end-customer sales.

Examples:

- wholesale business
- importer with dealer network
- reseller channel-led business

Key activated modules:

- channel economics
- margin stack
- partner requirements
- working capital
- packaging and logistics
- regional expansion readiness

Key risks:

- low margin after channel cuts
- weak control over brand
- inventory and payment exposure

---

### 5.7 Hybrid Business

Definition:

A business that combines two or more major models and therefore needs blended logic.

Examples:

- D2C + B2B product brand
- service business + digital products
- studio + product line + custom projects

Key activated modules:

- business model clarity
- offer boundaries
- channel architecture
- operating model separation
- resource allocation

Key risks:

- lack of focus
- hidden complexity
- conflicting priorities

---

## 6. Secondary Context Flags

In addition to core business type, the classifier should detect special context flags.

### 6.1 Custom vs Standardized

Important because it changes:

- pricing
- delivery model
- margins
- scalability

### 6.2 Local vs National vs International

Important because it changes:

- marketing
- logistics
- compliance
- channel choices

### 6.3 Import-Dependent

Important because it changes:

- MOQ logic
- duties
- freight
- lead times
- working capital

### 6.4 Manufacturing Model

Examples:

- in-house
- outsourced
- job work
- white-label
- imported finished goods
- imported raw material + local conversion

### 6.5 Founder-Dependent

Important because it changes:

- delivery scalability
- sales dependency
- organizational risk

### 6.6 Premium / Mid-Market / Value

Important because it changes:

- pricing tolerance
- messaging
- channels
- presentation standards

### 6.7 Brand-Led vs Sales-Led

Some businesses win primarily through:

- brand and pull

Others win through:

- relationships
- pipeline
- distribution

The classifier should surface this distinction.

---

## 7. Stage And Maturity Signals

The classifier should identify stage, because the same business type behaves differently at different stages.

### 7.1 Idea Stage

Signals:

- concept exists
- no validation
- no customers yet

### 7.2 Validation Stage

Signals:

- early research or prototypes
- limited demand proof
- many open assumptions

### 7.3 Early Launch Stage

Signals:

- product or service exists
- go-to-market is active or about to start
- systems are still forming

### 7.4 Operating But Unstable

Signals:

- revenue exists
- delivery, channels, or margins are inconsistent

### 7.5 Established But Pivoting

Signals:

- real business exists
- a major change in model, offer, or audience is being considered

### 7.6 Expansion Stage

Signals:

- core business has traction
- new categories, channels, geographies, or business lines are under evaluation

---

## 8. Classifier Questions

The system should ask a small, high-value set of questions to classify context.

### 8.1 Business Existence

- Are you starting from scratch, or does a business already exist?

### 8.2 Offer Type

- Are you mainly selling products, services, projects, or some mix?

### 8.3 Customer Type

- Are you selling mainly to end consumers, businesses, professionals, or channel partners?

### 8.4 Sales Mode

- Will customers buy through direct checkout, assisted selling, consultations, or a sales pipeline?

### 8.5 Delivery Mode

- Is this made in-house, outsourced, imported, project-based, or digitally delivered?

### 8.6 Stage

- Are you exploring, validating, launching, operating, pivoting, or expanding?

### 8.7 Revenue Model

- Will you earn through one-time sales, recurring revenue, projects, trade sales, or some combination?

---

## 9. Context To Overlay Map

### Physical Product Business

Activate overlays:

- product operations
- fulfillment
- packaging
- inventory and working capital

### Service Business

Activate overlays:

- service standardization
- scope and delivery design
- pipeline and quoting

### Studio / Creative Practice

Activate overlays:

- pivot diagnosis
- productization
- portfolio leverage
- founder dependency review

### Ecommerce-Led Brand

Activate overlays:

- conversion system
- content requirements
- CAC and retention logic

### B2B / Project-Led Business

Activate overlays:

- pipeline architecture
- account strategy
- payment terms
- proposal / quotation system

### Distributor / Channel-Led Business

Activate overlays:

- margin stack
- partner readiness
- stock and payment exposure

### Hybrid Business

Activate overlays:

- business model separation
- offer boundaries
- channel conflict review

---

## 10. Chitr Stress Test

Using the current discussion, Chitr by Aalekh would likely classify as:

- primary: physical product business
- secondary: studio / creative practice
- secondary: hybrid business
- secondary: ecommerce-led potential
- secondary: B2B / designer-adjacent business

Special flags:

- premium positioning
- partial productization
- custom-service legacy
- possible future import / sourcing expansion
- likely hybrid online + assisted selling model

Stage:

- pivot / early launch planning stage

This confirms that the classifier must support multiple labels and overlays.

---

## 11. Red Flags In Context Classification

The classifier should ask deeper questions when:

- the user mixes custom and standardized offers without boundaries
- the user wants both D2C and distributors immediately
- the business depends heavily on one founder
- import logic is proposed without working capital clarity
- premium positioning is claimed without proof assets or margins
- multiple customer types are named without prioritization

---

## 12. Recommended Next Step

After the context classifier, the next design layer should be:

1. module map
2. artifact map
3. decision-gate philosophy

The intent map decides why the user is here.
The context classifier decides what kind of business logic should adapt around that intent.
