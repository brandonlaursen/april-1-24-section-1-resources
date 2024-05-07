// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr;
  // If so, it's already sorted: return

  // Divide the array in half
  const midPoint = Math.floor(arr.length / 2);

  const left = arr.slice(0, midPoint);
  const right = arr.slice(midPoint, arr.length);
  // console.log(left, right);

  // (n log n)
  // Recursively sort the left half
  const leftSorted = mergeSort(left);
  // Recursively sort the right half
  const rightSorted = mergeSort(right);

  // Merge the halves together and return
  return merge(leftSorted, rightSorted);
}

// [1,2,3,4]
// o(n)
// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  const returnArr = [];

  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;

  // (n )
  // []  [2]
  // While there are still values in each array...
  // if arrA is empty or the value in arrA is larger
  // push the value from the arrB and increment
  while (indexA < arrA.length || indexB < arrB.length) {

    if (indexA === arrA.length || arrA[indexA] > arrB[indexB]) {
      returnArr.push(arrB[indexB]);
      indexB++;
    } else {
      returnArr.push(arrA[indexA]);
      indexA++;
    }
  }

  return returnArr;
  // Compare the first values of each array
  // Add the smaller value to the return array
  // Move the pointer to the next value in that array

  // Return the return array
};

// console.log(merge([1,7], [3,4]));// [1,3,4,7]
// console.log(merge([1], [7]));// [1,7]
// console.log(merge([3], [4]));// [3,4]

console.log(mergeSort([1, 7, 3, 4, 2, 0, 8, 9]));



/*
         [0,1,2,3,4,7,8,9]
      [1,3,7,4]    [0,2,8,9]
  [1, 7]   [3,4]   [0,2]    [8,9]
 [1] [7]  [3] [4] [2] [0]  [8] [9]
  [1, 7]  [3, 4,] [2, 0]  [8, 9]
    [1, 7, 3, 4,] [2, 0, 8, 9]
     [1, 7, 3, 4, 2, 0, 8, 9]
*/

module.exports = [merge, mergeSort];
