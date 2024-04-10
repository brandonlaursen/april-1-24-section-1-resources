const array1 = ["a", "b", "c"];

// array1.forEach((element, i, arr) => console.log(element, i, arr));

let numbers = [10, 20, 30, 40, 50];

let sum = 0;

numbers.forEach((num) => (sum += num));

// console.log(sum);// 150

// .map
const array2 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array2.map(function (x) {
  //  x * 2;
  if (x % 2 !== 0) {
    return true;
  }
  return false;
});

// const [2,8,18,32 ] = array1.map( (x) => x * 2 );

// console.log(map1);
// Expected output: Array [2, 8, 18, 32]

function timesTwo(num) {
  return num * 2;
}
// console.log([2,4,6].map(timesTwo));// [ 4, 8, 12 ]

let strings = ["a", "an", "array", "of", "string"];

// let upperCased = strings.map((string) => string.toUpperCase())
//.join(' ')

// console.log(upperCased);
// [ 'A', 'AN', 'ARRAY', 'OF', 'STRING' ]

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter(function (word) {

  // console.log(word);
  let count = 0;
  [...word].forEach(letter => {
    if(letter === 'e')count++;
  })
  return count >= 2;
});

console.log(result);
// const ['exuberant', destruction, present] =
// words.filter( ('present') => 'present'.length > 6 );

// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
