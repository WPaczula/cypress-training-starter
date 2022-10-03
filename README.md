# cypress-training-starter

Repository containing the starter repo for the cypress training.

Steps to set things up on your own:

1. Make sure you've got [nodejs](https://nodejs.org/en/) installed
2. Run `npm i`
3. Run `npx cypress open` to open the tests
4. Run `0.login.spec.js`
5. Happy coding! 😄

## BDD

This branch contains BDD support in e2e/4.bdd folder. To enable BDD go to `cypress.config.json` and uncomment line 10.

How to set up BDD:
1. Install BDD plugin. It is different for v10 than for previous versions: `npm i @badeball/cypress-cucumber-preprocessor`
2. Install bundler preprocessor: `npm i @bahmutov/cypress-esbuild-preprocessor`
3. Update `cypress.config.js` - add plugins and define new steps definition file extention: `*.feature`
4. Add `.cypress-cucumber-preprocessorrc.json` file and define your steps. In my case I wanted all BDD tests to be in `4.bdd` folder. If you don't need that feel free to ommit `4.bdd` in the paths. 
