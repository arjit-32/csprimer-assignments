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