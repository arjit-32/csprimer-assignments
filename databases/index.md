# Databases Assignments

## Assignment-1: Compare Storage Engines  
_🎯 Goal: Compare how two storage engines (e.g., MySQL InnoDB vs MyISAM, or MongoDB WiredTiger vs MMAP) store data._  

**Relevance:** Choosing the right engine for transactional vs analytical workloads.  

---

## Assignment-2: Design a Database Schema for a Real System  
_🎯 Goal: Model entities, relationships, constraints, and lifecycle for a domain (e.g., e-commerce, ridesharing)._  

**Relevance:** Data modeling and normalization trade-offs.  

---

## Assignment-3: Normalize and Then Denormalize a Schema  
_🎯 Goal: Take a schema from 1NF → 2NF → 3NF, then denormalize for performance._  

**Relevance:** Balancing correctness vs query speed.  

---

## Assignment-4: Create and Evaluate Indexing Strategies  
_🎯 Goal: Decide primary key, secondary indexes, composite keys, and unique constraints — no queries required._  

**Relevance:** Query optimization and lookup patterns.  

---

## Assignment-5: Explain a Query Execution Plan  
_🎯 Goal: Interpret explain plans (JOIN type, scan type, index use) and document bottlenecks._  

**Relevance:** Debugging slow DB queries in production.  

---

## Assignment-6: Implement a Write Path Strategy  
_🎯 Goal: Design how writes propagate: app → cache → DB → replicas → backup → analytics._  

**Relevance:** High availability and multi-tier data systems.  

---

## Assignment-7: Evaluate Consistency Models  
_🎯 Goal: Compare strong, eventual, causal, read-after-write consistency with examples._  

**Relevance:** Required for distributed systems and microservices.  

---

## Assignment-8: Design a Database Sharding Strategy  
_🎯 Goal: Decide shard key, shard balancing, lookup routing, and rebalancing approach._  

**Relevance:** Scaling large systems.  

---

## Assignment-9: Explain ACID vs BASE with Real Workloads  
_🎯 Goal: Classify real app workflows (bank transfers vs notifications) into ACID vs BASE suitability._  

**Relevance:** Choosing SQL vs NoSQL patterns.  

---

## Assignment-10: Simulate Transaction Isolation Levels  
_🎯 Goal: Document phantom reads, dirty reads, lost updates, and how isolation prevents them._  

**Relevance:** Avoiding data corruption in concurrent systems.  

---

## Assignment-11: Evaluate Storage Formats  
_🎯 Goal: Compare row-based vs columnar formats (e.g., PostgreSQL vs ClickHouse)._  

**Relevance:** OLTP vs OLAP decisions.  

---

## Assignment-12: Design a Backup and Recovery Strategy  
_🎯 Goal: Plan incremental vs full backups, PITR (Point-In-Time Recovery), and RPO/RTO targets._  

**Relevance:** Disaster recovery compliance.  

---

## Assignment-13: Explain Replication Architecture  
_🎯 Goal: Compare sync vs async replication, leader–follower vs leaderless._  

**Relevance:** Scaling read-heavy workloads.  

---

## Assignment-14: Plan Database Migration Strategy  
_🎯 Goal: Choose live migration, shadow writes, dual-write testing, or cutover approach._  

**Relevance:** Safe schema or engine migrations.  

---

## Assignment-15: Analyze Query Patterns  
_🎯 Goal: Categorize CRUD queries into read-heavy, write-heavy, analytics, batch, or streaming workloads._  

**Relevance:** Infrastructure choices & optimization.  

---

## Assignment-16: Compare Storage Index Types  
_🎯 Goal: Explain B-Tree, Hash index, Bitmap index, and Full-Text index with use cases._  

**Relevance:** Improving lookup performance.  

---

## Assignment-17: Evaluate Database Caching Approaches  
_🎯 Goal: Compare read-through, write-through, write-behind, and cache invalidation strategies._  

**Relevance:** Scalability and low latency.  

---

## Assignment-18: Design Multi-Tenant Database Strategy  
_🎯 Goal: Compare shared DB, shared schema, or isolated DB per tenant for SaaS architecture._  

**Relevance:** Real-world SaaS system design.  

---

## Assignment-19: Plan a Monitoring Strategy  
_🎯 Goal: Define database performance metrics: latency, cache hit rate, locks, replication lag, throughput._  

**Relevance:** Production troubleshooting.  

---

## Assignment-20: Compare SQL vs NoSQL Systems  
_🎯 Goal: Map real-world requirements to appropriate DB types (key-value, document, wide-column, graph)._  

**Relevance:** Choosing the right database for the job.  

---