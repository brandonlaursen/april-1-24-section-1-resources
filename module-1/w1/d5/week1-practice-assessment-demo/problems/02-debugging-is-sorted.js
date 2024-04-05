/*
Your friend is working on a function called isSorted which checks if an
array of numbers is in order, sorted lowest to highest. The function should
return true if the array is in order, and false if it is not. Unfortunately, the
code is not working correctly. Help them fix it!
*/

// step 1 run the program see if any syntax/ref errors 

function isSorted(nums) {
  for (let i = 0; i < nums.length; i++) {

    // check the logic of the if to see if it was truly catching sorted numbers

    if (nums[i - 1] > nums[i]) {

      // logged the previous pointer
      // console.log(`nums[i - 1] ${nums[i - 1]}`)

      // log the current pointer
      // console.log(`nums[i] ${nums[i]}`)
      return false;
    }
  }
  return true;
}

console.log(isSorted([1]));                // true
console.log(isSorted([1, 2, 3, 4, 5]));    // true
console.log(isSorted([2, 2, 4, 4]));       // true
console.log(isSorted([1, 2, 4, 3, 5, 6])); // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isSorted;
