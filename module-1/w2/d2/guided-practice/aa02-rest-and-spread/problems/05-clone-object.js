

/*
Given `obj` below, use a combination of the spread and rest operator in a single
statement to create a clone `objClone` that removes the `green` key-value pair
and adds a `yellow` key with value `pentagon`.

Hint: As a side effect, you will end up creating a `green` variable with value
"hexagon".
*/

// let expression = {...obj, yellow: "pentagon"};

// let number = [1,2];

// let [one, two] = number;

// let { green, ...objClone  } = {...obj, yellow: "pentagon"};

const obj = {
  red: "circle",
  blue: "square",
  green: "hexagon"
}
// Your code here
let testing = { green, ...objClone } = { yellow: "pentagon", ...obj };
testing.green = "circle";
obj.green = "blue";
green; // 'hexagon'

console.log(testing, green);

/*

{ red: 'circle', blue: 'square', green: 'hexagon', yellow: 'pentagon' }


const { green: "hexagon", ...objClone  } = {
  red: "circle",
  blue: "square",
  yellow: "pentagon"};

objClone = {red: "circle",
  blue: "square",
  yellow: "pentagon" }

*/
// console.log(objClone);  // { red: "circle", blue: "square", yellow: "pentagon" }
// console.log(green);     // hexagon
// console.log(obj);

// let myFunc = function(){

// }

// let result = myFunc();
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = {
    obj,
    objClone,
    green,
  };
} catch {}
