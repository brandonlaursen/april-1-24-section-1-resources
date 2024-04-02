/*Define a function threeOrSeven that takes in a number parameter and returns
3 if the number is divisible by 3, 7 if the number is divisible by 7, and
21 if the number is divisible by both 3 and 7. Otherwise the function should
return the original number.
*/

function threeOrSeven(num) {
  // if(num === 0) return num;

  // if(num % 3 === 0 && num % 7 !== 0) {
  //   return 3;
  // } else  if(num % 7 === 0 && num % 3 !== 0) {
  //   return 7
  // } else if(num % 21 === 3 || num % 21 === 7) {
  //   return 21;
  // } else {
  //   return num;
  // };

  if (num === 0) {
    return num;
  } else if (num % 21 === 0) {
    return 21;
  } else if (num % 3 === 0) {
    return 3;
  } else if (num % 7 === 0) {
    return 7;
  } else {
    return num;
  };

  // let password = 12345;
  let password = '234fqawdf342qw3r4es';

  let hashedPassword = 12345

  if(hashedPassword === 12345){
    console.log('give access')
  } else {
    console.log('deny access')
  }

}

console.log("==>", 3 % 21);
console.log(threeOrSeven(3)); // => 3
console.log(threeOrSeven(15)); // => 3
console.log(threeOrSeven(7)); // => 7
console.log(threeOrSeven(14)); // => 7
console.log(threeOrSeven(21)); // => 21
console.log(threeOrSeven(-42)); // => 21
console.log(threeOrSeven(100)); // => 100
console.log(threeOrSeven(0)); // => 0
console.log(threeOrSeven(-20)); // => -20

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = threeOrSeven;
