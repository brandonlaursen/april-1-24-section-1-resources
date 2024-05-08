# `Week 6 Day 3`

- Binary Search Trees Demo
- Binary Search Tree Practice



## Terminology
### Graphs
  * Can have many children and parent nodes
### Trees
  * Can have at most two children nodes and a single parent node
### Linked List
  * Can have at most a single parent and child node

### A single node:
```
o
```
  * A graph
  * A tree
  * A linked list

### Multiple nodes:
```
o -> o -> o
 ```
  * A graph
  * A tree
  * A linked list

### Multiple nodes:
 ```
       o
      / \
     o   o
 ```
  * A graph
  * A tree
  * Not a linked list because more than one child node

### Multiple nodes:
```
        o   o
         \ /
          o
```
  * A graph
  *  Neither linked list or tree because it has more than one parent node

### Multiple nodes
```
        o
       / \
      o - o
```
  * A graph
  * Neither linked list or tree because it has cycles




### Basic Tree Terminology Review
  * `tree `- graph with no cycles
  * `binary tree` - tree where nodes have at most 2 nodes
  * `root` - the ultimate parent, the single node of a tree that can access every other node through edges; by definition the root will not have a parent
  * `internal node` - a node that has children
  * `leaf` - a node that does not have any children
  * `path` - a series of nodes that can be traveled through edges - for example A, B, E is a path through the above tree

### Lets focus on trees for now


## Tree
  * Trees are a common data structure upon which many other data structures are based.
  * You can think of them as being like a singly-linked list, except that instead of each node having a single next node, it can have two children nodes.
  * A tree is a graph that does not contain any cycles.
  * A cycle is defined as a path through edges that begins and ends at the same node.

## Root node
  * root of tree

## Binary Tree
* A binary tree is a tree where nodes have at most 2 children.
* very similar to a singly linked list
  * difference instead of having a single next node; we can have more than one child node but at most 2
* Tree is a type of graph
* Learning trees first as they are more simple to manipulate
* think binary meaning two - two children nodes
  * an empty graph of 0 nodes and 0 edges is a binary tree
  * a graph of 1 node and 0 edges is a binary tree
  * a linked list is a binary tree

## Binary Search Tree
* Binary search trees are a node-and-pointer-based data structure, similar to a doubly linked list
* same `O(log n)` search as a sorted array
* but with `O(log n)` insertion and deletion as well.

### Binary Tree vs Binary Search Tree
* binary trees are nodes than have more than one child node
* binary search tree is a sorted binary tree with search properties
* All binary search trees are binary trees, but not all binary trees are binary search trees
* binary search trees; every node contained in the left branch of any node will be less than the value of the node itself
* every node in the right branch will be greater than the node value

### Properties of Binary Search Tree
* node with left and right pointers
  * note they always point downward

### There are three possible implementations for handling values that are equal to a value in an existing node:
  * Discard the duplicate, similar to a set
  * Place equal values to the left
  * Place equal values to the right
```
  ? Is this a binary search tree?
    * yes
          4
        /   \
       2     6
      / \   / \
     1   3 5   7

   ? Is this a binary search tree?
    * no - normal binary tree
          5
        /   \
       2     6
      / \   / \
     1   3 4   7
```

### Binary Tree implementation using classes
```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode(4);
let b = new TreeNode(2);
let c = new TreeNode(6);
let d = new TreeNode(1);
let e = new TreeNode(3);
let f = new TreeNode(5);
let g = new TreeNode(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

class Tree {
  constructor(node) {
    this.root = node;
  }
}

const myTree = new Tree(a);

// console.log('myTree:', myTree);
/*
          4
        /   \
       2     6
      / \   / \
     1   3 5   7
*/
```


### Time complexity
* `O(log n)`
* Each comparison in a binary search tree moves down by one level
* so the worst-case number of calls is equal to the height of the tree.
* Since adding a level doubles the capacity, moving down a level reduces the number of values to search by half. Just like binary search, this divide-and-conquer approach results in a time complexity of O(log n).



## `Binary Tree Search Tree Phase 1 - 30m(SOLO)`
## `Binary Tree Search Tree Phase 1 Walkthrough`


## Search a binary tree
### Searching a binary tree recursively
```js
function searchBST(root, target) {

  if (root === null) return false;

  if (target === root.val) return true;

  if (target < root.val) return searchBST(root.left, target);

  if (target > root.val) return searchBST(root.right, target);
}


// console.log(searchBST(myTree.root, 5));// true
// console.log(searchBST(myTree.root, 27));// false
```

### Searching a binary tree iteratively
```js
function searchBST(root, target) {

  let currentNode = root;

  while (currentNode !== null) {

      if (target === currentNode.value) return true

      else if (target < currentNode.value) currentNode = currentNode.left

      else currentNode = currentNode.right;
  }

  return false;

}

// console.log(searchBST(myTree.root, 5));// true
// console.log(searchBST(myTree.root, 27));// false
```

## `Binary Tree Search Tree Phase 2 - 20m(Solo, group, or paired)`
## `Binary Tree Search Tree Phase 2 Walkthrough`

## Binary Tree Traversal
  * To perform most operations on a tree
    * need to either traverse the tree and visit or evaluate every node in the tree
    * search the tree, which is simply a traversal that you stop when you find what you are looking for

### Three ways to traverse binary trees
  * `pre-order`
  * `in-order`
  * `post-order`
  * each traversal all nodes are visited in the same order
    * Starting from the root it walks down the left subtrees (pushing onto the call stack)
    * Then back up once the base case is reached (popping off the call stack)
    * Then down the right subtrees and back up again.
  * Difference is where the console.log is placed
  * Pre, in and post-order traversals are all depth-first traversals specific to binary trees.

## Depth-first search
  * This method of traveling as deep as possible down the tree branches until reaching a dead-end, then backtracking to the next branch
  * Traversal algorithm, not a search algo despite the name
  * be careful not to mix up depth-first traversal and search
  * think of going the entire depth of the tree

##  Depth-first traversals

### Pre-order traversal

```
          4
        /   \
       2     6
      / \   / \
     1   3 5   7

* 4, 2, 1, 3, 6, 5, 7

* we see the logs in the order they are added to the stack
* printing comes before the left and right recursive calls.
* console.log before recursive call
```

### In-order traversal
```
          4
        /   \
       2     6
      / \   / \
     1   3 5   7

* 1, 2, 3, 4, 5, 6, 7

* Current node value gets logged after the left frame is called and is popped off
* frames with null are still called and popped off
```

### Post-order traversal
```
          4
        /   \
       2     6
      / \   / \
     1   3 5   7

* 1, 3, 2, 5, 7, 6, 4

  * we will see the logs in the order they exit the call stack
    * last in first out
    * first in last out
    * print the values after the recursive calls
  * console.log after the left and right recursive call
```

## `Binary Tree Search Tree Phase 3 - 30m(Solo, group, or paired)`
## `Binary Tree Search Tree Phase 3 Walkthrough`

### Breadth First Traversal
 * printing nodes at each level before moving to the next

### Depth First Traversal
 * we can imitate a depth first traversal
 * by using a breadthFirstTraversal algo but with a stack
 * not a depth first search its a breadth first search with stack simulating a depthFirstTraversal
* depthFirstTraversals are pre, in, and post order traversal



## `Binary Tree Search Tree Phase 4 - 30m(Solo, group, or paired)`
## `Binary Tree Search Tree Phase 4 Walkthrough`

## `Binary Search Tree Long Practice Till EOD(Paired)`
