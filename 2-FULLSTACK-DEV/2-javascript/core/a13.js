// Promise after delay
function delayedPromise(ms) {
  return new Promise((resolve) => {
    // setTimeout schedules a macrotask
    setTimeout(() => { 
      resolve(`Resolved after ${ms}ms`);
    }, ms);
  });
}
delayedPromise(1000).then(msg => console.log(msg));
// .then() does not run immediately. 
// Instead, it registers a callback that will be scheduled as a microtask once the Promise is resolved.



// Multiple then calls
// Compare this with assignment a12's nested microtasks
const promise = function(){
  return new Promise((resolve,reject)=>{
    resolve("Promise Resolved")
  })
}
promise()
  .then(msg => {
    console.log(msg);
    return "Step 1 complete";
  })
  .then(msg => {
    console.log(msg);
    return "Step 2 complete";
  })
  .then(msg => {
    console.log(msg);
  })
  
// Handle catch
new Promise((_, reject)=>{
  reject("Ohoo, something went wrong");
})
  .then(msg => console.log(msg))
  .catch(err => console.error("Caught error:", err));

  
// Promise.resolve and Promise.reject
Promise.resolve("Immediate value")
  .then(msg => console.log("Resolved:", msg));

Promise.reject("Immediate failure")
  .catch(err => console.error("Rejected:", err));


  // Error Bubbling
Promise.resolve("Start")
.then(msg => {
  console.log(msg);
  throw new Error("Oops in chain!"); // Throws error
})
.then(() => {
  console.log("This will not run");
})
.catch(err => {
  console.error("Error bubbled to catch:", err.message);
});

