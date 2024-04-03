/*
Define a function addTwoToEnd that has three parameters. The first parameter
should be an array. The function should add the last two parameters to the end
of the array as elements. It should return the original array mutated.


  Understand the problem
  Input: array, string, string -> arr1, 'c', 'd'
  Output: array -> ['a', 'b', 'c', 'd']
  * add the last two parameters to the end of the array as elements
  ! How do i get from my input to my output?

  Make a plan
    1. define a function addTwoToEnd
    2. add the parameters to the end of an array - push
    3. return array
  Execute the plan
  Refactor
*/

let number = 2;
let string = "string";

const addTwo = (num) => num + 2;

console.log(addTwo(5));

let addTwoToEnd = (arr, ele1, ele2) => (arr.push(ele1, ele2), arr);

let arr1 = ["a", "b"];
let added1 = addTwoToEnd(arr1, "c", "d");
console.log(added1); // ['a', 'b', 'c', 'd']
console.log(arr1 === added1); // true

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = addTwoToEnd;
