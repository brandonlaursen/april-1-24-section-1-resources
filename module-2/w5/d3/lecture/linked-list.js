let node3 = {
  next: null,
  value: "3",
};

let node2 = {
  next: node3,
  value: "2",
};


let node1 = {
  next: node2,
  value: "1",
};


// console.log(node1);// { next: { next: { next: null, value: '3' }, value: '2' }, value: '1' }
// node1 => node2 => node3 => null


class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // * Default to empty
    this.head = null;
  }

  // T - O(1)
  // * Compared to adding to the front of an array which is O(n)
  // * no shifting is required
  // * big reason wed use a linked list is for its 0(1) add to front time complexity
  // ! Student will build this out themselves in the practice
  // ! but talk about it
  addToHead(value) {

    // * Create a new node with the given value
    const newNode = new LinkedListNode(value, null);

    // * Set the node's `next` pointer to the list's current head pointer
    newNode.next = this.head;

    // * Set the list head to point to the new link
    this.head = newNode;

    // * one line version
    // this.head = new LinkedListNode(value, this.head);
  };

  // ? Time complexity?
  // * O(n) - we visit n nodes in ll traversal
  print() {
    // * grab the current head
    let current = this.head;

    // * long as there is a node iterate
    while (current.next) {

      // * could also see the current node
      // * process.stdout.write used to keep values on same line
      process.stdout.write(`${current.value} -> `);
      // * assign current node to be the next node
      current = current.next;
    }

    console.log("NULL");
  }

}

node3 = new LinkedListNode(37, null);
node2 = new LinkedListNode(99, node3);
node1 = new LinkedListNode(12, node2);

ll = new LinkedList();
// * used before creating addToHead method
// ll.head = node1;

// * adding to ll in reverse order
ll.addToHead(3);
ll.addToHead(2);
ll.addToHead(1);
// console.log(ll);// LinkedList { head: LinkedListNode { value: 4, next: null } }

ll.print(); //1 -> 2 -> 3 -> NULL
