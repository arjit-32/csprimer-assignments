class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name); // call parent constructor
    this.grade = grade;
  }

  // Override parent method
  greet() {
    console.log(`Hi, I'm ${this.name} and my grade is ${this.grade}`);
  }

  // Getter
  get grade() {
    return this._grade;
  }

  // Setter
  set grade(newGrade) {
    console.log(`Updating grade for ${this.name}...`);
    this._grade = newGrade;
  }

  // Static method
  static schoolInfo() {
    console.log("All students belong to XYZ School.");
  }
}

const arjit = new Person("Arjit");
arjit.greet(); // Hello, my name is Arjit

const chaman = new Student("Chaman", "A");
chaman.greet(); // Hi, I'm Chaman and my grade is A
console.log(chaman.grade);
chaman.grade="C";
console.log(chaman.grade);

// chaman.schoolInfo(); // throws error because a static method is called on class not object
Student.schoolInfo();