/*

* Adjacent Sum

Write a function adjacentSum that takes in an array of numbers and returns a new
array containing the sums of adjacent numbers in the original array. See the
examples.

input: Array
output: Array

1. Define the func
2. make a new array variable that we will return later
3. Iterate through the given array with a for loop to access the values
    - Make 2 variables:
        - currNum = the current num that we are looking at
        - nextNum = this will act like the pointer. Allows us to get tio the NEXT ele
4. Define the logic to get to our expected output:
    - We know that once we reach the end of the array, there will be nothing next to it, and we've done the thing!
        if NextNum === undefined, return the result array
    - How do we handle everything before, like the actual addition?
        - call our result array and push whatever the current ele and the next ele up to the result array
*/

function adjacentSum(array){
    // console.log(array)
    let result = [];

    for (let i = 0; i < array.length; i++){
        // console.log(array[i])
        let currNum = array[i]
        let nextNum = array[i + 1]

        // console.log(currNum, nextNum)
        if (nextNum === undefined) {
            return result
        } else {
            result.push(currNum + nextNum);
        }
    }

    console.log(result)

}

// console.log(adjacentSum([3, 7, 2, 11])); // [10, 9, 13], because [ 3+7, 7+2, 2+11 ]
// console.log(adjacentSum([2, 5, 1, 9, 2, 4])); // [7, 6, 10, 11, 6], because [2+5, 5+1, 1+9, 9+2, 2+4]
/******************************************************************************************************************/


/*

* Triple Sequence

Write a function tripleSequence that takes in two numbers, start and length. The
function should return an array representing a sequence that begins with start
and is length elements long. In the sequence, every element should be 3 times
the previous element. Assume that the length is at least 1.

input: nums presenting start and length
output: array

1. make a result variable that we will be returning at the end

    let nums = [4];

2. utilize iteration to execute the action 'length' times
     - initialize at 0
     - condition to iterate will be length times
     length - 1 x

3. Logic to handle the multiplication
    - while inside the loop, we'll call res
    - we can grab the curr ele in res at i
    - multiply it by 3 then push it to res

4. return res / profit

*/

function tripleSequence (start, length) {
    let nums = [start];

    for (let i = 0; i < length - 1; i++) {
        // console.log('hi',i)
        nums.push(nums[i] * 3);
        console.log(nums)
    }
    return nums
}

console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]
