// 🐼 Uzyj tutaj templatki dla nowej komendy

import loginPage from "../page-objects/login"
import 'cypress-file-upload';

Cypress.Commands.add('login', () => {
    loginPage.emailInput.type('test@user.com')
    loginPage.passwordInput.type('Password123')
    loginPage.loginButton.click()
})


// wypełnij jej nazwę -> będzie to nazwa metody dodanej do cy
// jako ciało tej metody wpisz swoje wypełnianie formularza logowania
// następnie uzyj jej w swoim folderze /integration/login.spec.js
