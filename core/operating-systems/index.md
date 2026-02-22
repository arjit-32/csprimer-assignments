# 🧠 Operating Systems for Backend SDE (4–8 yrs)


# SECTION 1 — Processes & Threads

## Assignment 1: Process Lifecycle

Tasks:
- Draw process states:
  - New
  - Ready
  - Running
  - Waiting
  - Terminated
- Explain:
  - Context switching
  - PID
  - Parent-child process

Relate to:
- Node cluster
- fork()

---

## Assignment 2: Process vs Thread

Tasks:
- Compare:
  - Memory model
  - Context switch cost
  - Communication method
- Explain:
  - Why Node uses event loop
  - Why worker threads exist

---

# SECTION 2 — Memory Management

## Assignment 3: Process Memory Layout

Tasks:
Draw:
- Code segment
- Heap
- Stack
- Data segment

Explain:
- Stack overflow
- Heap memory leak
- GC behavior in Node

---

## Assignment 4: Virtual Memory & Paging

Tasks:
- Explain:
  - Virtual address
  - Page table
  - Page fault
- Explain:
  - Thrashing
  - Swap
- Relate to:
  - Container OOM kill

---

# SECTION 3 — Concurrency & Synchronization

## Assignment 5: Race Condition Simulation

Tasks:
- Write multi-thread example (conceptually)
- Identify critical section
- Fix using mutex

Explain:
- Deadlock
- Starvation

---

## Assignment 6: Producer–Consumer Problem

Tasks:
- Explain bounded buffer
- Explain semaphore solution
- Relate to:
  - Message queues
  - Node worker pools

---

# SECTION 4 — Scheduling

## Assignment 7: CPU Scheduling Algorithms

Tasks:
- Simulate:
  - FCFS
  - Round Robin
  - Priority scheduling
- Identify:
  - Starvation
  - Priority inversion

Relate to:
- Thread pool starvation

---

# SECTION 5 — System Calls & Kernel

## Assignment 8: System Call Flow

Tasks:
- Explain what happens during:
  - read()
  - write()
  - fork()
- Explain:
  - User space vs kernel space
- Measure syscall overhead.

Relate to:
- Blocking IO
- Event loop behavior

---

# SECTION 6 — IPC

## Assignment 9: Inter Process Communication

Tasks:
- Compare:
  - Pipes
  - Sockets
  - Shared memory
- Relate to:
  - Microservices
  - Cluster mode
  - Worker processes

---

# SECTION 7 — Practical Debugging
check:
- CPU monitoring
- Memory monitoring
- Logs
- strace
- Swap
- OOM
- Load testing

Assignment: Measure Memory & CPU Usage of a Running Application
🎯 Goal: Run a server or script and record its CPU, RAM, and thread usage using tools like top, htop, or ps.
Industry Context: Debugging high-CPU production incidents.

Assignment: Monitor File System Activity
🎯 Goal: Track real-time file access using inotifywatch or fswatch.
Industry Context: Debugging file upload systems and file I/O performance.

Assignment: Configure Swap Memory
🎯 Goal: Enable/disable swap and test performance impact under memory pressure.
Industry Context: Fixing OOM crashes in cloud VMs.

Assignment: Create and Debug a Systemd Service
🎯 Goal: Run a backend app as a systemd-managed service with logs and restart policy.
Industry Context: Deploying apps on VPS/cloud bare-metal instances.

Assignment: Configure Swap Memory
🎯 Goal: Enable/disable swap and test performance impact under memory pressure.
Industry Context: Fixing OOM crashes in cloud VMs.

Assignment: Stress Test an Application
🎯 Goal: Use ab, wrk, or locust to benchmark CPU, memory, and network usage under load.
Industry Context: Pre-launch scalability testing.

Assignment: Debug a Hanging Process
🎯 Goal: Use strace, dtruss, or Process Explorer to understand blocked syscalls.
Industry Context: Diagnosing deadlocks, socket waits, or stuck deployments.
---

# FINAL: Production Debug Scenario

Explain:

1. Why is Node using 100% CPU?
2. Why does container crash under memory spike?
3. Why do requests hang under load?
4. Why is DB slow when CPU is low?
5. Why does increasing threads reduce throughput?

Explain using:
- Scheduling
- Memory
- System calls
- Concurrency
- IO blocking