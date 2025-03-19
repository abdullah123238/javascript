console.log("Welcome to string in details")

//Javascript length method
let item = "DLT Africa! "
 const length = item.length;
 console.log(length)

//checking a letter at a particular index
const index = item.charAt(0)
console.log(index)

//return of occcurence
//*********IndexOf********/
const firstOccurence = item.indexOf("Africa")
console.log(firstOccurence)

//To return part of a string between two index
//**********subString************/
const extractE1 = item.substring(1, 5)
console.log(extractE1)

console.log(item)

//**********slice************/
const extractE2 = item.slice(0, 7)
console.log(extractE2)



//**********split************/
const split = item.split(" ")
console.log(split)

const join = split.join(" ")
console.log(join)

//To change subString to upperCase and to lowerCase
const upper = item.toUpperCase()
console.log(upper)

const lower = upper.toLowerCase()
console.log(lower)


//**********Include************/
const checkAvalaibility = item.includes("Africa")
console.log(checkAvalaibility)


//Checking if a string is starting with a given subString and end with a given subSting
//**********startWith************/
const startWith = item.startsWith("DLT")
console.log(startWith)


//**********endWith************/
const endWith = item.endsWith("Nigeria")
console.log(endWith)


//To check and rectify space not between string
//**********trim************/
const email = "   yourname@gmail.com"
console.log(email)

const trimedEmail = email.trim()
console.log(trimedEmail)

//**********repeat************/
const repeat = item.repeat(2)
console.log(repeat)


//**********lastIndexOf************/
const lastIndexOf = item.lastIndexOf("Africa")
console.log(lastIndexOf)


//**********replace************/
const replace = item.replace("!", "")
console.log(replace)


//**********conCat************/
const conCat = item.concat(trimedEmail)
console.log(conCat)

const example = 1 + "1"
console.log(example)

//End of String Method



//Value and Reference in js
//Primitive data type they are [passed by value]

let a = 6;
let b = a;
console.log(b)
console.log(a)

b = 10;
console.log(b)

let firstName = "Oluwaferanmi"
let fullName = firstName
console.log(fullName)

fullName = "Oluwaferanmi Alaba"
console.log(fullName)

//Non primitive data type [Passed by reference]
let firstExample = {age: 12}
let example2 = firstExample;
example2.age = 20
console.log(firstExample)
console.log(example2)


//Spread Operators: It allows you to unpark iterabuttes like: array, string and maps etc and object into individual element or key value pairs.
//Spread operator allow you to copy an array or object and this operation is called shallow cloning
const arr = [1, 2, 10, 405]
const arrClone = [...arr]
console.log(arrClone)
arrClone.push(4)
console.log(arr)


//We can use spread operator to merge two or more arrays together
const arr1 = [2, 4, 6, 8]
const arr2 = [1, 3, 5, 7]

const merged = [...arr1, ...arr2]
console.log(merged)

const obj1 = {name: "abdullah", age: 40}

const obj2 = {school: "DLT Africa",class: "Cohort-6"}

const obj = {...obj1, ...obj2}
console.log(obj)

function sum(a,b,c){
    return a+b+c;
}
const values = [12, 12, 12]
const result = sum(...values)
console.log(result)

// Destructuring
let person = {name: "Alhaji Agba", age: 102, status: "Died"};
const {name, age} = person;
console.log(name)

let fruit = ["apple", "Banana", "Cherry", "Date", "Grape"]
const [first, second, third] = fruit
console.log(first)