# Complete JavaScript Mastery Assignments

---

# 🟢 PHASE 1 — Foundations

---

## Assignment 1: Variables, Types & Operators  
🎯 Understand JS primitives and coercion.

### Tasks:
1. Declare variables using `var`, `let`, `const`.
2. Create values for all primitive types:
   - string
   - number
   - boolean
   - null
   - undefined
   - symbol
   - bigint
3. Write `describeValue(value)`:
   - log `typeof`
   - check truthy/falsy
4. Show examples of:
   - implicit coercion
   - `==` vs `===`
   - `null` vs `undefined`
   - `NaN` behavior

---

## Assignment 2: Functions & Scope Basics  
🎯 Learn function forms and scope rules.

### Tasks:
1. Write:
   - function declaration
   - function expression
   - arrow function
2. Add default parameters.
3. Show difference between:
   - function scope
   - block scope
4. Demonstrate shadowing.
5. Show how closures capture outer variables (basic example).

---

## Assignment 3: Control Flow & Loops  
🎯 Master flow control.

### Tasks:
1. Create a grading function using if/else.
2. Use switch for day-of-week logic.
3. Use:
   - for
   - while
   - do...while
   - for...of
   - for...in
4. Demonstrate break & continue.

---

## Assignment 4: Arrays Deep Dive  
🎯 Work with collections properly.

### Tasks:
1. Manually implement using loops:
   - map
   - filter
   - reduce
2. Then use built-in methods.
3. Demonstrate:
   - sparse arrays
   - mutation during iteration
   - shallow copy issues
4. Compare:
   - for vs map performance (basic timing)

---

## Assignment 5: Objects & References  
🎯 Understand object behavior in memory.

### Tasks:
1. Create nested object.
2. Demonstrate reference copying behavior.
3. Implement:
   - shallow copy (manual + spread)
   - deep copy (basic recursion)
4. Use:
   - Object.keys
   - Object.values
   - Object.entries
5. Demonstrate Object.freeze and Object.seal.

---

# 🟡 PHASE 2 — Intermediate JavaScript

---

## Assignment 6: Destructuring, Spread & Rest  
🎯 Modern syntax mastery.

### Tasks:
1. Destructure nested objects.
2. Combine arrays using spread.
3. Write function using rest parameters.
4. Copy and override object values.
5. Show edge cases of shallow copy using spread.

---

## Assignment 7: Closures & Lexical Scope  
🎯 Deep understanding of closures.

### Tasks:
1. Create counter with private variable.
2. Create bank account module:
   - deposit
   - withdraw
   - getBalance
3. Create function factory.
4. Explain why closure retains memory.
5. Demonstrate memory leak scenario with closure.

---

## Assignment 8: `this`, bind, call, apply  
🎯 Master dynamic context.

### Tasks:
1. Write object method using `this`.
2. Extract method → break `this` → fix using `.bind()`.
3. Use `.call()` and `.apply()`.
4. Compare arrow function vs regular function `this`.
5. Demonstrate `this` in nested functions.

---

## Assignment 9: Prototype & Inheritance  
🎯 Understand JS object model.

### Tasks:
1. Create constructor function.
2. Add methods via prototype.
3. Inherit using `Object.create`.
4. Override parent method.
5. Inspect prototype chain manually.
6. Use `instanceof` and explain behavior.

---

## Assignment 10: Classes (Modern OOP)  
🎯 ES6 class syntax.

### Tasks:
1. Rewrite prototype example using class.
2. Add:
   - getter
   - setter
   - static method
3. Compare prototype vs class internally.
4. Show how methods are stored in prototype.

---

# 🟠 PHASE 3 — Execution & Asynchronous JavaScript

---

## Assignment 11: Execution Context & Hoisting  
🎯 Understand how JS runs code.

### Tasks:
1. Demonstrate hoisting:
   - var
   - let
   - const
   - function declaration
