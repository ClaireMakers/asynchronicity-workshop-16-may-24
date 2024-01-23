function peelThePotatoes() {
  console.log("peeling always takes forever");
}

function chopThePotatoes() {
  console.log("not too small, not too big");
}

function boilThePotatoes() {
  return new Promise((resolve, reject) => {
      resolve("perfectly done - fall apart without being mushy");
  }).then((string) => { 
    console.log(string);
  })
}


function boilThePotatoesTwo() {
  return new Promise((resolve, reject) => {
    resolve("second run the potatoes");
  }).then((string) => {
    console.log(string);
  });
}


function mashThePotatoes() {
  console.log("at last! Proper mash");
}

function makeSomeMash() {
  peelThePotatoes();
  chopThePotatoes();
  setTimeout(boilThePotatoes, 1000);
  boilThePotatoesTwo();
  mashThePotatoes();
}

makeSomeMash();
