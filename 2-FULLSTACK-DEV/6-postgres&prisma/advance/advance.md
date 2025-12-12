# Advance

## Assignment 1 — Multi-Tenant SaaS Schema with Row-Level Security (RLS) + Prisma
_🎯 Goal: Support 100k+ tenants with enforced row-level isolation_

**Tasks**
- Every table must include `tenantId`
- Normal users can only read/write data for their tenant
- Prisma queries must automatically inject:
    ```
    WHERE tenant_id = current_tenant_id()
    ```
- Admins bypass restrictions
- Prevent query leaks, N+1 patterns, or cross-tenant access

**Expected Approach**
PostgreSQL RLS policies +
`set_config('app.current_tenant_id', ...)` +
Prisma middleware injecting tenant filters.

---

## Assignment 2 — Soft Delete + Paper Trail (Full Audit Log) Using Triggers + Prisma
_🎯 Goal: Add immutable audit history and recoverable deletion._

**Tasks**
- Add `deletedAt` to models
- Create unique index applying only when `deletedAt IS NULL`
- Write triggers so every CREATE/UPDATE/DELETE writes to `audit_log`
- Prisma should expose:
    - `.findFirst()` (excludes soft-deleted)
    - `.withDeleted()` to include all
    - `.restore()` to undo soft delete

**Expected Approach**
PostgreSQL trigger functions using `jsonb_build_object` +
Prisma middleware + custom client extensions.

---

## Assignment 3 — Real-Time Subscriptions with LISTEN/NOTIFY + Prisma
_🎯 Goal: Push live updates whenever an Order changes._

**Tasks**
- Use PostgreSQL `LISTEN/NOTIFY`
- Implement:
    ```
    order.subscribe(tenantId) → Async iterable
    ```
- Handle ordering, reconnection, and duplicate prevention

**Expected Approach**
`pg_listen` + Prisma `executeRaw` for NOTIFY +
custom subscription manager with backpressure.

---

## Assignment 4 — Hierarchical Categories with Closure Table + Recursive Queries

_🎯 Goal: Support unlimited nested categories with fast querying._

**Tasks**
- Retrieve **all descendants**
- Retrieve **full path to root**
- Move an entire subtree
- Prisma must expose:
    - `category.getSubTree(id)`
    - `category.getPathToRoot(id)`

**Expected Approach**
Closure table (`category_paths`) + recursive CTEs via Prisma raw SQL.

---

## Assignment 5 — Optimize a “Hell Query” Running 10+ Seconds
_🎯 Goal: Improve a slow reporting query involving large dataset joins.

**Tasks**
Refactor query:
```tsx
await prisma.order.findMany({
  where: { createdAt: { gte: start, lte: end }, status: 'completed' },
  include: { items: { include: { product: true } }, customer: true },
  orderBy: { createdAt: 'desc' },
  take: 50
});

```

- Optimize to run in under **100ms**
- Create correct indexes (compound, partial, covering)
- Remove unnecessary deep includes
- Use cursor-based pagination
- Validate improvements using `EXPLAIN ANALYZE`

---

## Assignment 7 — Optimistic Concurrency Control for Limited Stock Items
_🎯 Goal: Prevent overselling under high concurrency._

**Tasks**
- Add `version` integer column
- Atomic update:

```sql
UPDATE products
SET stock = stock - 1, version = version + 1
WHERE id = ? AND version = ? AND stock > 0;

```
- Retry failed attempts (up to 3 times)
- Fallback: pessimistic locking

**Expected Approach**
`$executeRaw` +
`FOR UPDATE SKIP LOCKED` +
retry loop + optional advisory locks.

---

## Assignment 8 — Full-Text Search + Autocomplete with Trigram Indexes

_🎯 Goal: Implement search with low latency on large datasets.

**Tasks**
- Autocomplete as user types
- Full-text relevance ranking
- Highlight matched text
- Filter by tags and date
- Work efficiently on 10M+ rows

**Expected Approach**
`pg_trgm`, GIN indexes,
`websearch_to_tsquery`, `<-> distance operator`,
Prisma raw query integration.

---

## Assignment 9 — Connection Pooling Strategy for Serverless Architectures

_🎯 Goal: Prevent connection exhaustion when deployed to Vercel / serverless environments._

**Tasks**
- Implement global singleton Prisma instance in prod
- Avoid new connections on hot reload in dev
- Add cleanup and connection recycling rules
- Add monitoring endpoint

**Expected Approach**
Global variable guard pattern +
connection pooling config + graceful shutdown management.

---

## Assignment 10 — Migration from Mongo-Style Schema to Relational Postgres

_🎯 Goal: Normalize embedded document structure into relational schema.

**Given structure**

```json
{
  "userId": "...",
  "orders": [
    { "items": [{ "productId": "...", "name": "iPhone", "price": 999 }], "total": 999 }
  ]
}

```

**Tasks**
- Build relational tables:
    - users
    - orders
    - order_items
    - products
- Add:
    - referential integrity
    - calculated/generated totals
    - JSONB flexible fields
    - unique indexes
    - constraints for stock and email uniqueness

**Expected Approach**
Normalized schema + materialized views or triggers for reporting queries.

---