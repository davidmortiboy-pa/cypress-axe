/// <reference types="Cypress" />

describe('Window', () => {
  beforeEach(() => {
    cy.visit('http://google.com')
      .debug();
    cy.injectAxe();
  });

  it('Has no detectable a11y violations on load', () => {
    // https://on.cypress.io/window
    try {
      cy.checkA11y()
        .debug();
    } catch(e) {
      cy.debug();
      console.log(e);
    }

  });
});
