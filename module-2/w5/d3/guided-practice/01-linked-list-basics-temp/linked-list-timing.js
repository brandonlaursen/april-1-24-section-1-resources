const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

let n = 100;

let ll = new LinkedList();

console.time('ll: add to head');
for(let i = 0; i < n; i++){
  ll.addToHead(i);
};
console.timeEnd('ll: add to head');

