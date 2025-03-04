const cohorts = ["Lateefah", "Feranmi", "Idris", "Muiz", "Kabir"]
console.log(cohorts);

const nested = [[1,2], [3,4], [5,6]]
    console.log(nested)

const newArr = nested[0][1]
console.log(newArr)
console.log(nested.length)

// Changing of Element 
const replaceElememt = (cohorts[1] = "Basit")
console.log(replaceElememt)
console.log(typeof replaceElememt)

//Adding a new element to last event of an array
cohorts[5] = "Olodo"
console.log(cohorts)
console.log(cohorts.length)

cohorts.forEach((names) =>{
    console.log(names.toUpperCase())
})

const students = ["Yemi", "Soliu","Simbi","Fatimah","Maryam","Deborah"]
console.log(students)


//************ARRAY METHOD*****************

//1. *****************PUSH*****************
//To add a new element to the end of an array
const pushed = students.push("Bisola", "Lateefah")
console.log(pushed) //To print new array length

//2. *****************POP*****************
//To remove the last element in an array
const number = [3, 2, 1, 4, 7, 6, 5, 8, 9, 0]
console.log(number)

const popped = number.pop() //To save the removed element in a variable
console.log(popped) //To view the removed element
console.log(number)


//3. *****************Shift*****************
//To remove the first element in an array
const colors = ["Green", "Red", "Black", "White"]
console.log(colors)

const removeElement = colors.shift() //To save the remove element in a variable
console.log(colors)
console.log(removeElement)

//4. *****************Unshift*****************
// Adds one or more elements to the beginning of an array.
const addEl = colors.unshift("Blue", "gray", "Violet")
console.log(addEl)
console.log(colors)


//5. *****************Splice*********************
//Changes the content of an array by removing, replacing, or adding elements.
// It usually take 3 parameter (1)The first determine where the new element are place (2)The second parameter determine the number of element you want to delete when element is been placed (3)third parameter determine the number of element you want to add

const foods = ["rice", "beans", "Eba", "Iyan", "Semo", "Amala"]
console.log(foods)

foods.splice(3, 0, "Tuwo", "Porraige")
console.log(foods)

const wears = ["Gucci", "Balenciaga", "Lacoste", "Amiri", "Off Thug", "Nike", "Louis vuiton"]
wears.splice(2)
console.log(wears)

//6. Slice
//Slice return new array that contains element from a certain point (excluding element at a position of second parameter input) first parameter is important from where to start from while second parameter is when to end but excluding element at the index position (when not use it slice the rest of element)

const male = ["Daodu", "Gbojitta", "Gbajumo", "Ogundiji", "Afunimawobe"]
console.log(male)

const newString = "Adeyemi"
console.log(newString.length);
const sliceString = newString.slice(1,4);
console.log(sliceString)

const warriors = male.slice(1, 4);
console.log(warriors)

const stakeholders = male.slice(4)
console.log(stakeholders)

//Or using negative parameter

const stakeHolders2 = male.slice(-2) // Start counting from element(-1)
console.log(stakeHolders2)


//conversion of array to string
const string = male.toString()
console.log(string)

//7. includes()
//It return the boolean to check if it include an element either yes/no

const blean = male.includes("Dadu")
console.log(blean); // false

const blean2 = male.includes("Ogundiji")
console.log(blean2)

//8. sort
// It sort the element of an array and return the sorted array in alphabetical order

male.sort()
console.log(male)

//9. indexOf()
// It is used to search of find the index of a specied element in a array. It search the array from the beginning to the end and return the first occurence of the specied element if the element is not found it will -1

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 14, 4, 12, 2]
console.log(num)

const index1 = num.indexOf(2)
const index2 = num.indexOf(10)
console.log(index1)
console.log(index2)

//10. lastIndexOf
//It will start searching from the end to the beginning

const lastIndexOf = num.lastIndexOf(4, num.length)
console.log(lastIndexOf)



//11. forEach 
//It perform an action for each element of an array. It allow call back function to original array

const names = ["shola", "alaba", "alamu"]
// names.forEach(function(){
//     console.log(names)
// })

// names.forEach(() => {
//     console.log(names)
// })

// Call back always have 3 argument which are: value, array(arr), index(i)
// Call back function is used to pass another function as an argument which is then invoked inside outter function to complete some kind of routing or action
names.forEach((value, i, arr) => {
    console.log(value)
    console.log(i)
    console.log(arr)
})

let totalValue = 0;
const trans = [42, 45, 26, 4, 13, 16]
trans.forEach((trn) => {
    console.log(totalValue,(totalValue += trn), trn)
})

console.log(totalValue)

names.forEach((name)=> console.log(`congratulation ${name}, you will be representing the team in the UK next weekend`))


//12. Map
//It allocate memory in all data store and return values.

const investory = [
    {name:"Rice", price: 50000},
    {name:"Beans", price: 500},
    {name:"Garri", price: 3000},
    {name:"Semo", price: 3500},
    {name:"Yam", price: 7000}
]

const prices = investory.map((arr) => {
return arr.price
})

console.log(prices)


const commodities = investory.map((value) => value.name)
console.log(commodities)


