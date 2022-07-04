/// <reference types="cypress"/>

beforeEach(() => {
  cy.visit('https://www.kabum.com.br/login')
});

context('Funcionalidade Login', () => {
  it('Deve Fazer Login com Sucesso e Tambem deslogar.', () => {
      cy.get('#inputUsuarioLogin').type('cristiano.duro97@gmail.com')
      cy.get('#inputSenhaLogin').type('123456789cris')
      cy.get('#botaoLogin').click()
      cy.get('#onetrust-accept-btn-handler').click()
      cy.get('.IconClose').click()
      cy.get('[data-testid="drawerButton"]').click()
      cy.get('.sc-evZas').click()
      cy.get('.sc-tsFYE').should('contain', 'Olá. Faça seu login' )
  });
  it('deve exibir uma mensagem de erro ao inserir usuario invalidos', () => {
    cy.get('#inputUsuarioLogin').type('dsaddadsads@hotmail.com')
    cy.get('#inputSenhaLogin').type('123456789cris')
    cy.get('#botaoLogin').click()
    cy.get('.sc-bjUoiL').should('contain.text' , 'Dados inválidos')
  });
  it('deve exibir uma mensagem de erro ao inserir senha invalidos', () => {
    cy.get('#inputUsuarioLogin').type('cristiano.duro97@gmail.com')
    cy.get('#inputSenhaLogin').type('dasdsadsa')
    cy.get('#botaoLogin').click()
    cy.get('.sc-bjUoiL').should('contain.text' , 'Dados inválidos')
  });
});