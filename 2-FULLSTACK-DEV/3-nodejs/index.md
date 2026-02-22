
# Practical Node.js SDE Assignments


# 🟢 PHASE 1 — Node Runtime Mastery

---

## Assignment 1: Event Loop in Practice
🎯 Understand blocking vs non-blocking behavior.

Tasks:
1. Demonstrate:
   - setTimeout
   - setImmediate
   - process.nextTick
   - Promise
2. Show event loop blocking using:
   - Large synchronous loop
3. Refactor blocking code to async version.

Goal:
Understand how NOT to block the event loop.

---

## Assignment 2: Process & Environment Handling
🎯 Production-ready startup behavior.

Tasks:
1. Read environment variables safely.
2. Validate required env variables.
3. Implement graceful shutdown:
   - Listen to SIGINT / SIGTERM
   - Close server cleanly.
4. Log startup metadata:
   - PID
   - uptime
   - memory usage

---

# 🟡 PHASE 2 — HTTP Server & API Development

---

## Assignment 3: Build Production-Style HTTP Server
🎯 Clean API design.

Tasks:
1. Create HTTP server.
2. Implement:
   - GET /health
   - GET /users
   - POST /users
3. JSON body parsing.
4. Proper status codes.
5. Centralized error handling.

---

## Assignment 4: Middleware System
🎯 Understand request lifecycle.

Tasks:
1. Implement middleware chain:
   - logger
   - JSON parser
   - error handler
2. Ensure next() flow works.
3. Support async middleware.

---

## Assignment 5: Request Validation & Error Handling
🎯 Build safe APIs.

Tasks:
1. Validate request payload.
2. Return structured errors:
   {
     success: false,
     message,
     code
   }
3. Handle:
   - Invalid JSON
   - Missing fields
   - Unexpected server errors

---

# 🟠 PHASE 3 — Async Patterns & Concurrency

---

## Assignment 6: Concurrency-Limited Task Runner
🎯 Control parallel async operations.

Tasks:
1. Implement:
   runWithLimit(tasks, limit)
2. Ensure:
   - Max N concurrent tasks
   - Preserve result order
3. Handle failures gracefully.

---

## Assignment 7: Retry with Exponential Backoff
🎯 Resilient systems.

Tasks:
1. Create retry(fn, attempts).
2. Implement exponential delay:
   1s → 2s → 4s.
3. Stop after max attempts.
4. Log retry attempts.

---

## Assignment 8: Background Job Queue
🎯 Simple in-memory worker system.

Tasks:
1. Create queue.
2. Process jobs sequentially.
3. Add retry support.
4. Add concurrency limit option.

---

# 🔵 PHASE 4 — Streams & File Handling

---

## Assignment 9: Stream File Copy with Backpressure
🎯 Handle large files safely.

Tasks:
1. Copy file using streams.
2. Log when write buffer is full.
3. Handle drain event.
4. Confirm no memory spike.

---

## Assignment 10: Custom Transform Stream
🎯 Process streaming data.

Tasks:
1. Create Transform stream:
   - Uppercase OR
   - Add timestamp per line.
2. Pipe read → transform → write.

---

## Assignment 11: Recursive File Search (Grep Clone)
🎯 Efficient file traversal.

Tasks:
1. Recursively walk directory.
2. Stream files line-by-line.
3. Print matching lines.
4. Avoid loading full file into memory.

---

# 🟣 PHASE 5 — Production Engineering

---

## Assignment 12: Manual Rate Limiter (In-Memory)
🎯 Protect APIs.

Tasks:
1. Limit per IP (e.g., 10 req/min).
2. Use sliding window or fixed window.
3. Return 429 when exceeded.

---

## Assignment 13: Logging System
🎯 Structured logging.

Tasks:
1. Create logger utility:
   - info
   - warn
   - error
2. Include:
   - timestamp
   - request ID
   - log level
3. Log all incoming requests.

---

## Assignment 14: Health Check & Metrics Endpoint
🎯 Production readiness.

Tasks:
1. Add:
   - GET /health
   - GET /metrics
2. Include:
   - uptime
   - memory usage
   - request count
3. Simulate failure scenario.

---

## Assignment 15: Graceful Shutdown Handling
🎯 Real-world server safety.

Tasks:
1. Track open connections.
2. Stop accepting new requests.
3. Finish ongoing requests.
4. Exit cleanly.

---

# 🟤 PHASE 6 — Networking

---

## Assignment 16: WebSocket Real-Time Updates
🎯 Real-time communication.

Tasks:
1. Create WebSocket server.
2. Broadcast messages.
3. Track connected clients.
4. Handle disconnect safely.

---

## Assignment 17: TCP Server Basics
🎯 Understand low-level networking.

Tasks:
1. Create TCP server.
2. Echo messages.
3. Handle multiple clients.
4. Log connection lifecycle.

---

# 🟠 PHASE 7 — Performance & Scaling

---

## Assignment 18: Cluster Mode
🎯 Use multi-core CPUs.

Tasks:
1. Use cluster module.
2. Fork workers equal to CPU cores.
3. Log worker PID.
4. Restart worker on crash.

---

## Assignment 19: Worker Threads for CPU Tasks
🎯 Avoid blocking event loop.

Tasks:
1. Create CPU-heavy function.
2. Run using worker_threads.
3. Compare performance vs blocking version.

---

## Assignment 20: Static File Server (Efficient Version)
🎯 Serve files properly.

Tasks:
1. Stream static files.
2. Support:
   - ETag or Last-Modified
   - Gzip compression
3. Return 304 when cached.

---
