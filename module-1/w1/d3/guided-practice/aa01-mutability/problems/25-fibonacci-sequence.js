/*
Write a function fibonacciSequence that accepts a number as an argument. The
function should return an array representing the fibonacci sequence up to the
given length. The first and second numbers of the sequence are 1 and 1. To
generate subsequent numbers of the sequence, we take the sum of the previous two
numbers of the sequence.
*/

/*

  Understand the problem
    input: 4 - how many numbers should be in the array
    output:  [ 1, 1, 2, 3 ]
    * the first two nums will always 1

  Make a plan
  1.Write a function fibonacciSequence
  2.create a new array with two 1's - [1,1]
  3.we can iterate up to the parameter, start the index 2
    a. index into the newArr and grab the first value by doing indexing i - 1
    b. index into the newArr and grab the second value by doing indexing i - 2
    c. add those two value together, then push them array
  4. return newArr

  Execute the plan
  Refactor

*/

// function fibonacciSequence(num) {

//   if(num === 0) return [];
//   let sequence = [1, 1];

//   for (let i = 2; i < num; i++) {
//     let first = sequence[i - 1];
//     let second = sequence[i - 2];
//     // console.log(first, second);
//     sequence.push(first + second);
//     // console.log(first, second, sequence);
//   };

//   return sequence;
// }

function fibonacciSequence(num) {
  if(num === 0) return [];
  let newArray = [1, 1];

  for (let i = 2; i < num; i++) {
      let first = newArray[i - 1];
      let second = newArray[i - 2];
      //console.log(first, second);
      newArray.push(first + second);
  };
  return newArray;
}


console.log(fibonacciSequence(4)); // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
// console.log(fibonacciSequence(2));  // [ 1, 1 ]
// console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(0));  // [ ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fibonacciSequence;
