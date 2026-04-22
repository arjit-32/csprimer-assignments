const user = {
  id: 1,
  profile: {
    firstname: "Arjit",
    address: {
      city: "Bengaluru",
      zip: 12345
    }
  }
};
const { id, profile: { firstname, address: { city } } } = user;
console.log(id);
console.log(firstname); 
console.log(city); 

// Combining arrays using spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Rest parameter in function
function sumAll(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// Overriding object values
const base = { a: 1, b: 2 };
const override = { ...base, b: 99, c: 100 };
console.log(override); // { a: 1, b: 99, c: 100 }


// Shallow copy using spread has edge case
const nested = { x: { y: 1 } };
const shallowCopy = { ...nested }; // shallow copy of the top-level object is created
shallowCopy.x.y = 42;
console.log("nested->", nested ,"\nshallowCopy->",shallowCopy);

const arrNested = [[1, 2], [3, 4]];
const arrCopy = [...arrNested];
arrCopy[0][0] = 99; // mutate inside the nested array 
// If we would have done arrCopy[0]=99 then the reference link would have broken i.e., replacing the entire first element
console.log("arrNested->", arrNested ,"\narrCopy->",arrCopy);
