/*
Define a function range(min, max) that takes in two number parameters. The
function should return an array containing an inclusive range of all numbers
from a minimum number to a maximum number. The first parameter should be the
minimum number for the range, and the second parameter should be the maximum
number for the range.  If the min number is greater than the max number then return
an empty array.
*/


/*


  Understand the problem
    input: min - 3, max - 10
    output: [ 3, 4, 5, 6, 7, 8, 9, 10 ]

  Make a plan
  1. Define a function range(min, max)
  2. check if min number greater than max return an empty array
  3. create a new array
  4. iterate starting at min up to max
    a. each we time we iterate we; push the value into the newArr
  5. return newArr


  Execute the plan
  Refactor
*/

// let range = function(min, max) {
//   if(min > max) return [];

//   let arr = [];
//   for(let i = min; i <= max; i++){
//     arr.push(i)
//   };

//   return arr;
// }



function range(min, max) {
  
    if (min > max) {
        return res;
    }

    for (let i = min; i <= max; i++) {
        res.push(i);
    }
    return res;
}

console.log(range(3, 10));    // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(10, 3));    // []

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = range;
