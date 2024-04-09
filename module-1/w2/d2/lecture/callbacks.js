

let name = 'brandon';
let number = 12;
let bool = true;


let addTwo = function(num) {
  return num + 2;
}


let myFunc = function (param1, param2){
  // console.log(param1);// [Function: addTwo]
  // console.log(param1(10));// 12

  // let result1 = param1(50);
  for(let i = 0; i < 10; i++) {
    console.log(param1(i))
  }
  // let result2 = param2(result1);

  // return result2;
}
// console.log(myFunc);// [Function: myFunc]

// console.log(myFunc(addTwo, addTwo));

// console.log([1,2,3].map((num) => num * 2));
// ? Call Stack
// * When a function is called, it is pushed on to the stack
// * When a function is returned, it is popped off the stack
// * Whatever function is currently at the top of the stack, is js focus of attention
// * stack - first in last out


// cb ->
function myFunc2(cb){

  let result = cb(10, 20);
  console.log(result);

  return result;
};

function timesTwo(num) {
  return num * 2;
}
// let num = 12;
// myFunc(num)


// myFunc2(timesTwo)

// myFunc2(function timesTwo(num) {
//   return num * 2;
// })

// myFunc2( (num) => {
//   return num * 2;
// })

myFunc2( (num1, num2) => num1 * num2)
