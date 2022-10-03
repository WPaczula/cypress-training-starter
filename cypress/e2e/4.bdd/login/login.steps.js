import { Then, When, Before, After } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../page-object/login.page'

Before({tags: '@require-init'}, () => {
    cy.log('Init test')
})
After({tags: '@require-init'}, () => {
    cy.log('Cleanup')
})

When('I provide correct credentials', () => {
    loginPage.emailInput.type('test@user.com')
    loginPage.passwordInput.type('Password123')
    loginPage.loginButton.click()
})

When('I provide incorrect credentials', (dataTable) => {
    const user = dataTable.hashes()[0]
    loginPage.emailInput.type(user.username)
    loginPage.passwordInput.type(user.password)
    loginPage.loginButton.click()
})

Then('I should see {string} error message', (errorMessage) => {
    loginPage.alert(errorMessage).should('be.visible')
})