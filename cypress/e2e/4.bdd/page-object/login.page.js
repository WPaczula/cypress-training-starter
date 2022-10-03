const loginPage = {
    url: '/login',
	emailInput() {
		return cy.get('[name="email"]')
	},
	passwordInput() {
		return cy.get('[name="password"]')
	},
	loginButton() {
		return cy.contains('[type="submit"]', 'Log in')
	},
    alert(message) {
        return cy.contains('[role=alert]', message)
    }
}

export default loginPage