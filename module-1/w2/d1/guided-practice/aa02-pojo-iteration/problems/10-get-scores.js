/*
Write a function called getScores(obj) that takes in an array of objects and
returns an object. The keys of the return object should be the value of the name
key in the nested objects in the input array. The values of the return object
should be the value of the score key in the nested objects in the input array.
*/

function getScores(arr) {
  // Your code here
  let res = {};
  for (let obj of arr) {
    // console.log('hi',obj);
    let name = obj.name
    // console.log(name)
    let score = obj.score
    // console.log(score)
    res[name] = score;
  }
  return res

}

console.log(getScores([
  { name: 'Tracy', score: 3 },
  { name: 'Daniel', score: 1 },
  { name: 'Nick', score: 2 },
  { name: 'Peggy', score: 0 },
])); // => { Tracy: 3, Daniel: 1, Nick: 2, Peggy: 0 }


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = getScores;
} catch {}
