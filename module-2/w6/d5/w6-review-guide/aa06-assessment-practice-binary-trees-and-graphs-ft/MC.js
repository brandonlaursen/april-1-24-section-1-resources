// 1. What order could a depth-first traversal visit the nodes in this tree?
/*
       0
     /   \
    1     2
   / \     \
  3   4     5
 /   / \   / \
6   7   8 9   10

*/

// * Depth-first iterative approach -> stack, so it pops off from the back.
// * can go either direction

// ! 0, 2, 5, 10, 9, 1, 4, 8, 7, 3, 6 -> result of left first
// ! 0, 1, 3, 6, 4, 7, 8, 2, 5, 9, 10 -> result of right first



// 2. If you refactor an algorithm with time complexity of O(n2) to be twice as fast, what would the new time complexity be?
// * O(n2)
//! Finishing the time in half the time, O(n2 / 2) BUT we drop the co-efficient

// 3. What order would an pre-order traversal print the nodes in this tree?
/*
       0
     /   \
    1     2
   / \     \
  3   4     5
 /   / \   / \
6   7   8 9   10

*/

// * 0, 1, 3, 6, 4, 7, 8, 2, 5, 9, 10


// * printing comes before the left and right recursive calls.
// * we see the logs in the order they are added to the stack


// 4. True or false: This is a valid binary search tree.
/*
       0
     /   \
    1     2
   / \     \
  3   4     5
 /   / \   / \
6   7   8 9   10

*/

// * False
// * Root node is 0, all values are greater. Lower values should go on the left, and higher values should go on the right


// 5. Which of these statements are true of binary search? Select all that apply.
    // Two Correct Answers:
// * It can be performed in-place  (Don't have to make new arrays )
// * It will take a maximum of log(n) comparisons to find a value (true! Full array, disregard other half, and then half that half.. halving behavior makes logarithmic)


// 6. Which sorting algorithm incrementally places values from an unsorted array in the correct position in a sorted array?
// * Insertion Sort. (NOT SELECTION because we aren't selecting a particular value, or selecting. We're just grabbing something)


// 7. What is the average space complexity of an in-place, recursive quicksort?
// * O(log n)
// * Recursive calls take up space in the call stack, but we're always halving
// * In-place algorithms are O(1) but recursion occupies space equal to the recursion depth. Quicksort's input size halves each time it recurses, for recursion depth and space complexity of O(log n).

// 8. Which of these algorithms are guaranteed to visit every reachable node in a connected graph? Select all that apply.
// * Breadth-first traversal
// * Depth-first traversal

// 9. Which of the following lines of code will sort an array in lexicographic (alphabetical) order?
// * arr.sort() (Alphabetical or increasing numbers)
// * Not custom sorts where we are returning a positive or negative numbers. Also specific to numbers.

// 10.
