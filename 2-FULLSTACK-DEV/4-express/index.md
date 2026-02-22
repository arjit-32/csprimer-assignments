# Express.js SDE Curriculum


# 🟢 PHASE 1 — Express Fundamentals

---

## Assignment 1: Clean Express Setup
🎯 Proper project foundation.

Tasks:
1. Initialize project.
2. Setup:
   - Express
   - dotenv
3. Create:
   - GET /health
   - GET /
4. Add basic logger middleware.

Goal:
Understand request lifecycle.

---

## Assignment 2: REST API (In-Memory)
🎯 Build structured CRUD API.

Tasks:
1. Build `/api/todos`
2. Endpoints:
   - POST
   - GET
   - GET /:id
   - PUT /:id
   - DELETE /:id
3. Return proper status codes.
4. Handle invalid IDs gracefully.

---

## Assignment 3: Middleware & Error Handling
🎯 Production-style error management.

Tasks:
1. Create:
   - logger middleware
   - request ID middleware
2. Create centralized error handler.
3. Return structured error:
   {
     success: false,
     message,
     code
   }
4. Add 404 fallback.

---

# 🟡 PHASE 2 — Validation & Authentication

---

## Assignment 4: Request Validation (Zod/Joi)
🎯 Input safety.

Tasks:
1. Validate:
   - body
   - query
   - params
2. Return consistent validation errors.
3. Prevent invalid payloads from reaching controllers.

---

## Assignment 5: JWT Authentication
🎯 Secure APIs.

Tasks:
1. Create:
   - /auth/register
   - /auth/login
2. Hash passwords (bcrypt).
3. Issue signed JWT.
4. Create auth middleware.
5. Protect `/api/todos`.

---

## Assignment 6: Role-Based Authorization
🎯 Permission control.

Tasks:
1. Add roles:
   - user
   - admin
2. Only admin can delete any todo.
3. Implement role-check middleware.

---

# 🟠 PHASE 3 — Database Integration

---

## Assignment 7: Connect Database
🎯 Persist data properly.

Tasks:
1. Use:
   - PostgreSQL (Prisma) OR
   - MongoDB (Mongoose)
2. Move todos to DB.
3. Add:
   - Indexes
   - Unique constraints
4. Implement pagination + filtering.

---

## Assignment 8: Transactions & Data Integrity
🎯 Maintain consistency.

Tasks:
1. Create operation involving:
   - multiple DB writes
2. Use transaction.
3. Rollback on failure.
4. Test failure scenarios.

---

# 🔵 PHASE 4 — Production Engineering

---

## Assignment 9: Rate Limiting & Security
🎯 Protect APIs.

Tasks:
1. Implement per-IP rate limiting.
2. Add:
   - Helmet
   - CORS
3. Handle brute-force login attempts.

---

## Assignment 10: Logging & Request Tracking
🎯 Observability basics.

Tasks:
1. Add structured logging.
2. Include:
   - request ID
   - response time
3. Log errors separately.

---

## Assignment 11: Caching Layer
🎯 Improve performance.

Tasks:
1. Cache GET /api/todos using:
   - in-memory OR Redis.
2. Invalidate cache on update.
3. Measure response time difference.

---

## Assignment 12: Background Jobs
🎯 Offload heavy work.

Tasks:
1. Add job queue (BullMQ or simple in-memory).
2. Process async task:
   - e.g., sending email.
3. Add retry mechanism.
4. Track job status.

---

# 🟣 PHASE 5 — Scaling & Stability

---

## Assignment 13: Graceful Shutdown
🎯 Production readiness.

Tasks:
1. Listen to SIGTERM.
2. Stop accepting new connections.
3. Finish ongoing requests.
4. Close DB connections safely.

---

## Assignment 14: Cluster Mode Awareness
🎯 Multi-core usage.

Tasks:
1. Use cluster module.
2. Spawn workers.
3. Restart worker on crash.
4. Add health check endpoint.

---

## Assignment 15: OpenAPI Documentation
🎯 Professional API standards.

Tasks:
1. Add Swagger.
2. Document endpoints.
3. Sync validation schema with docs.

---

# 🏁 Final Project

---

## Assignment 16: Production-Ready Todo API

Combine everything:

Features:
- JWT auth
- Role-based access
- DB integration
- Pagination
- Filtering
- Rate limiting
- Logging
- Caching
- Background jobs
- Graceful shutdown
- Swagger documentation

Requirements:
- Clean folder structure
- No business logic in routes
- Centralized error handling
- Secure configuration
- Environment separation (dev/prod)

---
