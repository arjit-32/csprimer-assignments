const hiddenProperty = Symbol("hidden");

const obj = {
  visible: "I am visible",
  [hiddenProperty]: "I am hidden",
};

console.log(obj.visible); // Output: I am visible
console.log(obj[hiddenProperty]); // Output: I am hidden

// Symbols are not enumerable
console.log(Object.keys(obj)); // Output: [ 'visible' ]
console.log(Object.getOwnPropertySymbols(obj)); // Output: [ Symbol(hidden) ]


// Custom Iterator using Symbol
//  Symbol.iterator well-known symbol is used to define a custom iterator for an object, 
// making it iterable with for...of.
const customIterable = {
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;

    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const value of customIterable) {
  console.log(value); // Output: 1, 2, 3, 4, 5
}


// Overriding Symbol.toString
// By overriding Symbol.toStringTag, you can change the default [object Object] description to something custom.
const customObject = {
  [Symbol.toStringTag]: "CustomObject",
};
console.log(Object.prototype.toString.call(customObject)); // Output: [object CustomObject]