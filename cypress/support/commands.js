Cypress.Commands.add(
  "fillMandatoryFieldsAndSubmit",
  (nome, sobrenome, email, text) => {
    //Nome
    cy.get("#firstName").type(nome);
    //sobrenome

    cy.get("#lastName").type(sobrenome);
    //email

    cy.get("#email").type(email);
    //Como podemos te ajudar?

    cy.get("#open-text-area").type(text);

    //botão enviar
    cy.contains("button", "Enviar").click();
  }
);
