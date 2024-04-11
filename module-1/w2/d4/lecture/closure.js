


/*
  myFunc {
    num: 2
    param1: 10

    myFunc2 {
      param2: 20,
      num: 2
      param1: 10
    }
  }

*/
// function myFunc(param1) {
//   let num = 2;

//   function myFunc2(param2) {
//     console.log(num, param1)
//   }

// }


function grocerylist(list) {

  function addItem() {
    list.push("and ice cream");
  }

  // * invoke addItem function
  // * note the changes are reflected in the list
  addItem();

  return list;
}

// console.log(grocerylist(["milk", "eggs"])); // 'milk', 'eggs', 'and ice cream' ]


function elephantCollector() {
  let elephants = ["dumbo"];

  // return function inner(name) {
  //   elephants.push(name);
  //   return elephants;
  // }


  function inner(name) {
    elephants.push(name);
    return elephants;
  }

  console.log('===>',inner())
  return inner();


}


// console.log(elephantCollector);// [Function: elephantCollector]

// console.log(elephantCollector());//[ 'dumbo' ]

// console.log(elephantCollector());// [Function: inner]

// let elephantParade1 = elephantCollector();// [ 'dumbo', 'funkfreed' ]

// let elephantParade1 = function inner(name) {
//   elephants.push(name);
//   return elephants;
// };
// let elephantParade1 = function inner(name) {
//   elephants.push(name);
//   return elephants;
// };

// console.log(elephantParade1);// [Function: inner]
/*
  elephantCollector {
    elephants: ['dumbo', undefined, 'funkfreed']

    <ref1>: elephantParade1: {
      name: undefined
    }
    <ref2>: elephantParade2: {
      name: 'funkfreed'
    }
  }

*/
// console.log(elephantParade1());//  'dumbo', undefined ]
// console.log(elephantParade1('funkfreed'));// [ 'dumbo', 'funkfreed' ]

// console.log(elephantCollector()('jumanji'));// [ 'dumbo', 'jumanji' ]
// console.log([Function: inner]('jumanji'));

// elephantCollector
// elephants = ['dumbo']

//  elephants = ['dumbo', 'funkfreed' ]
// let elephantParade1 = function inner(name) {
  //   elephants.push(name);
  //   return elephants;
  // }

  // elephants = ['dumbo', 'bambi']
// let elephantParade2 = function inner(name) {
  //   elephants.push(name);
  //   return elephants;
  // }

// let elephantParade2 = elephantCollector();
// console.log(elephantParade2('bambi'));// [ 'dumbo', 'bambi' ]







function createCounter() {
  // both inner functions will have a starting count of 0
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
/*

  lexicalEnv {
    createCounter: {
      count: 0

      counter1: {
        count: 3
      }

      counter2: {
        count: 3
      }

    }
  }
*/
let counter1 = createCounter();
console.log('counter1');
console.log(counter1());// 1
console.log(counter1());// 2
console.log(counter1());// 3


let counter2 = createCounter();
console.log('counter2')
console.log(counter2());// 1
console.log(counter2());// 2
console.log(counter2());// 3
