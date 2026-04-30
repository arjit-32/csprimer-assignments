// Custom Error classes
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
  }
}
// usage
try {
  throw new ValidationError("Invalid input data");
} catch (error) {
  console.error(error.name, error.message);
}




// Normalize Error
function formatError(error) {
  return {
    success: false,
    message: error.message || "Unknown error occurred",
    stack: error.stack || null,
  };
}
// usage
async function fetchData() {
  try {
    // Simulate a failing API call
    throw new Error("API is down");
    // return {data: 123};
  } catch (error) {
    const normalizedError = formatError(error);
    console.error("Graceful Failure:", normalizedError.message);
    return normalizedError;
  }
}
fetchData().then((result) => console.log(result)); 
//  We need .catch() when we dont handle the error inside the async function.
// Or when we want to handle the error globally
// preferably use both





// Error Propogation
// - If one async function throws an error, and the next function doesn’t catch it 
// the error keeps “bubbling up” until it reaches a try...catch at the top level.

// Step 1: First async function that throws an error
async function stepOne() {
  throw new Error("Step One failed!");
}

// Step 2: Calls stepOne, but doesn't catch the error
async function stepTwo() {
  return await stepOne(); // error bubbles up to here
}

// Step 3: Calls stepTwo, still no catch
async function stepThree() {
  return await stepTwo(); // error bubbles further
}

// Top-level caller
(async () => {
  try {
    const result = await stepThree();
    console.log("Result:", result);
  } catch (error) {
    console.error("Caught at top level:", error.message);
  }
})();




// Global async wrapper
// - Takes an async function, returns new function that executes that function in try/catch block 
const asyncWrapper = (fn) => {
  return async (...args) => {
    try {
      // Run the original async function with its arguments
      return await fn(...args);
    } catch (error) {
      // If an error occurs, return a formatted error object
      return {
        success: false,
        message: error.message,
        stack: error.stack,
      };
    }
  };
};

// Example async function (simulating a risky operation)
async function riskyOperation(number) {
  if (number < 0) {
    throw new Error("Number must be positive!");
  }
  // Simulate async delay
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true, value: number * 2 }), 500)
  );
}
// Wrap the risky function
const safeOperation = asyncWrapper(riskyOperation);
// Usage
(async () => {
  console.log(await safeOperation(5));   // ✅ { success: true, value: 10 }
  console.log(await safeOperation(-1));  // ❌ { success: false, message: "Number must be positive!", stack: "..." }
})();

// (async () => {
//   console.log(await riskyOperation(5));  
//   console.log(await riskyOperation(-1));  
// })();



