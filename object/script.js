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
