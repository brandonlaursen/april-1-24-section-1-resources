/*
Write a function pitPat(max) that accepts a number as an arg. The function
should return an array containing all positive numbers less than or equal to max
that are divisible by either 4 or 6, but not both.


Understand the problem
  input: 18
  output: [ 4, 6, 8, 16, 18 ]

make a plan
  1. Write a function pitPat(max)
  2. create a new arr
  3. loop up the max
    a. check if divisible by 4 and not 6
    b. check if divisible by 6 and not 4
    * if fulfil the condition; push into newArr
  4. return newArr
execute the plan
refactor
*/


// function pitPat() {}
let pitPat = function (max) {

  let newArr = [];
  for (let i = 0; i <= max; i++) {
    // console.log(i)
    if(i % 4 === 0 && i % 6 !== 0 || i % 6 === 0 && i % 4 !== 0 ) newArr.push(i);
  }

  return newArr;
}

let name = 'brandon';
console.log(name);// 'brandon'
console.log(pitPat);// [Function: pitPat]

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
// console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pitPat;
