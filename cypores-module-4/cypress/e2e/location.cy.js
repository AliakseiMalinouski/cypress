/// <reference types="cypress" />

describe('share location', () => {
  it('should fetch the user location', () => {
    cy.visit('/').then((win) => {
      if('navigator' in win) {
        cy.stub(window.navigator.geolocation, 'getCurrentPosition').as('getUserPosition');
      }
    });
    cy.get('[data-cy="get-loc-btn"]').click();
    cy.get('@getUserPosition').should('have.been.called');
  });
});
