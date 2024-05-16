function peelThePotatoes() {
  console.log("1 - peeling always takes forever");
}

function chopThePotatoes() {
  console.log("2 - not too small, not too big");
}

function boilThePotatoes() {
  const promiseToBoilThePotatoes = new Promise((resolve, reject) => {
    resolve(); //the potatoes are boiled - this happens at an undertain point in time in the future
  }).then(() => {
    console.log("3 - perfectly done - fall apart without being mushy");
  }).then(() => { 
    mashThePotatoes();
    return "string";
  })

  return promiseToBoilThePotatoes;
}

function mashThePotatoes() {
  console.log("4 - at last! Proper mash");
}

function makeSomeMash() {
  peelThePotatoes();
  chopThePotatoes();
  boilThePotatoes();
}

const string = boilThePotatoes(); 
console.log(string);

// makeSomeMash();