// Map for caching

const cache = new Map();

function cachedOperation(num) {
  if (cache.has(num)) {
    return "in cache  -> "+cache.get(num); // Get the cached result
  }

  const result = num * num; // Compute the result
  cache.set(num, result); // Store it in the cache
  return "stored now  -> "+result;
}

console.log(cachedOperation(5)); // Computes and stores
console.log(cachedOperation(5)); // Fetches from cache
console.log(cachedOperation(5)); // Fetches from cache




// Set for removing duplicates
const numbers = [1, 2, 3, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]




// WeakMap metadata
const metadata = new WeakMap();
let obj1 = {};
metadata.set(obj1, { info: "Private data" });
console.log(metadata.get(obj1)); // Output: { info: "Private data" }
// If the object is no longer referenced anywhere, it will be garbage collected,
// and the metadata will also be removed automatically.
obj1=null;


// Object vs Map behaviour
const obj2 = { name: "Alice", age: 25 };
console.log(obj2); // "Alice"

const map = new Map();
map.set("name", "Alice");
map.set("age", 25);
console.log(map); // "Alice"