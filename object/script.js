// Objects: key values and Method

const carA = {

    model: 2013,
    colour: "Black",
    brand: "Toyota",
    price: 8000,
    hoursePower: 900

}

console.log(carA.model)
console.log(carA.colour)
console.log(carA.brand)
console.log(carA.price)
console.log(carA.hoursePower)
console.log(carA)

//Examples 2
const cars = {
    firstCar: carA,

    secondCar: {

        model: 2003,
        colour: "Brown",
        brand: "Mercedes",
        price: 1000,
        hoursePower: 800

    }
}

const carAPrice = cars.firstCar.price

// const carAPrice = cars["firstCar"]["price"]

console.log((carAPrice))

//Object with method
const cohort6 = {
    male: {
        names: ["Abdullah", "Muheez", "Idrees", "Ridwan"]
    },
    female: { name: "Lateefah" }
}

const firstCohort = cohort6.male.names[0]

console.log((firstCohort))

const cohort5 = [
    { 
        cohorts:{
        cohort1: {
        names: ["Biodun", "Bolu", "Anike", "Simbi"],
        hobbies: { 
            Biodun: "Football",
             Bolu: "Eating", 
             Anike: "Dancing", 
             Simbi: "Running" 
        },
    },
},
},

{
  tutors:{
    names: ["Anate", "SoliuA", "SoliuM", "Abdullah"],
    hobbies: {
        Anate: "Football",
        SoliuA: "Eating",
        SoliuM: "Dancing",
        Abdullah: "Running",
    },
  },
},
] 

console.log(cohort5[0].cohorts.cohort1.hobbies.Simbi)

console.log(cohort5[1].tutors.hobbies.Abdullah)

const studentAndTutor = {
    [cohort5[1].tutors.names[0]]: cohort5[0].cohorts.cohort1.names[1],
}

console.log(studentAndTutor);

//Object with methods

const dynamic = "year"

const carB = {
    name: "big daddy",
    brand: "Toyota",
    date: 2019,
    updateYear: function (newDate){
        this.date = newDate
    }
}

carB.updateYear(3004)
console.log(carB.year)


const student = {
    name: "Habeeb",
    age: 55,
    favNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    favAddition: function(){
       return this.favNumbers.reduce((accumulator, currentVal) => (accumulator + currentVal), 0)
    }
}

console.log({sum: student.favAddition()})



const player = {
    firstName: "Luka",
    lastName: "Modric",

    age: 29,
    team: {
        clubName: "Real Madrid",
        location: "United Kingdom",
        manager: "Carlo Ancelloti"
    },

    JerseyNumber: 10,

    updateLocation: function (newLocation){
        this.team.location = (newLocation)
    } //Built-In Method
    
}

console.log(player)
console.log(player.team.clubName)
player.team.location = "South Africa"



//Methods
//Built-in Method: Is a property inside an object that contain a function
 const myObject = {
    myMethod1: () => {}, // arrow function
    myMethod2: function(){}, // function Declaration
    myMethod3(){} // function expression
 }

const dog = {
    name: "Fluffy",
    age: 20,
    bark: () => {
        console.log("Woof Woof")
    }
}

console.log(dog.name)
dog.bark(); //console = dev tools (console is also known as dev tools)

//They are 5 common types of Object method in javascripts
//Object .Keys ()
//Object .Value ()
//Object .Entries()  It create a nested array of the key and value pairs of an object
//Object .freeze()
//Object .Seal()

//****************OBJECT .KEYS()****************
const employees = {
    Boss: "Dollypee",
    Secretary: "Ridwan",
    Sales: "Muiz",
    Accountants: "Abdul Kabir"
}

const employeeInfo = Object.keys(employees)
console.log(employeeInfo)


//****************OBJECT .VALUES()****************
const employeeDetails = Object.values(employees)
console.log(employeeDetails)


//****************OBJECT .ENTRIES()****************
const session = {
    id: 1,
    date: "10-march-2025",
    device: "Mobile",
    browser: "Chrome"
}

const sessionEntries = Object.entries(session)
console.log(sessionEntries)


const operatingSystem = {
    name: "ubuntu",
    fashion: 18.5,
    license: "open source"
}

const operatingSystem1 = Object.entries(operatingSystem)
console.log(operatingSystem1)


//freeze method prevent modification of existing properties and prevent properties for being added or removed
//****************OBJECT .FREEZE()****************
const user = {
    userName: "abdullah",
    Password: "secure123"
}

const userInfo = Object.freeze(user)
console.log(userInfo)

userInfo.userName = "Ali"
console.log(userInfo)


//seal property: it prevent new property for been added or remove from an object.
//****************OBJECT .SEAL()****************
const user1 = {
    name: "Abdullah",
    Age: 22,
    class: "Jss3"
}

const user2 = Object.seal(user1)
console.log(user2)
user2.name = "Tunde"
console.log(user1)

