// JS Function


// // Function Declaration
// function myName(){
//     return"Hello World!"
// }

// // Function Expression
// const myWorld = function(){
//     return "Hello World!"
// }

// // Arrow Function
// const myName = () => {
//     return "Hello World!"
// }

function add (a,b) {
    return a+b;
}

console.log(add(1,2))

function jamb (age){
    if(age > 30){
        return"You are too old to register"
    }else if (age < 30 && age > 18){
        return"You are qualified to register"
    }else{
        return"To young to register"
    }
}
console.log(jamb(12))

//Hoisting
//Var
//Function declaration


function weekDays (days){
    if(days === "monday"){
        return "It is a sunny day"
    }
    else if(days === "tuesday"){
        return "The weather is cool"
    }
    else if(days === "friday"){
        return "Today is bright"
    }
    else{
        return"It is a normal day"
    }
}

console.log(weekDays("monday"))


function everyDay (day){
    switch(day){
        case "monday":
            return "It is a bright day"
        case "tuesday":
            return "A sunny day indeed"
        case "wednesday":
            return "frosty"
        case "Thursday":
            return "Hectic"
        case "Friday":
            return "Wet"
        case "saturday":
            return "yaayy its the weekend"
        case "sunday":
            return "ugh tomorrow is monday"
        default:
            "ehhhh"
    }
}

console.log(everyDay("monday"))


const checkNumber = (num) => {
    if(num > 0) {
        return "positive"
    }else if (num < 0){
        return "negative"
    }else{
        return "zero"
    }
}

console.log(checkNumber(0))
console.log(checkNumber(4))
console.log(checkNumber(-4))


const isEven = (num) => num % 2 ===0? "even" : "odd"
console.log(isEven(4))

const login=(username, password, isAdmin) => {
    if(!username || !password) "Please fill the required fields"
    if(isAdmin) return "Admin login successful";
    return username === "user" && password === "pass123" ? "User login successful": "Invalid credentials";
}

console.log(login("user", "pass123", true))

const registration = (surname, phoneNumber, password) => {
    if (!surname || !phoneNumber) "Please fill the necessary information to proceed"
    if(password) return "Uppercase required"
    return surname === "abdullah" && phoneNumber === "09164129321" ? "This already exist!" : "User already registered!"
}

console.log(registration("abdullah", "09164129321", false))

const registrations = (username, password, country, state, email) => {
    if (!username || !password) return "Please fill the required fields"
    if (password.length < 6) return "minimum of 6 characters"

    return username === "abdullah" && password === "pass123" ? "user already exists" : `${username} successfully registered`
}

console.log(registrations("anate", "pass123", "Nigeria", "Kogi", "email"))


// SCOPE
//Global Scope

let globalVar = "i am global"
function showVar(){
    console.log(globalVar)
}

showVar()

//Local Scope
function showsVar(){
    let localVar = "i am Local"
    console.log(localVar)
}
showsVar()


//Lexical Scope
function outterFunc(){
    let outervar= "I am outer"

    function innerFunc(){
        console.log(outervar)
    }

    innerFunc()
}

outterFunc()


function getName(name){
    function greet(){
        console.log(`Good Day... ${name}`)
    }greet()
}getName("Abdullah")
