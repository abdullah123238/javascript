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






  const cardContiner = document.getElementById("cardcontiner")

cardContiner.innerHTML = cohorts.map(cohort => `
    <div id="usercard">
           <p>Email: ${cohort.email}</p>
           <p>user: ${cohort.user}</p>
         </div>
   `)


//    const getUserAndTask = async (userIDs) => {
//     try {
//       console.log("Fetching users and their tasks...");
  
//       const userTasks = await userIDs.reduce(async (accPromise, userID) => {
//         const acc = await accPromise;
  
//         try {
//           const user = await getTheUser(userID);
//           const userTask = await getUserTask(userID);
          
//           // Add user and task data to the accumulator
//           acc.push({ user, tasks: userTask });
//         } catch (error) {
//           console.log(`Error for userID ${userID}: ${error.message}`);
//         }
  
//         return acc; // Return the accumulator
//       }, Promise.resolve([]));
  
//       console.log(userTasks); // Output the accumulated results
//     } catch (error) {
//       console.log(`Error: ${error}`);
//     } finally {
//       console.log("Operation completed");
//     }
//   }





// function getUser(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("User fetched from database");
//             resolve({ id: userId, username: "Leaky" });
//         }, 1000);
//     });
// }

// function validatePassword(user) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Password validated");
//             resolve(user);
//         }, 1000);
//     });
// }

// function fetchUserPerm(user) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Permissions retrieved!");
//             resolve({ ...user, permissions: ["read", "write"] });
//         }, 1000);
//     });
// }

// function fetchUserProfile(user) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("User's profile retrieved!");
//             resolve({ ...user, profile: { age: 26, email: "lakybass19@gmail.com" } });
//         }, 1000);
//     });
// }

// function userResponse(user) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Response for the user", user);
//             resolve("Success ✔");
//         }, 1000);
//     });
// }

// getUser(1)
//     .then((user) => validatePassword(user))
//     .then((validUser) => fetchUserPerm(validUser))
//     .then((userWithPermissions) => fetchUserProfile(userWithPermissions))
//     .then((userProfile) => userResponse(userProfile))
//     .then((result) => {
//         console.log("Final result:", result);
//     })
//     .catch((err) => {
//         console.error(err);
//     });








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







// // Number 1
// let numbers = [3, 7, 2, 9, 5,];
// for(let i = 0; i< numbers.length; i++){
//     console.log(numbers[i] )
// }


// // Number 2
// let arr = [1, 2, 3, 5, 6, 7];
// for(let i = 0; i < arr.length; i++){
//     if(i === 5){
//         break;
//     }
//     console.log(arr[i]);
// }


// // Number 3
// let colors = ["red", "green", "blue"];

//     for(color of colors){
//         console.log(color)
//     }



// // Number 5
// let num = 0;
// let result =   num > 0? console.log("positive") : console.log("negative")
// console.log("result")
// // console.log("negative");


// // Number 6
// let value = 15
// let results = value / 3? console.log("Fizzbuzz")
// : value / 5? console.log("Fizzbuzz")
// : console.log("it is not divisible")

