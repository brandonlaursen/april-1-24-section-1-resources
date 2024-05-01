const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

let n = 10000000;

// let ll = new LinkedList();

console.time('ll: add to head');
for(let i = 0; i < n; i++){
  ll.addToHead(i);
};
console.timeEnd('ll: add to head');

ll = new LinkedList();
console.time('ll: add to tail');
for(let i = 0; i < n; i++){
  ll.addToTail(i);
};
console.timeEnd('ll: add to tail');



ll = new DoublyLinkedList();

console.time('Doubly ll: add to head');
for(let i = 0; i < n; i++){
  ll.addToHead(i);
};
console.timeEnd('Doubly ll: add to head');

ll = new DoublyLinkedList();
console.time('Doubly ll: add to tail');
for(let i = 0; i < n; i++){
  ll.addToTail(i);
};
console.timeEnd('Doubly ll: add to tail');


// let arr = [];
// console.time('push');
// for(let i = 0; i < n; i++){
//   arr.push(i);
// };
// console.timeEnd('push');

// arr = []
// console.time('unshift');
// for(let i = 0; i < n; i++){
//   arr.unshift(i);
// };
// console.timeEnd('unshift');
