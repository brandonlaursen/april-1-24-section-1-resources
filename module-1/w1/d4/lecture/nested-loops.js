



matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

// console.log(matrix);

// console.log(matrix[0]);// [ 'a', 'b', 'c' ]
// console.log(matrix[1]);// [ 'd', 'e', 'f' ]
// console.log(matrix[2]);// [ 'g', 'h', 'i' ]

// console.log(matrix[0][0]);// a
// console.log(matrix[0][1]);// b
// console.log(matrix[1][0]);// d
// let ele = matrix[2][1];
// console.log(ele);// h

matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
]

// let arr = [];
let string = '';
for(let i = 0; i < matrix.length; i++){
  let nestedArr = matrix[i];
  // console.log(nestedArr[0], nestedArr[1], nestedArr[2])
  // console.log('entering outer loop')
  // console.log('nestedArr:',nestedArr, 'i:', i)

  for(let j = 0; j < nestedArr.length; j++) {
    // console.log('entering inner loop')
    // console.log('letter:',nestedArr[j], 'j:', j);
    // console.log(matrix[i][j]);
    // console.log(nestedArr[j]);
    let letter = nestedArr[j]
    // console.log(letter);
    // arr.push(letter)
    string += letter;
  }

}
// console.log(string);

matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
]

let arr = ["a", "b", "c", "d", "e", "f"];

for(let i = 0; i < arr.length; i++){
  let ele = arr[i];
  // console.log('ele:',ele);

  for(let j = i + 1; j < arr.length; j++) {
    let ele2 = arr[j];
    // console.log('ele2:',ele2);
  }

}


let sum = 0;
for(let i = 0; i < 5; i++){
  console.log('i:',i);

  for(let j = 0; j < 10; j++){
    console.log('j: ',j);
    sum += 1;
  }
}

console.log(sum);
