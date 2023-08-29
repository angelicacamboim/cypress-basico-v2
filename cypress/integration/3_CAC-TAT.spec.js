/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/src/index.html");
  });

  //-----------------Radiobox Tipo de atendimento --------------------------------------
  it("marca o tipo de atendimento 'Feedback'", () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should("have.value", "feedback");
  });

  it("marca cada tipo de atendimento", () => {
    cy.get(`input[type="radio"]`)
      .should("have.length", 3)
      .each((element) => {
        cy.wrap(element).check().should("be.checked");
      });
  });

});
