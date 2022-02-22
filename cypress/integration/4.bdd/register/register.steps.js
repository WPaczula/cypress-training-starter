/// <reference types="cypress" />
import {When} from 'cypress-cucumber-preprocessor/steps'
import registerPage from '../page-object/register.page'

When('I create a new user', () => {
    registerPage.emailInput.type('new-user123@user.com')
    registerPage.passwordInput.type('Password123')
    registerPage.confirmPasswordInput.type('Password123')
    registerPage.submitButton.click()
})