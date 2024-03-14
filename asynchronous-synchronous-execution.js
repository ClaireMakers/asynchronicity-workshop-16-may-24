function peelThePotatoes() {
  console.log("peeling always takes forever");
}

function chopThePotatoes() {
  console.log("not too small, not too big");
}

function boilThePotatoes() {
  return new Promise((resolve, reject) => {
    console.log("perfectly done - fall apart without being mushy");
    reject("wrong");
  }).then(() => { 
    mashThePotatoes();
  }).catch((error) => { 
    console.log(error)
  })
}

function mashThePotatoes() {
  console.log("at last! Proper mash");
}

function makeSomeMash() {
  peelThePotatoes();
  chopThePotatoes();
  boilThePotatoes();
}

makeSomeMash();