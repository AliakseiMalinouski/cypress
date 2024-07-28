/// <reference types="cypress" />

describe('share location', () => {
  beforeEach(() => {
    cy.clock();
    cy.fixture('user_location.json').as('userLocation');
    cy.visit('/').then((win) => {
      cy.get('@userLocation').then((params) => {
        if('navigator' in win) {
          cy.stub(window.navigator.geolocation, 'getCurrentPosition').as('getUserPosition')
          .callsFake((cb) => {
            setTimeout(() => {
              cb(params);
            }, 100);
          });
          cy.stub(window.navigator.clipboard, 'writeText')
          .as('copyToClipboard')
          .resolves();
        }
        if('localStorage' in win) {
          cy.spy(win.localStorage, 'setItem').as('setStore');
          cy.spy(win.localStorage, 'getItem').as('getStore');
        }
      });
    });
  })
  it('should fetch the user location', () => {
    cy.get('[data-cy="get-loc-btn"]').click();
    cy.get('@getUserPosition').should('have.been.called');
    cy.get('@copyToClipboard').should('have.been.called');
    cy.get('@setStore').should('have.been.called');
    cy.tick(2000);
  });
});
