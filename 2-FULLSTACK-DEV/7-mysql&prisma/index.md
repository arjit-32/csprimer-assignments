# 🐬 MySQL + Prisma (Backend SDE Focused Track)

---

# 🟢 PHASE 1 — MySQL Foundations (Practical)

---

## Assignment 1: Setup & Connection
🎯 Run MySQL and connect from Node.

Tasks:
1. Install MySQL (local or Docker).
2. Create database: learning_db.
3. Connect using:
   - mysql CLI
   - Node (mysql2 or Prisma later).
4. Verify connection from Node script.

Goal:
Understand DB connection lifecycle.

---

## Assignment 2: Schema Design & Constraints
🎯 Design relational structure properly.

Tasks:
1. Create tables:
   - users
   - posts
2. Add:
   - PRIMARY KEY
   - FOREIGN KEY
   - UNIQUE (email)
   - NOT NULL
   - DEFAULT timestamps
3. Test:
   - Duplicate email error
   - Foreign key constraint violation

Goal:
Understand relational integrity.

---

## Assignment 3: CRUD + Joins
🎯 Backend-style usage.

Tasks:
1. Insert users and posts.
2. Query:
   - All posts with user info (JOIN).
   - Posts for specific user.
3. Update + delete.
4. Use LAST_INSERT_ID().

No complex analytical SQL needed.

---

## Assignment 4: Filtering, Sorting & Pagination
🎯 API-style queries.

Tasks:
1. Implement:
   - WHERE filters
   - ORDER BY
   - LIMIT / OFFSET
2. Return:
   - paginated data
   - total count
3. Combine JOIN + pagination.

---

## Assignment 5: Index Basics
🎯 Performance awareness.

Tasks:
1. Add:
   - Index on email
   - Index on created_at
   - Composite index (user_id, created_at)
2. Use EXPLAIN.
3. Observe difference between indexed vs non-indexed lookup.

No deep benchmarking required.

---

## Assignment 6: Transactions
🎯 Atomic backend operations.

Tasks:
1. Wrap:
   - Create user
   - Create initial post
2. Commit on success.
3. Rollback on failure.
4. Simulate error scenario.

Goal:
Understand atomicity.

---

# 🟡 PHASE 2 — Prisma Integration

---

## Assignment 7: Initialize Prisma
🎯 Setup ORM properly.

Tasks:
1. Install prisma + client.
2. Configure DATABASE_URL.
3. Create first migration.
4. Generate Prisma client.

---

## Assignment 8: Model Relations in Prisma
🎯 Represent relational structure.

Tasks:
1. Create:
   - User model
   - Post model (1-to-many)
2. Migrate.
3. Verify using Prisma Studio.

---

## Assignment 9: Prisma CRUD
🎯 Replace raw SQL usage.

Tasks:
1. Create user.
2. Create post.
3. Query:
   - include posts
   - filter by condition
4. Update and delete records.

---

## Assignment 10: Filtering & Pagination with Prisma
🎯 API-level queries.

Tasks:
1. Use:
   - where
   - orderBy
   - skip / take
2. Implement paginated endpoint.
3. Return:
   - data
   - total count (separate query)

---

## Assignment 11: Prisma Transactions
🎯 Safe multi-step logic.

Tasks:
1. Use:
   prisma.$transaction()
2. Simulate:
   - success case
   - failure (duplicate email)
3. Ensure rollback works.

---

## Assignment 12: Raw SQL When Needed
🎯 Know when ORM isn’t enough.

Tasks:
1. Use:
   prisma.$queryRaw
2. Write:
   - JOIN query
   - Aggregation query
3. Compare with Prisma API version.

---

## Assignment 13: Basic Optimistic Concurrency
🎯 Prevent race conditions.

Tasks:
1. Add:
   - version column
2. Update using:
   WHERE id = ? AND version = ?
3. Retry on failure (max 3 times).

No need for complex locking strategies.

---

## Assignment 14: Integrate with Express API
🎯 Real backend usage.

Tasks:
1. Replace in-memory data with Prisma.
2. Add:
   - validation
   - pagination
   - filtering
3. Handle:
   - unique constraint errors
   - foreign key errors
4. Centralize DB error handling.
