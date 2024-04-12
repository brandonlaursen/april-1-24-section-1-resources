/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will take
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

input: string
output: array

1. Helper func
	- takes in a string
	- count the chars in the string
	- object counter to keep track of chars

2. Main func
	- declare res = []
	- how does helper fit here?
		- his job, is to just count and record chars for us.
	- will take the result obj from helper and find the vals that are greater than or equal to the minCount that was provided.
		- { a: 1, p: 2, l: 1, e: 1 }
	- take the corresponding key and push it to res
	- return to res.


***********************************************************************/

function countCharacters(string) {
  // Your code here
  let counterObj = {};

  for (const char of string) {
    // console.log(char)
    if (counterObj[char] === undefined) {
      counterObj[char] = 1; // m: 1
    } else {
      counterObj[char] += 1;
      // { m: 1, a: 2}
    }
  }
  // console.log(counterObj)
  return counterObj;
}

// console.log(countCharacters("banana")) // { m: 1, a: 2, c: 1, i: 1}

/*

2. Main func
	- declare res = []
	- how does helper fit here?
		- his job, is to just count and record chars for us.
	- will take the result obj from helper and find the vals that are greater than or equal to the minCount that was provided.
		- { a: 1, p: 2, l: 1, e: 1 }
	- take the corresponding key and push it to res
	- return to res.
*/

function duplicateCharMinCount(string, minCount) {
  // Your code here
  const res = [];

  const counter = countCharacters(string);
  // console.log(counter)

  // iterate through the obj
  for (const key in counter) {
    // console.log(key)
    // check the value or the 'count'. if it is greater than or equal to minCount add key to the res array
    let value = counter[key];
    // console.log(`key: ${key} : ${value}`)
    if (value >= minCount) {
      res.push(key);
    }
  }

  //   console.log(res);
  return res;
}

duplicateCharMinCount("apple", 2); // ["p"]
duplicateCharMinCount("banana", 2); // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3); // ["a", "t", " "]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
