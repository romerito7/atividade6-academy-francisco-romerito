// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { loginPage } = require("./pages/LoginPage.po");

Cypress.Commands.add("clicarPorTexto", (seletor, texto) => {
    cy.contains(seletor, texto).click();
});

Cypress.Commands.add("login", (email, senha) => {
    loginPage.preencherFormularioELogar(email, senha);
});

Cypress.Commands.add("mockarUsuario", () => {
    cy.fixture("usuario.json").then((informacoesUsuario) => {
        window.localStorage.setItem(informacoesUsuario.email, JSON.stringify(informacoesUsuario));
    })
});