function linearSearch (arr, target) {

  // Can you solve this in one line?
  return arr.indexOf(target);

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let lo = 0;
  let hi = arr.length - 1;

  // While high and low indices do not overlap...
  while(lo <= hi) {

    // Find the midpoint between high and low indices
    let mid = Math.floor((lo + hi) / 2);

    // Compare the target value to the midpoint value
      // If the target equals the midpoint...
    if(arr[mid] === target) { // Return the midpoint index
      return mid;

      // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    } else if(target > arr[mid]) {
      lo = mid + 1;

      // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
    } else {
      hi = mid - 1
    }

  }

  // Return -1 if the loop exits with overlapping pointers
  return -1;

};

console.log(binarySearch([2,4,6,8], 10));  // -1
console.log(binarySearch([2,4,6,8], 6));  // 2

module.exports = [linearSearch, binarySearch]
