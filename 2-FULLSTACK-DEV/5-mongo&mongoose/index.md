# MongoDB + Mongoose Assignments

# 🟢 PHASE 1 — Setup & Basic Modeling

---

## Assignment 1: MongoDB Connection
🎯 Connect safely.

Tasks:
1. Setup local Mongo or Atlas.
2. Create db.js with:
   - connection handling
   - error handling
3. Log:
   - connected
   - disconnected

Goal:
Understand connection lifecycle.

---

## Assignment 2: Schema & Model Basics
🎯 Understand schema vs model.

Tasks:
1. Create Student schema:
   - name (required)
   - age
   - email (required, unique)
   - createdAt (default now)
2. Insert sample student.
3. Handle duplicate key error.

---

# 🟡 PHASE 2 — CRUD & Queries

---

## Assignment 3: CRUD Operations
🎯 Core DB operations.

Tasks:
1. Create student.
2. Find all students.
3. Find by ID.
4. Update student.
5. Delete student.
6. Use lean() where appropriate.

---

## Assignment 4: Filtering, Sorting & Pagination
🎯 Real-world querying.

Tasks:
1. Filter:
   - age > 18
   - email contains keyword
2. Add sorting:
   - age asc/desc
3. Implement:
   - skip/limit pagination
4. Return total count + data.

---

# 🟠 PHASE 3 — Validation & Middleware

---

## Assignment 5: Schema Validation
🎯 Enforce DB-level rules.

Tasks:
1. Add:
   - required fields
   - min/max validators
   - regex email
2. Return clean validation errors.

---

## Assignment 6: Hooks & Derived Fields
🎯 Practical middleware use.

Tasks:
1. pre('save') → normalize name.
2. Add virtual field:
   - isAdult (age >= 18).
3. Ensure virtual shows in JSON output.

---

# 🔵 PHASE 4 — Data Modeling

---

## Assignment 7: Embedded vs Referenced Modeling
🎯 Design trade-offs.

Tasks:
1. Add embedded address:
   - city
   - state
2. Create Course model.
3. Add reference:
   - courses: [ObjectId]
4. Use populate().
5. Explain when to embed vs reference.

---

## Assignment 8: Indexes & Performance Awareness
🎯 Avoid slow queries.

Tasks:
1. Add index on:
   - email (unique)
   - age
2. Run explain() on:
   - indexed query
   - non-indexed query
3. Compare results.

---

# 🟣 PHASE 5 — Aggregation & Transactions

---

## Assignment 9: Aggregation Basics
🎯 Data analysis basics.

Tasks:
1. Group students by city.
2. Find average age.
3. Use:
   - $match
   - $group
   - $project
4. Use $lookup with courses.

---

## Assignment 10: Transactions
🎯 Maintain consistency.

Tasks:
1. Create:
   - student
   - course enrollment
2. Wrap inside session transaction.
3. Rollback on failure.
4. Test failure scenario.

---

# 🟤 PHASE 6 — Practical API Integration

---

## Assignment 11: Integrate with Express API
🎯 Real-world backend usage.

Tasks:
1. Replace in-memory todos with Mongo.
2. Add:
   - filtering
   - pagination
   - sorting
3. Add index-aware querying.
4. Handle DB errors centrally.

---

## Assignment 12: Basic Performance Awareness
🎯 Write efficient queries.

Tasks:
1. Use:
   - select() to limit fields.
   - lean() for read-heavy endpoints.
2. Avoid N+1 population issues.
3. Compare query times (small dataset is fine).

---