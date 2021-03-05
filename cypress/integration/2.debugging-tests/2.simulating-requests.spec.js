/// <reference types="cypress" />

// PAGE OBJECTS
const simulatingRequestsPage = {
  ammountInput: () => cy.get('[name="amount"]'),
  phoneInput: () => cy.get('[name="phone"]'),
  sendButton: () => cy.get('[type="submit"]'),
};

const loginPage = {
  emailInput: () => cy.get('[name="email"]'),
  passwordInput: () => cy.get('[name="password"]'),
  loginButton: () => cy.get('[type="submit"]'),
};

// ============================ TESTY ============================
// 🐼 W tym przypadku skup się na zmianach w wymaganiach
// developer zmienił już swój kod, a teraz czas na testy

describe("Simulating requests", () => {
  beforeEach(() => {
    cy.visit(
      "https://cypress-training-page-wpaczula.vercel.app/2/simulating-requests"
    );
    loginPage.emailInput().type("test@user.com");
    loginPage.passwordInput().type("Password123");
    loginPage.loginButton().click();
  });

  it("should show information if blik failed due to not found phone number", () => {
    cy.intercept("POST", "/api/blik", {
      fixture: "simulating-errors/not-found.json",
      statusCode: 404,
    }).as("notFound");
    const phone = "123-123-123";

    simulatingRequestsPage.ammountInput().type(5000);
    simulatingRequestsPage.phoneInput().type(phone);
    simulatingRequestsPage.sendButton().click();
    cy.wait("@notFound");

    cy.contains(
      `Nie udało się znaleźć odbiorcy o numerze telefonu ${phone}`
    ).should("be.visible");
  });

  it("should show information if blik failed due to lack of funds", () => {
    cy.intercept("POST", "/api/blik", {
      fixture: "simulating-errors/lack-of-funds.json",
      statusCode: 403,
    }).as("lackOfFunds");
    const amount = 5000;

    simulatingRequestsPage.ammountInput().type(amount);
    simulatingRequestsPage.phoneInput().type("123-123-123");
    simulatingRequestsPage.sendButton().click();
    cy.wait("@lackOfFunds");

    cy.contains(
      `Nie udało się przesłać ${amount}PLN z uwagi na brak środków na koncie`
    ).should("be.visible");
  });

  it("should show information if blik succeeded", () => {
    cy.intercept("POST", "/api/blik").as("lackOfFunds");
    const amount = 5000;
    const phone = "000-000-000";

    simulatingRequestsPage.ammountInput().type(amount);
    simulatingRequestsPage.phoneInput().type(phone);
    simulatingRequestsPage.sendButton().click();
    simulatingRequestsSelectors.sendButton().click();
    cy.wait("@lackOfFunds");

    cy.contains(
      `Kwota ${amount}PLN została poprawnie przelana na numer ${phone}`
    ).should("be.visible");
  });
});
