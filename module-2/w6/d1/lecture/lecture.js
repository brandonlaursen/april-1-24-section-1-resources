



let arr = [0, 1, 0, 3];

// * Swap two values with a temporary variable
for(let i = 0; i < arr.length - 1; i++){

  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  // console.log(arr);
}
