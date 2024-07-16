/// <reference  types="Cypress"/>

describe(('contact fields tests'), () => {
    it('button submit as', () => {
        cy.visit('http://localhost:5173/');
        cy.get('[data-cy="contact-btn-submit"]').as('submitButton');
        cy.get('@submitButton').should('have.attr', 'type');
    });
});