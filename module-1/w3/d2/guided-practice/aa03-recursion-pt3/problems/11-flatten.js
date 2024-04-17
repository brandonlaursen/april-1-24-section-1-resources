/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {

  let newArr = [];

  for(let ele of arr) {

    if(Array.isArray(ele)) {
      newArr.push(...flatten(ele));
    } else {
      newArr.push(ele);
    }
  }

  return newArr;
}

console.log([...[[6]]]);



console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
