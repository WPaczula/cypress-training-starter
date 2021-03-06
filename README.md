# cypress-training-starter

Repository containing the starter repo for the cypress training.

Steps to set things up on your own:

1. Make sure you've got [nodejs](https://nodejs.org/en/) installed
2. Run `npm i`
3. Run `npx cypress open` to open the tests
4. Run `0.login.spec.js`
5. Happy coding! 😄

# HOW TO ADD TYPESCRIPT

1. Install typescript via your package manager (for example npm) `npm i typescript`
2. Create tsconfig.json in the root - you can copy the one from this repo
3. Change .js extensions to .ts
4. Adjust `plugins/index.ts` to use TS exports
5. For custom commands add type declaration - see `support/commands.ts`
