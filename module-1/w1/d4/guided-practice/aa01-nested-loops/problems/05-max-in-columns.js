/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the maximum value in each column.
The return array's length should be equal to the number of columns, such that
each of its elements is the max value in a column.
*/

/*

  Understand the problem
    input: matrix
    output: an array

  make a plan
    1. create an array to store max in colum
    2. iterate through the matrix
      a. tracking variable for highest value in colum
      b. traverse the nested arr
        a. grab the matrix[i][j] -> matrix[j][i]
        b. check if the current value is greater than our column max
        c. if it is reassign it to be the value
        d. push value in to res array
    3. return the res array
  execute the plan
  refactor

*/
let maxColumn = function (matrix) {
  let result = [];
  let height = matrix[0].length;
  let width = matrix.length;

  for (let col = 0; col < width; col++) {
    let highest = 0;

    for (let row = 0; row < height; row++) {
      let number = matrix[row][col];

      if (number > highest) highest = number;
    }

    result.push(highest);
  }

  return result;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxColumn;
