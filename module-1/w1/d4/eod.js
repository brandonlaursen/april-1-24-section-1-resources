* Uncompress

Write a function uncompress(str) that takes in a "compressed" string as an arg.
A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form.
The function should return the uncompressed version of the string. See the examples.

Hint: you can use the built-in Number function should convert a numeric string into the number type. For example. Number("4") // => 4

input: string
output: string

1. create an empty string variable to return later called res
    let res = "";

2. iterate through the string

3. isolate each char

    two types:
        - letter
        - num

        4. "uncompress" another loop, per the num we grabbed earlier
            - concat to res (res += char)

5. return res

*/


function uncompress(string){

    let res = "";

    for (let i = 0; i < string.length; i+=2) {
        let char = string[i];

        let num = Number(string[i + 1]);

        // let num = +string[i + 1];
        console.log(char, num);

        // let num = string[i + 1];
        // console.log(num)

        for (let j = 0; j < num; j++){
            // console.log(char)
            res += char
        }
    }
    return res;
}

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'
