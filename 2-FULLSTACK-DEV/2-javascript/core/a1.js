// 1
var x = 12;
let y = 'a';
const z = 1.29;

// console.log(x);
// console.log(y);
// console.log(z);

// 2 
let str = "Hello"; // string
let num = 42; // number
let bool = true; // boolean
let nothing = null; // null
let notDefined; // undefined 
let sym = Symbol("id"); // symbol
let big = 1234567890123456789012345678901234567890n; // bigint

// 3
function describeValue(value) {
    let type = typeof value;
    let isTruthy = Boolean(value); // converts to true/false
    return {
        type: type,
        value: value,
        truthyOrFalsy: isTruthy ? "truthy" : "falsy"
    };
}

console.log(describeValue(str));       // string Hello
console.log(describeValue(num));       // number 42
console.log(describeValue(bool));     // boolean true
console.log(describeValue(nothing)); // object null (quirk in JS)
console.log(describeValue(notDefined)); // undefined undefined
console.log(describeValue(sym));       // symbol Symbol(id)
console.log(describeValue(big));       // bigint 1234567890123456789012345678901234567890n

// 4
// Coercion
console.log("5" + 1);   // "51" (string concatenation)
console.log("5" - 1);   // 4   (string converted to number)
console.log(true + 1);  // 2   (true → 1)
console.log(false + 1); // 1   (false → 0)

// Equality
console.log(42 == "42");   // true (coerces string to number)
console.log(42 === "42");  // false (strict type check)

// null/undefined
console.log(null == undefined);  // true (loose equality treats them as equal)
console.log(null === undefined); // false (different types)

// NaN behaviour
console.log(typeof NaN);        // "number" (quirk)
console.log(NaN === NaN);       // false (NaN is never equal to itself)
console.log(isNaN("hello"));    // true ("hello" coerces to NaN)
console.log(Number.isNaN("hello")); // false (no coercion, checks strictly)