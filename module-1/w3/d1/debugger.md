

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
