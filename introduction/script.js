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

const result = num2 == num3 ? "yes" : "no"

console.log(
    ++num2
); 


// Equality Operator
//Strict
console.log (5 === "5");
console.log(true === 1)
console.log(null === undefined)
// console.log([1, 2, 3] === [1, 2, 3])
// console.log({} === {})


let obj1 = {name: "lateefa"}
let obj2 = {name: "lateefa"}

console.log(obj1 === obj2)

let array1 = [1, 2, 3]
console.log(typeof array1)
let array2 = [1, 2, 3]

console.log(array1 === array2)


//Loose
console.log (5 == "5")
console.log (true == 1)
console.log (true == 0)
console.log (null == undefined)
console.log ([] == 1)
console.log ([1] == 1)
console.log ("\t\n" == 0)
console.log("Ridox" == "Dollypee")
console.log([1,2] == "1,2")
