# Operating System Assignments

## Assignment-1: Measure Memory & CPU Usage of a Running Application  
_🎯 Goal: Run a server or script and record its CPU, RAM, and thread usage using tools like `top`, `htop`, or `ps`._  

**Industry Context:** Debugging high-CPU production incidents.  

---

## Assignment-2: Analyze Open Ports and Running Network Services  
_🎯 Goal: Use `netstat`, `ss`, or `lsof -i` to identify open ports and protocols._  

**Industry Context:** Useful when debugging servers, proxies, and microservices.  

---

## Assignment-3: Monitor File System Activity  
_🎯 Goal: Track real-time file access using `inotifywatch` or `fswatch`._  

**Industry Context:** Debugging file upload systems and file I/O performance.  

---

## Assignment-4: Configure and Use Environment Variables Securely  
_🎯 Goal: Store API keys and app configs using `.env` files and OS secrets management._  

**Industry Context:** Common in Node, Python, and container-based deployments.  

---

## Assignment-5: Create and Debug a Systemd Service  
_🎯 Goal: Run a backend app as a systemd-managed service with logs and restart policy._  

**Industry Context:** Deploying apps on VPS/cloud bare-metal instances.  

---

## Assignment-6: Inspect and Modify File Permissions  
_🎯 Goal: Understand and apply `chmod`, `chown`, `umask`, and permission flags._  

**Industry Context:** Fixing “permission denied” issues on servers.  

---

## Assignment-7: Set Up Cron Jobs  
_🎯 Goal: Schedule recurring tasks like database backups or maintenance scripts._  

**Industry Context:** Automating jobs before moving to workflow engines.  

---

## Assignment-8: Debug a Hanging Process  
_🎯 Goal: Use `strace`, `dtruss`, or Process Explorer to understand blocked syscalls._  

**Industry Context:** Diagnosing deadlocks, socket waits, or stuck deployments.  

---

## Assignment-9: Stress Test an Application  
_🎯 Goal: Use `ab`, `wrk`, or `locust` to benchmark CPU, memory, and network usage under load._  

**Industry Context:** Pre-launch scalability testing.  

---

## Assignment-10: Manage Background Jobs  
_🎯 Goal: Run a long script in background using `nohup`, `screen`, or `tmux`._  

**Industry Context:** Running ETL/ML scripts or temporary worker processes.  

---

## Assignment-11: Analyze System Logs  
_🎯 Goal: Navigate `/var/log` and extract patterns using `grep`, `sed`, `awk`._  

**Industry Context:** Incident resolution and postmortems.  

---

## Assignment-12: Compare File System Types  
_🎯 Goal: Research and summarize `ext4` vs `NTFS` vs `ZFS` vs object storage trade-offs._  

**Industry Context:** Making decisions for hosted applications.  

---

## Assignment-13: Configure Swap Memory  
_🎯 Goal: Enable/disable swap and test performance impact under memory pressure._  

**Industry Context:** Fixing OOM crashes in cloud VMs.  

---

## Assignment-14: File System Performance Benchmark  
_🎯 Goal: Use `fio` or similar to test read/write latency._  

**Industry Context:** DB or cache layer performance tuning.  

---

## Assignment-15: Containerize a Web App  
_🎯 Goal: Package an existing service in a Docker container with proper resource limits._  

**Industry Context:** Foundation for Kubernetes, CI/CD, microservices.  

---

## Assignment-16: Enforce Resource Limits (CPU/Memory)  
_🎯 Goal: Use Docker, `ulimit`, or `cgroups` to restrict program resource consumption._  

**Industry Context:** Prevent system-wide outages from runaway processes.  

---

## Assignment-17: Identify Zombie & Orphan Processes  
_🎯 Goal: Intentionally create one and debug it using process tools._  

**Industry Context:** Useful during production debugging and container lifecycle issues.  

---

## Assignment-18: Debug Network Latency  
_🎯 Goal: Use `ping`, `traceroute`, and `nslookup` to troubleshoot slow connections._  

**Industry Context:** API timeouts and microservice networking issues.  

---

## Assignment-19: Analyze Thread and Event Loop Behavior  
_🎯 Goal: Use Node.js `--inspect` or browser dev tools to analyze event loop lag._  

**Industry Context:** Debugging production bottlenecks in async workloads.  

---

## Assignment-20: Build a Deployment Script  
_🎯 Goal: Create a bash script that deploys an application, restarts the service, and logs success._  

**Industry Context:** Automation before full CI/CD sophistication.  

---