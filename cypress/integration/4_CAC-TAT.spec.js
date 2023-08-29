/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("src/index.html");
  });

  
  //--------------Checkbox Qual seu meio de contato preferencial? -----------------------

  it("marca ambos checkboxes, depois desmarca o último", () => {
    cy.get('input[type="checkbox"]')
      .check()
      .last()
      .uncheck()
      .should("not.be.checked");
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", () => {
   //Qual seu meio de contato preferencial?
   cy.get("#phone-checkbox").should("be.visible").check();

   cy.fillMandatoryFieldsAndSubmit(
     "João",
     "Silva",
     "teste@teste.com",
     "teste"
   );

   // Verificação da mensagem de erro
   cy.get("span.error").should("be.visible");
  });
  

});
