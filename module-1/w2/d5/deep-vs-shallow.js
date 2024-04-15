


//  person => reference
/*
   person1 => reference1
                ^
          locationReference1

    person3 => reference3
                  ^
          locationReference1

*/
const person1 = {
  name: 'brandon',
  favoriteBands: ['neck deep', 'idles','blink128'],
  uniqueFav: [],
  location: {city:'tampa'}
}

let person2 = person1;
// person2 => reference1>
// person1.name = 'daniel';
// console.log(person1, person2);

// shallow copy
let person3 = {...person1};
// console.log(person3);

person3.name = 'daniel';
// console.log(person1, person3);

person1.location.city = 'orlando';
person3.favoriteBands.push('joyce manor')

let person4 = JSON.parse(JSON.stringify(person1));
// console.log(person1)
// console.log(person3);

// reference => [1,2,3]
let numbers = [1,2,3]

// referencePerson1 => person5
//                       ^
//                   reference
const person5 = {
  name: 'brandon',
  numbers: numbers,
  uniqueNumbers: [2],
}

// const person6 = {...person5, name:'daniel', uniqueNumbers:[3] }
// person6.name = 'robert';
// person6.numbers.push(4);
// // console.log(person6 === person5);
// // console.log(person6.numbers === person5.numbers)

// // const person7 = JSON.parse(JSON.stringify(person5));

// person5.numbers.push(8);
// delete person6.numbers;

// console.log(person5);
// console.log(person6);
// console.log(person5 === person7);
// console.log(person5.numbers === person7.numbers);

let obj = {
  test: 12,
  nestedObj: { num: 10000 }
}

const person7 = {
  name: 'brandon',
  numbers: numbers,
  uniqueNumbers: [2],
  obj: obj

}

const person8 = {
  ...person7, name:'daniel'
}

delete person7.obj.nestedObj
console.log(person7, person8)
/*

  <ref1 -> person7: [ name: 'brandon', reference: [1,2,3,4, 5], uniqueNumbers: [2], obj: { test: }  ]
  <ref -> person8:  [ name:'daniels', reference: [1,2,3,4, 5], uniqueNumbers: [2], obj: { test: }  ]

  DEEP COPY
  <ref -> person9:  [ name:'maica', reference2: [1,2,3,4,5, 6], uniqueNumbers2: [2,1], obj2: { test: }  ]


  shallow copy -> its a copy at the first level
               -> but at the deep level its not a copy its the same reference

   Deep copy    -> its a copy at all levels
                -> at the deep level its not a copy its a different reference
*/

let matrix = [1, [1,2,3], [4,5,6]]

let shallowCopy = [...matrix];
console.log(matrix === shallowCopy);// false
console.log('shallow level',shallowCopy[0] === matrix[0]);
console.log('deep level',shallowCopy[1] === matrix[1]);
