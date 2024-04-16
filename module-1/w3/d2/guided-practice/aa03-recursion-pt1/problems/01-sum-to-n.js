/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

// base case: n <= 0
// recursive case
// recursive step n - 1

function sumToN(n) {

  // base case
  if(n <= 0) return null;


  // console.log(n);
  return n + sumToN(n - 1);

};
console.log(sumToN(5)); // returns 15
/*
Bottom of stack
sumToN(5) -> 5 + sumToN(5 - 1)
sumToN(4) -> 4 + sumToN(4 - 1)
sumToN(3) -> 3 + sumToN(3 - 1)
sumToN(2) -> 2 + sumToN(2 - 1)
sumToN(1) -> 1 + sumToN(1 - 1)
sumToN(0) -> return null === 0
Top of stack
sumToN(1) -> 1 + null => 1
sumToN(2) -> 2 + 1    => 3
sumToN(3) -> 3 + 3    => 6
sumToN(4) -> 4 + 6    => 10
sumToN(5) -> 5 + 10   => 15
Bottom of stack


*/


// console.log(null + 10);
// console.log(sumToN(5)); // returns 15
// console.log(sumToN(1)); // returns 1
// console.log(sumToN(9)); // returns 45
// console.log(sumToN(-8)); // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
