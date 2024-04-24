const gorilla = {
  name: "Harambe",

  wrappedSayName: function () {
    console.log(this); // { name: 'Harambe', ... }
    return function () {
      // normal function loses context here as they do not use the context of what they are defined in
      console.log(this); // GLOBAL
      console.log("Hello my name is " + this.name);
    };
  },

  wrappedArrowSayName: function () {
    console.log(this); // { name: 'Harambe', ... }
    // arrow function this will refer to the context on the above line
    return () => {
      console.log(this); // { name: 'Harambe', ... }
      console.log("Hello my name is " + this.name);
    };
  },

  // sayName: function () {
  //   console.log(this.name);
  // },

  // sayNameArrow: () => {
  //   console.log(this.name);
  // },
};

// let wrapped = gorilla.wrappedSayName();
// let arrowWrapped = gorilla.wrappedArrowSayName();

// wrapped(); // Hello my name is undefined
// arrowWrapped() // Hello

// let notBound = gorilla.sayName;
// console.log(notBound());

// let arrowFunc = gorilla.sayNameArrow;
// console.log(arrowFunc());


class Gorilla{
  constructor(name) {
    this.name = name;
  }

   sayName() {
    console.log(this.name);
  }

  sayNameArrow = () => {
    console.log(this.name);
  }
}



const harambe = new Gorilla('harambe');
// console.log(harambe);


let normalFunc = harambe.sayName;
// console.log(normalFunc);
// normalFunc();
let boundFunc = harambe.sayName.bind(harambe);

// let arrowFunc = harambe.sayNameArrow;
// console.log(arrowFunc);
// arrowFunc();

class Monkey extends Gorilla{};

const george = new Monkey('george');

let monkeyCall = george.sayNameArrow;

// console.log(monkeyCall);

monkeyCall();
