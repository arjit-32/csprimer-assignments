let grade = function(marks){
    if(marks>90) return "A+";
    else if(marks>70) return "B";
    else if(marks>50) return "C";
    else return "Fail";
}
console.log(grade(40));

let day = "Saturday";
switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Weekday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Invalid day");
}

let arr = [1,2,3,4,5];

// for loop
for (let i = 0; i < arr.length; i++) {
    console.log("for:", arr[i]);
}

// while loop
let i = 0;
while (i < arr.length) {
    console.log("while:", arr[i]);
    i++;
}

// do...while loop
let j = 0;
do {
    console.log("do...while:", arr[j]);
    j++;
} while (j < arr.length);

// for...of (values in iterable)
for (let num of arr) {
    console.log("for...of:", num);
}

// for...in (keys in object)
let obj = { name: "Arjit", age: 18, city: "Blr" };
for (let key in obj) {
    console.log("for...in:", key, "=", obj[key]);
}