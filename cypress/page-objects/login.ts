const loginPage = {
    emailInput() { 
        return  cy.get('input[name="email"]') 
    },
    passwordInput() {
        return cy.get('input[name="password"]')
    },
    loginButton() {
        return cy.contains('button[type="submit"]', 'Log in')
    },
} 

export default loginPage