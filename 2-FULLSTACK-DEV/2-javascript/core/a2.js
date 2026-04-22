// Function declaration
function greet(name="Stranger") {
    return "Hello, " + name;
}
console.log(greet("Arjit"));

// Function expression
let increment = function(num) {
    return num + 1;
};
console.log(increment(5));

// Arrow function
let square = (n) => n * n;
console.log(square(4)); // 16

// Scope Demo
function scopeDemo() {
    if (true) {
        var a = 10;   // function-scoped
        let b = 20;   // block-scoped
        const c = 30; // block-scoped
    }
    console.log(a); // 10 (accessible)
    // console.log(b); // ❌ ReferenceError
    // console.log(c); // ❌ ReferenceError
}
scopeDemo();

// Shadowing - inner scope variable has same name as outer scope variable
let value = "outer";
function shadowExample() {
    let value = "inner"; // shadows outer
    console.log(value);  // "inner"
}
shadowExample();
console.log(value);      // "outer"

// Closure
function makeCounter() {
    let count = 0; // outer variable
    return function() {
        count++;
        return count;
    };
}
let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3