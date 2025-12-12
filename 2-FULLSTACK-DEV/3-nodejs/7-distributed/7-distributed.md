# Distributed Systems and Advanced Concepts
Distributed systems, inter-process communication, and advanced Node.js features.

## Assignment-1: Load Balancer (Round Robin)  
_🎯 Goal: Learn how to route requests across multiple backend services using a simple round-robin strategy._

**Tasks** ->  
1. Create multiple HTTP worker services (e.g., listening on different ports).  
2. Implement a gateway server that forwards incoming requests in round-robin order.  
3. Log which backend handled each request.  

---

## Assignment-2: Distributed Rate Limiter  
_🎯 Goal: Understand how to coordinate request-limiting across multiple processes or servers._

**Tasks** ->  
1. Use a shared store (Redis preferred; fallback: file or in-memory simulation).  
2. Apply a fixed window or token bucket limit (e.g., 10 requests/min per IP).  
3. Reject and log requests that exceed the limit.  

---

## Assignment-3: Pub/Sub via Unix Sockets  
_🎯 Goal: Learn inter-process communication using Unix sockets to broadcast messages._

**Tasks** ->  
1. Create a pub/sub server using Unix domain sockets.  
2. Allow multiple clients to connect and subscribe.  
3. When one client sends a message, broadcast it to all others.  

---

## Assignment-4: Zero-Downtime Deployment (Blue/Green)  
_🎯 Goal: Practice swapping running server versions without interrupting active connections._

**Tasks** ->  
1. Run two server instances: **blue** and **green**.  
2. Create a proxy that forwards traffic to the active version.  
3. Add a command or script to switch traffic from blue → green without dropping requests.  

---

## Assignment-5: AsyncLocalStorage Context Propagation  
_🎯 Goal: Understand how to track request metadata across async boundaries._

**Tasks** ->  
1. Wrap HTTP request handling in an `AsyncLocalStorage` context.  
2. Store a unique request ID.  
3. Log the request ID inside asynchronous database/file operations to prove context flows.  

---

## Assignment-6: Promise-Based Job Queue with Retry + Backoff  
_🎯 Goal: Implement a basic reliable async work queue._

**Tasks** ->  
1. Push jobs into a queue (in-memory is fine).  
2. Process jobs sequentially or with limited concurrency.  
3. Retry failed jobs with exponential backoff (e.g., 1s → 2s → 4s).  
4. Log job lifecycle events.  

---
