/// <reference types="cypress"/>

context('Login e Realizar Compras', () => {

    beforeEach(() => {
        cy.visit('https://www.zattini.com.br/login')
    });


    it('Login e clickar', () => {
        cy.get('#username')
        .type('cristiano.duro97@gmail.com')
        cy.get('#password')
        .type('852456cris')
        cy.get('.navbar__list > :nth-child(4) > a')
        .click()
        

    });

});