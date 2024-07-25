/// <reference types="cypress" />

describe('share location', () => {
  it('should fetch the user location', () => {
    cy.visit('/').then((win) => {
      if('navigator' in win) {
        cy.stub(window.navigator.geolocation, 'getCurrentPosition').as('getUserPosition')
        .callsFake((cb) => {
          setTimeout(() => {
            cb({
              coords: {
                latitude: 0.1,
                longitude: 0.1,
              }
            });
          }, 100);
        });
      }
    });
    cy.get('[data-cy="get-loc-btn"]').click();
    cy.get('@getUserPosition').should('have.been.called');
  });
});
