// //Ways of creating Objects
// //1. Literal notation: not inheritable and not reusable but readily available for use

// const student = {
//     name: "Soliu",
//     age: 10,
//     printage: function(){
//         console.log(`${this.name}'s age is ${this.age}`)
//     }
// }

// console.log(student.printage());

// //2. Object constructor: It is same as literal notation just that it helps to create object dynamically using "new Object()"

// const person = new Object();     
// person.name = "Abdullah"
// person.age = 22


// console.log(person)

// person.age = 40
// console.log(person)


// //3. Construction function: This create a blueprint and is reusable. But inheritance is likely complex to structure

// function car (name, colour, brand, horsePower) {
//     this.name = name;
//     this.colour = colour;
//     this.brand = brand;
//     this.horsePower = horsePower;

//     this.printColour = function (){
//         console.log(`${this.colour}`)
//     }
// }

// car.prototype.printName = function(){
//     console.log(`The car name is ${this.name}`)
// }

// car.prototype.printColour = function (){
//     console.log(`${this.colour}`)
// }

// const car1 = new car("camry", "white", "toyota", 200)

// console.log(car1)
// console.log(car1.printColour())
// console.log(car1.printName())

// //4. Class: It is inheritable and also reusable. It extends the functionality of contractor function
// class House{
//     constructor(type, colour, address){
//         this.type = type;
//         this.colour = colour;
//         this.address = address;
//     }

//     printHouseAddress(){
//         console.log(
//             `${this.address} is the address of the house with the ${this.colour}`
//         )
//     }
// }

// const house1 = new House("storey", "brown", "No 17, Pegamut Estate")

// console.log(house1)

// console.log(house1.printHouseAddress);


// //Inheritance: It uses extend and super keyword

// class storeyBuilding extends House{

//     constructor(type, colour, address, height, windowSize){

//         super(type, colour, address)

//         this.height = height;
//         this.windowSize = windowSize;
//     }



//     printHouseAddress(){
//         console.log(
//             `${this.address} is the address of the house with ${this.height}`
//         )
//     }
    
    
//     printName(){
//         console.log(
//             `${this.type} is the house type`
//         )
//     }


// }

// const newStoreyBuilding = new storeyBuilding("Duplex", "white", "Ilgba, offa Rd", 200, 16)

// console.log(newStoreyBuilding)
// console.log(newStoreyBuilding.printHouseAddress())
// console.log(newStoreyBuilding.printType())


//Web Storage API
//setItem()
//getItem()

localStorage.setItem("name", "Dolapo")
let result = document.getElementById("result").innerHTML = localStorage.getItem("name")
console.log(result)

sessionStorage.setItem("name", "Abdullah")
let result2 = document.getElementById("demo").innerHTML = sessionStorage.getItem("name")
console.log(result2)

//create an html file h1(click counter), p(counter), button(increament)