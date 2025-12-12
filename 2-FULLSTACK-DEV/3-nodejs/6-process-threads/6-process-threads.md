# Processes, Threads, and Scaling
Multi-threading, process management, and scaling applications.

## Assignment-1: Cluster Mode HTTP Load Sharing  
_🎯 Goal: Scale servers across CPU cores._

**Tasks** ->  
1. Create an HTTP server that responds with its `process.pid`.  
2. Use the `cluster` module to spawn workers equal to CPU count.  
3. Log when workers start or exit.  
4. Verify by refreshing the server that multiple PIDs are serving requests.  

---

## Assignment-2: Worker Threads for CPU-Heavy Calculation  
_🎯 Goal: Learn how to offload blocking CPU tasks to worker threads._

**Tasks** ->  
1. Write a function that performs a CPU-heavy calculation (e.g., Fibonacci or prime checking).  
2. Run it in the main thread and observe it's blocking.  
3. Then move the calculation into a Worker thread.  
4. Send arguments and receive results using `parentPort`.  

---

## Assignment-3: Child Processes (exec, spawn, fork)  
_🎯 Goal: Practice using different child process APIs and understand their use cases._

**Tasks** ->  
1. Use `exec` to run a shell command (example: `ls`, `dir`) and log output.  
2. Use `spawn` to stream output of a long-running command (example: `ping google.com` for a few seconds).  
3. Use `fork` to run a separate Node.js script and exchange messages using IPC.  

