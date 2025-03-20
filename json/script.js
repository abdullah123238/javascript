console.log("welcome to JSON --{} class")

//Fetch method to retrieve data
fetch("./person.json").then(res => res.json()).then((data) => {
    console.log(data); 

    const addId = {id: 1, ...data}
    console.log(addId)

    const add = addId.address

    const desAdd = [add.Number, add.street, add.city]
    console.log(desAdd)

    const [first, second, third] = desAdd
    console.log(`i live at number ${first}, ${second} str, ${third}`)
});