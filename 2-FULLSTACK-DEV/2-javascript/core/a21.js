// Iterator - 
// An iterator is an object that allows you to traverse through a sequence of values, one at a time. 
// It has a next() method that returns an object with two properties: value and done


// Custom range iterator
function createRangeIterator(start, end) {
  let current = start;

  //  returning an object with a next() method.
  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false }; 
      }
      return { value: undefined, done: true }; 
    },
  };
}
// Usage
// Each call to next() returns an object with the current value and whether the iteration is complete (done).
const rangeIterator = createRangeIterator(1, 3);
console.log(rangeIterator.next()); // { value: 1, done: false }
console.log(rangeIterator.next()); // { value: 2, done: false }
console.log(rangeIterator.next());  // { value: 3, done: false }
console.log(rangeIterator.next()); // { value: undefined, done: true }

// Generator  - 
// function that can pause and resume execution.

// Infinite sequence with yeild
function* infiniteSequence(start = 1) {
  let current = start;

  while (true) {
    yield current++; // Yield the current value and increment
  }
}

// Usage
// Each call to next() resumes the generator, produces the next value, and pauses again.
const sequence = infiniteSequence();
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 4