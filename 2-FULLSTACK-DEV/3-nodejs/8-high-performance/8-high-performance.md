# High-Performance Systems and Optimization
Building high-performance systems and optimizing for scalability and efficiency.

## Assignment-1: CSV Streaming Parser (State Machine)  
_🎯 Goal: Build a line-based CSV parser without loading the full file into memory._

**Tasks** ->  
1. Stream a CSV file using `fs.createReadStream()`.  
2. Read chunk by chunk and tokenize using a small state machine (handling commas, quotes, newlines).  
3. Output rows one at a time (log or write to JSON).  

---


## Assignment-2: Static File Server (Range Requests + Gzip + Caching)  
_🎯 Goal: Serve large files efficiently with HTTP performance features._

**Tasks** ->  
1. Build an HTTP server that serves static files.  
2. Support:  
   - Range requests (`206 Partial Content`).  
   - Gzip compression (if client accepts it).  
   - ETag or Last-Modified caching.  
3. Log whether the request was full, partial, or cached.  

---

## Assignment-3: Session Store with Rotation + HMAC  
_🎯 Goal: Store secure, tamper-proof sessions._

**Tasks** ->  
1. Store sessions in memory or file store.  
2. Sign session IDs using HMAC to prevent tampering.  
3. Implement automatic expiration and key rotation.  
4. Read and validate sessions on each request.  

---

## Assignment-4: Build Your Own Web Framework (Final Boss)  
_🎯 Goal: Combine skills from the course into a minimal express-style framework._

**Tasks** ->  
1. Implement basic routing (`GET`, `POST`, params).  
2. Add middleware chaining support.  
3. Support parsing JSON bodies.  
4. Add one optional feature:  
   - Static file serving OR  
   - Error handling middleware OR  
   - Async context support.  
5. Build a small demo app using your framework.  

---
