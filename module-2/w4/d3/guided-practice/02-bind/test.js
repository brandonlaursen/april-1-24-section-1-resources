// Your code here

const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');

setTimeout(() => john.sayName(), 2000);

// context is setTimeout object
// not bound!

let sayNameBound = john.sayName.bind(john)

setTimeout(sayNameBound, 2000);
//
