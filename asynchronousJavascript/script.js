// when we are talking about asy, we are talking about setinterval() and settimeout()
// method dey with parenthesis
// interval allow u to execute a chunk of codes
//  everytime a specified amount of milliseconds passes

// settimeout functions() allow u to wait a certain amount of time before  executing a chunk of codes

// *SETINTERVAL () AND SETTIMEOUT ()*//

// //* SetInterval is a function that allow you to execute a chunk of code, 
// everyttime a specified amount of milisecond passess.

// //* setTimeout allow you to waiat a certain amount of time before executing a chunk 
// of code, do note that other code outside of timeout will continue execution as Normal.

// Call-Back => A callback is a function passed as an argument to another function

const fetchUser = (username) => {
    setTimeout(() => {
        return {user: username}
    },2000);
   
}

const user = fetchUser('test');
console.log(user);


const fetchUserOne = (username, callback) => {
    setTimeout(() => {
        console.log("Now we have the user");
        callback({user: username})

    }, 2000);
}

const user2 = fetchUserOne("Adejare", (user3) => {
    console.log(user3);
})

//Callback Hell =>  

const fetchUserTwo = (username, callback) => {
    setTimeout(() => {
        console.log("Now we have the user")
        callback({username}); 
    },2000)
}

const fetchUserPhotos = (username, callback) => {
    setTimeout(() => {
        console.log(`Now we have the photo for ${username}`)
        callback(["photo1", "photo2"]);
    },2000)
}

const fetchUserPhotoDetails = (photo, callback) => {
    setTimeout(() => {
        console.log(`Now we have the photos details ${photo}`)
        callback("details");

    },2000)
}

const user3 = fetchUserTwo("Michael", (user) => {
    console.log(`Your name is: ${user.username}`);
    fetchUserPhotos(user.username, (userPhotos) => {
        console.log(`Your photo are: ${userPhotos}`);
        fetchUserPhotoDetails(userPhotos[0], (details) => {
            console.log(`Your photo detals are: ${details}`);
        });
    });
});

// fetchUserTwo("Michael", (user) => {...}): initiates the process by fetching a user with the username "Michael”.

// fetchUserPhotos(user.username, (userPhotos) => {...}): Upon receiving the user data, this function fetches the photos associated with the user.

// fetchUserPhotoDetails(userPhotos[0], (details) => {...}): This fetches the details of the first photo retrieved.

// The next three lines are repeatedly written to fetch details of the first photo (userPhotos[0]) multiple times.

// console.log(details) outputs the details of the first photo to the console.

//This is called callback Hell. It becomes unreadable

const user4 = fetchUserTwo("Michael", (user) => {
    fetchUserPhotos(user.username, (userPhotos) => {
        fetchUserPhotoDetails(userPhotos[0], (details) => {
            fetchUserPhotoDetails(userPhotos[0], (details) => {
                fetchUserPhotoDetails(userPhotos[0], (details) => {
                    fetchUserPhotoDetails(userPhotos[0], (details) => {
                        console.log(details);

                    })
                })
            })
        })
    })
})

// const fetchUserTwo = (username, callback) => {
//     setTimeout(() => {
//         console.log("Now we have the user");
//         callback(username);
//     },2000);
// }

// const fetchUserPhotoes =(esername, callback) => {
//     setTimeout(() => {
//         console.log("We now have the photo")
//         callback(["photo1", "photo2"])
//     }, 2000);
// }

// const fetchUserPhotoesDetails = (photo, callback) => {
//     setTimeout(() => {
//         console.log("We now have the photo details");
//         callback("details")
//     }, 2000);
// }

// const user3 = fetchUserTwo("test", (username) => {
//     console.log(username);
//     fetchUserPhotoes(username, (userphotos) => {
//         console.log(userphotos);
//         fetchUserPhotoesDetails(userphotos[0], (details) => {
//             console.log("details")
//         })
//     })
// })

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Now we are in promise");

        resolve({username: "Bode"})
        // reject("User not found")
    }, 5000);
})

promise

.then((user) => console.log(user.username))
.catch((error) => console.log(error))




// New...

// const myUSers = {
//     userList: []
// }

// const myFoolFunc = async () => {
//    const response = await fetch('https://jsonplaceholder.typicode.com/users');
//    const fetchJson = await response.json();
//    console.log(fetchJson);
// }

// const anotherFn = async () => {
//     const data = await myFoolFunc();
//     myUSers.userList = data;
//     console.log(myUSers.userList);

// }

// anotherFn()
// console.log(myUSers.userList);

// example 2
const getAllUsersEmails = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const fetchJson = await response.json();
    console.log(fetchJson);

    const email = fetchJson.map((user) => {
        return user.email;
    })
    console.log(email)
 }

getAllUsersEmails();

const getAllUsersNames = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const fetchJson = await response.json();
 //    console.log(fetchJson);

    const oyee = fetchJson.map((joy) => {
        return joy.username;
    })
    console.log(oyee);
 }

 getAllUsersNames();




//   try and catch 
// try block contain the code that u want to attempt 
// if an error occur within this block , js will stop executing,
//  the try block will now jump to the catch block''
//  the catch block, is a place where you can handle the error , when an error occur,
//   it will jump to the Catch..
//    finally block is optional , always 
//   run either there is a error or Not, kogbonkankan



const fetchSingleData = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
      if(!response.ok) {
        throw new Error('Not found will fixed soon')
      }
      const [userName] = await response.json() // assuming data is an array of user
      const {username, email, name} = userData;
      return {username, email, name};
  
    }catch (error) {
      console.log('Error:', error.message)
    }
  }
  fetchSingleData().then(({username, email, name}) => {
    console.log('Username:', username)
    console.log('Email:', email)
    console.log('Name :', name)
  })