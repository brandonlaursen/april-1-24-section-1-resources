"use strict";
function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    // "use strict";
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
eat(); //  accessing global object, it does not have a key name


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // added the eat function as key/value pair
// the nemo object is what is calling the method


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // doing same thing as line 18


/********************************* Scenario 4 *********************************/
// nemo.swim(); // the nemo object is calling the swim method


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // ?
const eat1 = eat;
// eat1();
