/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("src/index.html");
  });

  //--------------- Adicione um anexo -----------------------

  it("seleciona um arquivo da pasta fixtures", () => {
    cy.get("#file-upload")
      .should("not.have.value")
      .selectFile("cypress/fixtures/example.json")
      .should((input) => {
        expect(input[0].files[0].name).to.equal("example.json");
      });
  });

  //arrastar arquivo para o campo
  it("seleciona um arquivo simulando um drag-and-drop", () => {
    cy.get("#file-upload")
      .should("not.have.value")
      .selectFile("cypress/fixtures/example.json", { action: "drag-drop" })
      .should((input) => {
        expect(input[0].files[0].name).to.equal("example.json");
      });
  });

  //renomear o arquivo
  it.only("seleciona um arquivo utilizando uma fixture para a qual foi dada um alias", () => {
    cy.fixture("example.json").as("newFileName");
    cy.get("#file-upload")
      .selectFile("@newFileName")
      .should((input) => {
        expect(input[0].files[0].name).to.equal("example.json");
      });
  });
});
