// const pendingPromise = new Promise((resolve, reject) => {
//   console.log(resolve, reject);// [Function (anonymous)] [Function (anonymous)]
// });

// console.log(pendingPromise);// Promise { <pending> } <-- A promise Object

function function1() {
  // * returning promise object
  return (
    new Promise((resolve, rejected) => {
      setTimeout(() => {
        let number = "asdf";
        // let number = 10;

        // * If the promise is resolved the number is variable is passed as an argument to the resolve or rejected function
        if (!isNaN(number)) {
          // * resolve takes the value
          resolve(number);
        } else {
          // * rejected takes the reason for the rejection
          rejected(number);
        }
      }, 2000);

      // then .then takes in two arguments
      // * the first is a function to handle a resolved promise
      // * the second is a function to handle a rejected promise
      // * the value passed to the resolve function will be represented by the parameter in the callback function
    })
      .then((value) => {
        console.log("resolved", 10 + value);
        return value + 10;
      }) // resolved
      .then((param) => console.log(param))
  );
}

function1();

// (value) => console.log("resolved", 10 + value)

// function myFunc(value){
//   console.log("resolved", 10 + value)
// }
