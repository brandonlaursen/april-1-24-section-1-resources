// function stretch() {
//   // Your code here

//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log("done stretching");
//       res();
//     }, 1000);
//   });
// }

// // stretch();

// function runOnTreadmill() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log("done running on treadmill");
//       res();
//     }, 500);
//   });
// }

// function liftWeights() {
//   // Your code here
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log("done lifting weights");
//       res();
//     }, 2000);
//   });
// }

// function workout() {
//   // Your code here
//   stretch()
//     .then(runOnTreadmill)
//     .then(liftWeights)
//     .then(() => console.log('done working out'))

// }

function stretch() {
  // Your code here
  const msg = "done stretching";
  const request = new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 1000);
  });
  return request;
}

// console.log(stretch());// Promise { <pending> }
// stretch().then(() => console.log('done with stretch'))

function runOnTreadmill() {
  // Your code here
  const msg = "done running on treadmill";
  const request = new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 1000);
  });
  return request;
}

function liftWeights() {
  // Your code here
  const msg = "done lifting weights";
  const request = new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 1000);
  });
  return request;
}

function workout() {
  // Your code here
  // stretch()
  //   .then(runOnTreadmill())
  //   .then(runOnTreadmill)
  //   .then(() => runOnTreadmill())

  // .then(liftWeights)
  // .then(console.log("done working out"))
  // stretch()//1000
  //   .then(() => {
  //     runOnTreadmill();// 3000
  //   })
  //   .then(() => {
  //     liftWeights();// 2000
  //   })
  //   .then(() => {
  //     console.log("done working out");
  //   });

  Promise.all([stretch(), runOnTreadmill(), liftWeights()]).then(() => console.log('done working out'))

}

// function myfunc() {
//   return new Promise(console.log('wtf'))
// };

// console.log(myfunc);// [Function: myfunc]
// myfunc();
/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
