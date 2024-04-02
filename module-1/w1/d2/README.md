# `Week 1 Day 2`

- Typical Lecture Format
- Online Lecture Etiquette
- Section 1 Repo
- Functions
- Conditionals
- Loops

## `Typical Lecture Format`

- Homework Review
- Lecture
- Guided Practices
- Long Practices

---

## `Online Lecture Etiquette`

- Keep the chat focused on the material
- Avoid asking questions in the middle of the lecturer presenting
  - Lecture Questions Slack channel
  - Q&A time
- Keep microphone muted at all times, unless called on
- Make sure your name in Zoom matches your PT preferred name / pronouns.
- Participate
  - Raise your hand to answer questions posed by the lecturer
  - Use the participation thread if a general question is asked.
  - Don't be afraid of saying the wrong thing
    - A SWE is `wrong` 95% of the time

---

## `Live Lecture - Before you ask`

1. Is my question relevant to **_everyone_**?
   - Lecture questions channel
     - Give screenshots
     - Be specific
2. Will the answer help **_today_**?
   - Out of scope can derail new learners
     - DM a TA, or try the lecture question channel
3. Has this been answered, but I need a different explanation?
   - Sometimes my explanations don't stick!
     - Lecture questions channel
4. Do I need verification that I'm right?
   - Lecture questions channel
     - Share your explanation

## `Zoom Rules`

1. Cameras on unless you have reached out to an instructor and have gotten an ok to be cameras off for the day or have an emergency take place and need to quickly turn the camera off and then back on.
2. Mic Off, unless you have raised a hand in zoom and been called on. Use the raise hand zoom reaction.
3. Be Present, both during lectures and pairing. Dont be playing games on your computer, checking social media, or messing with your phone during class time.
4. Make sure your zoom name matches your preferred name (slack as well)

---

## `Functions`

### What is a function?

- A function is a procedure of code that will run when called.
- Writing a function is known as a function declaration or function definition
- We create functions so we do not have to repeat the same line of code, allows us to reuse logic
- Javascript reads top to bottom
- Function is not read till its called/invoked `functionName()`

### Function Vocabulary

- `Function definition/declaration` - The defining of the function
  - This contains the logic of the function as well as the parameters
- `Function call/invocation` - The calling of the function
  - This is what tells JavaScript to read the function
  - This is where arguments are passed
- `Parameter` - A variable used to represent the argument passed positionally
- `Argument` - Values to pass to a function
- `Return` - The return keyword is what a function will evaluate too

### Three things to remember about return statements are:

1. Every function call evaluates to its return value.

```js
function functionName() {
  return "Hello World";
}

functionName(); // Hello World
```

2. Every function in JavaScript returns undefined unless a return is specified.

```js
function functionName() {
  // This function has no return
}
functionName(); // undefined
```

3. Once a return statement is encountered, the function will immediately stop and return the value, ignoring any code below the return statement.

```js
function functionName() {
  // This function has no return
  return "Hello World";
  console.log("Will not be reached");
}
functionName(); // "Hello World"
```

### Function naming convention

- CamelCase - `functionTest`
- Descriptive names
  - verb followed by a noun, CRUD `getInfo`, `deleteInfo`, `editInfo`
- If the return value is a Boolean, the name should be `isValue`
  where Value is whatever we are checking

### Declaring/Defining the function

- Parameters are used to represent the arguments passed
  function
  - `param1` will be a variable used to represent positionally `argument1`
  - `param2` will be a variable used to represent positionally `argument2`

```js
functionName(param1, param2){
 return param1 + param2;
}
```

Parameters are like variables and can be named whatever you want

```js
functionName(banana, apple){
 return banana + apple;
}
```

### Calling/invoking the function and passing arguments

Here we are calling the multiply function

- We take in two `parameters` `num1` and `num2`
- `num1` represents the first `argument` passed `num1 = 4`
- `num2` represents the second `argument` passed `num2 = 5`

```js
function multiply(num1, num2) {
  return num1 * num2;
}
```

Here we are `invoking/calling` the multiply function

- We are passing `4` as the first `argument`
- We are passing `5` as the as the second `argument`
  - The `parameters` will be the variables used to represent these `arguments` passed

```js
multiply(4, 5); // 20
```

### Console.log

`Use a console.log if you want to see the output of a function`

```js
console.log(multiply(4, 5)); // 20 will be printed to the terminal
```

- We are logging what the function evaluates too `20`
- Which is its `return` value
- If there is no `return` value
  - A function evaluates to `undefined`
- If we do not use a `console.log`
  - we will see `nothing` printed to the terminal

### Order of execution

Javascript reads top to bottom
Anytime a function is called, js will enter the function and run the code within in the function

```js
// Will not be read until called
function myFunc() {
  console.log("second");
}

console.log("first");
myFunc();
console.log("third");
```

`We will see first, second, third printed to the console`

### Storing a function a variable

We can store functions as an expression in a variable

```js
function addition(num1, num2) {
  return num1 + num2;
}

let sum = addition(10, 12);
console.log(sum); // 22

let newSum = sum + 50;
console.log(newSum); // 72
```

## `Practice Session 1 - Meet back after lunch (SOLO)`

- Intro to Function Header
- Function Parameters Header
- String Operators in a Function Header
- Math Operators in a Function Header

## `Practice Session 1 Walkthrough`

- Repeat Name(Intro to Functions)
- be cool(parameters)
- Yell(String operators)
- Plus Five(Math Operators)
- Average of Four(Math Operators)

## `Conditionals`

Let us control what we decide to do, creates a decision making tree for our code
Conditionals cans be used to control the flow of our program

