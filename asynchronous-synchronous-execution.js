function wakeUpClaire() {
  console.log("meow until she wakes up");
}

function begForFood() {
  console.log("beg for food until bowl is full");
}

function pigOut() {
  return "eat lots of food and make sure to spill it `everywhere";
}

function demandClaireOpensTheDoor() {
  console.log("demand Claire opens the garden door");
}

function waitForeverAndAHalf() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    });
  }).then(() => {
    return pigOut();
  });
}

async function waitForFood() {
  console.log("Wait forever and a half");
  const eatingTime = await waitForeverAndAHalf();
  console.log(eatingTime);
}

function executeSigridsMorning() {
  wakeUpClaire();
  begForFood();
  waitForFood();
  demandClaireOpensTheDoor();
}

executeSigridsMorning();
