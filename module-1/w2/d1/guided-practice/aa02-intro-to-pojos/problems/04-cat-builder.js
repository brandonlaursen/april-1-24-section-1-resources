/*
Define a function called catBuilder that takes in a name string, a color string,
and an array of strings representing toys. The function should return a cat
object with a key of "name", "color", and "toys" that correspond to the
arguments passed in.
*/

let catBuilder = (name, color, toys) => ({ name, color,toys });

  // let obj = {};
  // dot
  // obj.name = name;
  // obj['color'] = color;
  // obj.toys = toys;
  // obj literal



// console.log(catBuilder("Whiskers", "black", 12));
// //=> { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

// console.log(catBuilder("scooby", "rainbow", ["poptarts"]));
// //=> { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = catBuilder;
} catch {}
