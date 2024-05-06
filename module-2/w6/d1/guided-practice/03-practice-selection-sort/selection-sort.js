/*

! Think of selecting elements and placing them in a sorted or unsorted half


  Selection sort
    * Time complexity -
      * Worst case - O(n^2)
      * Best case - O(n^2)
        * Even if the array has already been sorted, our algorithm looks for the minimum in the rest of the array.
    * Space complexity -
      * O(n) - Out of place
      * O(1) - In place

  Selection Sort separates the array into sorted and unsorted sections. It repeatedly finds the smallest (or largest) element in the unsorted section and transfers it to the end of the sorted section. This process is repeated until all elements are moved to the sorted section, growing the sorted portion one element at a time.


  Main differences: Selection sort scans the unsorted part to find the minimum element, while insertion sort scans the sorted part to find the correct position to place the element. Selection sort requires fewer swaps than insertion sort, but more


*/


function selectionSort(arr) {

  // Copy the original array
  const copy = [...arr];

  // Create an array to store the sorted values
  const sorted = [];

  // While the array is not empty...
  while(copy.length) {
  // Do not move this console.log
  console.log(sorted.join(","));

  // Find the index of the minimum value in the unsorted half
  let minValue = Math.min(...copy);
  let minIndex = copy.indexOf(minValue);

  // Save and remove the value at the min index
  copy.splice(minIndex, 1);

  // Add the min value to the end of the sorted array
  sorted.push(minValue);
  }


  return sorted;
}

// console.log("==>", selectionSort([2, 4, 0, 8, 1])); // [ 0, 1, 2, 4, 8 ]

function selectionSortInPlace(arr) {


  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty:
  while(divider < arr.length) {

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = divider;

    // Save the min value
    for(let i = divider + 1; i < arr.length; i++) {
      if(arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    let minValue = arr[minIndex];

    // Shift every unsorted value to the left of the min value to the right by 1
    for(let i = minIndex; i >= divider; i--) {
      arr[i] = arr[i - 1];
    };

    // Put the min value at the divider
    arr[divider] = minValue;

    // Increment the divider and repeat
    divider++;

  }

  return arr;

}

console.log("==>", selectionSortInPlace([2, 4, 0, 8, 1])); // [ 0, 1, 2, 4, 8 ]

module.exports = [selectionSort, selectionSortInPlace];
