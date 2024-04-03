
function myFunc(){

  return [1,2,3,4];
};

// console.log(myFunc())

/*
  c a t s
  0 1 2 3

  1 2 3 4
  0 1 2 3
*/

let arr = [1, true, 'string', null]

let string = 'cats';
// console.log(string[0]);// c

// console.log(arr[0]);// 1

/*

  [[1,2,3], [4,5,6]]
      0        1
*/
let nestedArr = [[1,2,3], [4,5,6]]

// console.log(nestedArr.length);
// console.log(nestedArr[0]);// [ 1, 2, 3 ]

// console.log(nestedArr[0][1]);
// console.log(nestedArr[0][1]);

// console.log(nestedArr[1][1]);// 5

// console.log(nestedArr[1].length);// 3

function myFunc2(){
  return 'hello'
}

// console.log(myFunc2());// 'hello'

let returnVal = myFunc2();
// console.log(returnVal)

let animalArr = ['cat', 'dog', 'mouse', 'elephant'];


// console.log(animalArr.indexOf('dog'))

let indexOfDog = animalArr.indexOf('dog');
// console.log(indexOfDog);


let arr1 = [1,2,3];
let arr2 = [4,5,6];

// console.log(typeof (arr1 + arr2));// 1,2,34,5,6
// [1,2,3,4,5,6]]

// console.log(typeof arr1.concat(arr2));// [ 1, 2, 3, 4, 5, 6 ]

// if(typeof arr1 === 'array')

// console.log(Array.isArray(arr1)); //true

// console.log(Object.getPrototypeOf(arr1));


let sequence = ["T", "A", "C", "G"];
console.log(sequence);
sequence[0] = "C";
console.log(sequence); //['C','A','C','G'];

let name = "brandon";
console.log(name);
name[0] = "k";
console.log(name);// brandon

name = 'krandon';
console.log(name);// krandon

let name2 = name + ' laursen';
// console.log(name2);// krandon laursen

// let reveredName = '';
// for(let i = name.length - 1; i >= 0; i--){
//   reveredName += name[i];
// }

// console.log(reveredName); //nodnark

/*
n
no
nod
noda
nodar
nodark
*/
let result = []

// for(let i = 0; i < 100_000_000_000; i++){
//   result.push(i)
//   console.log(result);
// }

// command - mac | ctrl + windows
// ctrl + d - grabs same characters
// alt + click - allows you place multiple cursors
// ctrl + / - comment in and out



let pushArr = ["hip", "hip"];
console.log("original array", pushArr, "original length", pushArr.length);


let newLength = pushArr.push("array!");
console.log("mutated array", pushArr, "new length", newLength);

pushArr.push(12);
pushArr.push(true);
console.log(pushArr);// [ 'hip', 'hip', 'array!', 12, true ]
let newLength2 = pushArr.push('string');
console.log(newLength2);
console.log(pushArr);

pushArr.pop();
console.log(pushArr);// [ 'hip', 'hip', 'array!', 12, true ]
let returnOfPop = pushArr.pop();
console.log(returnOfPop);// True


let arr4 = [1,2,3,4];

// let spliced = arr4.splice(1,1)
// console.log(arr4, spliced);
let spliced = arr4.splice(1,1,0);
console.log(arr4, spliced);
arr4[1] = spliced[0]
console.log(arr4);

// let arr5 = [1,2,3,4];
// let sliced = arr5.slice(1,2)
// console.log(arr5, sliced)
