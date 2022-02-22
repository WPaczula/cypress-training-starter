/// <reference types="cypress" />
import {Given, Then} from 'cypress-cucumber-preprocessor/steps'
import registerPage from '../page-object/register.page'
import homePage from '../page-object/home.page'
import loginPage from '../page-object/login.page'

const routeDictionary = {
    register: registerPage.url,
    home: homePage.url,
    login: loginPage.url
}

Given('I am on the {string} page', (pageName) => {
    cy.visit(routeDictionary[pageName])
})

Then('I should be on the {string} page', (pageName) => {
    cy.location('pathname').should('equal', routeDictionary[pageName])
})