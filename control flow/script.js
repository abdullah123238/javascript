
console.log("Hello World!")

//control flows...determines how programs are executed based on condition and iteration.

//conditionals --if; else-if; else; tenary operator.

if("condition") {
    //code to execute if condition is not
}

let age = 30;
if (age === 25){
    console.log("Age is greater than 25");
} else if(age < 25){
    console.log("Age is greater than 25");
} else{
    console.log("Age is 30");
}

let isLoggedIn = true;

if (!isLoggedIn) {
    console.log("You are not logged in")
} else{
    console.log(
        "You are logged in."
    )
}

let balance = 500;

let withdrawalAmount = 1000;

if (withdrawalAmount > balance){
    console.log("insufficient funds")
}

else if (withdrawalAmount == balance){
    console.log("You cannot empty your wallet")
}

else{
    console.log("Sucessful.... Owo ti tan")
}

let user = 18;

if (user < 18){
    console.log("Not eligible to vote")
} 
else{
    console.log("Vote admitted")
}

let purchaseAmount = 100;
let discount;

if (purchaseAmount >= 250) {
    discount = 10;
}else if(purchaseAmount >= 150) {
    discount = 5;
}else if (purchaseAmount === 100) {
    discount = 1.5;
}else {
    discount = 0;
}

console.log(`You got a discount of ${discount}`)

// Tenary Operator.
// is a short hand for if-else
// condition ? expression_if_true: expression_if_false.

let threshold = 40;

threshold >= 40 ? console.log("mary") : console.log("You are still a minor")


const number = 9;

const result = number % 2 === 0 ? "even" : "odd" ;

console.log(result)

const temperature = 40

const entry = temperature < 12 ? "It is a cool day" : "It is a sunny day";

console.log(entry)

// switch statement....... used when there is multiple possible values for a variable.

let day = "Tuesday"

switch(day) {
    case "monday":
        console.log("Today is bright!")
        break;
        case "Friday":
            console.log("Jimoh Oloyin");
        break;
        case "Tuesday":
        console.log("Today is Tuesday!")
        break;
        default:
            console.log("It is a normal day");
}

let order = "pizza";

switch(order) {
    case "Burger":
    console.log("This is burger");
    break;

    case "Pizza":
        console.log("You ordered a Pizza")
        break;
    
    case "Doughnut":
        console.log("This is Doughnut")
        break;

        default:
            console.log("Invalid Order... Please select from the menu")
}


let dayNumber = 5;
let dayName;

switch(dayNumber) {
    case 1:
        dayName = "Sumday";
        break;

    case 2:
        dayName = "Monday";
        break;

    case 3:
        dayName = "Tuesday";
        break;

    case 4:
        dayName = "Wednesday";
        break;

    case 5:
        dayName = "Thursday";
        break;

    case 6:
        dayName = "Friday";
        break;

    case 7:
        dayName = "Saturday";
        break;

    default:
    console.log("😊")
}

console.log(`day ${dayNumber} is ${dayName}`);


let roll = "Viewer";

switch(roll) {
    case "Admin":
    console.log("Welcome Admin, granted full access....");
    break;

    case "Editor":
        console.log("Welcome Editor, granted full access!")
        break;
    
    case "Viewer":
        console.log("Welcome Dear Viewer, Happy to explore?.....")
        break;

        default:
            console.log("Unknown roll please contact support")
}

// Loops are used to execute a block of code multiple times.

for(let i = 0; i < 10; i++) {
    console.log("iteration:", i)
}

let table = 5;
for(let i = 1; i <= 10; i++) {
    console.log(`${table} * ${i} = ${table * i}`)
}

let i, x="";
for (i=0; i < 5; i = i + 2) {
    x += i;
    console.log(i)
}