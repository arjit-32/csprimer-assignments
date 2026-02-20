# Express Fundamentals

## Assignment-1: First Express Server  
_🎯 Goal: Get familiar with Express setup._

**Tasks** ->  
1. Initialize project with `npm init -y`.  
2. Install `express`.  
3. Create:  
   - `GET /` → returns `"Hello Express"`.  
   - `GET /time` → returns server time.  

---

## Assignment-2: Routes & Route Parameters  
_🎯 Goal: Learn routing patterns._

**Tasks** ->  
1. Add routes:  

| Path              | Behavior                     |  
|-------------------|------------------------------|  
| `/hello/:name`    | Returns greeting with name.  |  
| `/math/add/:a/:b` | Returns sum.                |  

2. Validate that `a` and `b` are numbers.  

---

## Assignment-3: Express Middleware Basics  
_🎯 Goal: Understand middleware pipeline._

**Tasks** ->  
1. Add a custom logger middleware printing:  
   - method  
   - url  
   - timestamp  
2. Add a request counter stored in memory.  

---

## Assignment-4: Serving Static Files  
_🎯 Goal: Serve a simple frontend from Express._

**Tasks** ->  
1. Create a `public/` folder.  
2. Serve:  
   - `index.html`.  
   - CSS + images.  
3. Add route `/about.html`.  

---

## Assignment-5: Basic Error Handling  
_🎯 Goal: Learn Express error patterns._

