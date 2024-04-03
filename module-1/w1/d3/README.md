# `Week 1 Day 3 `
- Arrays
- Mutability
- Array Methods
- Function Expressions
- Polya's problem solving framework
- Debugging
- Terminal and Local JavaScript


## `Arrays`
 * Arrays are useful when you need to hold more than just value;
  * Arrays are ordered collections of values.
  * Similar to strings; arrays have indices
  * We can access the value by using the index
  * We can use loops to iterate through arrays


### Arrays can hold multiple values
```js
let numArr = [1, 2, 3, 4, 5];
// console.log(numArr);


// Arrays can hold strings
let stringArr = ["sunshine", "hope", "light"];
console.log(stringArr);

// * arrays can hold different data types at the same time
// * dynamically typed language
let variousData = [1, "two", true, ["no way is that another", "array"]];
console.log(variousData);// [1, "two", true, ["no way is that another", "array"]]

```
### Indexing an array is similar to strings
```js
let animal3 = "cats";
console.log(animal3[0]);// c
console.log(animal3[animal3.length - 1]);// s
console.log(animal3.length);// 3

// we are accessing the value at a specific index in an array
let animalArr = ["c", "a", "t", "s"];
console.log(animalArr[0]);// c
console.log(animalArr[animalArr.length - 1]);// s
console.log(animalArr.length);// 3

```
### You can index a nested array
```js
// * you can index a nested array
let twoDimensionalArr = [[0,1,2], [3,4,5], [6,7,8]];
console.log(twoDimensionalArr[0]);// [0,1,2];
// * Expressions!
console.log(twoDimensionalArr[0][0]);// 0;
```
### Arrays have a length property
```js
let animalArr = ["c", "a", "t", "s"];
// * has a length property
console.log(animalArr.length);// 3
```
### Arrays have built in methods
* Array methods are `functions`
* They evaluate to a `return` value
* They are called upon in `array`
* Some take in `arguments`
* Example
#### .indexOf - returns the index of the argument passed
* `.indexOf` return value is the `index` of the argument if found, -1 if not found
* it takes in `argument` to search for

In this case
* `.indexOf` is being called upon the `animalArr`
* Its taking in `'c'` as an argument
* Its `return` value is `0`

```js
console.log(animalArr.indexOf("c"));// 0
console.log(animalArr.indexOf("z"));// -1
```
#### .concat - concatenates or combines two or more arrays
```js
let nums1 = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
let nums3 = [11, 12, 13, 14, 15];

console.log(nums1.concat(nums2, nums3)); //[1,2,3,4,5,6,7,8,9,10]

// * order matters when concatenating
console.log(nums2.concat(nums1, nums3));
```

### There are many built in array methods
* push
* pop
* shift
* unshift
* slice
* splice

### Arrays are helpful when you want to return more than one value
```js
function myFunc(){

  return 1,2,3,4;
  return [1,2,3,4];
}

// Without an array
console.log(myFunc());//4
// With an array
console.log(myFunc());//[1,2,3,4]
```



## `Mutability`

Mutability is the concept of certain pieces of data being able to changed or mutated.Of the datatypes that we've seen so far, only arrays are mutable.

### Mutable - can be changed

- arrays
- objects - learn next week

### Immutable - cannot be changed

- strings
- numbers
- booleans

```js
let sequence = ["T", "A", "C", "G"];
console.log(sequence);
sequence[0] = "C";
console.log(sequence); //['C','A','C','G'];
// * We're able to modify or mutate the array by keying into its index and
// * altering what's there.
// * we are mutating this sequence
```

- Everything else we've seen so far are immutable data types.
- Strings will at first feel as if they should obey the same rules as arrays,
- However, strings are immutable in JavaScript and will not behave like arrays.
- Doesn't work with strings because strings are immutable

```js
let name = "brandon";
console.log(name);
name[1] = "k";
console.log(name);
```

### This doesn't work

- all we can do is reassign the string

```js
name = "krandon";
console.log(name);
```

The final console.log statement shows that our variable has been reassigned and now holds the data that we expect.

## `Array Methods`

- Arrays have built in functions on them that we can access to achieve common behaviors.
- Today, we're going to learn about `Push`, `Pop`, `Shift` and `Unshift`.
- We'll access these methods like we do other properties, such as `length`
- These methods can be used to `MUTATE` an `array`

### Array Methods

- `Arrays` have built in `functions` on them that we can access to achieve common behavior
- we been exposed to `.length`, `.`indexOf`
- `push`, `pop`, `unshift`, `shift`

### .push

- anytime to run into a new method - go to straight to `mdn`
- The `push()` method adds one or more elements to the end of an array and returns the new `length` of the array
- returns the `length` of the new array

```js
let pushArr = ["hip", "hip"];
console.log("original array", pushArr, "original length", arr.length);

let newLength = arr.push("array!");
console.log("mutated array", pushArr, "new length", newLength);
```

### .pop

 * The `pop()` method removes the `last` element from an array and returns that element. This method changes the length of the array.
 * Returns the element removed
 * Pop under the hood by removing the element and risizing the array

```js
let popArr = [true, 1, "off"];
console.log("original array", popArr);
let lastEle = popArr.pop();
console.log("mutated array", popArr, "popping", lastEle);
```

### .unshift
* The `unshift()` method adds one or more elements to the beginning of an array

* returns the new length of the array.
```js
let unshiftArr = ["wow", false, 3];
console.log("original array", unshiftArr, "old length", unshiftArr.length);

