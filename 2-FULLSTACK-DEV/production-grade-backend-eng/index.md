# 🔥 Production-Grade Backend Engineering Assignments


# 🐳 SECTION 1 — Docker Mastery

---

## Assignment 1: Production-Grade Dockerfile for Node API

🎯 Goal: Build a secure, optimized container image.

Tasks:
- Use multi-stage build (builder + runtime).
- Use lightweight base image (node:alpine or distroless).
- Run as non-root user.
- Add HEALTHCHECK.
- Handle SIGTERM properly.
- Use .dockerignore.
- Ensure image size < 200MB.

Explain:
- Why multi-stage?
- Why non-root?
- How layer caching works?

---

## Assignment 2: Debugging Inside Containers

🎯 Goal: Diagnose runtime issues.

Tasks:
- Simulate memory spike.
- Exec into container.
- Inspect environment variables.
- Inspect logs.
- Check process tree.
- Debug failing healthcheck.

Explain:
- Common container debugging techniques.
- How logs should be structured in containers.

---

# 🐳 SECTION 2 — Docker Compose Dev Workflow

---

## Assignment 3: Full Local Dev Stack Using Docker Compose

🎯 Goal: Simulate production-like local environment.

Services:
- API
- MySQL
- Redis
- Worker service

Tasks:
- Use named volumes.
- Configure service dependencies.
- Separate dev and prod compose files.
- Inject environment variables via .env.
- Add health checks.

Explain:
- Why avoid running DB locally outside Docker?
- Networking between services.

---

# ☸️ SECTION 3 — Kubernetes Practical Depth

---

## Assignment 4: Deploy Node API to Kubernetes

🎯 Goal: Run scalable service on K8s.

Tasks:
- Create Deployment.
- Add Service (ClusterIP).
- Add ConfigMap.
- Add Secret.
- Add readiness + liveness probes.
- Add resource limits.
- Scale replicas.

Explain:
- Liveness vs readiness.
- What happens during rolling update?
- How K8s handles crashing pods.

---

## Assignment 5: Graceful Shutdown with Kubernetes

🎯 Goal: Prevent dropped requests during pod termination.

Tasks:
- Handle SIGTERM in Node.
- Stop accepting new connections.
- Drain existing connections.
- Close DB pool.
- Configure terminationGracePeriodSeconds.

Explain:
- What happens if you ignore SIGTERM?
- How zero-downtime deployments work.

---

# 🧪 SECTION 4 — Testing Maturity

---

## Assignment 6: Integration Testing with Real DB

🎯 Goal: Test real infrastructure behavior.

Tasks:
- Use Testcontainers or Docker for MySQL.
- Run migrations before tests.
- Seed DB.
- Test API using Supertest.
- Tear down cleanly.

Explain:
- Unit vs integration tests.
- Why mocking DB can hide real bugs.

---

## Assignment 7: Contract Testing Using OpenAPI

🎯 Goal: Prevent breaking API changes.

Tasks:
- Generate OpenAPI spec from code.
- Validate request & response against schema.
- Fail test if response violates spec.
- Add CI check for spec diff.

Explain:
- Consumer-driven contracts.
- Backward compatibility strategy.

---

## Assignment 8: Failure Testing

🎯 Goal: Simulate real-world outages.

Tasks:
- Simulate DB downtime.
- Simulate Redis failure.
- Simulate slow external API.
- Verify retry + fallback logic.
- Assert circuit breaker behavior.

Explain:
- Chaos testing mindset.
- Resilience verification.

---

# ⚙️ SECTION 5 — Production Hardening

---

## Assignment 9: Centralized Error Handling Architecture

🎯 Goal: Production-grade error management.

Tasks:
- Create AppError class.
- Categorize operational vs programmer errors.
- Mask internal errors in production.
- Log structured error output.
- Handle unhandledRejection & uncaughtException.

Explain:
- Why crash on programmer error?
- Difference between recoverable vs non-recoverable errors.

---

## Assignment 10: Security Hardening Layer

🎯 Goal: Secure backend APIs.

Tasks:
- Add Helmet.
- Configure CORS properly.
- Add rate limiting for login.
- Validate input (prevent injection).
- Enforce strong password hashing.
- Protect against brute force.
- Secure file upload (size/type).

Explain:
- OWASP Top 10 awareness.
- SSRF risks.
- Secret handling best practices.

---

# 📈 SECTION 6 — Performance & Profiling

---

## Assignment 11: Detect Event Loop Blocking

🎯 Goal: Identify performance bottlenecks.

Tasks:
- Add blocking synchronous code.
- Measure event loop delay.
- Use clinic.js or node --inspect.
- Refactor to async or worker thread.

Explain:
- CPU-bound vs IO-bound tasks.
- When to use worker threads.

---

## Assignment 12: Debug Memory Leak

🎯 Goal: Diagnose production memory growth.

Tasks:
- Introduce memory leak.
- Capture heap snapshot.
- Identify retaining references.
- Fix leak.
- Validate memory stabilization.

Explain:
- Common Node memory leak patterns.
- Garbage collection basics.

---

## Assignment 13: Identify & Fix N+1 Query Problem

🎯 Goal: Optimize DB usage.

Tasks:
- Create inefficient query pattern.
- Profile SQL queries.
- Add index.
- Refactor to proper join or batching.

Explain:
- Query plan analysis.
- When to denormalize.

---

# 📊 SECTION 7 — Observability & Reliability

---

## Assignment 14: Structured Logging + Metrics

🎯 Goal: Production monitoring.

Tasks:
- Add structured JSON logs.
- Add latency metrics.
- Track P95.
- Add request counter.
- Log correlation IDs.

Explain:
- Logs vs metrics vs traces.
- Alert threshold strategy.

---

## Assignment 15: Implement SLO & Error Budget

🎯 Goal: Reliability thinking.

Tasks:
- Define SLI (latency, error rate).
- Define SLO.
- Simulate breach.
- Implement alert.

Explain:
- Why 100% uptime is unrealistic.
- Error budget philosophy.

---

# 🔁 SECTION 8 — CI/CD Engineering Discipline

---

## Assignment 16: Full CI Pipeline

🎯 Goal: Enforce engineering discipline.

Pipeline must:
- Run tests.
- Run lint.
- Validate OpenAPI schema.
- Build Docker image.
- Fail on spec-breaking change.

Explain:
- Shift-left testing.
- Preventing production regressions.

---

## Assignment 17: Automated Zero-Downtime Deployment

🎯 Goal: Safe releases.

Tasks:
- Rolling deployment in K8s.
- Simulate failed deployment.
- Rollback.
- Verify no downtime.

Explain:
- Blue/green vs rolling update.
- Canary releases.

---

# 🏁 FINAL CAPSTONE

---

## Assignment 18: Production Incident Simulation

🎯 Goal: Demonstrate senior-level debugging.

Simulate:
- High latency spike.
- Memory leak.
- Partial DB outage.
- Queue backlog growth.

You must:
1. Detect issue via logs/metrics.
2. Identify root cause.
3. Apply fix.
4. Prevent recurrence.
5. Explain trade-offs.

Practice explaining verbally like in interview.

---
