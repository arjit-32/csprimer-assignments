function deepClone(value, weakMap=new WeakMap()){
    // primitives are immutable and don’t need cloning
    if (value === null || typeof value !== 'object') {
        return value;
    }

    // Circular reference check (preventing infinite loops)
    // If we've already cloned this object before, return the stored clone.
    if (weakMap.has(value)) {
        return weakMap.get(value);
    }

    let cloned; 
    // Handling dates
    if (value instanceof Date) {
        cloned = new Date(value.getTime());
        weakMap.set(value, cloned); // Remember this clone in case of circular refs.
        return cloned;
    }
    // Handling Regexp
    if (value instanceof RegExp) {
        cloned = new RegExp(value.source, value.flags); // Regular expressions store a pattern and flags.
        weakMap.set(value, cloned);
        return cloned;
    }
    // Handle Map
    if (value instanceof Map) {
        cloned = new Map();
        weakMap.set(value, cloned);
        value.forEach((v, k) => {
            cloned.set(deepClone(k, weakMap), deepClone(v, weakMap));
        });
        return cloned;
    }
    // Handle Set
    if (value instanceof Set) {
        cloned = new Set();
        weakMap.set(value, cloned);
        value.forEach(v => {
            cloned.add(deepClone(v, weakMap));
        });
        return cloned;
    }
    // Handle Array
    if (Array.isArray(value)) {
        cloned = [];
        weakMap.set(value, cloned);
        value.forEach((item, index) => {
            cloned[index] = deepClone(item, weakMap); // Clone each element
        });
        return cloned;
    }

    cloned = {};
    weakMap.set(value, cloned);
    Object.keys(value).forEach(key => {
        cloned[key] = deepClone(value[key], weakMap);
    });

    return cloned;
}


const obj = {
  name: "Alice",
  date: new Date(),
  regex: /hello/gi,
  nested: { a: 1, b: [2, 3] },
  map: new Map([["key", { x: 10 }]]),
  set: new Set([1, { y: 20 }])
};

// Add circular reference
obj.self = obj;

const clone = deepClone(obj);
console.log(clone);