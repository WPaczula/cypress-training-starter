# cypress-training-starter

Repository containing the starter repo for the cypress training.

Steps to set things up on your own:

1. Make sure you've got [nodejs](https://nodejs.org/en/) installed
2. Run `npm i`
3. Run `npx cypress open` to open the tests
4. Run `0.login.spec.js`
5. Happy coding! 😄

# HOW TO ADD BDD

1. Install cucumber plugin: `npm i cypress-cucumber-preprocessor` and use it in `plugins/index.js`
2. Add plugin config to `package.json` (https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#configuration)
3. Let cypress know, that test files have `feature` extension - see `cypress.json`
4. In `integration` folder add your feature file - it has to have a `.feature` extension
5. Add your scenario to the file (see `login.feature`)
6. Add folder with the same name as your feature file and place your js files with steps definitions. In this example I split it to given, when and then files because it's easier to find for me 😅
7. You can also add `common` folder with your common steps like visiting a page or checking current path
