console.log("Start");

// Macrotask: setTimeout
setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

// Microtask: Promise
Promise.resolve().then(() => {
  console.log("Promise callback");
});

// Microtask: queueMicrotask
queueMicrotask(() => {
  console.log("queueMicrotask callback");
});

console.log("End");

// Result prediction =>
// Start
// End
// Promise callback
// queueMicrotask callback
// setTimeout callback

// Note - multiple Promises scheduled one after another will execute in the exact order they were written.

// Explain microtask priority.
// - Microtask(Promise, queueMicrotask) run immediately after synchronous code.
// - Macrostask(setTimeout, setInterval, I/O) run in next tick of the event loop.
// - Event loop drains microtask queue completely before executing macrotask.


// Nested microtask
console.log("Start");

queueMicrotask(() => {
  console.log("First microtask");

  queueMicrotask(() => {
    console.log("Nested microtask");
  });
});

console.log("End");

// The nested microtask is added while the first one runs, and it executes before any macrotask.
// This ensures they run before timers of other events.


// Real World Analogy 
// API calls 
// - network request itself is a macrotask (it happens asynchronously, outside the JS engine)
// - When the response arrives, the .then(...) callback is scheduled as a microtask.
// Database Calls - Also handled as macrotask
console.log("Start");
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log("API data received");
  });
console.log("End");


// Nested Microtasks in Real Apps
// Each .then() schedules another microtask, so they execute in sequence before any macrotask(setTimeout).
fetch("/user") // asynchronous network request ( macrotask handled by browser/node) this returns a promise
  .then(() => { // Registers a callback 
    console.log("User fetched");
    return fetch("/dashboard");
  })
  .then(() => {
    console.log("Dashboard fetched");
    return fetch("/posts");
  })
  .then(() => {
    console.log("Posts fetched");
    return fetch("/profile");
  })
  .then(() => {
    console.log("Done");
  });