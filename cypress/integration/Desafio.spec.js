/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("src/index.html");
  });

  //--------------- Link de politica de privacidade -----------------------

    it('Desafio (encontre o gato)', () => {
  
      // Encontre o elemento do gato e use invoke('show') para mostrar o gato
      // Verifique se o gato está visível na página
      cy.get('#cat').invoke('show').should('be.visible');

      //Alterar titulo h1
      cy.get('#title').invoke('text', 'Gato').should('be.visible')
  
    });


});
