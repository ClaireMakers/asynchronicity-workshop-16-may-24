// Object that we use to handle asynchronous operations. 
//Promises have three different states: 
// - pending => waiting for it to be fulfilled/rejected
// - fulfilled => means that the operation was successful and that we have data
// - rejected => the operation did not run as expected - something went wrong


const array = [];

//Write a Promise Object from scratch
const promiseToWakeUp = new Promise((resolve, reject) => {
    let fulfilled = true;

    if (fulfilled) {
        resolve("Claire wakes up and feeds the cat");
        //returns a new Promise
    } else {
        reject("Claire doesn't wake up - Sigrid is mad");
    }
    //calls .then() method on this new returned Promise
}).then((successString) => {
    console.log(successString);
    return successString;
  //=> returns a new Promise

  //calls .then() method on this new returned Promise
}).then((successString) => {

    array.push(successString);
    console.log(array);

}).catch((errorString) => {
    console.log(errorString);
})

//Write fetch requests, which are promises
//Fetch requests return promises

const fetchDataFromApi = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    })
}

fetchDataFromApi().then((data) => {
  console.log(data);
});

