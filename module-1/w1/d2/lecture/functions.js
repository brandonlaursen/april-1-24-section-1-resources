


// function myFunc() {
//   console.log('entering myfunc')
//   return "Hello World";//<-- what function evals too
//   console.log('will not reach here')
// }

// myFunc();//  <- what the function evaluates too
// // console.log(myFunc());


// math problem
// add two numbers

// console.log(10 + 12);
// let num1 = 13;
// let num2 = 25;
// let num3 = 50;
// let num4 = 60;
// console.log(num1 + num2);

// let num1 = 50
// let num2 = 60
function add(num1, num2) {
  // console.log(num1, num2);// 50, 60
  let sum = num1 + num2;
  // console.log('sum:',sum);
  return sum;
}

// console.log('return value of add', add(13, 25));
// console.log('return value of add', add(50, 60));

let result = add(25, 30);

// console.log(result);// 55


function multiply(num1, num2){
  return num1 * num2
}

// multiply(result, 10);

console.log(multiply(result, 10))
