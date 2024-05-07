

function quicksort(arr) {
  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr;
  // If so, it's already sorted: return

  // Pick the first value as the pivot
  let pivot = arr[0];
  let left = [];
  let right = [];

  // Orient the pivot so that...
  // every number smaller than the pivot is to the left
  // every number larger (or equal) than the pivot is to the right
  for (let i = 1; i < arr.length; i++) {

    let num = arr[i];

    if(num >= pivot) {
      right.push(num)
    } else {
      left.push(num);
    }
  }

  // Recursively sort the left
  let leftSort = quicksort(left);
  // Recursively sort the right
  let rightSort = quicksort(right);

  // Return the left, pivot and right in sorted order
  return [ ...leftSort, pivot, ...rightSort];
  // return [ 2, 3,4];
}

console.log(quicksort([1, 3, 2, 7, 4]));

// console.log(...[]);

module.exports = [quicksort];
