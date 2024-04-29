function constant1(n) {
  return n * 2;
}

function constant2(n) {
  for (let i = 0; i < 1000000; i++) {
    console.log(n);
  }
}

function linear1(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// linear1(1);
// linear1(1000000);

function linear2(n) {
  if (n === 0) return;

  linear2(n - 1);
}

function quadratic(n) {
  // n
  for (let i = 0; i < n; i++) {
    // n
    for (let j = 0; j < n; j++) {
      console.log(j);

      // n
      for (let k = 0; k < n; k++) {}
    }
  }

  // n
  for (let i = 0; i < n; i++) {}
}


// quadratic(100000)//

function myfunc(n) {
  // n
  for (let i = 0; i < n; i++) {
    // 1
    for (let i = 0; i < 100; i++) {}
  }
}
// 0(n)

myfunc(10000);





function addTen(n){

  let sum = 0;
  for(let i = 0; i < n; i++){

    for(let j = 0; j < n; j++){
      sum += j;
    }
  };
  return sum;
}


function myFunc2(n){
  let res = [];

  for(let i = 0; i < n; i ++){

    const startTime = Date.now();
    res.push(addTen(i * 10));
    const endTime = Date.now();

    console.log(`${endTime - startTime}`)
  }
}

// const startTime = Date.now();
// myFunc2(10000);
// const endTime = Date.now();
// console.log(`${endTime - startTime}ms`)

console.log(Date.now())
console.log(Date.now())
