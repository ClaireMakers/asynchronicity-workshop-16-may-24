function wakeUpClaire(callback) {
  setTimeout(() => {
    console.log("meow until she wakes up");
    if (callback) callback();
  }, 1000);
}

function begForFood(callback) {
  setTimeout(() => {
    console.log("beg for food until bowl is full");
    if (callback) callback();
  }, 500);
}

function pigOut(callback) {
  setTimeout(() => {
    console.log("eat lots of food and make sure to spill it around the bowl");
    if (callback) callback();
  }, 100);
}

function demandSheOpensTheDoor() {
  console.log("demand Claire opens the garden door");
}

function executeSigridsMorning() {
  wakeUpClaire(() => {
    begForFood(() => {
      let boolean = true;
      if (boolean) { 
        pigOut(() => {
          demandSheOpensTheDoor();
        });
      } else {
        console.log("eww, I don't like that food");
      }
    });
  });
}

executeSigridsMorning();