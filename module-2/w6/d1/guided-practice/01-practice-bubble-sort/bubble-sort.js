/*


  Bubble sort
  * Time complexity -
    * Worst case - O(n^2)
    * Best case - O(n^2)
      * Even if the array is sorted, the algorithm checks each adjacent pair and hence the best-case time complexity will be the same as the worst-case.
  * Space complexity -
    * O(1) - In place


  BubbleSort
  * Walk through the entire array, comparing each adjacent pair.
  * If they are out of order, swap their positions.
  * Keep doing this until the entire array is sorted.
  * Each pass will sort the array a bit more, with the larger values "bubbling up" to the top.


  Bubble Sort repeatedly traverses the array, comparing adjacent elements and swapping them if they are in the wrong order, effectively "bubbling" the largest unsorted element to its correct position at the end of each traversal. This process repeats, each time decrementing the range of comparison, until there is nothing left to sort.


*/
function bubbleSort(arr) {
  let hasSwapped = true;
  // Iterate through the array
  while (hasSwapped) {
    hasSwapped = false;

    for (let i = 0; i < arr.length; i++) {
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]) {
        // Swap those values
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        hasSwapped = true;

        // Do not move this console.log
        console.log(arr.join(","));
      }
    }

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
  };
  return arr;
};

// function bubbleSort(arr) {
//   for(let i = 0; i < arr.length - 1; i++){
//     for(let j = 0; j < arr.length - 1 - i; j++){
//       if(arr[j] > arr[j + 1]){
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//         console.log(arr.join(","));
//       }
//     }
//   }
//   return arr;
// }

// for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = 0; j < arr.length - 1; j++)
//         // Iterate through the array
//         if (arr[j] > arr[j + 1]) {
//           let temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//           console.log(arr.join(","));
//         }
//       }

console.log("==>", bubbleSort([2, 4, 0, 8, 1])); // [ 0, 1, 2, 4, 8 ]

module.exports = bubbleSort;
