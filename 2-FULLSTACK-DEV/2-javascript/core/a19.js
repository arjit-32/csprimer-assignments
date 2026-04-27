// Debounce focuses on delaying execution until the event stops.

// simple debounce
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer); // Clear the previous timer
    timer = setTimeout(() => {
      fn.apply(this, args); // Execute the function after the delay
    }, delay);
  };
}

// Usage
const logMessage = debounce((message) => {
  console.log(message);
}, 1000);

logMessage("debounceCall 1"); // Will not log immediately
logMessage("debounceCall 2"); // Cancels "Call 1" and restarts the debounce timer
logMessage("debounceCall 3"); // Cancels "Call 2" and restarts the debounce timer
setTimeout(()=> logMessage("debounceCall 4"),1000); // Logs "Call 4" after 1 second

// debounce with leading
function debounceWithLeading(func, delay, options = { leading: false }) {
  let timer;
  let isLeadingCalled = false;

  return function (...args) {
    const callNow = options.leading && !isLeadingCalled;

    if (callNow) {
      func.apply(this, args); // Execute immediately
      isLeadingCalled = true;
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!options.leading || isLeadingCalled) {
        func.apply(this, args); // Execute after delay
      }
      isLeadingCalled = false; // Reset leading flag
    }, delay);
  };
}

// Example usage:
const logMessageLeading = debounceWithLeading( (message) => {console.log(message);}, 1000, { leading: true });
logMessageLeading("Call 1"); // Logs "Call 1" immediately
logMessageLeading("Call 2"); // Debounced
logMessageLeading("Call 3"); // Debounced
logMessageLeading("Call 4");


// Throttle focuses on limiting execution to regular intervals during the event.

// throttle
function throttle(func, interval) {
  let lastExecutionTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastExecutionTime >= interval) {
      func.apply(this, args); // Execute the function
      lastExecutionTime = now; // Update the last execution time
    }
  };
}

// Example usage:
const logMessage2 = throttle((message) => {
  console.log(message);
}, 1000);


logMessage2("throttleCall 1"); // Executes immediately
logMessage2("throttleCall 2"); // Ignored
logMessage2("throttleCall 3"); // Ignored
setTimeout(()=> logMessage2("throttleCall 4"),1000); 