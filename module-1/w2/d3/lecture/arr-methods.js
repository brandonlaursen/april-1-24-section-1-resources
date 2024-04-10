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

let words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter(function (word) {

  // console.log(word);
  let count = 0;
  //spray -> ['s','p','r','a','y']
  // [...word]
  word.split('').forEach(letter => {
    if(letter === 'e')count++;
  })
  return count >= 2;
});

// console.log(result);
// const ['exuberant', destruction, present] =
// words.filter( ('present') => 'present'.length > 6 );

// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


// const array3 = [5, 12, 8, 130, 44];


// const found = array3.reverse().find((element) => element > 10);
// // const 12 = [5, 12, 8, 130, 44].find((12) => 12 > 10);

// // console.log(found);
// // Expected output: 12


// words = ["spray", "elite", "exuberant", "destruction", "present"];


// // let foundWord = words.find((word) => word.startsWith('d'));
// // console.log(foundWord);



const array4 = [1, 2, 3, 4];
const initialValue = 0;

const sumWithInitial = array4.reduce(
  (accumulator, currentValue) =>  {

    console.log('acc:', accumulator, 'val: ', currentValue);
    accumulator.push(currentValue);
    return accumulator;

  },
  []
);

// console.log(sumWithInitial);

let string = 'kayak'


let result1= [...string].reduce((obj, letter) => {
  // console.log(obj, letter);

  /*
  'k a y a k'
  { k:2, a:2, y:1,  }

  */
  if(obj[letter]) {
    obj[letter] += 1;
  } else {
    obj[letter] = 1;
  };

  return obj;

}, {})
console.log(result1);

let obj = {a:1}
console.log('===>',obj.a)

console.log(`[1,2,3]` == `[1,2,3]`);
// reference1  -> [];
// reference2 -> [];
// reference1 == reference2
