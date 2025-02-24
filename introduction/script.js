// Javascript variable, Data types, and Operators

// variable keywords: const and let


let a = 10;

console.log(a)

a = 25;

console.log(a)

const myNumber = 30;

console.log(myNumber)

let b = 3;
let c = 4;

let temp;
temp = b;
b = c;
c = temp; 

console.log(b)
console.log(c)

// Javascript Data types: Primitive and Non-Primitive Data types

let studentNames = ["Dolapo", "Ridwan", "Muheez", "Feranmi"]; //non-primitive

let primitive = 10; //primitive
let anotherPrimitive = primitive;

primitive = 30;

console.log({primitive, anotherPrimitive})


// Non-primitive Data types

let newStudentNames = studentNames;

studentsNames = ["Soliu", "Abdullah"];

console.log({studentsNames, newStudentNames})

// Javascript Operators

// logical operator

// const num1 = 10;

// const name1 = "soliu";

// const trueValue = num1 && name1 ? True : False

// console.log( "${trueValue}")

// comparisom operator

let num2 = 10;

const num3 = 20;

const result = num2 > num3 ? "yes" : "no"

console.log(
    --num2
);