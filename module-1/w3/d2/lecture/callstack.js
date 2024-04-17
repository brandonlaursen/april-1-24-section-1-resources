function myFunc(num) {
  return num + 10;
}

// console.log(myFunc(20));

let expression = myFunc(10) + myFunc(20);

// console.log(expression);// 50

function foo() {
  console.log("a");
  debugger;
  bar();
  console.log("e");
}

function bar() {
  console.log("b");
  debugger;
  baz();
  console.log("d");
}

function baz() {
  debugger;
  console.log("c");
}

// foo(); //a,b,c,d,e

function test(num) {
  // return true;
  console.log(num);
  debugger;

  // recursive case
  if (num > 0) {

    // base case -  when do it stop
    // recursive case - where in code is the recursion happening
    // recursive step - how am i making it towards my base case
    let res = test(num - 1);
    return res;
  } else {
    // base case
    return "done";
  }
}

// console.log(test(4));



function myFunc(num = 10){
  return num + 2;
}

// console.log(myFunc(15));// 17
// console.log(myFunc());// 12



// start - a full arr
// stop  - a empty arr
// step  - arr.slice(1);
function recurseArr(arr) {

  if(!arr.length) return;

  let shifted = arr.shift();
  console.log(shifted);
  return recurseArr(arr);
};

// console.log(recurseArr([1,2,3]));






function reverse(string, i = string.length - 1){

  debugger;
  // if(i < 0) return '';
  if(!string.length) return '';

  let first = string[0];
  debugger;
  let res = reverse(string.slice(1)) + reverse(string.slice(1))

  let res2 = res + first;
  // console.log(res);
  debugger;
  return res2;
};


console.log(reverse('horse'));// esroh
/*
Bottom of stack
reverse('horse')  -> reverse(string.slice(1)) + h
reverse('orse')   -> reverse(string.slice(1)) + o
reverse('rse')    -> reverse(string.slice(1)) + r
reverse('se')     -> reverse(string.slice(1)) + s
reverse('e')      -> reverse(string.slice(1)) + e
reverse('')       -> return ''
Top of stack
reverse('e')      -> '' + e  => 'e'
reverse('se')     -> 'e' + s => 'es'
reverse('rse')    -> 'es' + r => 'esr'
reverse('orse')   -> 'esr' + o => 'esro'
reverse('horse')  -> 'esro' + h => 'esroh'
Bottom of stack
*/
