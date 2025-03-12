console.log("Let's go async")

//Callback --> functions passed as params to another function
//Example 1:
function car(name, callback) {
    console.log("The model is " + name)
    callback();
}

function callCar() {
    console.log("Move on!")
}

car("BMW", callCar)

//Example 2:
// function greet(name) {
//     setTimeout(() => {
//         console.log("Hello " + name)
//     }, 2000)
// } 
// greet("Feranmi...")

//Example 3:
function fetchData(callBack){
    setTimeout(() => {
        callBack("Data Received")
    }, 1000)
}

fetchData((data) => {
    console.log(data)
});

//Example 4:
let numbers = [2,4,6,8];
numbers.map((item) => {
    console.log(item*2)
});
//Write a function greetUser that takes a user's name and a callback function. The function should log a greeting message and then execute the callback.
function greet(user, callback) {
    console.log("Hello " + user)
    callback();
}
function callUser() {
    console.log("Good morning")
}
greet("Dear User", callUser)

//Stimulate user auth flow
//get user from database
//Validate the password
//Fetch user permissions
//Fetch user profile data
//Send a response if everyting is sucessful
// function getUser(userId, callback) {
//     setTimeout(() => {
//         console.log("User fetched from the database")
//         callback(null, {id: userId, username: "Leaky"})
//     }, 1000)
// }

// function validatePassword(user, callback){
//     setTimeout(() => {
//         console.log("Password Validated")
//         callback(null, user)
//     }, 1000)
// }

// function fetchUserPerm(user, callback) {
//     setTimeout(() => {
//         console.log("Permission retrived!")
//         callback(null, {...user, permission: ["read", "write"]})
//     }, 1000)
// }

// function fetchUserProfile(user, callback) {
//     setTimeout(() => {
//         console.log("User's profile retrived!")
//         callback(null, {...user, profile: {age: 26, email: "lakybass19@gmail.com"}})
//     }, 1000)
// }

// function userResponse (user, callback) {
//     setTimeout(() => {
//         console.log("Response for the user", user)
//         callback(null, "Sucess ✔")
//     }, 1000)
// }

// //CallBAck Hell Starts here....
// getUser(1, (err, user) => {
//     if(err){
//         console.error(err)
//     }

//     validatePassword(user, (err, validUser) => {
//         if(err) {
//             console.error(err)
//         }

//         fetchUserPerm(validUser, (err, userWithPermission) => {
//             if(err) return console.error(err)

//             fetchUserProfile(userWithPermission, (err, userProfile) => {
//                 if(err) return console.error(err)
                    
//                     userResponse(userProfile, (err, response) => {
//                         if(response){
//                             console.info(response)
//                         }else{
//                             console.log(err)
//                         }   
//                     })
//             })
//         })
//     })
// })


//A promise represent a value that maybe available now, in the future or never.
//It helps avoid call-back hell by providing .then and .catch method

const promise = new Promise((resolve, reject) => {
    let success = true;

    if(success) {
        resolve("Promise resolved successfully")
    }else{
        reject("I no want --> Mi o fe")
    }
})

promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time))
    }

delay(2000).then(() => console.log("Executed after 2 seconds"))


//Chaining Promise
function firstTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("First task")
            resolve()
        }, 3000)
    })
}
function secondTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Second task")
            resolve()
        }, 3000)
    })
}

firstTask().then(secondTask).then(() => console.log("Tasks completed"))





function getUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched from database");
            resolve({ id: userId, username: "Leaky" });
        }, 1000);
    });
}

function validatePassword(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Password validated");
            resolve(user);
        }, 1000);
    });
}

function fetchUserPerm(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Permissions retrieved!");
            resolve({ ...user, permissions: ["read", "write"] });
        }, 1000);
    });
}

function fetchUserProfile(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User's profile retrieved!");
            resolve({ ...user, profile: { age: 26, email: "lakybass19@gmail.com" } });
        }, 1000);
    });
}

function userResponse(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Response for the user", user);
            resolve("Success ✔");
        }, 1000);
    });
}

getUser(1)
    .then((user) => validatePassword(user))
    .then((validUser) => fetchUserPerm(validUser))
    .then((userWithPermissions) => fetchUserProfile(userWithPermissions))
    .then((userProfile) => userResponse(userProfile))
    .then((result) => {
        console.log("Final result:", result);
    })
    .catch((err) => {
        console.error(err);
    });