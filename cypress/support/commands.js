// 🐼 Add your log in command

import loginPage from "../page-objects/login"

Cypress.Commands.add('login', () => {
    loginPage.emailInput.type('test@user.com')
    loginPage.passwordInput.type('Password123')
    loginPage.submitButton.click()
})

// The name should be "login" - all methods start with a small letter in cypress
// thte body is a copy paste from the login part in your test /integration/login.spec.js
