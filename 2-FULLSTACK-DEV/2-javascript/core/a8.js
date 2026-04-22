const person = {
  name: "Arjit",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`); // Here, this refers to the object person.
  }
};
person.greet();

// Extracting Method from person
const greetFn = person.greet;
greetFn(); // ❌ "Hello, my name is undefined" (lost context)

// Fixing lost context of this with bind method
const boundGreet = person.greet.bind(person);
boundGreet(); // ✅ "Hello, my name is Alice"

// Using call and apply
const anotherPerson = {name: "Chaman"};
greetFn.call(anotherPerson);
greetFn.apply(anotherPerson); // If there were args in original function would have passed in 2nd arg as array

// Compare arrow function vs regular function this 
const obj = {
  name: "Harjit ",
  regularFn: function() {
    console.log("Regular:", this.name);
  },
  arrowFn: () => {
    console.log("Arrow:", this.name);
  }
};
obj.regularFn(); // ✅ "Regular: Charlie"
obj.arrowFn();   // ❌ "Arrow: undefined"