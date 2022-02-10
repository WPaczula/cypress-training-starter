/// <reference types="cypress" />
import { Given, When, Before, After } from "cypress-cucumber-preprocessor/steps";

Given('My step with {string} parameter', (stringVariable), () => {
    // W ten sposób możemy zadeklaorwać, że parametr jest liczbą
    // innte opcje to np number, boolean lub customowe typy (https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#custom-parameter-type-resolves)
})

When('If a table is declared we will get it here ->', (table) => {
    // Żeby dostać obiekty wierszy o propertiesach z nazwami kolumn należy wykonać
    table.hashes()
    // [
    //     { id: 'id1', name: 'Wojtek'},
    //     { id: 'id2', name: 'Jan'},
    // ]
    // Aby operować na czystych danych bez nagłówka
    table.rows()
    // [
    //     ['id1', 'Wojtek'],
    //     ['id2', 'Jan']
    // ]
})

// Możemy również wykorzystywać odpowiednik beforeEach i afterEach
Before(() => {
    // nasz kodzik przed scenariuszem możemy tutaj np wykonać strzał i zapisać
    // dane do aliasu
    cy.request('POST', '/init', { ala: 'ma kota'}).then(request => {
        cy.wrap(request.body).as('initBody')
    })
})

After({ tags: "@foo" }, () => {
    // tylko jeżeli nasz scenariusz jest otagowany tagiem @foo
})
