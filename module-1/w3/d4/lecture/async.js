// function synchronous() {
//   console.log("two");
// }

// console.log("one");
// synchronous();
// console.log("three");

// one => two => three

// console.log("first");

// This does not block the execution of the call stack
// * Because async code is sent to the message queue
// setTimeout(() => {
//   console.log("second");
// }, 5000);

// setTimeout(() => {
//   console.log("third");
// }, 0);

// console.log("fourth");
// // first => third => second
// // * not what we expect
// console.log('fifth')
// console.log('fifth')
// console.log('fifth')
// console.log('fifth')
// console.log('fifth')

// console.log(global);

// global.setTimeout(() => {
//   console.log('hello')
// }, 4000)

// setTimeout(console.log, 2000, 'hey whats up')

function time(name) {
  console.log("time is up! " + name);
}

// setTimeout((name) => {
//   console.log('time is up! ' + name)
// }, 2000, 'brandon');

// example w args
// function sayHi(name1, name2) {
//   console.log(`hello ${name1} and ${name2}`);
// }

// let delay = 5000
// setTimeout(sayHi, delay, "brandon", "anthony");

// let timerObj = setTimeout(
//   (name) => {
//     console.log(
//       "hey " + name + " sign up for our email and get 10% percent off"
//     );
//   },
//   500,
//   "brandon"
// );

// let timerObj2 = setTimeout(() => {
//   // console.log("hey from timer 2");
//   clearTimeout(timerObj);

//   // setTimeout(console.log, 3000, 'from timeout 3');
// }, 1000);


// let button = <button>push me</button>

// button.addEventListener('click', () => {

// });

// console.log(timerObj);

// let isSubscribed = true;

// if(isSubscribed) {
//   clearTimeout(timerObj)
// }
// // clearTimeout(timerObj);



// fib
function somethingSlow(n) {
  if (n === 1 || n === 2) return 1;

  return somethingSlow(n - 1) + somethingSlow(n - 2);
}

function foo() {
  console.log("food");
}

function bar() {
  console.log("bark");
  baz();
}

function baz() {
  console.log("bazaar");
}

// setTimeout(foo, 1500);
// setTimeout(bar, 1000);
// // * tree recursion
// console.log(somethingSlow(44));
// Predict what would be printed?????
// what willl happen
// fib -> something big
/*
701408733
bark
bazaar
food
*/


function delayedPrinter(delaysArr) {

  if(!delaysArr.length) return;

  // const currentDelay = delaysArr.shift();
  const currentDelay = delaysArr[0];
  console.log(currentDelay);

  // delayedPrinter(delaysArr);

  setTimeout(delayedPrinter, currentDelay, delaysArr.slice(1));
  //cb, delay, argument

  return 'hey'
};



const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
// console.log(delayedPrinter(delaysArr));
// delayedPrinter(delaysArr)



function delayedPrinter1(delaysArr) {

  let totalDelay = 0;
  delaysArr.forEach((delay) => {
    totalDelay += delay;
    setTimeout(() => {
      console.log(`waiting for ${delay}`);
    }, totalDelay);

  })
}


// delayedPrinter1(delaysArr)





//

// setInterval(func, delay, arg1)

// setInterval(console.log, 2000, 'im hungry');


// setTimeout(console.log, 2000, 'im hungry');


function timeMaker(count) {

  let timer = setInterval(() => {
    count--;
    console.log(count);
    if(count === 0) {
      return clearInterval(timer);
    }
  }, 2000)
};

timeMaker(5);
