class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Given a tree, find the node with the highest value at each
// level of the tree and return it in an array, with the root at the
// 0th index, and the highest value in the deepest level of the tree
// in the last index.

//        5
//       / \
//      4   7
//     / \   \
//    1   3   2
//       /    / \
//      8    4   9
//              / \
//             2   4

// Expected Output -> [ 5, 7, 3, 9, 4 ]

// * What are we testing for? Run specs / Readme
// * What is currently here

function findMaxEachLevel(root) {
  // const stack = []; // ! nothing in stack to begin with

  const stack = [root]; // this still works with a stack because we are tracking the level property

  const maxes = []; // keeps track of all of our highest values

  root.level = 0;

  while (stack.length > 0) {
      const curr = stack.pop();

      // * console.log(curr) // what is curr?

      if (maxes[curr.level]) {
          // maxes[curr.level] = Math.min(curr.value, maxes[curr.level]);
          maxes[curr.level] = Math.max(curr.value, maxes[curr.level]); // ! find the max
      } else {
          maxes.push(curr.value);
      }

      // if (curr.left && curr.left >= curr.right) { // ! the check is too strict
      if (curr.left) {

          // console.log('in the if ->',curr)
          curr.left.level = curr.level + 1; // * level property of the node being tracked
          stack.unshift(curr.left); // * our stack is acting like a queue by adding to the front
      }
      // if (curr.right && curr.right >= curr.left) { // ! repeat the same for right
      if (curr.right) {
          curr.right.level = curr.level + 1;
          stack.unshift(curr.right);
      }
  }

  // console.log(maxes)
  return maxes;
}



// Uncomment the code below for local testing.

// // Build a tree for testing

//   const simpleTree = new TreeNode(4, null, null);
//   simpleTree.right = new TreeNode(1, null, null);
//   simpleTree.left = new TreeNode(3, null, null);
//   simpleTree.right.right = new TreeNode(2, null, null);

// // // Test the function with the debug tree
// console.log(findMaxEachLevel(simpleTree)); // -> [ 4, 3, 2 ]

/*******************************************************************************
 * Do not change the code after this line.
 */

try {
  exports.TreeNode = TreeNode;
  exports.findMaxEachLevel = findMaxEachLevel;
} catch (e) {
  module.exports = null;
}
