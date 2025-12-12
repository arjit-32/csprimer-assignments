# Distributed Systems Assignments

## Assignment-1: Build a Load-Balanced Microservice  
_🎯 Goal: Deploy stateless service instances behind a load balancer with health checks._  

**Scenario:** Your monolithic backend must handle increased traffic.  
**Concepts:** Horizontal scaling, fault tolerance, statelessness.  

---

## Assignment-2: Design and Implement Request Tracing with Correlation IDs  
_🎯 Goal: Add correlation IDs to every request and log chain propagation._  

**Scenario:** Several services call each other, making debugging painful.  
**Concepts:** Observability, traceability, distributed logging.  

---

## Assignment-3: Implement Circuit Breaker + Retry Logic  
_🎯 Goal: Implement the circuit breaker pattern with exponential backoff retries._  

**Scenario:** Downstream services occasionally timeout, causing cascading failures.  
**Concepts:** Resilience patterns.  

---

## Assignment-4: Create a Distributed Cache Layer  
_🎯 Goal: Implement caching with TTL, invalidation rules, and cache hit metrics._  

**Scenario:** Database queries are slowing down response times.  
**Concepts:** Caching, consistency, performance optimization.  

---

## Assignment-5: Implement Event-Driven Architecture With a Message Queue  
_🎯 Goal: Move heavy processing to async workers using message queues._  

**Scenario:** Processing image uploads synchronously impacts user performance.  
**Concepts:** Decoupling, asynchronous processing.  

---

## Assignment-6: Build a Service Registry + Discovery Pattern  
_🎯 Goal: Implement service discovery (central registry or DNS-based)._  

**Scenario:** New service instances spin up dynamically in the cluster.  
**Concepts:** Dynamic routing, service mesh basics.  

---

## Assignment-7: Implement Sharded Data Storage  
_🎯 Goal: Split storage across shards by hash/modulo key._  

**Scenario:** A user database has grown and needs partitioning.  
**Concepts:** Data partitioning, hashing, scalability.  

---

## Assignment-8: Build Distributed Rate Limiting  
_🎯 Goal: Create a rate limiter shared across distributed instances._  

**Scenario:** Multiple API gateway instances need global rate throttling.  
**Concepts:** Coordination, token buckets, shared state.  

---

## Assignment-9: Create a Fault-Tolerant, Persistent Job Queue  
_🎯 Goal: Build a queue that ensures at-least-once processing with retries._  

**Scenario:** Jobs must survive crashes or restarts.  
**Concepts:** Message durability, delivery guarantees.  

---

## Assignment-10: Implement Data Replication With Leader/Follower Strategy  
_🎯 Goal: Implement leader–follower replication and read routing._  

**Scenario:** The system must stay online even during database maintenance.  
**Concepts:** Consistency models, read/write separation.  

---

## Assignment-11: Build a Distributed Cron Task Scheduler  
_🎯 Goal: Create a lock-based job coordinator to ensure tasks run exactly once across nodes._  

**Scenario:** A repeating task must run exactly once across multiple service nodes.  
**Concepts:** Distributed locking, idempotency.  

---

## Assignment-12: Implement Event Sourcing for Auditability  
_🎯 Goal: Store events as the source of truth rather than state._  

**Scenario:** Business wants a full change log of order updates.  
**Concepts:** Immutable logs, CQRS basics.  

---

## Assignment-13: Implement Idempotency in Messaging  
_🎯 Goal: Guarantee side-effect-free processing with idempotent tokens._  

**Scenario:** Some messages get processed twice during retries.  
**Concepts:** Exactly-once semantics (logical).  

---

## Assignment-14: Build a Replicated Cache with Consistency Guarantees  
_🎯 Goal: Implement write-through or cache invalidation strategies._  

**Scenario:** Caches across regions sometimes return stale data.  
**Concepts:** Distributed consistency, invalidation patterns.  

---

## Assignment-15: Introduce Monitoring + SLOs for Microservices  
_🎯 Goal: Instrument metrics (P95 latency, throughput, saturation) and alerting._  

**Scenario:** Latency and error rate must be trackable at scale.  
**Concepts:** SRE practices, SLIs/SLOs.  

---

## Assignment-16: Simulate Network Failures + Chaos Engineering  
_🎯 Goal: Inject latency, packet loss, node failure, and measure resiliency._  

**Scenario:** System reliability assumptions need testing.  
**Concepts:** Fault injection, chaos testing.  

---

## Assignment-17: Create a Distributed Transaction with Saga Pattern  
_🎯 Goal: Implement saga orchestration or choreography with compensation._  

**Scenario:** Placing an order affects multiple microservices.  
**Concepts:** Eventual consistency, workflows.  

---

## Assignment-18: Global Deployment with Multi-Region Failover  
_🎯 Goal: Deploy a multi-region system with a failover strategy (active-passive or active-active)._  

**Scenario:** Users across continents experience latency and outages.  
**Concepts:** Geo-replication, routing policies.  

---

## Assignment-19: Implement API Gateway + Aggregator Pattern  
_🎯 Goal: Build a gateway that aggregates multiple backend calls._  

**Scenario:** A client app currently makes 10 calls per screen load.  
**Concepts:** API composition, reducing chattiness.  

---

## Assignment-20: Design a Conflict Resolution Mechanism in Distributed Writes  
_🎯 Goal: Implement CRDTs, vector clocks, or last-write-wins logic._  

**Scenario:** Two users edit the same document from different regions.  
**Concepts:** Concurrency control, eventual consistency.  

---