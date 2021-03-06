import loginPage from "page-objects/login";

declare global {
  interface Window {
    renderOrders: Function
  }

  namespace Cypress {
    interface Chainable {
      login: () => void
    }
  }
}

Cypress.Commands.add("login", () => {
  loginPage.emailInput().type("test@user.com");
  loginPage.passwordInput().type("Password123");
  loginPage.loginButton().click();
});
