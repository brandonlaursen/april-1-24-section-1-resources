/*
Write a function `breakDownObj(obj)` that takes in an object as a parameter
and returns an array containing:  all the keys from the object **and** all the
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!
*/

// Your code here

// console.log(breakDownObj(
//   { name: 'Rupert', age: 5, speak: 'Meow' }
// )); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]



function breakDownObj(obj) {
  // let keys = Object.keys(obj);// [ 'name', 'age', 'speak' ]
  // let values = Object.values(obj);// [ 'Rupert', 5, 'Meow' ]
  // // // console.log(keys, values);
  // let result = [...keys, ...values];

  return [...Object.keys(obj), ...Object.values(obj)];

}

console.log(breakDownObj(
  { name: 'Rupert', age: 5, speak: 'Meow' }
)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

// console.log(breakDownObj(
//   { location: 'NY', borough: 'Brooklyn' }
// )); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = breakDownObj;
} catch {}
