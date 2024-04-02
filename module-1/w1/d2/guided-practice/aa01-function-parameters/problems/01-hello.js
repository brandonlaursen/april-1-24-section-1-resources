/*
Write a function hello that takes in a string parameter.
It should print out "Hello, " followed by the value of the parameter.
HINT: this function doesn't need to return anything, it should just print using
console.log.
*/


function hello(str) {
  // console.log('Hello, ' + str)
  console.log(`Hello, ${str}`)
  return 'Hello, ' + str
}

// Note: If you console.log the return value of these function calls; you will get undefined. Remember a function that does not return anything evaluates to undefined.

console.log(hello("cat")); // "Hello, cat"
// hello("Helen"); // "Hello, Helen"
// hello("Sting"); // "Hello, Sting"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hello;
