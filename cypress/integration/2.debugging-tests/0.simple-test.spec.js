const simpleTestPage = {
	get genderSelect() {
		return cy.get('[name="gender"]')
	},
	get nameInput() {
		return cy.get('[name="name"]')
	},
	get sendButton() {
		return cy.get('[type="submit"]')
	},
	helloManToast(name) {
		return cy.contains(`Hi ${name}! I'm happy you are here!`)
	},
}

const loginPage = {
    get emailInput() { return cy.get('[name="email"]') },
    get passwordInput() { return cy.get('[name="password"]') },
    get loginButton() { return cy.get('[type="submit"]') },
};

describe('Simple test', () => {
	beforeEach(() => {
		cy.visit('/2/simple-test')
		loginPage.emailInput.type("test@user.com");
        loginPage.passwordInput.type("Password123");
        loginPage.loginButton.click();
	})

	it('should display welcome message for man with a name', () => {
		const name = 'Jan'
		const gender = 'man'

		simpleTestPage.genderSelect.select(gender)
		simpleTestPage.nameInput.type(name)
		simpleTestPage.sendButton.click().then(() => {
			debugger
		})

		simpleTestPage.helloManToast(name).should('be.visible')
	})
})
