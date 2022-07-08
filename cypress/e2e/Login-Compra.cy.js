/// <reference types="cypress"/>

context('Login e Realizar Compras', () => {

   // beforeEach(() => {
     //   cy.visit('https://www.kabum.com.br/login')
   // });
    it('Login e clickar', () => {
        cy.visit('https://www.kabum.com.br/login')
        cy.get('#inputUsuarioLogin')
            .type('Cristiano.duro97@gmail.com')
        cy.get('#inputSenhaLogin')
            .type('123456789cris')
        cy.get('#botaoLogin')
            .click()
            cy.get('#buttonNaoTenhoInteresse')
            .click()
            cy.get('#onetrust-accept-btn-handler')
            .click()
    });

    it.only('Adicionar ao carrinho.', () => {
        //var quantidade = 3 variavel usada para guardar quantidade.
        cy.visit('https://www.kabum.com.br/computadores/notebooks/notebook-dell?page_number=1&page_size=80&facet_filters=&sort=most_searched')
        cy.get('.sc-cqYYBx')
        .eq(32)
        .click()
        cy.get('.sc-cUcmyX')
        .contains('PRODUTO ADICIONADO NO CARRINHO')
    });
});