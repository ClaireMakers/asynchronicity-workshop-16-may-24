//Class in JavaScript - in-built in the language and always accessible
//Promises have three different states:
// - Pending - Asynchronous task is not complete yet
// - Resolved/fulfilled - Successfully completed 
// - Rejected - Task has failed 



//Syntax of promises:

// const array = [];

const promiseToBoilThePotatoes = new Promise((resolve, reject) => {

    let fulfilled = true; 

    if (fulfilled) {
        resolve("3 - perfectly done - fall apart without being mushy");
    } else { 
        reject("error - overdone potatoes, start again!");
    }
   
}).then((string) => { 
    array.push(string);
    console.log(array)
    return string;
}).then((data) => { 
    console.log(data)
}).catch((error) => { 
    console.log(error);
})

// console.log(array);

/* Promise { 
    constructor((resolve, reject) => {})

   then(returned data from the promise above in the chain) {
        returns a new promise
   }

   catch(the error data returned in the rejected promise) {
        error handling here
   }

}*/


//Sending fetch requests - promises under the hood

const fetchPokemonData = () => { 
    return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((pokemonData) => { //rejected promise
            if (pokemonData.status == 404) {
                return new Promise((resolve, reject) => {
                    reject("404 - not found");
                })
            } else { //fulfilled promise
                const data = pokemonData.json();
                return data;
            }
      })
      .then((dittoObject) => {
        console.log(dittoObject);
        return dittoObject.name;
      })
      .catch((error) => {
        console.log("HERE");
        console.log(error);
      });
}

fetchPokemonData().then((dittoName) => { console.log(dittoName) });