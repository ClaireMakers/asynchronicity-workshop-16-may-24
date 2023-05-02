// Object that we use to handle asynchronous operations. 
//Promises have three different states: 
// - pending
// - fulfilled
// - rejected

const promiseToExecuteMorning = new Promise((resolve, reject) => {
    setTimeout(() => {
        let boolean = false;
        if (boolean) {
            resolve("meow until she wakes up");
        } else {
            reject("Claire doesn't wake up");
        }   
    }, 1000);
}).then((string) => {
    console.log(string);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let boolean = false; 

            if (boolean) { 
              resolve("beg for food");
            } else {
                reject("eww, don't like this food")
            }
        }, 200);
    });
}).then((string) => {
    console.log(string);
}).catch((error) => {
    console.log(error);
})


const promiseToWakeUp = new Promise((resolve, reject) => {
    setTimeout(() => {
        let boolean = true;
        if (boolean) {
            resolve("meow until she wakes up");
        } else {
            reject("Claire doesn't wake up");
        }
    }, 1000);
});

const promiseToFeedMe = new Promise((resolve, reject) => {
    setTimeout(() => {
        let boolean = false;

        if (boolean) {
            resolve("beg for food");
        } else {
            reject("eww, don't like this food")
        }
    }, 200);
}).catch((error) => { return error });


const executeMorning = async () => {
    try {
        const wokenUp = await promiseToWakeUp;
        return wokenUp;

    } catch(error) { 
        console.log(error)
    }
}

const fetchPokemon = async () => {
    try { 
        const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        console.log(pokemon);

    } catch(error) {
        console.log(error);
    }
}

const fetchPokemonPromise = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((pokemon) => {
        console.log(pokemon)
        }).catch((error) => {
        console.log(error)
    })
}