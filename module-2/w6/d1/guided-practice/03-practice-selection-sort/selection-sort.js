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

  // Create an array to store the sorted values

  // While the array is not empty...

    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save and remove the value at the min index

    // Add the min value to the end of the sorted array

}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat

}


module.exports = [selectionSort, selectionSortInPlace];
