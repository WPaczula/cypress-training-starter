/// <reference types="cypress" />

export default {
	emailInput() {
		return cy.get('[name="email"]')
	},
	passwordInput() {
		return cy.get('[name="password"]')
	},
	loginButton() {
		return cy.get('[type="submit"]')
	},
}
