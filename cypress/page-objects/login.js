/// <reference types="cypress" />

// 🐼 Fix the input selector and continue to add more selectors

const loginPage = {
    url: '/login',

    get registerLink() { 
        return cy.contains('register') 
    },
    get emailInput() { 
        return  cy.get('#email')
    },
    get passwordInput() {
        return cy.get('input[name="password"]')
    },
    get showPasswordButton() {
        return cy.get('.chakra-input__right-element').find('button')
    },
    get submitButton() {
        return cy.get('[type="submit"]')
    }
} 

export default loginPage