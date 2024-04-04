/*
Write a function pairsMaker(arr) that takes in a an array as an argument. The
function should return a 2D array where the subarrays represent unique pairs of
element from the input array.
*/

/*


  Understand the problem
    input: ["a", "b", "c", "d"]
    output: a matrix

  make a plan
  1. create a new array
  2. iterate through the array
    a. grab the first pair
    b. iterate through the array start at i + 1
      a. grab the second pair
      c. pair the pairs up in an array and push to newArr
  3. return new arr

  execute the plan
  refactor
*/


function pairsMaker(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++){
    let pair1 = arr[i];
    // console.log({pair1});

    for(let j = i + 1; j < arr.length; j++){
      let pair2 = arr[j];
      // console.log({pair2});
      result.push([pair1, pair2]);
      // console.log(result)
    }
  }
  return result;
}

console.log(pairsMaker(["a", "b", "c", "d"]));
//=> [ [ 'a', 'b' ],
//     [ 'a', 'c' ],
//     [ 'a', 'd' ],
//     [ 'b', 'c' ],
//     [ 'b', 'd' ],
//     [ 'c', 'd' ] ]

// console.log(pairsMaker(["Rosemary", "Alex", "Connor"]));
// //=> [ [ 'Rosemary', 'Alex' ],
// //   [ 'Rosemary', 'Connor' ],
// //   [ 'Alex', 'Connor' ] ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pairsMaker;
