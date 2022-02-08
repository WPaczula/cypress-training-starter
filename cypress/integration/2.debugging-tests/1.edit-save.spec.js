/// <reference types="cypress" />

// ============================ PAGE OBJECT ============================
const editSavePage = {
  get emojis() {
    return cy
    .contains(/Twoje emoji/)
    .next()
    .children()
  },
  get editButton() { return cy.contains('[type="button"]', "Edytuj") },
  get emojiIncreaseArrow() {
   return cy.get('[name="numberOfEmojis"]').next().children().eq(0)
  },
  get notRobotCheckbox() { return cy.get('[name="isNotARobot"]') },
  get saveButton() { return cy.get('[type="submit"]') },
  get cancelButton() { return cy.contains('[type="button"]', "Anuluj") },
};

const loginPage = {
  get emailInput() { return cy.get('[name="email"]') },
  get passwordInput() { return cy.get('[name="password"]') },
  get loginButton() { return cy.get('[type="submit"]') },
};

// ============================ TESTY ============================
// 🐼 Sprawdź czy testy działają i wykorzystaj wcześniej zdobytą wiedzę
// żeby naprawić te niedziałające

describe("Edit save", () => {
  beforeEach(() => {
    cy.visit("https://cypress-training-page-wpaczula.vercel.app/2/edit-save");
    loginPage.emailInput.type("test@user.com");
    loginPage.passwordInput.type("Password123");
    loginPage.loginButton.click();
  });

  it("should increase number of emojis by 1 using arrow", () => {
    editSavePage.emojis.its("length").as("initialLength");

    editSavePage.editButton.click();
    editSavePage.emojiIncreaseArrow.click();
    editSavePage.notRobotCheckbox.check({ force: true });
    editSavePage.saveButton.click();

    cy.get("@initialLength").then((initialLength) => {
      editSavePage
        .emojis
        .its("length")
        .should("equal", initialLength + 1);
    });
  });

  it("should not change the number of emojis if cancel button is pressed", () => {
    editSavePage.emojis.its("length").as("initialLength");
    editSavePage.emojis.invoke("text").as("initialEmojis");

    editSavePage.editButton.click();
    editSavePage.emojiIncreaseArrow.click();
    editSavePage.cancelButton.click();

    cy.get("@initialLength").then((initialLength) => {
      editSavePage.emojis.its("length").should("equal", initialLength);
    });
    cy.get("@initialEmojis").then((initialEmojis) => {
      editSavePage
        .emojis
        .invoke("text")
        .should("not.equal", initialEmojis);
    });
  });
});
