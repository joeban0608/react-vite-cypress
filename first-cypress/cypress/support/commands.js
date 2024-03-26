// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("onClickCount", (initialCount = 0, maxCount = 5) => {
  let count = initialCount;
  while (count < maxCount) {
    cy.get(`[data-test-id='cypress-count-button']`)
      .should("exist")
      .should("have.text", `count is ${count}`);
    count++;
    cy.wait(2000);
    cy.get(`[data-test-id='cypress-count-button']`).click();
    cy.get(`[data-test-id='cypress-count-button']`)
      .should("exist")
      .should("have.text", `count is ${count}`);
  }
});
