/*




  Insertion sort
  * Time complexity -
    * Worst case - O(n^2)
    * Best case - O(n) <- possible if already sorted depends on implementation
  * Space complexity -
    * O(n) - Out of place
    * O(1) - In place

  Insertion sort
    * similar to sorting playing cards
    * great to work with linked list
    * real world example - file search, data compression, path finding

  Make sure to make a copy
    * how can we make a copy?
    * how can we can add null to the end of an array? push null
    * iterate backwards and shift things to the right


  Insertion Sort sorts an array by sequentially inserting each element into its proper position within the initially empty sorted portion. It compares each element with those in the sorted section, shifting elements one position right to make space, thereby gradually extending the sorted array until completion.


*/


// Insertion Sort out-of-place
// Do not modify the original array
/*
Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */
function insertionSort(arr) {

  let copyArr = [...arr];

  const sorted = [];

  while(copyArr.length > 0) {
    console.log(sorted.join(','))
    let val = copyArr.pop();

    sorted.push(null);

    let i = sorted.length - 1
    while(i > 0 ){
      if(sorted[i - 1] < val) {
        break;
      } else {
        sorted[i] = sorted[i - 1];
        i--;
      }
    };

    sorted[i] = val;
  }

  return sorted;

};

// console.log("==>", insertionSort([2, 4, 0, 8, 1])); // [ 0, 1, 2, 4, 8 ]

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {

  let divider = 1;

  while(divider < arr.length) {
    let val = arr[divider];

    let i = divider;

    while(i > 0) {
      if(arr[i - 1] < val) {
        break;
      } else {
        arr[i] = arr[i - 1];
        i--;
      }
    }

    arr[i] = val;
    divider++;
  }

  return arr;

}


console.log("==>", insertionSortInPlace([2, 4, 0, 8, 1])); // [ 0, 1, 2, 4, 8 ]

module.exports = [insertionSort, insertionSortInPlace];
