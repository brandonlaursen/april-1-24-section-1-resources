/*
You are compiling a price checker for a grocery store. The grocery prices are as
follows:

  butter: $1,
  eggs: $2,
  milk: $3,
  bread: $4,
  cheese: $5

First, create a function called costOfGroceries(groceries) which takes a single
array of grocery items and returns the total cost.

Then, write a function mostExpensiveGroceries(groceriesList) that takes in a
2-dimensional array of grocery items and returns the index of the sub-array with
the highest cost.

Constraint: Use the costOfGroceries function as a helper function in the
mostExpensiveGroceries function to solve the problem.

- Plan for costOfGroceries
1. declare a cost variable = 0
2. iterate through the list and check each item
  - depending on what that item is, we updated our cost variable
3. return the total cost

*/

function costOfGroceries(groceries) {
  // Your code here
  // console.log(groceries)
  let cost = 0;
  for (let i = 0; i < groceries.length; i++) {
    // console.log(groceries[i]);
    let item = groceries[i];
    if (item === "butter") cost += 1;
    if (item === "eggs") cost += 2;
    if (item === "milk") cost += 3;
    if (item === "bread") cost += 4;
    if (item === "cheese") cost += 5;
  }

  // console.log(cost)
  return cost;
}

/*

Then, write a function mostExpensiveGroceries(groceriesList) that takes in a
2-dimensional array of grocery items and returns the index of the sub-array with
the highest cost.

[
  0: [ 'cheese', 'butter', 'eggs' ],
  1: [ 'eggs', 'milk', 'bread', 'bread' ],
  2: [ 'cheese', 'bread' ],
  3: [ 'eggs', 'butter' ]
]

input: 2D array
output: index

1. make a var called index = 0;
2. make a var called highestCost = -Infinity

3. Iterate through the 2d array
  - isolate each list in var called list = groceriesList[i];
  - save the result of the costOfGroceries to a var called currCost
  - compare the currCost vs our highestCost
    - if (currCost > highestCost)
      - the highestCost var will take on the value of the currentCost
      * once we have the highest cost, we have the index

4. return that index
*/

function mostExpensiveGroceries(groceriesList) {
  // Your code here
  console.log(groceriesList);
  let index = 0;
  let highestCost = -Infinity;

  for (let i = 0; i < groceriesList.length; i++) {
    let list = groceriesList[i]; // target each list by itself
    // console.log(list);

    let currCost = costOfGroceries(list); // pass each list into our helper func to get its cost
    // console.log(currCost)

    /*
    [
    0: [ 'cheese', 'butter', 'eggs' ], => 8
    1: [ 'eggs', 'milk', 'bread', 'bread' ], => 13
    2: [ 'cheese', 'bread' ],=> 9
    3: [ 'eggs', 'butter' ] => 3
    ]
    */

    // 9 > 13 XXXXX
    if (currCost > highestCost) {
      // 13
      highestCost = currCost;
      // console.log("->", highestCost);

      index = i; // 1
      // console.log('-->',index)
    }
  }

  return index;
}

const groceriesA = ["cheese", "butter", "eggs"];
const groceriesB = ["eggs", "milk", "bread", "bread"];
const groceriesC = ["cheese", "bread"];
const groceriesD = ["eggs", "butter"];

// console.log(costOfGroceries(groceriesA)); // 8
// console.log(costOfGroceries(groceriesB)); // 13
// console.log(costOfGroceries(groceriesC)); // 9
// console.log(costOfGroceries(groceriesD)); // 3

console.log(
  mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD])
); //=> 1
console.log(mostExpensiveGroceries([groceriesA, groceriesD])); //=> 0
console.log(mostExpensiveGroceries([groceriesA, groceriesD, groceriesC])); //=> 2

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  costOfGroceries,
  mostExpensiveGroceries,
};
