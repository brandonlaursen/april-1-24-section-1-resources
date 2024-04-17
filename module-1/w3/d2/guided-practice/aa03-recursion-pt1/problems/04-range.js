/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

// base case: end <= start || start >= end
// recursive case: start + 1  || end - 1

function range(start, end, arr = []) {

  if (start >= end) return arr;
  // if(end <= start) return [];

  arr.push(start)
  return range(start + 1, end, arr) + range(start, end);
  // return [...range(start, --end), end];
  // let recurse = range(start, --end);
  // recurse.push(end);
  // return recurse;
  // return [start].concat(range(start + 1, end));
}

/*
i++
i += 1
i = i + 1

range(1, 1)  => []
range(1, 2)  => [1]
range(1, 3)  => [1, 2]

range(1, 4)  => [1, 2, 3]
range(1, 5)  => [1, 2, 3, 4]
*/

console.log(range(1, 5)); // [1, 2, 3, 4])
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
