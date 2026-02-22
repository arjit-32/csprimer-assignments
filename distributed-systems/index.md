# 🌐 Distributed Systems for Mid–Senior Node SDE

# 🟢 PHASE 1 — Scaling & Statelessness

---

## Assignment 1: Horizontal Scaling Behind Load Balancer

🎯 Goal: Make service stateless.

Tasks:
- Run multiple Node instances.
- Put behind load balancer.
- Add health checks.
- Remove in-memory session storage.

Discuss:
- Sticky sessions vs stateless.
- Why shared state breaks scaling.

---

## Assignment 2: Distributed Rate Limiting (Redis-Based)

🎯 Goal: Shared throttling across instances.

Tasks:
- Implement token bucket using Redis.
- Enforce per-user limit.
- Handle burst traffic.

Discuss:
- Sliding window vs token bucket.
- What happens if Redis fails?

---

# 🟡 PHASE 2 — Resilience Patterns

---

## Assignment 3: Circuit Breaker + Retry

🎯 Goal: Prevent cascading failures.

Tasks:
- Wrap downstream API calls.
- Add timeout.
- Add exponential backoff.
- Open circuit after failure threshold.

Discuss:
- Retry storm risk.
- Backpressure handling.
- Partial system degradation.

---

## Assignment 4: Request Tracing with Correlation IDs

🎯 Goal: Debug distributed calls.

Tasks:
- Add correlation ID middleware.
- Propagate via headers.
- Log across services.

Discuss:
- Logs vs tracing systems.
- Debugging production failures.

---

# 🟠 PHASE 3 — Async & Event-Driven Systems

---

## Assignment 5: Persistent Job Queue (At-Least-Once Processing)

🎯 Goal: Offload heavy tasks.

Tasks:
- Push job to SQS or Redis queue.
- Worker processes job.
- Retry failed jobs.
- Add dead-letter queue.

Discuss:
- At-least-once vs exactly-once.
- Idempotency design.
- Message duplication.

---

## Assignment 6: Saga Pattern (Order Workflow)

🎯 Goal: Manage distributed transaction.

Scenario:
Order creation touches:
- Payment service
- Inventory service
- Notification service

Tasks:
- Implement orchestration.
- Add compensation step on failure.

Discuss:
- Eventual consistency.
- Compensating transactions.
- When to avoid distributed transactions.

---

## Assignment 7: Idempotent Event Processing

🎯 Goal: Handle duplicate events safely.

Tasks:
- Store processed message IDs.
- Prevent duplicate side effects.

Discuss:
- Retry logic.
- Why exactly-once is impossible (practically).
- Logical idempotency.

---

# 🔵 PHASE 4 — Data & Consistency

---

## Assignment 8: Read/Write Separation

🎯 Goal: Scale DB reads.

Tasks:
- Simulate primary + read replica.
- Route reads separately.
- Handle replication lag.

Discuss:
- Eventual consistency.
- Read-after-write issues.
- When to use replicas.

---

## Assignment 9: Sharding Strategy (Conceptual + Light Implementation)

🎯 Goal: Handle large dataset.

Tasks:
- Shard by user ID hash.
- Route request to correct shard.

Discuss:
- Hot partition problem.
- Rebalancing difficulty.
- Operational complexity.

(No need to implement full shard migration.)

---

# 🟣 PHASE 5 — Observability & Reliability

---

## Assignment 10: SLOs + Monitoring

🎯 Goal: Production reliability mindset.

Tasks:
- Track P95 latency.
- Track error rate.
- Set alert threshold.
- Simulate failure.

Discuss:
- Error budget.
- Alert fatigue.
- Degradation strategy.

---

## Assignment 11: Chaos Simulation (Lightweight)

🎯 Goal: Test resilience.

Tasks:
- Inject latency.
- Simulate service crash.
- Observe retry & circuit breaker behavior.

Discuss:
- Fault tolerance assumptions.
- Realistic failure scenarios.

---

# 🟤 PHASE 6 — API Aggregation

---

## Assignment 12: API Gateway Aggregator

🎯 Goal: Reduce client chattiness.

Tasks:
- Aggregate 3 service calls.
- Handle partial failure.
- Return graceful fallback.

Discuss:
- Backend-for-Frontend pattern.
- Latency stacking.
- Timeout strategy.

---

# 🏁 FINAL ASSIGNMENT

---

## Assignment 13: Scale from 1k → 50k RPS

Pick one system and explain:

1. Add load balancing.
2. Add caching.
3. Add async processing.
4. Add rate limiting.
5. Add read replicas.
6. Add monitoring.
7. Handle failure scenarios.

Explain trade-offs clearly.