/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.

See below for examples

***********************************************************************/

function keyAdderUniqueVal(object, key, value) {
	// Your code here

	// need the check the values of the obj
	// how to get them? -> Object.values(object)
	const values = Object.values(object)
	// console.log(values) // [ 'Willie', 'orange' ]

	// *manually collect the values

	// let values = [];

	// for (const key in object) {
	// 	// console.log(key)
	// 	let val = object[key] // let curr = arr[i]
	// 	// console.log(val)
	// 	values.push(val)
	// }

	// console.log(values)


	// I will check the result array for the value given
	if (!values.includes(value)){ // value = "orange"
		object[key] = value
	}
		// if not there, then I can set the key val pair

	// console.log(object)
	return object

}

let cat = { name: 'Willie', color: 'orange' };

keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}

// keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}

console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;
