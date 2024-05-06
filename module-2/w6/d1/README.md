# `Week 6 Day 1`

- Assessment
- Sorting Discussion
- Bubble Sort Practice
- Insertion Sort Practice
- Selection Sort Practice


## `Why do we sort?`
  * makes data easier to manipulate
  * we can search sorted data much easier
    * inserting, deleting, searching
    * ex: binary search requires a sorted data structures

### Today we are learning naive sorts - O(n^2)
    * bubbleSort
    * insertionSort
    * selectionSort

### Niche use cases
  * May only come up in coding interviews
  * there are faster sorts
    * Quick sort + Merge sort - we will learn tomorrow
  * Useful when
    * array is already in ascending order
    * data is already somewhat sorted
    * working with small data sets

### Tips for learning sorting algos
  * Draw out the data flow
  * Walk through code line by line
  * Use visualizers to see how data moves
    * https://www.sortvisualizer.com/
    * https://visualgo.net/en


### Get comfortable with
    * Swapping
    * Shifting

### Swapping
```JS
let arr = [0, 1, 2, 3];

// * Swap two values with a temporary variable
let tmp = arr[1];
arr[1] = arr[2];
arr[2] = tmp;

// console.log("ES5", arr); // [ 0, 2, 1, 3 ]

arr = [0, 1, 2, 3];

// * Swap two values with destructured array assignment
// * ES6

[arr[1], arr[2]] = [arr[2], arr[1]];

// console.log("ES6", arr); // [ 0, 2, 1, 3 ]
```
### Shifting
```JS
// * shift back to front
// * avoid overwriting values
const arr1 = [0, 1, 2, 3];
const arr2 = [0, 1, 2, 3];

// If you want to shift the array to the right by 1...

// ! Shifting from front to back will overwrite all values
for (let i = 1; i < arr1.length; i++) {
  // [0, 1, 2, 3]
  // [0, 0, 2, 3]
  // [0, 0, 0, 3]
  // [0, 0, 0, 0]
  arr1[i] = arr1[i - 1];
}

// console.log("BAD SHIFT", arr1); // [ 0, 0, 0, 0, 0, 0 ]

// * Instead, start from the back and shift backwards
for (let i = arr2.length - 1; i > 0; i--) {
  // [0, 1, 2, 3]
  // [0, 1, 2, 2]
  // [0, 1, 1, 2]
  // [0, 0, 1, 2]
  arr2[i] = arr2[i - 1];
}
```

## Bubble Sort

Bubble Sort repeatedly traverses the array, comparing adjacent elements and swapping them if they are in the wrong order, effectively "bubbling" the largest unsorted element to its correct position at the end of each traversal. This process repeats, each time decrementing the range of comparison, until there is nothing left to sort.

  * Time complexity -
    * Worst case - O(n^2)
    * Best case - O(n^2)
      * Even if the array is sorted, the algorithm checks each adjacent pair and hence the best-case time complexity will be the same as the worst-case.
  * Space complexity -
    * O(1) - In place

  ### BubbleSort Pseudocode
  ```js
    // Iterate through the array

    // If the current value is greater than its neighbor to the right
    // Swap those values

    // Do not move this console.log
    console.log(arr.join(","));

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
  ```


## `Practice: Bubble Sort 30m(SOLO)`

## `Bubble Sort Walkthrough`


## `Insertion sort`

  Insertion Sort sorts an array by sequentially inserting each element into its proper position within the initially empty sorted portion. It compares each element with those in the sorted section, shifting elements one position right to make space, thereby gradually extending the sorted array until completion.

  * Time complexity -
    * Worst case - O(n^2)
    * Best case - O(n) <- possible if already sorted depends on implementation
  * Space complexity -
    * O(n) - Out of place
    * O(1) - In place

    * similar to sorting playing cards
    * great to work with linked list
    * real world example - file search, data compression, path finding

### Insertion sort Pseudocode
```js
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
```


### Make sure to make a copy for out of place
    * how can we make a copy?
    * how can we can add null to the end of an array? push null
    * iterate backwards and shift things to the right


## `Practice: Insertion Sort 30m(SOLO)`

## `Insertion Sort Walkthrough`


## Selection sort

  Selection Sort separates the array into sorted and unsorted sections. It repeatedly finds the smallest (or largest) element in the unsorted section and transfers it to the end of the sorted section. This process is repeated until all elements are moved to the sorted section, growing the sorted portion one element at a time.


  * Time complexity -
    * Worst case - O(n^2)
    * Best case - O(n^2)
      * Even if the array has already been sorted, our algorithm looks for the minimum in the rest of the array.
  * Space complexity -
    * O(n) - Out of place
    * O(1) - In place




### Selection Sort Pseudocode
```js
  // Copy the original array

  // Create an array to store the sorted values

  // While the array is not empty...

  // Do not move this console.log
  console.log(sorted.join(","));

  // Find the index of the minimum value in the unsorted half

  // Save and remove the value at the min index

  // Add the min value to the end of the sorted array

```
### Insertion vs Selection Sort
### Main differences:
Selection sort scans the unsorted part to find the minimum element, while insertion sort scans the sorted part to find the correct position to place the element. Selection sort requires fewer swaps than insertion sort, but more

## `Practice: Selection Sort 30m(SOLO)`

## `Selection Sort Walkthrough`
