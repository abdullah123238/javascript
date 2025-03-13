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

    //Promise example 2:
    const register = new Promise ((resolve, reject) => {

        let success = false;
        setTimeout(() => {
            if(success){
                resolve("The operation is successful")
            }else{
                reject("The operation Failed")
            }
        }, 2000);
    });

    register.then((positiveResult) => {
        console.log({resolve: positiveResult})
    }).catch((negativeResult) => {
        console.log({reject: negativeResult})
    }).finally(() =>{
        console.log("The operation completed")
    });


    // Asyn/Await: It simplifies the synchronous handling process

    //Creating a promise
    const fetchDate = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data Fecthed")
            }, 2000)
        })
    }

    //Async Function
    const handleFetchedData = async () => {
        const data = await handleFetchedData()
        console.log({result: data})
    }

    handleFetchedData()


    // EXAMPLE 2

  const cohort = {name: "Muse",height: "77", skin:" fair"}
  
  const fetchCohortData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cohort)
      }, 3000)
    })
  }

  const processCohortData = (data) =>{
    return new Promise ((resolve) => {
      setTimeout(() => {
        console.log(data)
        resolve(data)
      }, 4000)
    })
  }
  const savedCohortData = (processedData) =>{
    return new Promise ((resolve) => {
      setTimeout(() => {
  
        resolve(processedData)
      }, 5000)
    })
  }

  const handleCohortData = async () =>{
    console.log("Starting point");

    const data = await fetchCohortData();
    console.log({step1: data});

    let processedData
    const getProcessData = await processCohortData(data);

    if(getProcessData){
      const numHeight = Number(getProcessData.height);
      const newResult = {...getProcessData, height: numHeight}

      processedData = newResult;
    }
    console.log({step2: processedData});

    const savedData = await savedCohortData(processedData);
    console.log({step3: savedData});

  }

  handleCohortData();

  //Error handling in async/Await
  const fetchUser = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("User fetched")
        }, 5000);
    })
  }
  const fetchPost = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Post fetched Successfully")
        }, 5000);
    })
  }

  const handleUserAndPost = async () => {
      
    try {
        console.log("Fetching user and posts")
        const [user, posts] = await Promise.all([fetchUser(), fetchPost()])
        console.log(`User: ${user}`) 
        console.log(`Posts: ${posts}`) 
    } catch (error) {
        console.log(`Error: ${Error}`)
    }
  }
  handleUserAndPost()

  
// class work

//Inscructions

// 1. Create  function to simulate fetching user data from a database (use setTimeout)
// 2. Create another function to simulate fetching user tasks from a database
// 3. Use async/await with try..catch to handle errors
// 4. Simulate a case where the user is not found, and another where the tasks fail to load

//Correction 


const users = {
    1: {id: 1, name: "Soliu", skin: "Dark"},
    2: {id: 2, name: "Ridwan", skin: "Light"},
    3: {id: 3, name: "Feranmi", skin: "Dark"}
  
  }
  
  
  const getTheUser =  (userID) => {
    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
    
        if (users[userID]) {
  
          resolve(users[userID])
          
        }else {
  
          reject(new Error("User not available in the database"))
        }
  
        
      }, 2000);
    })
  }
  
  
  const getUserTask =  (userID) => {
    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
  
        const tasks = {
          1: ["Dance", "Give up"],
          2: ["Cook", "Break fast"],
          3: ["Attend meeting"]
        }
        
        if (users[userID] && tasks[userID])  {
  
          resolve(tasks[userID])
          
        }else {
  
          reject(new Error("User with this task is not available in the database"))
        }
        
        
      }, 2000);
    })
  }
  
  
  const getUserAndTask = async (userID) => {
    
  try {
  
    console.log("Fetching user....")
  
    const user = await getTheUser(userID);
  
    console.log({user});
  
  
  
    console.log(`Fetching ${user?.name}'s task`);
  
    const userTask = await getUserTask(userID);
  
    console.log(`${user?.name}'s has this task: ${userTask}`);
    
  } catch (error) {
  
    console.log(`Error : ${error}`)
    
  }finally {
  
    console.log("Operation completed")
  }
  
  }
  
  
  
  getUserAndTask("4")
  