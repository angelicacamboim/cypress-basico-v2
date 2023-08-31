/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("src/index.html");
  });
  //--------------- Request -----------------------

  it("faz uma requisição HTTP", () => {
    cy.request("https://cac-tat.s3.eu-central-1.amazonaws.com/index.html")
    .should((response) => {
      const {status, statusText, body } = response
      expect(status).to.equal(200)
      expect(statusText).to.equal('OK')
      expect(body).to.include('CAC TAT')
      
    })
  });
  
});
