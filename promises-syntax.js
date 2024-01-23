//Object that we use to handle asynchronous operations.
//Promises have three different states:
// - Pending -> promise initial state / not yet resolved, not yet rejected
// - Resolved/Fulfilled -> promise code has ran and we have the data we were waiting for
// - Rejected -> The code in the promise hasn't ran as expected/something went wrong
//the promise is rejected with an error

//Write a Promise Object from scratch
const promiseToBoilThePotatoes = new Promise((resolve, reject) => {
    let fulfilled = false; 

    if (fulfilled) {
        resolve("perfectly done - fall apart without being mushy");
    } else { 
        reject("overboiled - have to restart again")
    }
}).then((string) => { 
    console.log(string)
    return string;
}).catch((error) => { 
    console.log(error)
})


console.log(promiseToBoilThePotatoes);


//Write fetch requests, which are promises
//Fetch requests return promises

const addVulpix = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon/vulpix")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => { 
            console.log(error)
        })
};

//Async-await is synctatic sugar for promises, which means they are the same, and work the same as promises written
//with .then() chains
const addPikachu = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        const data = await response.json();
        console.log(data.name)
    } catch(error) { 
        console.log(error)
    }
}

addPikachu()