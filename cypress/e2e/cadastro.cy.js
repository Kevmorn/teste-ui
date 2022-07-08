/// <reference types="cypress"/>

const faker = require('faker');

beforeEach(() => {
    cy.visit('https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp')
});
context('Funciolalidade Pré Cadastro', () => {
    it.only('deve completar cadastro com sucesso', () => {
        let emailFaker = faker.internet.email()
        let fakerLastName = faker.name.firstName()
        let fakerFirstName = faker.name.lastName()

        cy.visit('https://accounts.google.com/signup')
        cy.get('#firstName').type(fakerFirstName)
        cy.get('#lastName').type(fakerLastName)
        cy.get('#username').type(fakerFirstName)
        cy.get('#passwd').type(fakerFirstName)
        cy.get('#confirm-passwd').type(fakerFirstName)
        cy.get('.VfPpkd-muHVFf-bMcfAe').click()
        cy.get('#accountDetailsNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
    });
});