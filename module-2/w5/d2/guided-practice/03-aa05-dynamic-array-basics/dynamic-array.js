











class DynamicArray {

  constructor(defaultSize=4) {

    // [99, <3 empty items>]
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;

  }

  read(index) {


    if(index >= 0 && index < this.length) return this.data[index]

    return undefined;
  }

  resize(){
    this.capacity = this.capacity * 2;
  }

  unshift(val) {

    //  0  1  2
    // [2, 1] undefined
    // [2, 1, 1]
    // [2, 2, 1]
    // [3, 2, 1]

    // if(this.capacity <= this.length) resize();


    // for(let i = this.length; i > 0; i--) {

    //   this.data[i] = this.data[i - 1];
    //   console.log(this.data);
    // }

    // this.data[0] = val;
    // this.length++;
    // console.log(this.data);
    // return this.length;

    for(let i = 0; i < this.length; i++){
      console.log(this.data[i]);
    }
  }

}

const dynamicArr = new DynamicArray(4);
dynamicArr.unshift(1);
dynamicArr.unshift(2);
dynamicArr.unshift(3);


// console.log(dynamicArr.read(1));

module.exports = DynamicArray;
