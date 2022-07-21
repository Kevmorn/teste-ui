/// <reference types="cypress" />


describe('funcionalidade Endereços - Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.visit('login')
        cy.fixture('perfil').then(dados =>{
        cy.login(dados.usuario , dados.senha)
        })
        
    });
    
    it('Deve fazer Cadastro de um novo endereço com sucesso', () => {
       

    });
});