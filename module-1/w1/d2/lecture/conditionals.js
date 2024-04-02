// return a random 0 and 1
// let randomNumber = Math.round(Math.random() * 100);

let randomNumber = Math.random();

// console.log(randomNumber);

// mutually exclusive condition
if (randomNumber > 0.5) {
  console.log("greater than .5");
} else {
  console.log("less than .5");
}

let name = "brandon";

// multiple conditions
if (name.length > 10) {
  console.log("name length is greater than 10");
} else if (name.length > 5) {
  console.log("name length is greater than 5");
} else if (name.length > 4) {
  console.log('name length is greater than 4');
} else {
  console.log("dont meet the other two conditions");
}

// if (name.length > 6) {
//   console.log("name length is greater than 6");
// }
// if (name.length > 5) {
//   console.log("name length is greater than 5");
// }
// if (name.length > 4) {
//   console.log("name length is greater than 4");
// }


// console.log("==>", name.length > 10);


function myfunc(){

  for(let i = 0; i < 12; i++){
    console.log(i);
    if(i === 5) {
      return;
    }
  }

}

// myfunc()



if(true) {
  console.log('you wil reach here')
}
