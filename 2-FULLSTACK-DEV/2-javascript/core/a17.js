function customPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument must be an array"));
        }

        const results = [];
        let completedPromises = 0;

        // If the array is empty, resolve immediately with an empty array
        if (promises.length === 0) {
            return resolve([]);
        }

        promises.forEach((promise, index) => {
            // If promise is already a promise, it stays as-is.
            // If its a plain value (like 42), it becomes a resolved promise with that value.
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value; // Store the resolved value at the correct index
                    completedPromises++;

                    // If all promises are resolved, resolve the main promise
                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    // If any promise rejects, reject the main promise immediately
                    reject(error);
                });
        });
    });
}


function customPromiseRace(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument must be an array"));
        }

        // If the array is empty, the returned promise will never resolve or reject
        if (promises.length === 0) {
            return;
        }

        promises.forEach(promise => {
            Promise.resolve(promise)
                .then(value => {
                    // Resolve as soon as the first promise resolves
                    resolve(value);
                })
                .catch(error => {
                    // Reject as soon as the first promise rejects
                    reject(error);
                });
        });
    });
}

function customPromiseAllSettled(promises) {
    return new Promise(resolve => {
        if (!Array.isArray(promises)) {
            throw new TypeError("Argument must be an array");
        }
        const results = [];
        let completedPromises = 0;

        if (promises.length === 0) return resolve([]);
        

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = { status: "fulfilled", value };
                })
                .catch(reason => {
                    results[index] = { status: "rejected", reason };
                })
                .finally(() => {
                    completedPromises++;

                    // If all promises are settled, resolve the main promise
                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                });
        });
    });
}


const p1 = Promise.resolve("p1");
const p2 = new Promise(res => setTimeout(() => res("p2"), 4000));
const p3 = "p3"; // plain value
const p4 = Promise.reject("Error from p4");

// Because one promise (p4) rejected, 
// the whole customPromiseAll rejects (we stop caring about p2 but it still runs in background).
customPromiseAll([p1, p2, p3, p4])
  .then(values => console.log(values))
  .catch(err => console.error(err));

customPromiseRace([p1, p2, p3, p4])
    .then(values => console.log(values))
    .catch(err => console.error(err));

customPromiseAllSettled([p1, p2, p3, p4])
    .then(values => console.log(values))
    .catch(err => console.error(err));