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

