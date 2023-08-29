/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("src/index.html");
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  //--------------- campos obrigatórios ----------------------------
  it("preenche os campos obrigatórios e envia o formulário", () => {
    //com delay 0 o teste fica mais rápido
    const longText =
      "Texto Longo - Delay. Texto Longo - Delay.Texto Longo - Delay.Texto Longo - Delay.Texto Longo - Delay.";

    cy.fillMandatoryFieldsAndSubmit(
      "João",
      "Silva",
      "joao@example.com",
      longText
    );

    //mensagem de sucesso
    cy.get("span.success").should("be.visible");
  });

  //--------------- campos obrigatórios + email inválido ----------------------------
  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.fillMandatoryFieldsAndSubmit("João", "Silva", "email_invalido", "teste");

    // Verificação da mensagem de erro
    cy.get("span.error").should("be.visible");
  });

  //--------------- telefone inválido ----------------------------
  it("não aceita valor não-numérico no campo de telefone", () => {
    cy.get("#phone").type("abc").should("have.value", "");
  });

  //--------------- campos obrigatórios + telefone obrigatório ----------------------------
  it("exibe mensagem de erro quando o telefone se torna obrigatório", () => {
    //Qual seu meio de contato preferencial?
    cy.get("#phone-checkbox").should("be.visible").click();

    cy.fillMandatoryFieldsAndSubmit(
      "João",
      "Silva",
      "teste@teste.com",
      "teste"
    );

    // Verificação da mensagem de erro
    cy.get("span.error").should("be.visible");
  });

  //--------------- Limpar campos com clear ----------------------------
  it("preenche e limpa o campo nome,", () => {
    //nome
    cy.get("#firstName")
      .type("Angelica")
      .should("have.value", "Angelica")
      .clear()
      .should("have.value", "");
   
  });

  //--------------- campos obrigatórios + mensagem de erro ----------------------------
  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", () => {
    //botão enviar
    cy.contains("button", "Enviar").click();

    // Verificação da mensagem de erro
    cy.get("span.error").should("be.visible");
  });

  //--------------- campos obrigatórios + comando customizado ----------------------------

  it("envia o formulário com sucesso usando um comando customizado", () => {
    // cypress/support/commands.js
    cy.fillMandatoryFieldsAndSubmit(
      "João",
      "Silva",
      "joao@example.com",
      "Teste"
    );

    //mensagem de sucesso
    cy.get("span.success").should("be.visible");
  });
});
