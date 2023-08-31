/// <reference types="Cypress" />

  //--------------- Lodash invoke -----------------------
  describe("Central de Atendimento ao Cliente TAT", () => {
    beforeEach(() => {
      cy.visit("src/index.html");
    })
  it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })

    it.only('Preenche a área de texto usando o comando invoke', () => {  
      const longText = Cypress._.repeat('teste teste', 20)

      cy.get("#open-text-area")
      .invoke('val', longText)
      .should('have.value', longText)

    });
  
})