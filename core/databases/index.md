# 🗄 Databases for Backend SDE (4–8 yrs)


# SECTION 1 — Storage & Engine Internals

## Assignment 1: Understand B-Tree Index Internals

Tasks:
- Draw B-Tree structure.
- Explain:
  - Page split
  - Leaf vs internal nodes
- Explain:
  - Why range queries are fast.
  - Why random inserts fragment index.

---

## Assignment 2: WAL & Crash Recovery

Tasks:
- Explain:
  - Write Ahead Logging.
  - Redo log.
  - Checkpoint.
- Simulate crash and explain recovery flow.

---

# SECTION 2 — Concurrency & Locking

## Assignment 3: MVCC Deep Dive

Tasks:
- Explain:
  - Snapshot isolation.
  - How versioning works.
- Explain:
  - Why reads don’t block writes in MVCC.
- Compare:
  - InnoDB vs Mongo snapshot model.

---

## Assignment 4: Locking Types

Tasks:
- Demonstrate:
  - Row lock
  - Table lock
- Simulate deadlock.
- Explain deadlock detection & resolution.

---

## Assignment 5: Optimistic vs Pessimistic Locking

Tasks:
- Implement version column approach.
- Implement SELECT ... FOR UPDATE.
- Compare trade-offs.

---

# SECTION 3 — Index Optimization

## Assignment 6: Composite Index Rules

Tasks:
- Demonstrate:
  - Leftmost prefix rule.
- Show when index is ignored.
- Compare:
  - Covering index vs non-covering.

---

## Assignment 7: Index Selectivity & Cardinality

Tasks:
- Create high-cardinality column.
- Create low-cardinality column.
- Compare performance impact.

---

# SECTION 4 — Scaling & Architecture

## Assignment 8: Connection Pool Strategy

Tasks:
- Limit pool size.
- Simulate pool exhaustion.
- Explain optimal sizing formula.

---

## Assignment 9: Read Replica Lag Simulation

Tasks:
- Simulate delayed replica.
- Show read-after-write inconsistency.
- Propose mitigation.

---

## Assignment 10: Sharding Hotspot Analysis

Tasks:
- Create shard by user_id.
- Identify hotspot key.
- Propose consistent hashing fix.

---

# SECTION 5 — Failure Debugging

## Assignment 11: Slow Query Investigation

Tasks:
- Run heavy query.
- Analyze explain.
- Optimize via:
  - Index.
  - Query rewrite.
  - Denormalization.

---

## Assignment 12: Deadlock Case Study

Tasks:
- Create two transactions updating rows in reverse order.
- Observe deadlock.
- Explain resolution.

---

# SECTION 6 — Distributed Data Concepts

## Assignment 13: CAP Theorem in DB Context

Tasks:
- Explain trade-offs for:
  - MySQL
  - Mongo
  - Cassandra
- Provide real workload examples.

---

## Assignment 14: Eventual Consistency Scenario

Tasks:
- Simulate write → delayed read.
- Design mitigation strategy.

---

# SECTION 7 — Production Strategy

## Assignment 15: Database Migration Strategy

Tasks:
- Add column safely.
- Perform zero-downtime migration.
- Use:
  - Shadow writes.
  - Backfill.

---

# FINAL: Production Case Studies

Explain:

1. Why DB CPU spikes during traffic peak?
2. Why adding index slowed writes?
3. Why replication lag increases under load?
4. Why connection pool exhaustion crashes service?
5. Why deadlock appears randomly in production?
6. Why query fast locally but slow in prod?

Use:
- Locking
- Indexing
- Isolation
- IO behavior
- Connection pooling