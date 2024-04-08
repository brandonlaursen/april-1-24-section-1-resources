/*
Write a function called objectToArraySum(obj) that iterates through all
key-value pairs of the object and returns an array of nested array where each
nested array is formatted such that the first element is the key and the second
element is the sum of all the numbers in the array value.
*/

// Your code here
function objectToArraySum(obj){
  let res = [];
  for (let key in obj){
    // console.log(key)
    let array = obj[key] // this is the array value
    // console.log(val)
    let sum = 0;
    for (let num of array) {
      // console.log(num)
      sum += num
    }
    // console.log(sum)
    res.push([key,sum])
  }
  return res;

}

let populations = {
  neighborhood1: [10, 1, 3, 6],
  neighborhood5: [],
  neighborhood8: [5, 0, 3, 2]
}
console.log(objectToArraySum(populations));
//=> [['neighborhood1', 20], ['neighborhood5', 0], ['neighborhood8', 10]]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = objectToArraySum;
} catch {}
