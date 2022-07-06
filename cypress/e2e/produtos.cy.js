/// <reference types="cypress"/>

describe('Funcionalidade Pagina de Produto', () => {
    
    beforeEach(() => {
        cy.visit('https://www.zattini.com.br/roupas/masculino?mi=ztt_hm_masc_cat2_roupasmas&psn=Banner_BarradeCategorias_2masc&fc=barradecategorias')
    });
    
    
    it('', () => {
        cy.get('.item-card')
        .first()
        .click()
    });


});