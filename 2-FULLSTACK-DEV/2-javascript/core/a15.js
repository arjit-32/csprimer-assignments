const arr = [1, 2, 3];

// map polyfill
// In real map 2 args, callback fn, thisArg
Array.prototype.myMap = function(callback, thisArg){
    if(typeof callback != "function"){
        throw new TypeError("Callback must be a function");
    }
    const result=[];
    for(let i=0;i<this.length;++i){
        if (i in this) // used to skip holes in sparse arrays
        {  
            //  Real map always calls callback with 3 arguments(element,idx,array)
            const mappedValue = callback.call(thisArg, this[i], i, this);
            result.push(mappedValue);
        }
    }
    return result;
}
console.log("Map=>", arr.myMap(x => x * 2));

const context = { multiplier: 5 };
console.log("Map with context=>", arr.myMap(function(x) { return x * this.multiplier; }, context));


// filter polyfill
Array.prototype.myFilter = function(callback, thisArg){
    if(typeof callback!="function") throw new TypeError("Callback must be a function");

    const result=[];
    for(let i=0;i<this.length;++i){
        if (i in this) {  
            const filteredValue = callback.call(thisArg, this[i], i, this);
            if(filteredValue==true) result.push(this[i]);
        }
    }
    return result;
}
console.log("Filter=>", arr.myFilter(x=> x%2==0));


// reduce polyfill
Array.prototype.myReduce = function(callback, initialValue){
    if(typeof callback!="function") throw new TypeError("Callback must be a function");

    // If initialValue is provided, start with it
    let accumulator = arguments.length > 1 ? initialValue : this[0];
    let startIndex = arguments.length > 1 ? 0 : 1;

    for(let i=startIndex;i<this.length;++i){
        if (i in this) {  
            // Callback gets (accumulator, element, index, array)
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator;
}
console.log("Reduced=>", arr.myReduce((acc,x)=>acc+x));

// myForEach
Array.prototype.myForEach = function(callback, thisArg){
    if(typeof callback!="function") throw new TypeError("Callback must be a function");

    for(let i=0;i<this.length;++i){
        if (i in this) {  
          callback.call(thisArg, this[i], i, this)
        }
    }
}
arr.myForEach((x)=>console.log(x));

// myFind
Array.prototype.myFind = function(callback, thisArg){
    if(typeof callback!="function") throw new TypeError("Callback must be a function");

    for(let i=0;i<this.length;++i){
        if (i in this) {  
          const val = callback.call(thisArg, this[i], i, this);
          if(val==true) return this[i];
        }
    }
    return undefined;
}
console.log("myFind=>", arr.myFind(x=>x>5));
