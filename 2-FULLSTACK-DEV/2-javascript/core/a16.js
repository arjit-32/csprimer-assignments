
// call pollyfill
Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== "function") {
      throw new TypeError("myBind must be called on a function");
    }
  // If context is null/undefined, default to globalThis
  // note that if person object is passed its redundant(doesnt harm), but is used for primitives, 
  // so that when we later attach function in a object it doesnt give error.
  context = context == null ? globalThis : Object(context); 

  // temporarily attach the function (this) to the context object so that when we call it, this points to context
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this; // person now has fnSymbol function pointing to greet
   console.log(context);
  
  // Call the function with the given arguments
  const result = context[fnSymbol](...args);

  delete context[fnSymbol];   // Clean up
  return result;
};


// Apply polyfill
Function.prototype.myApply = function(context, args){
    if (typeof this !== "function") {
      throw new TypeError("myBind must be called on a function");
    }
    context = context == null ? globalThis : Object(context);
    const fnSymbol = Symbol("fn");
    context[fnSymbol] = this;
    const result = Array.isArray(args)? context[fnSymbol](...args): context[fnSymbol]();
    delete context[fnSymbol];
    return result;
}


// Bind polyfill
Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== "function") {
      throw new TypeError("myBind must be called on a function");
    }

    // Store the original function (the one we are binding)
    const fn = this;

    // Defining the function we will be returning (the bound function)
    function boundFn(...newArgs) {
      // If called with 'new', use the bound function as a constructor
      if (this instanceof boundFn) // instanceOf tells current this... if called using new BoundFn() then this will be instance of boundFn
      { 
       // When used as a constructor, ignore the provided `context` and create a new object
            // using the original function (`fn`) with the combined arguments
        return new fn(...args, ...newArgs);
      }
      // Otherwise, call with provided context
      return fn.apply(context, [...args, ...newArgs]);
    }
    // Preserve the prototype chain
    // If the original function has a prototype (e.g., for constructors), we need to ensure
    // that the bound function's prototype is linked to the original function's prototype.
    boundFn.prototype = Object.create(fn.prototype);  

    return boundFn;
};

// Testing myCall
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}
const person = { name: "Alice" };
console.log(greet.myCall(person, "Hello", "!")); // Output: "Hello, Alice!"

// Testing myApply
function sumNumbers(...args) {
    return `${this.name} calculated the sum: ${args.reduce((sum, num) => sum + num, 0)}`;
}
console.log(sumNumbers.myApply(person, [1, 2, 3, 4, 5])); // Output: "Alice calculated the sum: 15"

// Testing myBind (Non-`new` Case)
const boundGreet = greet.myBind(person, "Hello");
console.log(boundGreet("!")); // Output: "Hello, Alice!"

// Testing myBind (`new` Case)
function PersonTest(name) {
    this.name = name;
}
PersonTest.prototype.sayName = function () {
    console.log("My name is " + this.name);
};

const BoundPerson = PersonTest.myBind({});
const p = new BoundPerson("Bob");
p.sayName(); // Output: "My name is Bob"