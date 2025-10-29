Cypress.on("window:before:load", (win) => {
  cy.stub(win, "fetch");
});
