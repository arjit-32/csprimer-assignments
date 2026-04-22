const arr = [1,2,3,4,5,6,7,8,9,10];

function myMap(arr,f){
    let output=[];
    for(let i=0;i<arr.length;++i){
        output.push(f(arr[i]));
    }
    return output
}
let outMap = myMap(arr,i=>i*2);
console.log("outMap", outMap);

function myFilter(arr,f){
    let output=[];
    for(let i=0;i<arr.length;++i){
        if(f(arr[i], i , arr)){
            output.push(arr[i]);
        }
    }
    return output
}
// let outFilter = myFilter(arr,(val, idx, arr)=>{
//     return val%2==0;
// });
let outFilter = myFilter(arr,i=>i%2===0);
console.log("outFilter", outFilter);


function myReduce(arr, f, initValue) {
  let accumulator = initValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = f(accumulator, arr[i], i, arr);
  }
  return accumulator;
}
let outReduce = myReduce(arr, (acc, x) => acc + x, 0)
console.log("outReduce", outReduce); 


// Using in-built map, filter and reduce
console.log(arr.map(i=>i*2));
console.log(arr.filter(i=>i%2==0));
console.log(arr.reduce((acc,x)=>acc+x,0))


// Spare array
const sparse = [1, , 3, [0, ,6]]; // hole at index 1
console.log(sparse); 
console.log(sparse.length); 
// console.log(sparse.map(x => x * 2)); 
const sparseMapRes = sparse.map(x => {
    if (x === undefined) return undefined;
    if (Array.isArray(x)) {
        return x.map(y => (y === undefined ? undefined : y * 2));
    }
    return x * 2;
})
console.log(sparseMapRes);

// Mutation during iterations
let temp = [1,2,3];
temp.forEach((val, i) => {
  if (val === 2) temp.push(4); // modifies during iteration
});
console.log(temp);

// Shallow copy issues
const original = [{name:"Arjit", age:20}, {name:"God", age:undefined}];
const copy = original.slice(); // shallow copy
copy[0].name = 27;
console.log("original - ", original[0].name, "copy - ", copy[0].name); // 27 (mutation affects both)

// Comparing for vs Map
const bigArray = Array.from({length: 1e6}, (_, i) => i);
console.time("for loop");
let forResult = [];
for (let i = 0; i < bigArray.length; i++) {
  forResult.push(bigArray[i] * 2);
}
console.timeEnd("for loop");
console.time("map");
let mapResult = bigArray.map(x => x * 2);
console.timeEnd("map");