const registerPage = {
    url: '/register',
	emailInput() {
		return cy.get('[name="email"]')
	},
	passwordInput() {
		return cy.get('[name="password"]')
	},
    confirmPasswordInput() {
		return cy.get('[name="confirmPassword"]')
	},
	submitButton() {
		return cy.get('[type="submit"]')
	},
    alert(message) {
        return cy.contains('#email-feedback', message)
    }
}

export default registerPage