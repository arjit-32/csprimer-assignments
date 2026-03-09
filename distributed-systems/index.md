# 🌐 Distributed Systems & Microservices Engineering  

A structured roadmap combining:

- Distributed systems theory
- Consistency modeling
- Consensus fundamentals
- Practical microservices patterns
- Production resilience engineering

Focus:
Understand *why* distributed systems behave the way they do,  
and *how* to engineer reliable microservices in practice.

---

# 🔵 PHASE 1 — Distributed Systems Theory Foundations

---

## Assignment T1: CAP Theorem — Formal Reasoning

🎯 Goal: Understand why CA is impossible under partition.

### Tasks
1. Draw a system with:
   - 2 nodes
   - Network partition
2. Show:
   - If both nodes accept writes → what breaks?
   - If one rejects → what breaks?
3. Classify behavior:
   - CP
   - AP
4. Write short proof-style explanation:
   - Why CA cannot exist during partition.

### Deliverable
Written reasoning + diagram.

---

## Assignment T2: Quorum Math & Consistency Guarantees

🎯 Goal: Understand majority-based safety.

### Tasks
1. For N replicas, compute:
   - Minimum read quorum (R)
   - Minimum write quorum (W)
2. Prove:
   - R + W > N ensures strong consistency.
3. Simulate conflicting writes across replicas.
4. Explain Dynamo-style tradeoffs.

### Deliverable
Quorum calculations + reasoning explanation.

---

## Assignment T3: Consistency Models Comparison

🎯 Goal: Differentiate consistency guarantees.

### Tasks
Given timeline of events:
- A writes
- B reads
- Network partition occurs

Determine:
1. Is system linearizable?
2. Is it sequentially consistent?
3. Is it eventually consistent?

Explain:
- Differences formally.

### Deliverable
Event ordering analysis.

---

## Assignment T4: Consensus — Paxos & Raft (Conceptual)

🎯 Goal: Understand safety vs liveness.

### Tasks
1. Explain roles:
   - Proposer
   - Acceptor
   - Learner
2. Explain why two leaders cannot commit conflicting values.
3. Compare Paxos vs Raft.
4. Define:
   - Safety
   - Liveness

### Deliverable
Concept explanation + diagrams.

(No need to implement Paxos.)

---

## Assignment T5: Exactly-Once Is a Myth

🎯 Goal: Understand impossibility in practice.

### Tasks
1. Create failure scenario:
   - Client retries
   - Server commits
   - Server crashes before responding
2. Show why exactly-once delivery is impossible.
3. Explain idempotency as practical solution.

### Deliverable
Failure scenario reasoning.

---

## Assignment T6: 2PC vs Saga Pattern (Theory)

🎯 Goal: Understand distributed transaction tradeoffs.

### Tasks
1. Explain Two-Phase Commit protocol.
2. Show blocking problem if coordinator crashes.
3. Compare with Saga pattern.
4. Explain compensation model.

### Deliverable
Tradeoff analysis.

---

# 🟢 PHASE 2 — Statelessness & Horizontal Scaling

---

## Assignment 1: Horizontal Scaling Behind Load Balancer

🎯 Goal: Make service stateless.

### Tasks
1. Run multiple Node instances.
2. Put behind load balancer.
3. Add health check endpoint.
4. Remove in-memory session storage.

### Discuss
- Sticky sessions vs stateless design.
- Why shared state breaks scaling.

---

## Assignment 2: Distributed Locking (Redis-Based)

🎯 Goal: Prevent race conditions across instances.

### Tasks
1. Implement distributed lock using Redis SET NX.
2. Simulate concurrent updates.
3. Add TTL to prevent deadlock.

### Discuss
- Why in-memory lock fails.
- Redlock debate.
- Relation to ACID guarantees.

---

## Assignment 3: Distributed Rate Limiting

🎯 Goal: Shared throttling across instances.

### Tasks
1. Implement token bucket using Redis.
2. Enforce per-user limit.
3. Handle burst traffic.

### Discuss
- Sliding window vs token bucket.
- Failure of Redis.

---

# 🟡 PHASE 3 — Consistency in Practice

---

## Assignment 4: CAP Tradeoff Simulation

🎯 Goal: Experience CP vs AP behavior.

### Tasks
1. Simulate network partition.
2. Choose:
   - Serve stale data
   - Reject request
3. Observe outcomes.

