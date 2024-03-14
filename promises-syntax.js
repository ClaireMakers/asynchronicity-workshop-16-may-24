//Class in JavaScript - in-built in the language and always accessible
//Promises have three different states:
// rejected - condition wasn't met somewhere - error - 400/500
// resolved - success - we get back the data from the server - 200
// pending - waiting for it to either rejected or fulfilled - no response yet

//Write a Promise Object from scratch
const promiseToBoilThePotatoes = new Promise((resolve, reject) => { 
    // either the potatoes are cooked perfectly
    // or they are overboiled
    let fulfilled = false; 

    if (fulfilled) {
        resolve("perfectly done - fall apart without being mushy"); // returns a new promise
    } else { 
        reject("overboiled - have to start again")
    }

}).then((string) => { 
    // console.log(string);
    return string; //returns a new promise
}).catch((error) => { 
    // console.log(error)
})

// console.log(promiseToBoilThePotatoes);

// Promise { 
//     constructor(resolve, reject) { 
//         //some kind of initialisation here
//     }

//     then() { 

//     }

//     catch() {

//     }
// }


//Write fetch requests, which are promises
//Fetch requests return promises

const fetchVulpix = () => { 
    return fetch("https://pokeapi.co/api/v2/pokemon/vulpix").then((response) => {
        return response.json()
    }).then((data) => { 
        return data; 
    })
}

// fetchVulpix().then((data) => { console.log(data.name) });

console.log(fetchVulpix());


//Async-await is synctatic sugar for promises, which means they are the same, and work the same as promises written
//with .then() chains

let url = "https://pokeapi.co/api/v2/pokemon/pikachu";

const fetchPikachu = async (url) => {
    try {

        let response = await fetch(url);
        let data = await response.json(); 
        console.log(data)

    } catch (error) { 
        console.log(error)
    }
}

fetchPikachu(url)

