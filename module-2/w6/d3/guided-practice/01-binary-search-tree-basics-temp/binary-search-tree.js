// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    const newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(val) {
    // Your code here

    let currentNode = this.root;

    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }

    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  // 4 2 6 1 3 5 7
  breadthFirstTraversal() {
    // initialize a queue with the root node
    const queue = [this.root];

    // while the queue is not empty
    while (queue.length > 0) {
      // print and remove first node in queue
      let currentNode = queue.shift();

      console.log(currentNode.val);
      // push the left node on the back of the queue
      // if the node has a left node
      if (currentNode.left) queue.push(currentNode.left);
      // if the node has a right node
      if (currentNode.right) queue.push(currentNode.right);
      // push the right node on the back of the queue
    }
  }

  // Depth First Traversal - Iterative
  // 4 6 7 5 2 3 1
  depthFirstTraversal() {
    // Your code here
    // initialize a stack with the root node
    // while the stack is not empty
    // print and remove first node in stack
    // if the node has a left node
    // push the left node on the back of the stack
    // if the node has a right node
    // push the right node on the back of the stack

    const stack = [this.root];

    // while the stack is not empty
    while (stack.length > 0) {
      // print and remove first node in stack
      let currentNode = stack.pop();

      console.log(currentNode.val);
      // push the left node on the back of the stack
      // if the node has a left node
      if (currentNode.left) stack.push(currentNode.left);
      if (currentNode.right) stack.push(currentNode.right);

      // if the node has a right node

      // push the right node on the back of the queue
    }
  }
}

bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);
console.log(bst.depthFirstTraversal());
console.log(bst.preOrderTraversal());

module.exports = { BinarySearchTree, TreeNode };
