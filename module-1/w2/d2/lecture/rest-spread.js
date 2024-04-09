


// words = ["lets", "make", "a", "sentence"]
function sentenceMaker(...words) {


  let sentence = '';
  for(let word of words) {
    sentence += ' ' + word;
  };

  return sentence
}

// * Are functions can now be more dynamic in accepting varying different arguments
// console.log(sentenceMaker("lets", "make", "a", "sentence")); //
// console.log(sentenceMaker("hello", "world")); //
// console.log(sentenceMaker("varying", "amount", "arguments")); //


let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arr3 = [0, arr1, arr2];
// console.log(arr3); //

// let arr4 = [10, ...arr1, 30, ...arr2, 40]
// console.log(arr4)// [ 1, 2, 3, 3, 4, 5 ]
// //[1, 2, 3, 3, 4, 5]


let obj1 = { name: "brandon" };
let obj2 = { pet: "cat", favColor: "red" };
let obj3 = { obj1, obj2, city: "brooksville" };
// console.log(obj3); // end up with nested object

let obj4 = {...obj1, ...obj2, city: "brooksville"};
console.log(obj4)
// {name: "brandon", pet: "cat", favColor: "red" , city: "brooksville"};

let example = {...arr1};
// console.log(example);// { '0': 1, '1': 2, '2': 3 }

// let example2 = [...obj1];
// console.log(example2);

let string = 'string';
let example3 = [...string];
// console.log(example3)


