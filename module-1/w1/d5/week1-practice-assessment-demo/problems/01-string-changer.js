/*
Build a function called stringChanger that takes in two arguments: a word
and an operation. Based on the operation, your function will return the word
modified in some way. The operations are:

  "capitalize": Capitalize the first letter in the word.
    - target the first char and use .toUpperCase()
    - target the rest of the word .slice()
    - return both together

  "uppercase": Capitalize every letter in the word.
    - grab the word and use toUpperCase() on it

  "double": Return the word twice in a row.
    - return the word + word

  "reverse": Return the string with the letters in reverse order.
    - turn string into array
    - use array.reverse()
    - return string (join(""))

  If the operation is invalid, return the word, unchanged.
    - return the word as is
*/

function stringChanger(word, operation) {
  // Your code here
  if (operation === "capitalize") {
    // let first = word[0].toUpperCase();
    // let second = word.slice(1)
    // console.log(first, second)
    // return first + second

    return word[0].toUpperCase() + word.slice(1);
  }

  if (operation === "uppercase") {
    return word.toUpperCase();
  }

  if (operation === "double") {
    return word + word;
  }

  if (operation === "reverse") {
    let res = word.split("").reverse().join("");
    return res;
  }

  return word
}

// console.log(stringChanger('foo', 'capitalize')); // 'Foo'
// console.log(stringChanger('foo', 'uppercase'));  // 'FOO'
// console.log(stringChanger('foo', 'double'));     // 'foofoo'
// console.log(stringChanger("foo", "reverse")); // 'oof'
// console.log(stringChanger("foo", "unknown")); // 'foo'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = stringChanger;