let newLength2 = unshiftArr.unshift("key");
console.log("mutated array", unshiftArr, "new length", newLength2);
```

### .shift
* The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.
* Remove the first element from an array , it returns the element removed

```js
let shiftArr = ["gears", 1, false];
let firstEle = shiftArr.shift();
console.log("mutated array", shiftArr, "shifting", firstEle);
```

## `Polya's Framework`
### 4 part process for problem solving!
  1. Define the problem -  what is the prompt asking?
  2. Make a plan
  3. Execute the plan
  4. Refactor

## `Debugging`
1. Read your error messages
2. console.log values you want to test / blocks you want to make sure are running
3. Manually test your code, don't just assume that it will work. Check your edge cases.
4. Plan, plan, plan, and only then start coding. Think about what you need to code before just throwing some random javascript at the problem. Programming is 95% thinking, typing is just to bring those plans into reality.

## Function Expression

### Function expression syntax!

- Another a way to write a `function`
- We learn about `function declaration` yesterday
- Storing an `anonymous function` in a `variable` therefore giving it a name to alias it by

### `Function Declaration`

```js
function sayHello() {
  console.log("hello from say hello 1");
}
```

### Function expression

- storing an `anon function` in a `variable`
- `anon function` is a `function` with no name

```js
let sayHello2 = function () {
  console.log("hello from say hello 2");
};
```

### Something were able to do with function expression that we learn in week 2

### Fat arrow implicit return

```js
let sayHello3 = () => console.log("hello from say hello 3");
```

### You can log a function

```js
console.log(sayHello); // [Function: sayHello]
console.log(sayHello2); //[Function: sayHello2]
```

### But what does this all mean?

This brings us around to the concept of first class objects.

### A first class object is defined as:

1. It can be stored in a `variable`
2. it can be passed as an `argument` to a `function` (coming up next week!)
3. It can be returned from a `function` (also coming up next week!)

## `Practice Session 1 - 1h 15m(SOLO)`
* Mutability Header
  * Use function expression syntax!

## `Practice Session 1 Walkthrough`
* range
* doubler
* remove-element
* choosey-endings

## `Terminal and Local JavaScript`
###  Steps to Run Project Locally
  `WSL2 users make sure to use ubuntu terminal!`
  1. From your terminal locate where you want to store your practice
  * This could be in your App Academy Folder
      ![image info](./images/image1.png)
  2. `cd` into the folder
    ![image info](./images/image2.png)
  3. Copy the tiged command from the github repo
    ![image info](./images/image3.png)
  4. Paste the command into your terminal
   ![image info](./images/image4.png)
  5. `cd` into the file you just cloned
   ![image info](./images/image5.png)
   `Make sure when you run ls this is what you see`
   ![image info](./images/image6.png)
  6. Run npm install
  ![image info](./images/image7.png)
  `No worries if you see vulnerabilities; that is normal`

# How to run file using node
  1. From the root of the directory
   * Run `node problems/<problemFileName>`
![image info](./images/image8.png)
  Some things to note!
  - If there is no `console.log` nothing will print to the terminal
  ![image info](./images/image9.png)
  - If there are errors in the code; errors will be printed to the terminal
   ![image info](./images/image10.png)
    - Make sure to read your error messages carefully!
    - In this case, name is not defined!
  - If the function isnt called; the function will not run!
   ![image info](./images/image11.png)

# How to run the test specs
## Running a single test spec
 1. From the root of the directory
   * Run `npm test test/<testFileName>`
  ![image info](./images/image12.png)
  Some things to note!
  * Make sure there are no errors in your code or the specs will break!
  ![image info](./images/image13.png)
    * In this case we have a syntax error
  * Make sure youre at the root of your directory and not in the problems folder or you may see this
  ![image info](./images/image14.png)
## Running all the test specs
* From the root of the directory
  * Run npm test
![image info](./images/image15.png)


# Node
  ## What is node?
  - runtime environment that allows us to run js outside the browser

  ## What is node repl?
  - repl you can use to run quick test on your terminal
    * to exit use .exit

 ##  What is NPM?
  - Node package manager
    * Tool that allows developers to easily install, manage, and share JavaScript libraries and packages with other developers

  ## What is NVM?
  * Tool that allows us manage and change what version of node we are using

  ## What is a Package.json?
  * holds all the meta data of your project such as name, versions dependencies
  * Whenever you see a package.json you npm install to install the dependencies

  ## What is npm install?
  * How we install the dependencies within the package.Jason

  * When you npm install, two things are generated
    1. Package-lock.json
    2. Node_modules

  ## Package-lock.json
  * Keep track of dependencies and ensure all who download get the same tree of dependencies stores exact copy version

  * It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

  ## Node_modules
  * Holds all the dependencies of your project
  ## What is mocha?
    * A testing framework for running js in node

  ## How to run mocha
  * when you run mocha, make sure youre at the root so that were able to go into the test folder

  ## Run a single test file
  * npm test test/filename

  ## Run all files
  * npm test

## Relative Path
  A relative path describes the location of a file relative to the current (working) directory*. 
## Absolute Path
  An absolute path describes the location from the root directory.

## `Skipping Skills Check`
## `Work on practices till EOD`
