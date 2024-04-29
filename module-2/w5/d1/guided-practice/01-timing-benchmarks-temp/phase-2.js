const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let res = [];

  // n
  for(let i = 1; i <= 10; i++){

    res.push(addNums(i * increment));
  }

  return res;
}

// Time complexity: O(n)
// Space complexity: O(n)


// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in

  let res = [];

  //  n^2
  for(let i = 1; i <= 10; i++){

    res.push(addManyNums(i * increment));
  }

  return res;

};

// Time complexity: O(n^2)
// Space complexity: O(1)


// let arr = [[1], [2], [3]]
// function populate(n){
//   for(let i = 0; i < n; i++){
//     arr.push([i]);
//   }
//   console.log(i);
// }

// populate(100)
// populate(100000)
// populate(10)
// populate(10000)
// arr = [0,1,2,3,4]

module.exports = [addNums10, addManyNums10];
