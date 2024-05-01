class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    // make new node
    const newNode = new LinkedListNode(val); // { val: 3, next: { val: 2, next: { val: 1, next: null } } };

    // ll { head: { val: 3, next: { val: 2, next: { val: 1, next: null } } }, length: 3 };
    // point the new nodes next at old head
    newNode.next = this.head;

    // point head at newNode
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // Your code here

    // create a newNode
    const newNode = new LinkedListNode(val);
    this.length++;

    // check if there is a head
    if (!this.head) {
      // if there is not; point the head at the newNode
      this.head = newNode;
      return;
    }

    // if there is
    // find the tail
    let current = this.head;

    while(current.next) {
      current = current.next;
    }
    // once found
    // set the last node next to be the newNode
    current.next = newNode;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

linkedList = new LinkedList();

linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);

module.exports = LinkedList;
