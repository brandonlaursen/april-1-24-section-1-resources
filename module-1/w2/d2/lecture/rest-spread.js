// words = ["lets", "make", "a", "sentence"]
function sentenceMaker(...words) {
  let sentence = "";
  for (let word of words) {
    sentence += " " + word;
  }

  return sentence;
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

let obj4 = { ...obj1, ...obj2, city: "brooksville" };
// console.log(obj4)
// {name: "brandon", pet: "cat", favColor: "red" , city: "brooksville"};

let example = { ...arr1 };
// console.log(example);// { '0': 1, '1': 2, '2': 3 }

// let example2 = [...obj1];
// console.log(example2);

let string = "string";
let example3 = [...string];
// console.log(example3)

let array = [1, true, "hello world"];

// let num = array[0];
// let bool = array[1];
// let string2 = array[2];

let [num, bool, string2] = array;

// console.log(num, bool, string2);

let firstName = "brandon";
let lastName = "laursen";

[firstName, lastName] = [lastName, firstName];

// console.log(firstName, lastName);

// can swap index in array
let arr5 = [10, 20, 30];
// console.log(arr5); //[ 10, 20, 30 ]

// positionally provide the index you'd like to swap the contents of
[arr5[1], arr5[2]] = [arr5[2], arr5[1]];
// console.log(arr5); //[ 10, 30, 20 ]

let numbers = [1, 2, 3];

let [num1, num2, ...restOfNums] = numbers;

// console.log(num1, restOfNums);// 1 [ 2, 3 ]

let [n1, n2, ...rest] = [...numbers, 4, 5, 6];

// console.log(n1, n2, rest);// 1 2 [ 3, 4, 5, 6 ]

let user = {
  name: "John",
  address: {
    street: "123 Street Rd",
    city: "Orlando",
  },
  age: 30,
};

let {
  name,
  address: { street, city },
  ...restObj
} = user;
// let { street, city } = user.address

// console.log(street, city);// John 123 Street Rd Orlando

// console.log(Object.entries(user));
/*
[
  [ 'name', 'John' ],
  [ 'address', { street: '123 Street Rd', city: 'Orlando' } ],
  [ 'age', 30 ]
]
*/

for (let [key, value] of Object.entries(user)) {
  // console.log(key, value); //
}

function destructure({ name }) {
  // console.log(name); // brandon
  // console.log(obj);
  // let name = obj.name;
  // let { name } = obj;
  // console.log(name)
}

// destructure({ name: "brandon" });


let obj = { firstN: "Daniel", middleName: "Wei", lastName: "Ho" };

let { firstN, ...rest2 } = obj;

// console.log(firstN, rest2);