- By providing conditions, and commands on what to do if conditions are met or not
- there are many types of conditions we can check

Conditional statements will act as control for the flow of our apps and functions.

- The basic structure of a conditional statement looks like:

```js
if (condition or comparison){
  <run this code>
} else if (other condition or comparison) {
  <run this code>
} else {
  <do this code if none of the conditions are met>
}
```

```js
let num = 20;

if (num > 10) {
  console.log("number is greater than 10");
} else if (num < 10) {
  console.log("number is less than 10");
} else {
  console.log("number is 10");
}
```

### Mutually exclusive condition

- A general rule of thumb is that if you are working with a condition that is mutually exclusive, meaning if one condition is true the other condition must be false, then you should use an if/else statement.
- You can also think of mutually exclusivity like a coin flip - it can be either heads or tails but not both.

```js
let side = "heads";

if (side === "heads") {
  console.log("heads");
} else {
  console.log("tails");
}
```

### Truthy and Falsy values

- https://developer.mozilla.org/en-US/docs/Glossary/Truthy#:~:text=In%20JavaScript%2C%20a%20truthy%20value,type%20coercion%20in%20Boolean%20contexts.

```js
if (true) {
  console.log("this code will always execute");
}

if (0) {
  console.log("this will not run, 0 is a falsey value");
}
```



## `Practice Session 2 - 1h(SOLO)`

- Conditionals Header

## `Practice Session 2 Walkthrough`

- is Five
- Odd Num Only
- Valid Substring


## `Loops`
  Loops provide us a way to repeat behavior a set number of times.

  * We can use that behavior to progress through data structures and take a look at individual elements.
  * Loops consist of 3 main components:
    1. Initial Expression
    2. Condition for which we keep looping
    3. Step towards completing the loop/meeting the condition

  There are may use cases of loops!
  * counting numbers
  * progressing through strings/arrays
    * we loop through these data types to get information
    * arrays can hold user information that we may need to access to print to the string


### While loops
 * When would we use a while loop over a for loop?
 * Whenever we don't know how many times we need to iterate
 * If you want an action to repeat itself until a certain condition is met or while a condition is met

 While loops will execute while their condition is true.
 * You'll want to make sure the expression that steps your loop towards completion is embedded within the body of your loop.

 Components of a loop
*
```js
  let i = 0;
   //* A condition where to start
   //* we can start anywhere
   //* We control the boundaries!

 while (i <= 5) {
  //* while this is condition is true, execute the code in this block

  console.log(i); // print the value to the console

  i++;
  //* step towards meeting the condition
  //* increment our i variable by 1 after each iteration
  //* same thing as, i += 1, i = i + 1
}
```


### For loop

* `let i = 0`; initial expression, where to start
* `i <= 5`; condition to be met
* `i++`; increment i by 1, step to completing the loop
* Remember `index's` start at `0`
* Print every number between 0 up to 5 an increments of 1
```js
for (let i = 0; i <= 5; i++) {
  console.log(i); // 0 1 2 3 4 5
}
```


### Iterating through a word
```js

// function takes in a parameter 'umbrella' represented by the variable word
function iterateThroughWord(word) {
  // * were saying start from the first index
  // * iterate as long as i < word.length
  // * word.length evaluates to 8
  // * so as long as i is less than 8 keep going
  // * increment i by one each time
  for (let i = 0; i < word.length; i++) {
    // * word[i] changes as i changes
    // * each iteration i is changed by 1
    // console.log(word[0]);
    // word[0] = u
    // word[1] = m
    // word[2] = b
    let letter = word[i];
    // * for clarities sake, be descriptive in your variable names
    // * what is the variable at i?
    // * using i as a variable is more dynamic than indexing one by one
    console.log("value at index: ", word[i], "index: ", i); // can access current value at word[i]
    console.log("letter variable: ", letter); // or through variable that holds word[i]
  }
}

// call the function
// pass an arguments umbrella
iterateThroughWord("umbrella");
// * function has no return
```

### Reverse a string
```js

// reverse a name
// * show them iterating backwards
function reverseName(name) {
  // concatenate on to reversedName string
  let reversedName = "";
  // start at name variables last index - 1
  // * we subtract account for the zeroth index
  // b r a n d o n
  // 0 1 2 3 4 5 6
  // brandon.length = 7
  // if we started at 7; there is no 7th index; so we subtract 1
  // we iterate while i is greater than the index if the first letter which is 0
  // we want to start from 6 and iterate down to 0 in increments of 1
  // 3 > 0 => 2 > 0 => 1 > 0 => 0 > 0 - STOP
  for (let i = name.length - 1; i >= 0; i--) {
    // console.log(name[i]);
    // name[name.length - 1]
    // name[name.length - 1 - 1]
    // name[name.length - 1 - 2]
    let letter = name[i];
    reversedName += letter;
    console.log("reversedName: ", reverseName);
  }
  return reversedName;
}

console.log("return value of reverseName", reverseName("brandon")); // nodnarb
```

### Log Between
```js
function logBetween(num1, num2) {
  // for(let i = num1; i <= num2; i++) {
  //   console.log(i)

  // show only even numbers
  // can change i++ to i+=2 as well
  // if(i % 2 === 0) {
  //     console.log(i)
  //   }

  // }

  let i = num1;
  while (i < num2) {
    console.log(i);
    i++;
  }
}

logBetween(1, 10); //1,2,3,4,5,6,7,8,9,10
```

## `Practice Session 3 - 1h (SOLO)`

- Basic Loops Header

## `Practice Session 3 Problems Walkthrough`

- Log Between
- Elements of Odd Indices Reversed
- Second Half
- Log Between Stepper


##  `Work on Practices till EOD`
