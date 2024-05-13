/*



  Intro To Cyprus
  * Testing framework

  Directory structure
  * package.json file - includes all packages and dependencies needed for the project (including Cypress)
  * cypress.json file - includes some configuration for the Cypress tests
  * cypress directory - includes the test file(s), typically within the integration directory.

  cypress-example-project
    |__ package.json
    |__ cypress.json
    |__ cypress
      |__ integration
        |__ test-spec.js

  Cypress tests can be very powerful for testing applications in the browser, but that power can come with some challenges:
  * Cypress can be difficult to set up initially (depending on your environment)
  * Cypress tests can be slower to run than Mocha tests, especially for failed tests
  ! Due to these challenges, running Cypress tests during your guided practices is optional

  When to Run Cypress Tests
  * If you are working asynchronously

  If you are working in a cohort-based program
  * If you choose to run the Cypress tests during a guided practice, only run the tests after completing an entire phase of the practice.

  * A lot of checking your work visually

  Cypress Troubleshooting
  * To run Cypress tests, you will need to run npm install and then run a test command (usually npm test, unless you are running test files individually). The first time you install Cypress, it can take several minutes to complete the installation, but each time thereafter it should be much quicker.

*/
