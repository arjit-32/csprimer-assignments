# HTTP and Web Development
Building HTTP servers, routing, and creating frameworks for web applications.

## Assignment-1: Raw HTTP Server (No Frameworks)  
_🎯 Goal: Build a basic HTTP server._

**Tasks** ->  
1. Build server handling:  
   - GET `/`  
   - POST `/echo`  
   - 404 handler  
2. Manually parse:  
   - Query params  
   - JSON body  
3. Correct status codes + headers.  

---

## Assignment-2: Custom Router  
_🎯 Goal: Build a basic routing system._

**Tasks** ->  
1. Build `Router` class supporting:  
   - `.get(path, handler)`  
   - `.post(path, handler)`  
2. Match dynamic route params (`/users/:id`).  

---

## Assignment-3: Custom JSON Body Parser  
_🎯 Goal: Build middleware for JSON parsing._

**Tasks** ->  
1. Create middleware function:  
   ```javascript
   function parseJSON(req, res, next) {}
Collect chunks → Buffer → JSON.parse.
Gracefully handle invalid JSON.
    ```

---

## Assignment-4: Build a Mini Express Framework  
_🎯 Goal: Build a lightweight web framework._

**Tasks** ->  
1. Implement:  
   - `app.get()`, `app.post()`, `app.use()`.  
   - Middleware chaining.  
   - Route matching + params.  
   - Built-in JSON body parser.  
   - Extensible plugin pattern.  

---

## Assignment-5: Config System & Environment Management  
_🎯 Goal: Manage environment variables._

**Tasks** ->  
1. Use `dotenv`.  
2. Create `config.js` switching based on `NODE_ENV`.  
3. Prevent startup if required ENV missing.  
4. Include `.env.example`.  

---
