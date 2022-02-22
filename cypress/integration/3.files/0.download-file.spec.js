import filePage from '../../page-objects/files';
import Papa from 'papaparse'
import path from 'path'
import loginPage from '../../page-objects/login';

describe("Files", () => {
  beforeEach(() => {
    cy.visit(filePage.url);
    loginPage.emailInput.type("test@user.com");
    loginPage.passwordInput.type("Password123");
    loginPage.submitButton.click();
  });

  it("should download the cypress image", () => {
    // 🐼 Click on the link to get the file
    filePage.downloadButton.click();

    const downloads = Cypress.config("downloadsFolder")
    cy.readFile(path.join(downloads, 'cypress.jpg')).should('exist')
    // 🐼 Get the download folder and check if the file is there
    // Cypress.config("downloadsFolder") returns the path "downloads"
  });

  it.only("should read the fixture file", () => {
    // 🐼 Test to only parse the file and check how it works
    cy.readFile('./cypress/fixtures/files/users.csv').then(file => {
      const { data } = Papa.parse(file, { header: true })
      cy.log(data)
    })
  });
});
