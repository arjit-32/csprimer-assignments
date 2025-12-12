## Assignment-1: Variables, Types & Basic Operations  
_🎯 Goal: Understand JS primitives and operators._  

Tasks ->  
1. Create variables of all primitive types.  
2. Write a function `describeValue(value)` that logs:  
   - its type  
   - whether it's truthy/falsy  
3. Create a small calculator:  
   - add  
   - subtract  
   - multiply  
   - divide  

---

## Assignment-2: Functions & Parameters  
_🎯 Goal: Understand function declarations, expressions, default params._  

Tasks ->  
1. Write:  
   - function declaration  
   - function expression  
   - arrow function  
2. Add default parameters.  
3. Write `greet(name = "Guest")`.  

---

## Assignment-3: Control Flow  
_🎯 Goal: Master `if`, `else`, `switch`, loops._  

Tasks ->  
1. Create a grading function:  
   - 90+ = A  
   - 80+ = B  
   - etc.  
2. Use `switch` for day-of-week logic.  
3. Loop through array and print values.  

---

## Assignment-4: Arrays & Methods  
_🎯 Goal: Work with data collections._  

Tasks ->  
1. Implement:  
   - map  
   - filter  
   - reduce  
   - find  
   manually using loops.  
2. Then do the same using built-in methods.  

---

## Assignment-5: Objects & Destructuring  
_🎯 Goal: Understand objects deeply._  

Tasks ->  
1. Create a nested object.  
2. Write:  
   - shallow copy  
   - deep copy (manual + `structuredClone`)  
3. Destructure object + array values.  
4. Use computed property keys.  

---

## Assignment-6: Spread, Rest, Template Literals  
_🎯 Goal: Master modern ES6 syntax._  

Tasks ->  
1. Combine two arrays with spread.  
2. Write function that uses rest params.  
3. Use template literals to build dynamic messages.  

---

## Assignment-7: Higher-Order Functions  
_🎯 Goal: Understand functions as first-class citizens._  

Tasks ->  
1. Write a function that takes another function as argument.  
2. Write `createMultiplier(n)` that returns a new function.  
3. Create your own custom `forEach`.  

---

## Assignment-8: Closures & Lexical Scope  
_🎯 Goal: Understand the MOST asked JS interview concept._  

Tasks ->  
1. Write a counter function with private variable:  

   ```js
   const counter = createCounter();
   counter.increment(); 
   counter.increment(); 
   ```

- Write a function factory using closures.

---

## Assignment-9: This, Bind, Call, Apply
_🎯 Goal: Master this context._

Tasks ->
- Write an object method using this.
- Extract method → break this → fix using .bind().
- Use .call() and .apply() on custom function.

---

## Assignment-10: Prototypes & OOP
_🎯 Goal: Learn prototype inheritance._
Tasks ->
- Create a constructor function Student.
- Add methods via prototype.
- Inherit to GraduateStudent.

---

## Assignment-11: Classes & Inheritance
_🎯 Goal: Modern OOP._
Tasks ->
- Rewrite the prototype solution using ES6 classes.
- Add:
- getters
- setters
- static methods

---

## Assignment-12: Promises
_🎯 Goal: Master asynchronous fundamentals._
Tasks ->
- Create a Promise that resolves after 1 second.
- Chain .then() calls.
- Handle .catch().
- Create a function fetchData() that returns a Promise.

---

## Assignment-13: Async/Await
_🎯 Goal: Work with modern async patterns._
Tasks ->
- Convert assignment 12 Promises to async/await.
- Handle errors gracefully.
- Sequential vs parallel awaits.

---

## Assignment-14: Error Handling & Try/Catch
_🎯 Goal: Master runtime error control._
Tasks ->
- Write a function that throws custom error.
- Wrap async function in try/catch.
- Throw error when input is invalid.

---

## Assignment-15: Modules (ESM + CommonJS)
_🎯 Goal: Learn import/export systems._
Tasks ->
- Create:
- utils.js
- math.js
- Export functions 2 ways:
- CommonJS (module.exports)
- ES Modules (export / import)

---

## Assignment-16: Timers & Event Loop Basics
_🎯 Goal: Understand JS runtime behavior._
Tasks ->
- Predict order of:
- setTimeout
- Promise
- nextTick
- Log:
- macro task
- microtask execution order.

---

## Assignment-17: Map, Set, WeakMap, WeakSet
_🎯 Goal: Master non-primitive collections._
Tasks ->
- Use Map for caching function results.
- Use WeakMap to associate metadata with objects.
- Convert array → set → array.
- Remove duplicates using Set.

---

## Assignment-18: JSON & Local Storage Simulation
_🎯 Goal: Work with serialized data._
Tasks ->
- Convert object → JSON → back to object.
- Write functions:
- save(key, value)
- load(key)
- Use an object to simulate localStorage.

---

## Assignment-19: Custom Utility Functions
_🎯 Goal: Recreate popular lodash functions._
Tasks ->
- debounce(fn, delay)
- throttle(fn, delay)
- deepClone(obj)
- isEqual(obj1, obj2)

---

## Assignment-20: Build a Mini JavaScript Library
_🎯 Goal: Apply core concepts to build a reusable library._
Requirements ->
Build a utility library named TinyJS that includes:
- type checking
- deep clone
- throttle
- debounce
- random utilities
- array helpers
- string helpers
- function helpers
- math helpers

---
