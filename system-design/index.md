# 🧠 System Design for Mid–Senior SDE


# 🟢 PHASE 1 — LLD (Backend-Oriented)

---

## Assignment 1: Design a Rate Limiter

🎯 Goal: Control API traffic safely.

Requirements:
- Limit requests per user/IP.
- Sliding window or token bucket.
- Support distributed environment.

Discussion:
- In-memory vs Redis.
- Handling clock drift.
- Handling burst traffic.
- API idempotency.

---

## Assignment 2: Design a Caching Layer

🎯 Goal: Reduce DB load.

Requirements:
- Cache-aside pattern.
- TTL handling.
- Invalidation on write.

Discussion:
- Redis vs in-memory.
- Stale data trade-offs.
- Cache stampede prevention.

---

## Assignment 3: Design a Background Job Queue

🎯 Goal: Offload heavy tasks.

Requirements:
- Push job via API.
- Process asynchronously.
- Retry with backoff.
- DLQ for failures.

Discussion:
- SQS vs Kafka.
- At-least-once delivery.
- Idempotency design.

---

## Assignment 4: Design an Authentication System

🎯 Goal: Secure APIs.

Requirements:
- JWT-based auth.
- Refresh token rotation.
- Role-based access.

Discussion:
- Stateless vs session-based.
- Token storage risks.
- Rate limiting login attempts.

---

# 🟡 PHASE 2 — Practical HLD (Common Interview Problems)

---

## Assignment 5: Design a URL Shortener

🎯 Goal: Handle read-heavy workload.

Key Focus:
- ID generation (hash vs base62).
- DB choice (SQL vs NoSQL).
- Cache hot URLs.
- Expiration handling.
- Scaling to millions of requests.

Discuss:
- Write vs read scaling.
- Analytics tracking.
- Preventing abuse.

---

## Assignment 6: Design a Notification System

🎯 Goal: Multi-channel delivery.

Requirements:
- Email, SMS, push.
- User preferences.
- Retry & DLQ.
- High throughput.

Discuss:
- Fan-out architecture.
- Event-driven vs sync.
- Failure handling.

---

## Assignment 7: Design a Chat System

🎯 Goal: Real-time communication.

Requirements:
- WebSocket connections.
- Store messages.
- Handle offline users.
- Group chats.

Discuss:
- Scaling WebSocket servers.
- Message ordering.
- Redis pub/sub usage.
- Horizontal scaling.

---

## Assignment 8: Design an E-Commerce Backend

🎯 Goal: Full-stack backend system.

Components:
- Product catalog.
- Cart.
- Orders.
- Payments.
- Inventory.

Discuss:
- Transaction handling.
- Prevent overselling.
- Event-driven order processing.
- Caching hot products.
- Database sharding strategy.

---

# 🟠 PHASE 3 — Scaling & Reliability

---

## Assignment 9: Design a File Upload & Processing System

🎯 Goal: Handle large files.

Flow:
- Upload to S3 via presigned URL.
- Process via Lambda/worker.
- Update DB status.

Discuss:
- Handling partial uploads.
- Virus scanning.
- Retry & idempotency.
- Cost implications.

---

## Assignment 10: Design a High-Traffic API (10k RPS)

🎯 Goal: Scale backend safely.

Discuss:
- Load balancer.
- Horizontal scaling.
- Redis caching.
- Read replicas.
- Rate limiting.
- Observability.

Include:
- Failure scenarios.
- Degradation strategy.

---

## Assignment 11: Design a Multi-Tenant SaaS Backend

🎯 Goal: Isolation & scalability.

Requirements:
- Tenant isolation.
- Shared DB vs separate DB.
- Role management.
- Billing integration.

Discuss:
- Data leaks prevention.
- Index strategy.
- Cost trade-offs.

---

# 🔴 PHASE 4 — Cloud-Aware Architecture

---

## Assignment 12: Design Serverless Order Processing System

🎯 Goal: Event-driven cloud system.

Architecture:
- API Gateway → Lambda.
- SQS.
- DynamoDB.
- SNS notifications.

Discuss:
- Cold starts.
- Concurrency.
- DLQ handling.
- Cost comparison with containers.

---

## Assignment 13: Design Microservices Communication

🎯 Goal: Service-to-service architecture.

Compare:
- REST sync calls.
- Event-driven messaging.
- gRPC.

Discuss:
- Circuit breaker.
- Timeouts.
- Retry strategy.
- Observability.

---

## Assignment 14: Design Scalable Search System

🎯 Goal: Efficient querying.

Requirements:
- Search by name.
- Autocomplete.
- Ranking.

Discuss:
- SQL full-text vs ElasticSearch.
- Index design.
- Caching.
- Write amplification.

---

# 🏁 FINAL ASSIGNMENT

---

## Assignment 15: End-to-End Architecture Walkthrough

Pick one system and explain:

1. Requirements clarification.
2. API design.
3. Data modeling.
4. Scaling strategy.
5. Failure scenarios.
6. Cost trade-offs.
7. Security considerations.
8. Deployment strategy.
9. Observability plan.


---