


const firstError = new Error("i am an error");
const secondError = Error('i, too am an error');

// console.log(firstError);
// console.log(secondError);


function giveMeNumber(num){

  if(typeof num !== 'number'){
    throw new Error('Thats NaN');
  } else {
    return 'Nice numba!'
  }
}


// console.log(giveMeNumber(12));
// console.log(giveMeNumber('string'));

// try-catch error handling
try {
  //code to attempt to run
  // console.log(giveMeNumber(12));
  // console.log(giveMeNumber('string'));
} catch(error) {
  //code to execute if the try block fails
  // console.error(error.name + ':' + error.message);
}

// console.log('do we make it here?')


function wrongReference(arg) {
  console.log(args);
}


// try {
//   wrongReference(21)
// } catch(error){
//   if(error instanceof ReferenceError) {
//     console.error('Looks like you got a reference error')
//   } else {
//     console.log(error.message);
//   }
// }


function reverseString(string) {
  return string.split('').reverse().join('');
}

try {
  // console.log(reverseString('string'));
  console.log(reverseString(12));
} catch(e) {
  console.log('==>',e)
  console.log('message', e.message);
  console.log('name', e.name);
  // console.error('Cant reverse a number')
} finally {
  console.log('this will always run')
}

function findSum(nums) {
  let sum = 0;
  try {
    for(let i = 0; i < nums.length; i++){
      sum += array[i];
    }
  } catch(e) {
    console.log(e)
  }

  return sum;
}

console.log(findSum('sdfasd'))

let sum = 0;
  try {
    for(let i = 0; i < nums.length; i++){
      sum += array[i];
    }
  } catch(e) {
    console.log(e)
  }

  return sum;
