/*



Indexing formula of indexOF
valueAddress = startAddress + index / sizeOfData

*/

// let arrObj = {
//   0: 'h',
//   1: 'e',
//   2: 'y'
// }

// console.log(arrObj[0]);

// let arr = new Array(8);
// console.log(arr);// [ <8 empty items> ]
// arr.push(1);

// console.log(arr);// [ <8 empty items>, 1 ]

// let arr = [<empty>,<empty>,<empty>,<empty>]
// arr.push(1);
// arr = [1,<empty>,<empty>,<empty>]
// arr.push(2,3,4)
// arr = [1,2,3,4]
// arr.push(5);
// 0(n)
// arr = [1,2,3,4,5, <empty>,<empty>,<empty>]
// arr.push(6,7,8) 0(1)
// arr = [1,2,3,4,5 6,7,8 , function, {}, ]
// 0(n)
// arr.push(9)
// arr = [1,2,3,4,5 6,7,8,9, <empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>]
// arr = [1,2,3,4,5 6,7,8,9, <empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>, ,<empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>,
/* <empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>,
<empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>,
<empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>,
<empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>,
<empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>,
<empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>,
<empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>,
<empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>,
<empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty>,] */


class DynamicArray {
  constructor(size) {

    this.data = new Array(size);
    this.capacity = size;
    this.length = 0;
  }

  push(val) {
    // this.data.push(val);
    this.data[this.length] = val;
    this.length++;

    // if(this.length >= this.capacity) {
    //   this.capacity = this.capacity * 2;
    // }

  }

  resize(){
    // if(this.length > this.capacity) {
    //   this.capacity = this.capacity * 2;
    // }
  }
};

const arr1 = new DynamicArray(2);

arr1.push(true);
arr1.push(true);

// console.log(arr1.data);
// console.log(arr1.length);
console.log(arr1);
