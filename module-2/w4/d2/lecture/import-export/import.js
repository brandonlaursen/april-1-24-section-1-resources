// const { add, subtract, operations } = require('./export')


// const calculator = require('./export')
const { coolestAdd, subtract: coolerSubtract, operations } = require('./export')
// const half = require('./folder-module')

function add(num){
  return num + 2
}

console.log(add(32))
console.log((coolestAdd(22, 10)))
// console.log(calculator);
// console.log(half)
// console.log(half(20))
// console.log(calculator.add(10, 5))
