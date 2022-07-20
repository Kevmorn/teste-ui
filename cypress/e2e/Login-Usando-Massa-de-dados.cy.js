/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json') // o comando ".. serve para meio que sair desta pasta e ir para as demais. "
beforeEach(() => {
  cy.visit('login')
});

context('Funcionalidade Login', () => {
  it('Deve Fazer Login com Sucesso e Tambem deslogar.', () => {
    cy.get('#inputUsuarioLogin').type(perfil.usuario)
    cy.get('#inputSenhaLogin').type(perfil.senha)
    cy.get('#botaoLogin').click()
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('.IconClose').click()
    cy.get('[data-testid="drawerButton"]').click()
    cy.get('.sc-evZas').click()
    cy.get('.sc-tsFYE').should('contain', 'Olá. Faça seu login')
  });
  it.only('Deve fazer login com sucesso - usando fixture', () => {
    cy.fixture('perfil').then(dados=> {  //utilizando a massa de dados direto da pasta fixture e criando a variavel "dados"
      cy.get('#inputUsuarioLogin').type(dados.usuario) //variavel dados.usuario
      cy.get('#inputSenhaLogin').type(dados.senha, {log: false}) // mesma coisa de cima mas colocou o log:false para não exibir a senha ou log.
      cy.get('#botaoLogin').click()
      cy.get('#onetrust-accept-btn-handler').click()
      cy.get('.IconClose').click()
      cy.get('[data-testid="drawerButton"]').click()
      cy.get('.sc-evZas').click()
      cy.get('.sc-tsFYE').should('contain', 'Olá. Faça seu login')
    })



  });
  it('deve exibir uma mensagem de erro ao inserir usuario invalidos', () => {
    cy.get('#inputUsuarioLogin').type('dsaddadsads@hotmail.com')
    cy.get('#inputSenhaLogin').type('123456789cris')
    cy.get('#botaoLogin').click()
    cy.get('.sc-bjUoiL').should('contain.text', 'Dados inválidos')
  });
  it('deve exibir uma mensagem de erro ao inserir senha invalidos', () => {
    cy.get('#inputUsuarioLogin').type('cristiano.duro97@gmail.com')
    cy.get('#inputSenhaLogin').type('dasdsadsa')
    cy.get('#botaoLogin').click()
    cy.get('.sc-bjUoiL').should('contain.text', 'Dados inválidos')
  });
});