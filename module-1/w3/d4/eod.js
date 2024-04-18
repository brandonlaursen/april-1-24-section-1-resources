/*
Write a RECURSIVE function, called `bottlesOfBeerOnTheWall` that accepts a
number (of beers on the wall) The function should count down from that number,
to 0 😞, printing the following out each time/round...

"4 bottles of beer on the wall...🍻"
"4 bottles of beer...🍻"
"Take one down and pass it around...🍺"
"3 bottles of beer on the wall...🍺"

The lines of song/text should print 1 line every 1 second to simulate the song
being sung...

When we reach 0, the following should print out:

"No more bottles of beer on the wall... 🥲"

Example:

bottlesOfBeerOnTheWall(2) // should print the following to the console:
2 bottles of beer on the wall...🍻
2 bottles of beer...🍻

Take one down and pass it around...🍺
1 bottles of beer on the wall...🍺
1 bottles of beer on the wall...🍻
1 bottles of beer...🍻

Take one down and pass it around...🍺
0 bottles of beer on the wall...🍺
No more bottles of beer on the wall... 🥲

Note the new line after each "round"...

- What I know:
1. Use Recursion. Input is going to be a num
2. Fot each num, print out the song lines at a 1 second delay
3. After each round there should be a new line
4. Repeat that pattern until we are out of beer.
5. when there is no more beer, print specific line -> No more bottles of beer on the wall... 🥲

1. Identify when to stop recursing: num === 0;
    a. console.log("No more bottles of beer on the wall... 🥲")
    b. return
2. The Recursive Step: decrement num || num -= 1
    a. console.log("num bottles of beers on the wall")
    b. 1 second delay between each line
    c. empty line after each round
3. Recursive call
    a. setTimeout(bottlesOfBeerOnTheWall, delay, num)
*/



const readline = require('node:readline');

// console.log(readline)

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('How many bottles of beer? ', bottlesOfBeerOnTheWall);

function bottlesOfBeerOnTheWall(num) {

    if (typeof num === 'string') num = +num

    // base case
    if (num === 0) {
        // console.log(typeof num)
        console.log(`No more bottles of beer on the wall... 🥲`)
        rl.close();
        return;
    }

    if (num === 1) {
    // opening line
    console.log(`${num} bottle of beer on the wall...🍻`)

    // follow up
    setTimeout(console.log, 1000, `${num} bottle of beer...🍻`)

    } else {
        // opening line
        console.log(`${num} bottles of beer on the wall...🍻`)

        // follow up
        setTimeout(console.log, 1000, `${num} bottles of beer...🍻`)
    }


    // create empty line
    setTimeout(console.log, 1000, ``)

    // start a new round
    setTimeout(console.log, 3000, `Take one down and pass it around...🍺`)

    if (num === 2) {
    // decrement num
    setTimeout(console.log, 4000, `${num -= 1} bottle of beer on the wall...🍺`)
    } else {
        // decrement num
        setTimeout(console.log, 4000, `${num -= 1} bottles of beer on the wall...🍺`)
    }


    //recursive call
    setTimeout(bottlesOfBeerOnTheWall, 5000, num)
}
