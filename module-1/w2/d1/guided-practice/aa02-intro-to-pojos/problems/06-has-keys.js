/*
Write a function called hasKeys that takes in an object and an array of
strings. It should return true if all of the strings in the array are keys in
the object.
*/

function hasKeys(obj, arr) {
  // console.log(arr);
  for (let ele of arr) {
    // console.log(ele)

    // for in
    // if(!(ele in obj)) return false;

    // short circuit ||
    return (obj[ele] !== undefined) || 'string';

    // short circuit &&
    // return !(obj[ele] !== undefined && false)

  }



  // Object.keys
  for(let i = 0; i < array.length; i++){
    if(!Object.keys(obj).includes(array[i])){
      return false;
    }
  }


  return true;
}
// console.log(typeof null)

let survey = {
  name: "Check",
  question: "Satisfied?",
  choices: ["Yes", "No"],
};
console.log(hasKeys(survey, ["question", "choices"])); // true
// console.log(hasKeys(survey, ['numSubmitted', 'choices'])); // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = hasKeys;
} catch {}
