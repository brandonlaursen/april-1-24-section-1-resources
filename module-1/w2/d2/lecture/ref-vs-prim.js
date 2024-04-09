





let age = 27;
// * Point the newAge variable at whatever the age variable is point at; at this point, its the number 27
let newAge = age;
// * Increment the age variable - reassign what age is pointing at
age += 1;
console.log("age: ", age, "newAge: ", newAge); // age: 28 newAge: 27
/*
  age -> 27
  newage -> age -> 27
  age = 27 + 1
  age -> 28
*/


let cat1 = {
  name: "pumpkin",
  age: 3,
};
// reference1 -> cat1 -> {}

let cat2 = cat1;
// reference2 -> reference1 -> {}

cat1.name = 'celebi';

console.log("cat1: ", cat1, "cat2: ", cat2);
// * changing one; changes both
// * both variables are pointing at the same reference
// * cat1 => <reference1>
// * cat2 => <reference1>
// * <reference1> holds they properties/methods

let arr = [1,2,3];
let arr2 = arr;
// reference -> arr1 -> [1,2,3];
// reference -> arr2 -> arr1 -> [1,2,3]
arr.push(4);
console.log(arr, arr2);// [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

// let copyArr = [...arr];
let copyArr = arr.slice()
//reference2 -> [ 1, 2, 3, 4 ]

arr.push(5);
console.log(arr, copyArr);
