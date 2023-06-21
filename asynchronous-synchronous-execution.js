function wakeUpClaire() {
  console.log("meow until she wakes up");
}

function begForFood() {
  console.log("beg for food until bowl is full");
}

function eatFood(boolean) {
    return new Promise((resolve, reject) => {
        if (boolean) {
            resolve("eat lots of food and make sure to spill it everywhere");
        }
        else {
            reject("ewwww, I hate that food - wait for some acceptable food instead")
        }
    }).then((successString) => {
        console.log(successString)
        demandClaireOpensTheDoor();
    }).catch((errorString) => {
        console.log(errorString);
    })
}

function demandClaireOpensTheDoor() {
  console.log("demand Claire opens the garden door");
}

function executeSigridsMorning() {
  wakeUpClaire();
  begForFood();
 eatFood(true);
}

executeSigridsMorning();