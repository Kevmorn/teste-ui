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

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#inputUsuarioLogin').type(usuario)
    cy.get('#inputSenhaLogin').type(senha)
    cy.get('#botaoLogin').click()
})
Cypress.Commands.add('preCadastro', ()=>{
    cy.visit('https://accounts.google.com/signup')
        cy.get('#firstName').type(fakerFirstName)
        cy.get('#lastName').type(fakerLastName)
        cy.get('#username').type(fakerFirstName)
        cy.get('#passwd').type(fakerFirstName)
        cy.get('#confirm-passwd').type(fakerFirstName)
        cy.get('.VfPpkd-muHVFf-bMcfAe').click()
        cy.get('#accountDetailsNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
    
})