
/*

 Imports and exports/common js modules

 Common JS Modules
  * In Node.js, each JavaScript file defines a module.
  * Think of modules like an object - {}
  * can see the object if you console.log(module)
  * think about node_modules
    * They are downloaded using npm install which installs dependencies within in the package.json
    * Which then allow to import code from other files or Modules

  * Exporting

*/

// console.log(module)


const operations = ['+', '-', '*'];

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num2 - num1
}

function multiply(num1, num2) {
  return num1 * num2
}


// module.exports = {};
// module.exports = {
//   add: add,
//   subtract: subtract,
//   multiply: multiply
// }

// module.exports.add = add;
// module.exports.subtract = subtract;
// module.exports.operations = operations;

module.exports = {
  coolestAdd: add,
  subtract,
  operations
}

// exports.add = add;

// let obj = [add, subtract, multiply]
// module.exports = { add: differentAdd }
// module.exports = {
//   add: obj
// }