### Discuss
- Where CP is mandatory.
- Where AP is acceptable.

---

## Assignment 5: Eventual Consistency Demo

🎯 Goal: Observe replication lag.

### Tasks
1. Simulate primary + replica.
2. Write to primary.
3. Immediately read from replica.
4. Observe stale reads.

### Discuss
- Read-after-write consistency.
- UX implications.

---

## Assignment 6: Read/Write Separation

🎯 Goal: Scale reads safely.

### Tasks
1. Route writes to primary.
2. Route reads to replica.
3. Handle replication lag gracefully.

---

# 🟠 PHASE 4 — Resilience & Failure Handling

---

## Assignment 7: Circuit Breaker + Retry

🎯 Goal: Prevent cascading failures.

### Tasks
1. Wrap downstream calls.
2. Add timeout.
3. Add exponential backoff.
4. Open circuit after threshold.

### Discuss
- Retry storms.
- Backpressure.

---

## Assignment 8: Backpressure & Load Shedding

🎯 Goal: Prevent system collapse.

### Tasks
1. Flood worker queue.
2. Add max queue length.
3. Reject new traffic.
4. Measure latency change.

### Discuss
- Thundering herd problem.
- Load shedding strategy.

---

## Assignment 9: Chaos Simulation

🎯 Goal: Validate resilience assumptions.

### Tasks
1. Inject latency.
2. Crash a service.
3. Observe retry & circuit breaker behavior.

---

# 🔵 PHASE 5 — Event-Driven Systems

---

## Assignment 10: Persistent Job Queue

🎯 Goal: At-least-once processing.

### Tasks
1. Push job to SQS or Redis queue.
2. Process in worker.
3. Retry failed jobs.
4. Add dead-letter queue.

### Discuss
- At-least-once vs exactly-once.
- Idempotency requirements.

---

## Assignment 11: Idempotent Event Processing

🎯 Goal: Handle duplicate messages.

### Tasks
1. Store processed message IDs.
2. Prevent duplicate side effects.
3. Retry safely.

---

## Assignment 12: Saga Implementation

🎯 Goal: Manage distributed transaction.

### Scenario
Order touches:
- Payment
- Inventory
- Notification

### Tasks
1. Implement orchestration.
2. Add compensation step.
3. Simulate partial failure.

---

## Assignment 13: Leader Election

🎯 Goal: Ensure single active worker.

### Tasks
1. Run multiple worker instances.
2. Elect leader via distributed lock.
3. Simulate leader crash.
4. Re-elect new leader.

### Discuss
- Relation to Raft conceptually.

---

# 🟣 PHASE 6 — Data Scaling & Caching

---

## Assignment 14: Sharding Strategy

🎯 Goal: Partition large dataset.

### Tasks
1. Shard by user ID hash.
2. Route request to correct shard.
3. Simulate hot partition.

### Discuss
- Rebalancing complexity.
- Operational overhead.

---

## Assignment 15: Cache Invalidation Strategy

🎯 Goal: Manage stale cache.

### Tasks
1. Add Redis cache for GET.
2. Update DB.
3. Invalidate cache properly.
4. Simulate stale data bug.

### Discuss
- Write-through vs write-behind.
- Cache stampede.
- Double delete pattern.

---

# 🟤 PHASE 7 — Observability & Reliability

---

## Assignment 16: Correlation ID Tracing

🎯 Goal: Debug distributed calls.

### Tasks
1. Add correlation ID middleware.
2. Propagate via headers.
3. Log across services.

---

## Assignment 17: SLOs & Monitoring

🎯 Goal: Production reliability mindset.

### Tasks
1. Track P95 latency.
2. Track error rate.
3. Define SLO.
4. Simulate failure.
5. Trigger alert.

### Discuss
- Error budgets.
- Alert fatigue.

---

# 🏁 FINAL INTEGRATED DISTRIBUTED SYSTEM

---

## Build: Order Processing Microservice Cluster

System must:

- Be horizontally scalable
- Handle retries safely
- Avoid double payment
- Use async processing
- Handle duplicate messages
- Use caching correctly
- Survive service crash
- Handle queue overload
- Provide monitoring

### Explain

1. Where CAP tradeoffs exist.
2. Where strong consistency is required.
3. Where eventual consistency is acceptable.
4. How failures propagate.
5. How idempotency is enforced.

### Goal
Demonstrate distributed systems reasoning + microservice engineering maturity.