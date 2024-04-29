// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in

  // 1
  let total = 0;

  // n
  for(let i = 1; i <= n; i++){
    total += i;
  };

  return total;

};

// addNums(1000)
// addNums(1000)
// Time complexity: O(n)
// Space complexity: O(1)


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {

  // 1
  let total = 0;

  // n^2
  for(let i = 1; i <= n; i++){

    // O(n)
    total += addNums(i);
  };

  return total;

}
// Time complexity: O(n^2)
// Space complexity: O(1)



module.exports = [addNums, addManyNums];
