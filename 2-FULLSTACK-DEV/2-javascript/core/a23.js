// pipe 
function pipe(...functions){
    // pipe returns a new function that takes an initialValue as input.
    return (initialValue) => {
         // reduce is used to apply each function in sequence, passing the result of one function as the input to the next.
         // Once reduce processes the array it returns accumulated value
        return functions.reduce((acc,func) => func(acc), initialValue); 
    }
}

const add1 = (x) => x + 1;
const multiply2 = (x) => x * 2;
const subtract3 = (x) => x - 3;
const pipedFunction = pipe(add1, multiply2, subtract3);
console.log(pipedFunction(5)); // Output: 9


// curry
function curry(func) {
  return function curried(...args) {
    // if collected args > what original function expects, in case of add below its 3
    if (args.length >= func.length) { 
      return func(...args); 
    }
    return (...nextArgs) => curried(...args, ...nextArgs); // Collect more arguments
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
