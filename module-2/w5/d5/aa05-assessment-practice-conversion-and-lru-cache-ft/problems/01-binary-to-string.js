function binaryToString(binaryBlob) {
  // Your code here

  let res = "";

  // Split the full string into 8-bit strings.
  for (let i = 0; i < binaryBlob.length; i+= 8) {
    // console.log(i)

    let byte = binaryBlob.slice(i, i+8)
    // console.log(byte)

    // Convert the strings to integers.
    let decimal = parseInt(byte, 2)
    // console.log(decimal)

    // Convert the integers to ASCII characters.
    let ascii = String.fromCharCode(decimal)
    // console.log(ascii)

    // Then join the characters into a return string.
    res += ascii
  }

  return res;
}

/* Comment in the code below to run local tests */
// console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;
