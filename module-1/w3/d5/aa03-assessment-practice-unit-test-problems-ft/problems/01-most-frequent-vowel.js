/***********************************************************************
Write a recursive function called `mostFrequentVowel(words, counter)` which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.

If there are no vowels at all, return an empty string "".

Your function should also accept a `counter` parameter that will be an empty
object by default.

Each recursive step should count the vowels in the last string in the array
and add them to the `counter`. Return the vowel with the greatest count in
the `counter` object.

Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.

// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)

// Step 0: Call `mostFrequentVowel` on the `words` array
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
mostFrequentVowel(words, counter)

// Step 1: Count the vowels in 'lime'
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = { i: 1, e: 1 }
mostFrequentVowel(words, counter)

// Step 2: Count the vowels in 'coconut'
// words = ['apple', 'pear', 'melon', 'coconut']
// counter = { i: 1, e: 1, o: 2, u: 1 }
mostFrequentVowel(words, counter)

// Step 3: Count the vowels in 'melon'
// words = ['apple', 'pear', 'melon']
// counter = { i: 1, e: 2, o: 3, u: 1 }
mostFrequentVowel(words, counter)

// Step 4: Count the vowels in 'pear'
// words = ['apple', 'pear']
// counter = { i: 1, e: 3, o: 3, u: 1, a: 1 }
mostFrequentVowel(words, counter)

// Step 5: Count the vowels in 'apple'
// words = ['apple']
// counter = { i: 1, e: 4, o: 3, u: 1, a: 2 }
mostFrequentVowel(words, counter)

// Step 6: No words remaining, return 'e'
// words = []
// counter = { i: 1, e: 4, o: 3, u: 1, a: 3 }
mostFrequentVowel(words, counter)

// Example:

input: array of strings
output: string ||  "" if no vowels

1. base case: !words.length return the vowel
2. isolate the last ele in the array
3. check each char in the ele/string to see if it is a vowel
4. if it IS, add to our counter object { vowel: count }
5. once the array is empty, return the counter obj
6. check the key/vak pairs
7. return the key with the highest value || "" if no vowel.

***********************************************************************/

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const mostFrequentVowel = function (words, counter = {}) {
  // Your code here

  // base case
  if (!words.length) {
    // console.log(counter)

    let highestVowel = "";
    let highestCount = -Infinity;

    for (let vowel in counter) {
      // console.log(vowel)
      let count = counter[vowel]

      if (count > highestCount) {
        highestCount = count
        highestVowel = vowel
      }
    }
    // console.log(highestVowel)
    return highestVowel
  };


  let animal = words.pop(); // remove each last ele

  // console.log(animal)

  for (let char of animal) {
    // console.log(animal, char)

    if (VOWELS.includes(char)) { // check is char is a vowel
      // console.log(animal, char)
      if (counter[char] === undefined){ // if it is, populate the counter obj
        counter[char] = 1
      } else {
        counter[char]+= 1
      }
    }
  }

  // console.log(animal, counter)

  return mostFrequentVowel(words, counter) // recursive call

}

// mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse']); // 'o'
// mostFrequentVowel(['dog', 'cow', 'pig', 'chicken']); // 'i' or 'o'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentVowel;
} catch {
  module.exports = null;
}
