# 🧠 System Design 

Focus Areas:
- Requirements clarification
- Capacity estimation
- Data modeling
- Scaling strategies
- Consistency tradeoffs
- Failure handling
- Reliability & observability
- Multi-region architecture
- Cloud-aware decisions

---

# 🟢 PHASE 1 — Foundations & LLD Components

Build strong reusable backend building blocks.

---

## Assignment 1: Design a Rate Limiter

🎯 Goal: Control API traffic safely.

### Requirements
- Limit requests per user/IP.
- Support distributed environment.
- Handle burst traffic.

### Design Focus
- Sliding window vs token bucket.
- In-memory vs Redis.
- Handling clock drift.
- Rate limiting in multi-instance systems.
- Idempotency concerns.

---

## Assignment 2: Design a Caching Layer

🎯 Goal: Reduce database load.

### Requirements
- Cache-aside pattern.
- TTL handling.
- Invalidation on write.

### Design Focus
- Redis vs in-memory.
- Write-through vs write-behind.
- Cache stampede prevention.
- Stale data trade-offs.
- Cache eviction policies.

---

## Assignment 3: Design a Background Job Queue

🎯 Goal: Offload heavy tasks.

### Requirements
- Push job via API.
- Process asynchronously.
- Retry with backoff.
- Dead-letter queue for failures.

### Design Focus
- SQS vs Kafka.
- At-least-once delivery.
- Idempotency.
- Backpressure handling.
- Worker scaling strategy.

---

## Assignment 4: Design an Authentication System

🎯 Goal: Secure APIs properly.

### Requirements
- JWT-based authentication.
- Refresh token rotation.
- Role-based access control.

### Design Focus
- Stateless vs session-based.
- Token storage risks.
- Login rate limiting.
- Horizontal scaling implications.

---

# 🟡 PHASE 2 — Common High-Level Interview Problems

Practice end-to-end system decomposition.

---

## Assignment 5: Design a URL Shortener

🎯 Goal: Handle read-heavy traffic.

### Key Areas
- ID generation (base62 vs hashing).
- SQL vs NoSQL.
- Caching hot URLs.
- Expiration handling.
- Analytics tracking.
- Preventing abuse.

### Scaling Focus
- Read-heavy workload optimization.
- Hot key mitigation.
- Database indexing strategy.

---

## Assignment 6: Design a Notification System

🎯 Goal: Multi-channel high-throughput delivery.

### Requirements
- Email, SMS, push.
- User preferences.
- Retry & DLQ.

### Design Focus
- Fan-out architecture.
- Event-driven vs synchronous.
- Message durability.
- Failure isolation.

---

## Assignment 7: Design a Chat System

🎯 Goal: Real-time communication at scale.

### Requirements
- WebSocket connections.
- Store messages.
- Handle offline users.
- Group chats.

### Design Focus
- Scaling WebSocket servers.
- Message ordering guarantees.
- Redis pub/sub vs Kafka.
- Horizontal scaling strategy.

---

## Assignment 8: Design an E-Commerce Backend

🎯 Goal: Multi-service transactional system.

### Components
- Product catalog.
- Cart.
- Orders.
- Payments.
- Inventory.

### Design Focus
- Prevent overselling.
- Transaction handling.
- Event-driven order processing.
- Sharding strategy.
- Caching hot products.
- Idempotent payment processing.

---

# 🟠 PHASE 3 — Scaling & Reliability

Focus on bottlenecks and high traffic systems.

---

## Assignment 9: Design a High-Traffic API (10k+ RPS)

🎯 Goal: Scale backend safely.

### Include
- Load balancer.
- Horizontal scaling.
- Redis caching.
- Read replicas.
- Rate limiting.
- Observability.

### Discuss
- Single points of failure.
- Degradation strategy.
- Retry storms.
- Backpressure mechanisms.

---

## Assignment 10: File Upload & Processing System

🎯 Goal: Handle large files reliably.

### Flow
- Upload via presigned URL.
- Async processing.
- Update status in DB.

