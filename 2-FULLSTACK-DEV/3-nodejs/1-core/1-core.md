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
