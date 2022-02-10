export default {
  url: '/3/files', 
  get downloadButton() {
    return cy.contains("a", "Pobierz");
  },
  get fileUploadInput() {
    return cy.get("#file");
  },
  get filePreviewButton() {
    return cy.contains("button", "Podgląd");
  },
  };
  