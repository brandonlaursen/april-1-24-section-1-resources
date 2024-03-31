# `Week 1 Day 4`
- Nested Loops
- Helper Functions

## `Nested Loops`
  * Sometimes a single loop is not enough to access a nested array
  * In that case, you'll write a loop within a loop
  example
```js
for (let i = 0; i < 4; i++) {
  // outer loop controlled by i
  // console.log(i)
  for (let j = 0; j < 3; j++) {
    // inner loop controlled by j
    console.log(i, j); // what well see?
    // console.log(j)
  }
}
```
- outer loop pauses until inner loop can complete
- Since our inner loop is defined within the bounds of our outer loop, the full cycle of our inner loop is part of each individual iteration of our outer loop.

```js


let matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

// we want to get all the letters
console.log(matrix.length); // length is two, there is two nested arrays
console.log(matrix[0]);//["a", "b", "c"],
console.log(matrix[1]);//["d", "e", "f"],
console.log(matrix[2]);//["g", "h", "i"],
console.log(matrix[0][0]);//a
console.log(matrix[0][1]);//b
console.log(matrix[0][2]);//c
console.log(matrix[1][0]);//d
console.log(matrix[2][1]);//e
console.log(matrix[3][2]);//f
let subArr = matrix[0];
console.log(subArr[0])//a
console.log(subArr[1])//b
console.log(subArr[2])//c


for (let i = 0; i < matrix.length; i++) {
  let subArr = matrix[i];
  // console.log(subArr)//
  for (let j = 0; j < subArr.length; j++) {
    let letter = subArr[j];
    console.log(letter);
  }
}

let nestedArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < nestedArr.length; i++) {
  console.table(nestedArr[i]);
  for (let j = 0; j < nestedArr[i]; j++) {
    console.table(nestedArr[i][j]);
  }
}

```

## `Practice Session 1 - 1h(SOLO)`
- Nested Loops Header

## `Practice Session 1 Walkthrough`
- pairs maker
- two dimensional sum
- max in matrix


## `Helper Functions`

## What is a helper function?
  * function that performs part of the computation of another function
  * Can call a function from another function

## Why would helper functions be useful?
  * Decompose problems - which is the process of breaking down a larger problem into its smaller sub-problems.
  * Break down problems into chunks that are manageable
  * Use abstraction to manage complexity of program by hiding some implementation
  * Makes code more readable, more obvious what each part does, clean!

## Sometimes we'll need to solve problems that can be broken down into smaller problems.
  * Consider the transactions a person may make with their bank account.
  * Rather than encapsulating all of the activities within a single
  * function, we can instead write some helper functions to handle individual actions.


```js
let balance = 10;

// sub problems
let transaction = function(type, amount) {
  if (type === 'withdraw') {
    balance = withdraw(balance, amount);
  } else if (type === 'deposit') {
    balance = deposit(balance, amount);
  } else {
    console.log("You did not choose a valid transaction type")
  }

  return "Balance: "+ balance;
};

// sub problems specific handles only withdraw
let withdraw = function(initialBalance, amount) {
  if (initialBalance - amount > 0) {
    console.log("Withdrawing:", amount)
    initialBalance -= amount;
  } else {
      console.log("Unable to complete transaction, not enough funds")
  }
  return initialBalance;
};


// only handles deposit
let deposit = function(initialBalance, amount) {
  if (amount < 10000) {
    console.log("Depositing:", amount)
    initialBalance += amount;
  } else {
      console.log("UNABLE TO COMPLETE TRANSACTION, PLEASE WAIT WHILE WE REVIEW THIS ACTIVITY")
  }
  return initialBalance;
};

console.log(transaction("ASDFASD", 100));// You did not choose a valid transaction type
console.log(transaction('withdraw', 9));// withdrawing 9,  balance of 1
console.log(transaction('withdraw', 6));// unable to complete funds
console.log(transaction('deposit', 96));// depositing 96, balance of 97
console.log(transaction('deposit', 1000000000000000)); //unable to complete transaction
```

## `Practice Session 2 - 1h(SOLO)`
- Helper Functions Header

## `Practice Session 2 Walkthrough`
- next prime
- hipsterfy

## `Work on Long Practice till EOD`
