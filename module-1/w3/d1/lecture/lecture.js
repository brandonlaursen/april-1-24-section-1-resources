




function foo(word) { // define function foo that accepts param word
  debugger; // trigger debugger, jumps to next function call
  // console.log(word); // console.log the value stored in word param
  bar("barber"); // invoke bar function with string "barber"
}

function bar(word) { // define function bar that accepts param word
  debugger; // trigger debugger
  // console.log(word); // console.log the value stored in word param
  baz("bazaar");  // invoke baz function with string "bazaar"
}


// ! leave out debugger to show that step into will
// step into the function and go line by line
// step over will step over the function
// if there is a debugger, then it will enter the function regardless of step into/step over

function baz(word) { // define function baz that accepts param word
  // console.log(word); // console.log the value stored in word param
  // debugger; // trigger debugger
}

// foo("food");



let names = ['brandon', 'charles', 'Anabel', 'trevor'];
// for(let i = 0; i < names.length; i++){
//   console.log(names[i]);
//   debugger;
// }


function test() {
  let name = "brandon";
  debugger;

  if (false) {
    name = "false";
    debugger;
  }
  if (true) {
    name = "krandon";
    debugger;
  }

  if (1) {
    let name = "1";
    debugger;
  }

  debugger;
}

// test();

function myFunc(num) {
  debugger;
  if(num === 0) return;
  console.log(num)

  return myFunc(num - 1);
}


// myFunc(5)
myFunc(-5)
