/// <reference types="cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from '../page-object/home.page'
import loginPage from '../page-object/login.page'
import registerPage from '../page-object/register.page'

const navigationDictionary = {
    home: homePage.url,
    login: loginPage.url,
    registerPage: registerPage.url
}

Given('I am on the {string} page', (nameOfThePage) => {
    cy.visit(navigationDictionary[nameOfThePage])
})

Then('I should be on the {string} page', (nameOfThePage) => {
    cy.location('pathname').should('equal', navigationDictionary[nameOfThePage])
})