### Design Focus
- Partial uploads.
- Retry & idempotency.
- Virus scanning.
- Cost implications.
- Storage tiering.

---

## Assignment 11: Multi-Tenant SaaS Backend

🎯 Goal: Isolation + scalability.

### Requirements
- Tenant isolation.
- Shared DB vs separate DB.
- Role management.
- Billing integration.

### Design Focus
- Data leak prevention.
- Index strategy.
- Cost trade-offs.
- Horizontal scaling impact.

---

# 🔵 PHASE 4 — Data Modeling & Tradeoffs

Deepen reasoning ability.

---

## Assignment 12: Database Selection & Schema Design

🎯 Goal: Model data correctly.

### Tasks
- Choose SQL vs NoSQL.
- Design schema for high write throughput.
- Define indexes.
- Handle uniqueness constraints.

### Discuss
- Write amplification.
- Read-heavy vs write-heavy tradeoffs.
- Hot partition risks.

---

## Assignment 13: Consistency Tradeoff Analysis

🎯 Goal: Decide strong vs eventual consistency.

### Scenario
Design payment + order system.

### Explain
- Where strong consistency is mandatory.
- Where eventual consistency is acceptable.
- CAP tradeoffs.
- Failure scenarios.

---

## Assignment 14: Bottleneck Identification Exercise

🎯 Goal: Analyze architecture weaknesses.

Given an architecture diagram:

- Identify single points of failure.
- Identify scaling bottlenecks.
- Identify coordination bottlenecks.
- Propose improvements.

---

# 🟣 PHASE 5 — Capacity Estimation & Quantitative Thinking

Senior-level system design requires numbers.

---

## Assignment 15: Capacity Planning Drill

🎯 Goal: Quantitative reasoning.

Given:
- 10M users
- 2M daily active
- 20 requests per session

Estimate:
- Peak RPS.
- DB writes per second.
- Storage growth per year.
- Cache memory requirements.
- Network bandwidth.

Explain assumptions clearly.

---

## Assignment 16: Cost Estimation Exercise

🎯 Goal: Understand infrastructure cost impact.

Given a high-traffic service:

Estimate:
- Compute cost.
- Storage cost.
- Data transfer cost.
- Cache cost.

Discuss:
- Tradeoff between serverless vs containers.
- Active-active vs active-passive cost.

---

# ⚫ PHASE 6 — Geo-Distributed & Advanced Architecture

Move from local scale to global scale.

---

## Assignment 17: Multi-Region Active-Active Design

🎯 Goal: Global availability.

### Scenario
Users in US + India.

### Design
- DB replication strategy.
- Traffic routing.
- Conflict resolution.
- Session management.

### Discuss
- Latency tradeoffs.
- Data residency.
- Consistency model.

---

## Assignment 18: Microservices Communication Strategy

🎯 Goal: Service-to-service architecture.

Compare:
- REST synchronous calls.
- Event-driven messaging.
- gRPC.

Discuss:
- Circuit breaker.
- Timeouts.
- Retry strategy.
- Observability.
- Failure isolation.

---

## Assignment 19: Scalable Search System

🎯 Goal: Efficient querying.

### Requirements
- Search by name.
- Autocomplete.
- Ranking.

### Design Focus
- SQL full-text vs ElasticSearch.
- Index design.
- Caching.
- Write amplification.
- Scaling ingestion.

---

# 🔴 FINAL SYSTEM DESIGN WALKTHROUGH

---

## Assignment 20: End-to-End Architecture Presentation

Pick one complex system (chat, e-commerce, SaaS, etc.)

Walk through:

1. Requirements clarification.
2. Functional vs non-functional requirements.
3. Capacity estimation.
4. API design.
5. Data modeling.
6. Scaling strategy.
7. Consistency decisions.
8. Failure scenarios.
9. Observability plan.
10. Cost trade-offs.
11. Deployment strategy.

🎯 Goal:
Demonstrate structured, confident, senior-level system design thinking.