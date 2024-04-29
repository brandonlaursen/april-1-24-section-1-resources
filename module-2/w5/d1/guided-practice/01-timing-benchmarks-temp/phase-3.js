const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here

  let res = [];

  for (let i = 1; i <= 100; i++) {
    const start = Date.now();
    res.push(addNums(i * increment));
    const end = Date.now();

    console.log(`${end - start}`);
  }

  return res;
}

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code

  let res = [];


  for (let i = 1; i <= 100; i++) {
    const start = Date.now();
    res.push(addManyNums(i * increment));
    const end = Date.now();

    console.log(`${end - start}`);
  }

  return res;
}

n = 1000000;
// console.log(`addNums(${n}): `);
// addNums10Timing(1000000);

console.log("\n***********\n");

n = 100;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
