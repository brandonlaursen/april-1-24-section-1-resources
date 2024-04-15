

## SOLO Phase 1: Setting up VSCode Debugger
The VSCode debugger will step through your code one line at a time, allowing you to examine each line's execution.

### Set Up
1. Open your settings.json
    - Open settings.json by doing CMD + SHIFT + P (or CTRL + Shift + P for
Windows) and typing in settings. Make sure that you click on the option that says Open Setting (JSON)
  - You should see something like this:
```js
{

}

```
2. Add the following "launch" key to the settings JSON object.
```js
"launch": {
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch",
            "console": "integratedTerminal",
            "program": "${file}"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Mocha Tests",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "args": [
                "-u",
                "bdd",
                "--timeout",
                "999999",
                "--colors",
                "${workspaceFolder}/test"
            ],
            "internalConsoleOptions": "openOnSessionStart",
            "skipFiles": [
                "<node_internals>/**"
            ]
        }
    ]
}
```

  - This will create two configurations for launching the VSCode debugger. One to test individual Node.js files called "Launch", and one to test projects with mocha set up called "Mocha Tests"

  - JSON has similar syntax of a JavaScript object but one of the main differences is that all the keys must be wrapped in double quotations.

3. Open the test.js file in this project and click the debugging tab on the left side navigation bar (the play button with a bug).

    - If you don't have the navigation bar all the way to the left, make sure you have View < Appearance < Show Activity Bar checked.

    - Also, make sure that the dropdown option next to the green play button is set to Launch.
    - Launch is the name you set to the launch configuration in the settings.json file.

4. Press the green play button and watch your code hit the debugger in test.js.
    - Note: If you're testing out a function make sure that you are invoking that function.
    - If you press the green play button and your screen looks similar to the one below, then you're all set! If you're having issues and you're using WSL, see the note below. If you're still having issues, call for some help!

**FOR WSL USERS ONLY:** Make sure you are using a VSCode window that has [WSL: ...] in the title of the window!! Otherwise VSCode debugger will not work. To get this title, open up your Ubuntu terminal and cd into the project folder. Then run code .. Confirm the title of the VSCode window that opens up and try out test.js there. Restart VSCode and try again if this still doesn't work.



### What is the debugger?
  * A tool used to help debug our application
  * Can be used to place debugger/breakpoint keywords to track the execution of our code
  * The debugger keyword tell the debugger where to look
  * Can track call stack
  * Can be used similarly like a console.log
    * But we have more control!


### Where do I place the debugger?
  * anytime the scope changes
  * anytime we modify a variable and want to see the before and after
  * debugger tries to access whatever is in its current scope
  * block, local/function, and global scopes

## Controls

#### `Continue`
  * will go debugger statement to debugger statement
#### `Step Over`
  * go line by line and if there is a function call, step over it
  * If there is a debugger statement; the debugger will enter the function regardless if using step over
  * Step over: steps over function calls
  * Wont step over functions that have a debugger statement
#### `Step Into`
  * Go line by line and if there is a function call, step into it
  * Regardless if there is a debugger statement or not; step into will enter the function
  * Step into: steps into function calls
#### `Step out`
  * step out of any function you stepped into
#### `Stop`
  * stops the debugger
#### `Restart`
  * restart the debugger
#### `In the watch tab`
  * we can put the name variables names we would like to watch


*Comment out console.log or step into will step into console.log*
```js
function foo(word) { // define function foo that accepts param word
  debugger; // trigger debugger, jumps to next function call
  console.log(word); // console.log the value stored in word param
  bar("barber"); // invoke bar function with string "barber"
}

function bar(word) { // define function bar that accepts param word
  debugger; // trigger debugger
  console.log(word); // console.log the value stored in word param
  baz("bazaar");  // invoke baz function with string "bazaar"
}


// ! leave out debugger to show that step into will
// step into the function and go line by line
// step over will step over the function
// if there is a debugger, then it will enter the function regardless of step into/step over

function baz(word) { // define function baz that accepts param word
  console.log(word); // console.log the value stored in word param
  // debugger; // trigger debugger
}

foo("food");

let names = ['brandon', 'charles', 'Anabel', 'trevor'];
for(let i = 0; i < names.length; i++){
  console.log(names[i]);
  debugger;
}



// * Debugger will skip if statements; if they are falsely; then we never enter the conditional

function test() {
  let name = "brandon";
  debugger;

  if (false) {
    name = "false";
    debugger;
  }
  if (true) {
    name = "krandon";
    debugger;
  }

  if (1) {
    let name = "1";
    debugger;
  }

  debugger;
}

test();
```