2. Predict output before running.
3. Show Temporal Dead Zone behavior.
4. Demonstrate scope chain lookup.

---

## Assignment 12: Event Loop Basics  
🎯 Microtask vs Macrotask.

### Tasks:
1. Write code using:
   - setTimeout
   - Promise
   - queueMicrotask
2. Predict execution order.
3. Explain microtask priority.
4. Demonstrate nested microtasks.

---

## Assignment 13: Promises  
🎯 Async fundamentals.

### Tasks:
1. Create Promise that resolves after delay.
2. Chain multiple `.then()` calls.
3. Handle `.catch()`.
4. Demonstrate error bubbling.
5. Show Promise.resolve and Promise.reject usage.

---

## Assignment 14: Async/Await  
🎯 Modern async handling.

### Tasks:
1. Convert Promise-based code to async/await.
2. Demonstrate sequential vs parallel execution.
3. Handle errors with try/catch.
4. Implement timeout wrapper for async function.
5. Implement retry mechanism with delay.

---

# 🟣 PHASE 4 — Polyfills & Utility Building

---

## Assignment 15: Array Polyfills  
🎯 Recreate built-ins.

### Implement:
- Array.prototype.myMap
- myFilter
- myReduce
- myForEach
- myFind

### Rules:
- Use prototype.
- Do not use original methods internally.
- Handle edge cases (empty array, missing callback).

---

## Assignment 16: Function Polyfills  
🎯 Understand internal mechanics.

### Implement:
- Function.prototype.myCall
- myApply
- myBind

### Requirements:
- Handle arguments properly.
- Preserve return values.
- Handle null/undefined context.
- Support partial application in bind.

---

## Assignment 17: Promise Utilities  
🎯 Practical async helpers.

### Implement:
- custom Promise.all
- custom Promise.race
- custom Promise.allSettled

### Requirements:
- Handle rejections correctly.
- Preserve order of results.
- Handle non-promise values.

---

## Assignment 18: Deep Clone (Advanced)  
🎯 Memory & references mastery.

### Create deepClone that handles:
- nested objects
- arrays
- Date
- RegExp
- circular references (using WeakMap)
- Map / Set (bonus)

---

## Assignment 19: Debounce & Throttle  
🎯 Real-world optimization.

### Implement:
- debounce:
  - leading option
  - trailing option
  - cancel()
- throttle:
  - leading option
  - trailing option

### Test:
Simulate rapid function calls.

---

# 🔴 PHASE 5 — Advanced Language Features

---

## Assignment 20: Map, Set & WeakMap  
🎯 Non-primitive collections.

### Tasks:
1. Use Map for caching.
2. Remove duplicates using Set.
3. Demonstrate WeakMap metadata use case.
4. Compare object vs Map behavior.

---

## Assignment 21: Generators & Iterators  
🎯 Lazy evaluation.

### Tasks:
1. Create custom iterator for range.
2. Fibonacci generator.
3. Infinite sequence generator.
4. Use for...of with custom iterator.
5. Manually iterate using iterator.next().

---

## Assignment 22: Symbols & Well-Known Symbols  
🎯 Hidden properties & internals.

### Tasks:
1. Create Symbol properties.
2. Implement custom iterator using Symbol.iterator.
3. Override Symbol.toStringTag.
4. Explore Symbol.hasInstance.
5. Demonstrate non-enumerable symbol behavior.

---

## Assignment 23: Functional Programming Utilities  
🎯 Higher-order thinking.

### Implement:
- compose
- pipe
- curry
- partial

### Bonus:
- Implement once(fn)
- Memoization utility

---

## Assignment 24: Error Handling Patterns  
🎯 Robust code writing.

### Tasks:
1. Create custom error classes.
2. Normalize error format:
   {
     success: false,
     message: "",
     stack: ""
   }
3. Global async wrapper.
4. Graceful failure handling.
5. Demonstrate error propagation across async chain.

---
