// shallow vs deep copy?
const pet = {
    name: "pepper",
    alias: "pepita",
    owner: "maica",
    traits : [
        "female",
        "black fur",
        "nocturnal"
    ],
    diet: "omnivorous",
    toys: {
        wheel: true,
        hideaways: true,
        chews: true
    }
 }

 console.log('Original copy', pet) // pet <ref1>

 //make a copy

 let pet2 = pet;

 console.log("copy vs og", pet2 === pet) // true! - same ref in memory
 // <ref2> == <ref1>

 const fakePet = {
    name: "pepper",
    alias: "pepita",
    owner: "maica",
    traits : [
        "female",
        "black fur",
        "nocturnal"
    ],
    diet: "omnivorous",
    toys: {
        wheel: true,
        hideaways: true,
        chews: true
    }
 }

 console.log('fake vs og', fakePet === pet) // false
// shallow copy?

// shallow copy - is a new object/array that is created to reference the same elements as an
// existing obj/array
// however, with a shallow copy, if the obj/arr contains nested objs/arrs
// a shallow copy will keep a ref to old obj/arr

// ways to make shallow copies
//.slice()
//spread - [...arr] - easiest way

let shallowPet = {...pet}

// shallow pet -> <ref3>
// console.log(shallowPet)


console.log("shallow vs og", shallowPet === pet) // false

// comparing a nested arrays ref
console.log("dem traits", shallowPet.traits === pet.traits) // true
//<ref1:[ <refA>, <refB> ]> === <ref3:[ <refA>, <refB> ]>
//          ^        ^                    ^       ^
//        traits            ===         traits
//                  same nested reference
// how do we fix this?
// how to create an entirely new copy?
// we can create a deep copy
// what is a deep copy?
// a deep copy!

let deepCopyPet = JSON.parse(JSON.stringify(pet))

//check if deepCopyPet is a copy one level deep
console.log("deepCopyPet vs pet", deepCopyPet === pet)// false

//lets check two levels deep
console.log(deepCopyPet.traits === pet.traits) // false

/*
A shallow copy makes a copy of the reference to X (an array), into Y.
If we were to say something like this for example:

let x = [ [1], [2, 3] ];
let y = x.slice();

In this situation, Y, is a shallow copy of X. Here both X's and Y's VALUES point to the
same place in memory. But hold on you might say, "I just checked y === x is false", while
that is true, what if I told you that x[0] === y[0] is true? Both x[0] and y[0] evaluate to [1] AND
they also share the same memory address that gives us an array of just the number 1 inside.
So for the sake of testing that our addresses are different we will use nested arrays in our
examples to know if our deep duplication has succeeded. You might have already guessed that
since we used 'slice' in the example above that 'slice' creates a shallow copy, and you are
correct. For this problem we duplicate our original array so that our function returns a new
array with different memory addresses.

Write a function, deepDup(arr), that deeply duplicates a given array. Your duplicated array,
when compared to various indexes of the original array, should evaluate to false like below.

Examples:


Note:
if you compare a 1 dimensional array of numbers like below,
you will get 'true' because we are comparing numbers.
let x = [1, 2, 3];
let y = x.slice();
console.log(x[0] === y[0]) // true

*/
function deepDup (arr) {
    let dupArr = []; // nw reference in memory

    // iterate through arr
    for (let ele of arr) {
        if (Array.isArray(ele)) { // check if ele is an array
            dupArr.push(deepDup(ele)) // if it is send to our deep func to again iterate
        } else {
            dupArr.push(ele) // else push the ele in the new array
        }
    }
    return dupArr
}


let arr = [[1], [2, [3]]];
duped = deepDup(arr); // [[1], [2, [3]]]
arr[0] === duped[0] // false
arr[1] === duped[1] // false
arr[1][1] === duped[1][1] // false
console.log("deep dup", duped, arr[0] === duped[0]);

//=======================================

function sort (nums, sorted = []) {
    // base case: all numbers are in the sorted array
    if (!nums.length) return sorted

    //Find the smallest number in the nums array
    let minIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[minIndex]) {
            minIndex = i;
        }
    }

    // add the smallest number to the end of the sorted array
    sorted.push(nums[minIndex])

    //remove the smallest number from the nums array
    nums.splice(minIndex,1);

    //recursively call sort with the new aray
    return sort(nums,sorted)

}


console.log(sort([4, 1, 6, 3, 1, 7])); // [1, 1, 3, 4, 6, 7]
