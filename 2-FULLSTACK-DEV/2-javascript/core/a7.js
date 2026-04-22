// Counter Example 
function createCounter() {
  let count = 0; // private variable
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2

// Bank Account Example
function BankAccount(initialBalance = 0) {
  let balance = initialBalance;

  return {
    deposit: (amount) => { balance += amount; },
    withdraw: (amount) => { if (amount <= balance) balance -= amount; },
    getBalance: () => balance
  };
}
const account = BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance()); // 120


// Why Closure retains Memory ?
/*
- When a function is returned, it carries its lexical environment with it.
- The JavaScript engine keeps the variables alive as long as the closure is accessible.
- Example: count in the counter function persists even after createCounter() finishes execution.
*/


// createLeak builds a huge array and returns a function that logs the first element
function createLeak() {
  let bigArray = new Array(1e6).fill("data"); // large memory allocation
  return function() {
    return bigArray[0]; // closure keeps reference alive
    
    // To remove this memory leak dont put closure for large objects or nullify them
    // let val = bigArray[0];
    // bigArray = null; 
    // return val;
  };
}
const leaky = createLeak();
console.log(leaky());