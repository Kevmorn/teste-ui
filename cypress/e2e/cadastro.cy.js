/// <reference types="cypress"/>

const faker = require('faker');

beforeEach(() => {
    cy.visit('https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp')
});
context('Funciolalidade Pré Cadastro', () => {
    it.only('deve completar cadastro com sucesso', () => {
        cy.visit('https://accounts.google.com/signup')
        cy.get('#firstName').type(faker.name.firstName(6))
        cy.get('#lastName').type(faker.name.lastName())
        cy.get('#username').type(faker.name.firstName())
        cy.get('#passwd').type(faker.name())
        cy.get('#confirm-passwd').type(faker.name())
        cy.get('.VfPpkd-muHVFf-bMcfAe').click()
        cy.get('#accountDetailsNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
    });
});