/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/src/index.html");
  });

  //--------------- Link de politica de privacidade -----------------------

  it("verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", () => {
    cy.get("#privacy a").should("have.attr", "target", "_blank");
  });

  //invoke - remove a target blank
  it("acessa a página da política de privacidade removendo o target e então clicando no link", () => {
    cy.get("#privacy a")
      .should("have.attr", "target", "_blank")
      .invoke("removeAttr", "target")
      .click();
    cy.contains("CAC TAT - Política de privacidade").should("be.visible");
  });

  //visitar a pagina de privacidade
  it.only("testa a página da política de privacidade de forma independente", () => {
  
    cy.visit("http://127.0.0.1:5500/src/privacy.html");
    
    cy.contains("CAC TAT - Política de privacidade").should("be.visible");

  });
  
});
