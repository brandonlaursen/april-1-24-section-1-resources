

// Base 10 - Decimal
  // * 10 Options: 0 - 9
// Base 2  - Binary
  // * 2 Options: 0 & 1
// Base 16 - Hexadecimal
  // * 16 Options: 0 - 9, A,B,C,D,E,F



/*

  Converting from binary/hex to decimal
  * Also used to count in decimal
  * Formula
  * Find out what are we converting between
  * Assign each value to index
    * Left to right starting with 0
  * Raise base to the current index
  * Take result and multiply by value at index
  * Sum results

  - Converting from decimal to binary/hex
  * Formula
  * Find out what we are converting between
  * Take decimal value and divide by base(either 2 or 16)
  * Note the remainder
  * Keep doing so till decimal value cannot be divided
  * Starting from last value
  * concatenate values and append proper pre-fix: 0b or 0x

*/


/*

  Base 10
  - 4729
  * start from the right
  * smallest number first
  * what base are we working with?
    * base 10
  * Raise the base to index
  * index - 3: base - 10 = 10 ^3
  * Times that number by our value
  * Sum all the value

  Index       :   3      2     1     0
  base^index =  10^3     10^2  10^1   10^0
                1000     100    10     1
  Value          4        7    2       9
  (b^i) * v     4000     700    20     9
  4000 + 700 + 20 + 9 = 4729





  Binary
  0b 0101 01010
  1 or 0
  binary digit is a bit
  4 bits is a nibble
  8 bits is a byte

  1 byte is a 8 bits
  kilobyte -> 8000
  4000 nibbles
  1000 bytes


  1000 vs 0b1000



Convert base 2/binary to base 10/decimal

base raise to the index
times that number by digit
sum the results

0b 11001010

Index -  7   6   5   4     3    2    1   0
base^i  2^7 2^6  2^5  2^4  2^3  2^2  2^1  2^0
        128  64   32   16   8    4    2    0
value   1    1    0     0   1    0    1    0
(b^i)*v 128  64   0    0    8    0    2    0
sum the result  = 128 + 64 + 8 + 2 = 202

convert base10/decimal to base 2/binary

  - Converting from decimal to binary/hex
  * Formula
  * Find out what we are converting between
  * Take decimal value and divide by base(either 2 or 16)
  * Note the remainder
  * Keep doing so till decimal value cannot be divided
  * Starting from last value
  * concatenate values and append proper pre-fix: 0b or 0x

  to convert 202 -> 0b 11001010

  202 / 2 = 101 - r0
  101 / 2 = 50  - r1
  50 / 2  = 25  - r0
  25 / 2  = 12  - r1
  12 / 2  = 6   - r0
  6 / 2   = 3   - r0
  3 / 2   = 1   - r1
  1 / 2   = 1   - r1 <---- left most value

  Ob11001010 0b 11001010



  Converting from binary/hex to decimal
  * Also used to count in decimal
  * Formula
  * Find out what are we converting between
  * Assign each value to index
    * Left to right starting with 0
  * Raise base to the current index
  * Take result and multiply by value at index
  * Sum results

*/


const binary = 'Ob11001010';


function binaryToDecimal(binaryStr){

  binaryStr = binaryStr.substring(2);// 11001010

  binaryStr = binaryStr.split('').reverse().join('');// 01010011

  let sum = 0;
  for(let i =0; i < binaryStr.length; i++){

    // base ^ i * value
    let num = Math.pow(2, i) * parseInt(binaryStr[i]);

    sum += num;
  }

  return sum;
}



//  console.log(binaryToDecimal(binary));

console.log(parseInt(11001010, 2));// 202

let decimal = parseInt(11001010, 2);

// convert from decimal to binary
// decimalNum.toString(radix);
// console.log('0b' + decimal.toString(2));// 11001010



/*


  Base 16 - hexadecimal
  prepend 0x

  Digit 0 -9
  A = 10
  B - 11
  C - 12
  D - 13
  E - 14
  F - 15


  Convert hex - decimal

    Converting from binary/hex to decimal
  * Also used to count in decimal
  * Formula
  * Find out what are we converting between
  * Assign each value to index
    * Left to right starting with 0
  * Raise base to the current index
  * Take result and multiply by value at index
  * Sum results


    0x A1 = 161

    Index =  1     0
    b^i      16^1   16^0
    value    10     1
    b^i*v    160    1
    sum result = 160 + 1 = 161


  - Converting from decimal to binary/hex
  * Formula
  * Find out what we are converting between
  * Take decimal value and divide by base(either 2 or 16)
  * Note the remainder
  * Keep doing so till decimal value cannot be divided
  * Starting from last value
  * concatenate values and append proper pre-fix: 0b or 0x

    Convert decimal to hexadecimal

  convert 161 -> A1
  161 / 16 = 10 - R1
  10 / 16  = 0 - R10 <- left most digit

  OxA1


  function


  Digit 0 -9
  A = 10
  B - 11
  C - 12
  D - 13
  E - 14
  F - 15



*/

const hexChars = {
  A:10,
  B:11,
  C:12,
  D:13,
  E:14,
  F:15
}

let hex = 'Ox A1';
function hexToDecimal(hexStr) {

    hexStr = hexStr.substring(2);// A1
    hexStr = hexStr.split('').reverse().join('');// 1A

    let sum = 0;

    for(let i = 0; i < hexStr.length; i++){

      if(hexChars[hexStr[i]]){
        // 16^ 1 = 16 * 10 = 160
        let num = Math.pow(16, i) * hexChars[hexStr[i]];
        sum += num;
      } else {
        let num = Math.pow(16, i) * parseInt(hexStr[i]);// 1
        sum += num;
      }
    };

    // 1 + 160 = 161
    return sum;
};


console.log(hexToDecimal(hex))// 161


//parseInt
console.log('==',parseInt('A1', 16))// 161
let decimal2 = parseInt('0xA1', 16);//161

// console.log('0x' + decimal2.toString(16));



// fromCharCode

// console.log(String.fromCharCode(65));// A
// console.log(String.fromCharCode(66));// B
// console.log(String.fromCharCode(67));// C

// const str = 'ABC';

// console.log(str.charCodeAt(0));// 65
// console.log(str.charCodeAt(1));// 66
// console.log(str.charCodeAt(2));// 67
