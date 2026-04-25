// Promise based asynchronous code handling
function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Promise based -> Data loaded"), 1000);
  });
}
fetchDataPromise().then(result => console.log(result));

// async-await based asynchronous code handling
async function fetchDataAsync() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Async-await based -> Data loaded"), 1000);
  });
}
async function main() {
  const result = await fetchDataAsync();
  console.log(result);
}
main();


// sequential vs parallel execution.
async function task(name, delay) {
  return new Promise(resolve => setTimeout(() => resolve(`${name} done`), delay));
}
async function sequential() {
  const result1 = await task("(seq)Task 1", 1000);
  console.log(result1);
  const result2 = await task("(seq)Task 2", 1000);
  console.log(result2);
}
sequential();

async function parallel() {
  const [result1, result2] = await Promise.all([
    task("(parallel)Task 1", 1000),
    task("(parallel)Task 2", 1000)
  ]);
  console.log(result1, result2);
}
parallel();

// Error handling
async function riskyTask() {
  throw new Error("Something went wrong!");
}
async function run() {
  try {
    await riskyTask();
  } catch (err) {
    console.error("Caught error:", err.message);
  }
}
run();


// timeout wrapper 
// Purpose is to wrap any async function (fn) so that if it takes longer than ms milliseconds, it fails with a error message.
function withTimeout(fn, ms) {
  return async (...args) => {
    // Promise.race resolves or rejects as soon as first one finishes
    // In this case already set a promise to reject in passed time
    return Promise.race([
      fn(...args),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout!")), ms))
    ]);
  };
}
async function slowAPI() {
  return new Promise(resolve => setTimeout(() => resolve("Finished running slow api"), 2000));
}

// Using the withTimeout wrapper for a api
const safeTask = withTimeout(slowAPI, 1000); // Now safeTask has the async function
// Call safeTask using await 
// async function runsafetask() {
//   try {
//     const result = await safeTask();
//     console.log(result);
//   } catch (err) {
//     console.error("Error:", err.message);
//   }
// }
// runsafetask();

// Call safetask using then/catch
safeTask()
  .then(result => console.log(result))
  .catch(err => console.error("ERROR:", err.message));


// retry mechanism with delay
async function retry(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn(); // Try running the function
    } catch (err) {
      console.warn(`Attempt ${i + 1} failed: ${err.message}`);
      // If not the last attempt, wait before retrying
      if (i < retries - 1) {
        await new Promise(res => setTimeout(res, delay)); // a way to 'pause' for delay milliseconds before trying again.
      } else {
        throw err; // If all retries fail, rethrow the error
      }
    }
  }
}
async function unstableTask() {
  if (Math.random() < 0.7) throw new Error("Random failure");
  return "Success!";
}
retry(unstableTask, 5, 500)
  .then(result => console.log(result))
  .catch(err => console.error("All retries failed:", err.message));