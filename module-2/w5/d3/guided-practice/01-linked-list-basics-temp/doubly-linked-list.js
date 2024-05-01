class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val);

    if(this.length >= 1) {

      // point old head prev at new node
      this.head.prev = newNode;
      // point new node next at old head
      newNode.next = this.head;
      // pointing head at the new node
      this.head = newNode;

    } else {
      // if ll is empty
      this.head = newNode;
      this.tail = newNode;

    };
    // this.head = newNode;

    this.length++;

  }

  addToTail(val) {
    // Your code here

    const newNode = new DoublyLinkedListNode(val);

      if(this.length >= 1) {

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      } else {

        // ll is empty
        this.head = newNode;
        this.tail = newNode;
      };
      this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
