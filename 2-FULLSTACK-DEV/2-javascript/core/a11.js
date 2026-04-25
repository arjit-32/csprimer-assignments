// var hoisting
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// let and const hoisting 
try {
  console.log(b); // ReferenceError (TDZ)
  let b = 20;
  console.log(b); // 20
} catch (e) {
  console.error("Error with let:", e.message);
}

// console.log(c); // ReferenceError
const c = 30;
console.log(c); // 30

// Function hoisting
sayHello(); // "Hello!"
function sayHello() {
  console.log("Hello!");
}


// Scope Chain
// Global EC → contains globalVar, outer.
let globalVar = "I am global";

// Outer EC → contains outerVar, inner.
function outer() {
  let outerVar = "I am outer";

  // Inner EC → contains innerVar.
  function inner() {
    let innerVar = "I am inner";
    console.log(innerVar);   // "I am inner"
    console.log(outerVar);   // "I am outer"
    console.log(globalVar);  // "I am global"
  }

  inner();
}

outer();





