function Person(name) {
  this.name = name;
}
const arjit = new Person("Arjit");
console.log(arjit.name); // Arjit

// Add methods via prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};
arjit.greet(); // Hello, my name is Arjit

// Inheritance
function Student(name, grade){
  Person.call(this,name);
  this.grade=grade;
}
// Inheriting Person's prototype in Student
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const chaman = new Student("Chaman", "A");
chaman.greet();

// Overriding parent method 
Student.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name} and my grade is ${this.grade}`);
};
chaman.greet(); // Hi, I'm Chaman and my grade is A


// Prototype chain
console.log(Object.getPrototypeOf(chaman));            // Student.prototype
console.log(Object.getPrototypeOf(Student.prototype)); // Person.prototype
console.log(Object.getPrototypeOf(Person.prototype));  // Object.prototype

// Manual visualization:
//
// chaman (instance)
//    ↓ __proto__
// Student.prototype { constructor: Student, greet: ... }
//    ↓ __proto__
// Person.prototype { greet: ... }
//    ↓ __proto__
// Object.prototype { toString, hasOwnProperty, ... }
//    ↓ __proto__
// null

// instace of
console.log(chaman instanceof Student); // true
console.log(chaman instanceof Person);  // true
console.log(chaman instanceof Object);  // true