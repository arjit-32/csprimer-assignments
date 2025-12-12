## Assignment-1: Execution Context & Hoisting  
_🎯 Goal: Understand how JS runs code before execution._

Tasks ->  
1. Write code involving:  
   - `var`, `let`, `const` hoisting  
   - function hoisting  
2. Predict the order BEFORE running.  
3. Run and compare.  

Example cases:  
- Accessing variables before declaration  
- Function declarations vs function expressions  

---

## Assignment-2: Scope Chain & Lexical Scoping  
_🎯 Goal: Master variable lookup rules._

Tasks ->  
1. Create nested functions showing:  
   - outer variable access  
   - inner variable shadowing  
2. Write an example that demonstrates scope chain lookup.  
3. Identify reference errors.  

---

## Assignment-3: Deep Closures & Private Variables  
_🎯 Goal: Understand closures beyond simple examples._

Tasks ->  
1. Make a counter with:  
   - increment  
   - decrement  
   - reset  
     (all as private variables)  
2. Create a bank account module using closures:  
   - deposit  
   - withdraw  
   - getBalance  

---

## Assignment-4: Prototype Chain & Inheritance  
_🎯 Goal: Master prototype lookup, inheritance, and method overriding._

Tasks ->  
1. Create:  
   ```javascript
   function Animal() {}
   function Dog() {}
   ```
Use:
Object.create()
prototype assignment
Override inherited methods.
Verify prototype chains manually.

---

## Assignment-5: Custom `bind`, `call`, `apply` Implementations  
_🎯 Goal: Show deep understanding of `this`._

Tasks ->  
Implement manually:  
- `Function.prototype.myCall`  
- `Function.prototype.myApply`  
- `Function.prototype.myBind`  

Using ONLY:  
- `this`  
- function execution  
- temp properties  

---

## Assignment-6: Implement `new` Keyword Manually  
_🎯 Goal: Understand object instantiation mechanics._

Tasks ->  
Write a function `myNew(constructor, ...args)` that:  
1. Creates an object  
2. Sets prototype  
3. Executes constructor  
4. Returns object  

---

## Assignment-7: Implement Promise from Scratch  
_🎯 Goal: Understand async behavior deeply._

Tasks ->  
1. Implement a mini Promise class:  
   - constructor with executor  
   - `.then()`  
   - `.catch()`  
   - resolve/reject mechanics  
2. Handle asynchronous resolution.  

---

## Assignment-8: Promise.all, Promise.race, Promise.allSettled  
_🎯 Goal: Interviewers LOVE this assignment._

Tasks ->  
Write custom implementations:  
- `myPromiseAll`  
- `myPromiseRace`  
- `myPromiseAllSettled`  

---

## Assignment-9: Event Loop Deep Dive  
_🎯 Goal: Master JS concurrency model._

Tasks ->  
1. Write code containing:  
   - `setTimeout`  
   - `setImmediate`  
   - `nextTick`  
   - `Promise`  
2. Predict execution order.  
3. Explain **microtasks** vs **macrotasks**.  

---

## Assignment-10: Async Patterns (Callback → Promise → Async/Await)  
_🎯 Goal: Understand async evolution._

Tasks ->  
1. Write a function using callbacks.  
2. Convert to Promise.  
3. Convert to async/await.  
4. Handle errors in each version.  

---

## Assignment-11: Debounce & Throttle (Advanced Implementation)  
_🎯 Goal: Core interview topic related to optimization._

Tasks ->  
1. Implement debounce with:  
   - immediate execution option  
   - `cancel()` method  
2. Implement throttle with:  
   - leading & trailing options  

---

## Assignment-12: Deep Clone Function (Without JSON.parse)  
_🎯 Goal: Understand JS memory models._

Tasks ->  
Create `deepClone` that handles:  
- nested objects  
- arrays  
- dates  
- functions  
- circular references  
- Maps / Sets (bonus)  

---

## Assignment-13: JavaScript Memory Model  
_🎯 Goal: Learn heap, stack, references._

Tasks ->  
1. Write examples showing:  
   - stack values  
   - heap references  
2. Show shallow copy vs deep copy behavior.  
3. Show how garbage collection works (demo memory leak).  

---

## Assignment-14: Functional Programming Concepts  
_🎯 Goal: Work with FP patterns._

Tasks ->  
Implement:  
- `compose(fn1, fn2, ...)`  
- `pipe(fn1, fn2, ...)`  
- `curry(fn)`  
- `partial(fn, args)`  

---

## Assignment-15: Generators & Iterators  
_🎯 Goal: Learn lazy evaluation and custom iteration._

Tasks ->  
1. Create custom iterator for:  
   - Fibonacci sequence  
   - Range (start, end, step)  
2. Create generator:  
   - that yields infinite sequence  

---

## Assignment-16: Immutable Data Structures  
_🎯 Goal: Understand persistent structures._

Tasks ->  
1. Create immutable array operations:  
   - push  
   - pop  
   - update  
     (without mutating original)  
2. Create immutable object update helper.  

---

## Assignment-17: Symbol, Iterators, and Well-known Symbols  
_🎯 Goal: Deep JS internals._

Tasks ->  
1. Create custom Symbol properties.  
2. Implement `obj[Symbol.iterator]`.  
3. Override `Symbol.toStringTag`.  
4. Override `Symbol.hasInstance`.  

---

## Assignment-18: Error Handling Patterns  
_🎯 Goal: Beyond try/catch._

Tasks ->  
1. Implement:  
   - custom error classes  
   - error factory  
   - global error wrapper  
2. Create unified error format:  
   ```javascript
   { success: false, message: "", stack: "" }
   ```

---

## Assignment-19: Performance Profiling & Optimization  
_🎯 Goal: Write faster JS._

Tasks ->  
1. Compare performance:  
   - `for` vs `map`  
   - `object` vs `Map`  
   - `array.includes` vs `Set`  
2. Use:  
   - `performance.now()`  
   - `console.time()`  
   - Chrome Performance tab  
3. Optimize a slow function.  

---

## Assignment-20: Build a Mini JS Runtime  
_🎯 Goal: Combine all JS internals knowledge._

Tasks ->  
Build a tiny runtime simulation:  

**Features** ->  
1. Task queue (`setTimeout` queue)  
2. Microtask queue (Promises)  
3. Event loop loop function  
4. Execute tasks based on priority  
5. Log timeline of execution  

---