function peelThePotatoes() {
  console.log("peeling always takes forever");
}

function chopThePotatoes() {
  console.log("not too small, not too big");
}
const array = [];

function boilThePotatoes() {
  return new Promise((resolve, reject) => {
    resolve("perfectly done - fall apart without being mushy");
  }).then((string) => {
    array.push("here")
    console.log(string);
  })
}

function mashThePotatoes() {
  console.log("at last! Proper mash");
}

function makeSomeMash() {
  peelThePotatoes();
  chopThePotatoes();
  boilThePotatoes();
  mashThePotatoes();
  console.log(array)
}

makeSomeMash();