# Core Node.js Concepts and Fundamentals
Understanding the foundational aspects of Node.js, including its runtime, module system, and file system.

## Assignment-1: Event Loop Deep Visualization  
_🎯 Goal: Understand microtasks, macrotasks, and Node’s scheduling priorities._

**Tasks** ->  
1. Write code containing:  
   - `console.log`  
   - `setTimeout`  
   - `setImmediate`  
   - `Promise.resolve().then()`  
   - `process.nextTick()`  
2. Predict execution order.  
3. Run and compare.  
4. Write a short explanation.  

---

## Assignment-2: Node Environment & Global Objects  
_🎯 Goal: Learn Node-specific runtime globals and CLI interaction._

**Tasks** ->  
1. Log Node version, platform, architecture, CPU count.  
2. Use:  
   - `process.argv` to read flags.  
   - `process.exit(code)` with custom status.  
3. Explain the difference between `__dirname` vs `process.cwd()` in comments.  

---

## Assignment-3: CommonJS vs ES Modules: Full Comparison  
_🎯 Goal: Master import/export systems and interoperability._

**Tasks** ->  
1. Create `.cjs` and `.mjs` modules exporting:  
   - object  
   - function  
   - class  
   - primitive  
   - default export  
2. Create a barrel file (`index.js`) that re-exports.  
3. Run project with and without `"type":"module"`.  

---

## Assignment-4: Build Your Own Module Loader (No import/require)  
_🎯 Goal: Understand how Node resolves modules internally._

**Tasks** ->  
1. Implement `myRequire(filepath)` using:  
   - `fs.readFileSync`  
   - `vm.runInThisContext`  
2. Add caching.  
3. Support nested imports.  
4. Avoid circular crash by storing placeholder before execution.  

---

## Assignment-5: File System Mastery  
_🎯 Goal: Work fluently with streams, sync, async, and promises API._

**Tasks** ->  
1. Read → modify → write JSON file safely.  
2. Create nested folders with `mkdir -p` behavior.  
3. Recursively list all files with filtering (size + type).  
4. Copy large file in chunks.  
5. Implement file watcher + timestamp logging.  

---

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

# Application Development and Tools
Building practical tools and applications, such as CLI tools and rate limiters.

## Assignment-1: Build CLI Tool (Todo Manager)  
_🎯 Goal: Build a command-line application._

**Tasks** ->  
1. Commands:  
   - `add`, `list`, `remove`, `done`, `stats`  
2. Flags:  
   - `priority`, `json`, `due`  
3. Persistent storage in JSON file.  
4. Pretty terminal formatting (colors optional).  

---

## Assignment-2: Manual Rate Limiter  
_🎯 Goal: Implement request limiting._

**Tasks** ->  
1. Track requests per IP.  
2. Limit: 5 requests/min.  
3. Reset window automatically.  
4. Return `429 Too Many Requests`.  

---

## Assignment-3: Cron Scheduler  
_🎯 Goal: Schedule periodic tasks using a cron-style system in Node.js._

**Tasks** ->  
1. Install or build a simple scheduler (example: `node-cron` or custom `setInterval`-based cron parser).  
2. Schedule a job to run every minute (or 10 seconds for faster testing).  
3. Task should log timestamped output such as `"Job executed at <time>"`.  

---

## Assignment-4: Performance Monitoring CLI Dashboard  
_🎯 Goal: Build a real-time console dashboard showing key system/process metrics._

**Tasks** ->  
1. Display values such as:  
   - CPU usage  
   - Memory usage  
   - Uptime  
2. Refresh output every second (overwrite terminal using `console.clear()`).  
3. Keep the interface simple — text-only.  

---

## Assignment-5: Process Manager (Mini PM2)  
_🎯 Goal: Create a minimal process manager that can start and monitor Node processes._

**Tasks** ->  
1. Accept a script path as an argument (example: `node mini-pm2.js server.js`).  
2. Run the script using `fork()`.  
3. Restart it automatically if it crashes (`exit` event).  
4. Log start, crash, and restart messages.  

---

# Streams and File Handling
Working with streams, file systems, and efficient data handling.

## Assignment-1: Stream File Copy (With Backpressure Logging)  
_🎯 Goal: Learn file streaming and backpressure._

**Tasks** ->  
1. Use `fs.createReadStream()` and `fs.createWriteStream()` to copy a file.  
2. Log messages when:  
   - The write stream applies backpressure.  
   - The stream drains (`'drain'` event).  
3. Confirm the file copies successfully.  

---

## Assignment-2: Custom Transform Stream  
_🎯 Goal: Create a custom Transform stream._

**Tasks** ->  
1. Create a Transform stream class that modifies the input text.  
2. Choose one transformation:  
   - Uppercase all text.  
   - Add a timestamp prefix to each line.  
3. Pipe input → transform → output (terminal or file).  

---

## Assignment-3: File Watcher with Debounce  
_🎯 Goal: Efficiently watch files with debouncing._

**Tasks** ->  
1. Use `fs.watch()` to detect changes to a target file.  
2. Implement a debounce timer (e.g., 300–1000ms).  
3. Only log **one message** if many rapid changes occur.  

---

## Assignment-4: Streaming Multipart File Upload Handler  
_🎯 Goal: Handle file uploads as streams._

**Tasks** ->  
1. Create an HTTP server that accepts a `multipart/form-data` file upload.  
2. Use streams to write uploaded file chunks directly to disk.  
3. Log the upload progress (bytes received).  

---

## Assignment-5: Fast Recursive File Search (grep clone)  
_🎯 Goal: Practice file traversal and efficient line scanning._

**Tasks** ->  
1. Recursively walk a folder.  
2. For each text file, stream it line-by-line (no full file buffering).  
3. Print lines that match a search keyword (case-insensitive).  
4. Display filename + line number for each match.  

---

# Networking and Communication
Building networking applications and understanding communication protocols.

## Assignment-1: TCP Chat Server (`net` module)  
_🎯 Goal: Build a basic multi-client chat system._

**Tasks** ->  
1. Create a TCP server using `net.createServer()`.  
2. Broadcast messages from one client to all others.  
3. Log when clients connect or disconnect.  

---

## Assignment-2: UDP Echo Server (`dgram` module)  
_🎯 Goal: Understand UDP messaging._

**Tasks** ->  
1. Create a UDP server that receives text from a client.  
2. Send the exact same data back to the sender.  
3. Log incoming messages and sender info.  

---

## Assignment-3: WebSocket Log-Tailing Server  
_🎯 Goal: Stream real-time updates to connected clients._

**Tasks** ->  
1. Create a WebSocket server.  
2. Watch a log file for new lines (`fs.watch()` or streaming).  
3. Push new lines to all connected WebSocket clients.  

---


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
