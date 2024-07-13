// Replace Part Of String

const paragraph = "This is split string example";

console.log(paragraph.replace("split", 'replace'));

// comparison of substring and slice 

const text = "This is comparison of substring and slice"


console.log("Original string:", text);
console.log("Length:", text.length);

// Using substring()

console.log("\nUsing substring():");
console.log("substring(0, 10):", text.substring(0, 10));
console.log("substring(11):", text.substring(11));
console.log("substring(5, 2):", text.substring(5, 2));
console.log("substring(-5):", text.substring(-5));

// Using slice()

console.log("\nUsing slice():");
console.log("slice(0, 10):", text.slice(0, 10));
console.log("slice(11):", text.slice(11));
console.log("slice(5, 2):", text.slice(5, 2));
console.log("slice(-5):", text.slice(-5));

// comparison of slice and splice 

let fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

console.log("Original array:", fruits);

//  slice()

console.log("\nslice()");
let slicedFruits = fruits.slice(1, 4);
console.log("fruits.slice(1, 4):", slicedFruits);

//  splice()

console.log("\nsplice()");
let splicedFruits = fruits.splice(1, 2, 'kiwi', 'melon');
console.log("fruits.splice(1, 2, 'kiwi', 'melon'):", splicedFruits);

// Arrow function 

const num1 = 806;
const num2 = 395;

const add = (num1, num2) => num1 + num2;
const result = add(num1, num2);

console.log(result);

// Return Statement in Function

let num = 35;
let square = num ** 2;

console.log(square);

// Ternary Operator:

const age = 24;

if (age >= 18)console.log("Eligible For Voting");
else console.log("Not Eligible For Voting");

// For-Loop 

for(let start = 1; start <=5 ;start++){
    console.log(start);
}

// While-Loop 

let start = 5;

while(start >= 1){
   console.log(start)
   start--;
}

// Do-While loop 

start = 1;
do {
    console.log(start);
    start++;
} while (start <= 3);

console.log();

// break and continue statements:

for(let start1 = 1; start1 <= 5; start1++){
    if (start1 === 3){
        continue;
    }
    if(start1 === 5){
        break;
    }
    console.log(start1)
}