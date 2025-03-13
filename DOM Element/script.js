// //Accessing Elements

// // Class Name
// const body = document.getElementsByClassName
// ("body")
// console.log(body)

// // Id
// const header = document.getElementsByClassName
// ("header")
// console.log("header")

// //Tag Name

// const home = document.getElementsByTagName("h1")

// console.log(home)

// //Query Selector

// const classElements = document.querySelector("#header")

// console.log(classElements)

// const all = document.querySelectorAll(".body")
// console.log(all)

//Text content
//Inner Html
//Styling
//Adding and Removing Classes
//Event Listener

//TEXT CONTENT

const header = document.getElementById("header")

header.textContent = "Hello Universe"

const paragraph = document.querySelector ("p")

paragraph.textContent = "am one of the cohort-6 member"

const h6 = document.querySelector("h6")

h6.textContent = "I enjoy learning"


//INNERHTML
const container = document.querySelector("div")
container.innerHTML = `
    <h1>I do read </h1>
    <p> and play football </p>
`

//Styling
container.style.backgroundColor = "green"


//ADDING AND REMOVING CLASS NAME

h6.classList.add("subheader")
paragraph.classList.remove("body")

const bodyElements = document.getElementsByClassName("body")

console.log(bodyElements)

//Add Event Listener
document.querySelector("button"), addEventListener("click", function(){
    document.getElementById("message").textContent = "Button Clicked!"
})

//House Event
document.getElementById("box").addEventListener("mouseover", function(){
    document.getElementById("box").style.backgroundColor = "yellow"
})
document.getElementById("box").addEventListener("mouseout", function(){
    document.getElementById("box").style.backgroundColor = "black"
})

document.getElementById("textinput").addEventListener("keyup", function(event){
    document.getElementById("output").textContent = "you pressed." + event.key
})

function greet(name){
    alert("hello," + `${name}` + "!");
}

console.log()


document.getElementById("greetBtn").addEventListener("click", () => greet ("abdullah"))

const newBox = document.createElement('div')
newBox.textContent = "How are you doing"
document.body.appendChild(newBox)
