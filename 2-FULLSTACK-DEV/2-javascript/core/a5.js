const person = {
    name: "Arjit",
    address:{
        city: "Bengaluru",
        zip: 12345
    },
    hobbies: ["reading", "running"],
    birthDate: new Date(),
}
console.log(person);


// Copying Behaviour
const refCopy = person; // reference copy
refCopy.name = "Hemant";
console.log("person.name -> ", person.name, "\nrefCopy.name -> ",refCopy.name); 


// Shallow Copy
function shallowCopy(obj) {
  let copy = {};
  for (let key in obj) {
    copy[key] = obj[key];
  }
  return copy;
}
const shallow1 = shallowCopy(person);
const shallow2 = { ...person };

// Deep Copy
// Using recursive function because its Customizable and Robust
// Can use structuredClone or lodash
function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") return obj; // Base case: primitive values
    if (Array.isArray(obj)) return obj.map(deepCopy); // Recursively copy arrays
    if (obj instanceof Date) {
        return new Date(obj); // Handle Date objects
    }
    let copy = {};
    for (let key in obj) {
        copy[key] = deepCopy(obj[key]); // Recursively copy nested objects
    }
    return copy;
}
const deep = deepCopy(person);
deep.address.city = "Pune";
console.log("person.address.city->", person.address.city, "\ndeep.address.city->",deep.address.city); 

const deep2 = structuredClone(person); // Modern JS


// Object utility methods
console.log(Object.keys(person));   
console.log(Object.values(person)); 
console.log(Object.entries(person)); 

// Freeze and Seal
const frozen = Object.freeze({ a: 1 });
frozen.a = 99; // ignored
console.log("Frozen ->", frozen.a); // 1

const sealed = Object.seal({ b: 2 });
sealed.b = 99; // allowed (modification)
sealed.c = 100; // ignored (cannot add new properties)
delete sealed.b; // ignored (cannot delete)
console.log("Sealed ->",sealed); // { b: 99 }