**Tasks** ->  
1. Create a route `/error` that throws an error.  
2. Add error middleware that returns JSON:  
   ```json
   { "error": "message" }
Add 404 fallback for unknown routes.

---
# Building APIs

## Assignment-1: CRUD API (In-Memory)  
_🎯 Goal: Build structured REST APIs._

**Tasks** ->  
1. Build `/api/todos`.  
2. Endpoints:  
   - POST → create.  
   - GET → list.  
   - GET `/id`.  
   - PUT `/id`.  
   - DELETE `/id`.  

---

## Assignment-2: Query Filtering & Pagination  
_🎯 Goal: Make APIs dynamic._

**Tasks** ->  
1. Support filters such as:  
   `/api/todos?completed=true`.  
2. Add:  
   - Pagination: `page`, `limit`.  
   - Sorting: `sort=createdAt:desc`.  

---

## Assignment-3: Request Validation  
_🎯 Goal: Secure and sanitize inputs._

**Tasks** ->  
1. Integrate **Zod or Joi**.  
2. Validate:  
   - Body schema.  
   - Query params.  
   - Route params.  
3. Ensure consistent JSON errors.  

---

## Assignment-4: Authentication (JWT)  
_🎯 Goal: Require login to access protected routes._

**Tasks** ->  
1. Create `/auth/register` & `/auth/login`.  
2. Use:  
   - bcrypt hashing.  
   - Signed JWT.  
3. Protect `/api/todos` so only logged-in users see their own items.  

---

## Assignment-5: Role-Based Authorization  
_🎯 Goal: Implement permissions._

**Tasks** ->  
1. Add roles: `"user"`, `"admin"`.  
2. Only admin can:  
   - Delete any todo.  
   - Access `/admin/stats`.  

---

# Express Architecture

## Assignment-1: Modular Project Structure  
_🎯 Goal: Refactor monolith code._

**Tasks** ->  
1. Create folder structure:  
/src ├─ models/ ├─ controllers/ ├─ routes/ ├─ middleware/ ├─ utils/ └─ app.js

2. Move logic into modules.  

---

## Assignment-2: File Uploads (Multer)  
_🎯 Goal: Support media uploads._

**Tasks** ->  
1. Create `/upload/avatar`.  
2. Validate:  
   - File size limit.  
   - Allowed types.  
3. Store file with a unique name.  
4. Return file URL.  

---

## Assignment-3: Express + Database Integration  
_🎯 Goal: Persist data._

**Tasks** ->  
1. Choose MongoDB (Mongoose) OR PostgreSQL (Prisma).  
2. Move todos storage from memory → DB.  
3. Implement:  
   - Indexing.  
   - Schema validation.  
   - Soft delete (bonus).  

---

## Assignment-4: Global Error Handling + Logging System  
_🎯 Goal: Build production-ready error layers._

**Tasks** ->  
1. Create custom `AppError` class.  
2. Log based on environment.  
3. Mask internal errors in production.  
4. Add request ID tracking.  

---

## Assignment-5: Performance Optimization  
_🎯 Goal: Identify bottlenecks and optimize._

**Tasks** ->  
1. Measure response times.  
2. Add:  
   - Request caching (Redis optional).  
   - Compression middleware.  
   - Rate limiting improvements.  

---



# Scaling and Production Engineering

## Assignment-1: WebSockets + Express  
_🎯 Goal: Add real-time messaging._

**Tasks** ->  
1. Integrate with Socket.io or WebSocket API.  
2. Notify users when:  
   - A new todo is created.  
   - A todo is updated.  

---

## Assignment-2: Express with Cluster Mode Scaling  
_🎯 Goal: Multi-core scaling._

**Tasks** ->  
1. Run server across CPU cores.  
2. Add health check.  
3. Gracefully restart workers.  

---

## Assignment-3: API Rate Limiting (Distributed)  
_🎯 Goal: Rate limit across multiple processes._

**Tasks** ->  
1. Implement Redis or in-memory cluster messaging.  
2. Per-user + per-IP throttling tiers.  

---

## Assignment-4: OpenAPI Documentation  
_🎯 Goal: Make API self-documenting._

**Tasks** ->  
1. Add Swagger UI.  
2. Auto-generate documentation from schemas (Zod or Joi).  

---

## Assignment-5: Deploy a Production-Ready Express App  
_🎯 Goal: CI/CD + deployment._

**Tasks** ->  
1. Dockerize app.  
2. Add:  
   - Environment variable injection.  
   - HTTPS reverse proxy (NGINX).  
3. Deploy to:  
   - Railway / Fly.io / AWS / Render.  

---



# Advance Express Engineering 
Systems-Level Production Patterns

## Assignment-1: Multi-Tenant Express App  
_🎯 Goal: Build a SaaS-style system with isolated tenant data._

**Tasks** ->  
1. Support URL-based tenant routing (`/tenantA/...`, `/tenantB/...`).  
2. Load tenant config dynamically.  
3. Implement per-tenant rate limits.  
4. Prevent cross-tenant data leakage.  

---

## Assignment-2: Plugin Architecture for Express  
_🎯 Goal: Allow extendable Express apps._

**Tasks** ->  
1. Create `app.register(plugin, options)`.  
2. Plugins can:  
   - Add middleware.  
   - Add routes.  
   - Set config metadata.  
3. Load plugins from a folder.  

---

## Assignment-3: API Versioning System  
_🎯 Goal: Support multiple API versions._

**Tasks** ->  
1. Implement paths like:  
/api/v1/users
/api/v2/users

2. Share logic but allow alternate controllers.  
3. Mark deprecated endpoints with warning headers.  

---

## Assignment-4: Distributed Session & Rolling Tokens  
_🎯 Goal: Build scalable authentication._

**Tasks** ->  
1. Store sessions in Redis with TTL + rolling expiration.  
2. Use short-lived access tokens + refresh rotation defense.  
3. Invalidate stolen refresh tokens automatically.  

---

## Assignment-5: Task Queue + Job Scheduling  
_🎯 Goal: Offload blocking work._

**Tasks** ->  
1. Connect queue system (BullMQ or custom).  
2. Support:  
POST /process-image -> returns job ID

3. Add `/jobs/:id/status`.  
4. Support retries + failure logs.  

---

## Assignment-6: Multi-Region Deployment Strategy  
_🎯 Goal: Scale globally._

**Tasks** ->  
1. Simulate multiple regional Express deployments.  
2. Use sticky session strategies.  
3. Add latency-based routing.  
4. Sync configuration across regions.  

---

## Assignment-7: Observability Suite  
_🎯 Goal: Add metrics, logs, and tracing._

**Tasks** ->  
1. Integrate:  
   - Route-level metrics.  
   - Slow request detection.  
   - Structured logging.  
2. Add OpenTelemetry tracing.  

---

## Assignment-8: Feature Flag + A/B Testing System  
_🎯 Goal: Enable dynamic features._

**Tasks** ->  
1. Create feature registry.  
2. Support:  
   - Percentage rollout.  
   - Role-based activation.  
   - Experiment buckets.  
3. Add admin UI endpoint `/admin/feature-flags`.  

---

## Assignment-9: Zero-Downtime Deployments  
_🎯 Goal: Graceful shutdown + live reload._

**Tasks** ->  
1. Handle shutdown signals.  
2. Drain requests before stopping.  
3. Start new instance → hand off traffic → stop old instance.  

---

## Assignment-10: Build a Production-Ready API Gateway  
_🎯 Goal: Route, secure, and optimize internal services._

**Tasks** ->  
1. Reverse-proxy services:  
   - `/auth`.  
   - `/billing`.  
   - `/app`.  
2. Add:  
   - Caching.  
   - Rate limiting.  
   - Request rewriting.  
   - Auth enforcement.  

---