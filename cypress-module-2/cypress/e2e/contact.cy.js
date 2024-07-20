/// <reference  types="Cypress"/>

describe(('contact fields tests'), () => {
    it('button submit as', () => {
        cy.visit('http://localhost:5173/');
        cy.get('[data-cy="contact-btn-submit"]').as('submitButton');
        cy.get('@submitButton').should('have.attr', 'type');
    });
    it('then method', () => {
        cy.visit('http://localhost:5173/');
        cy.get('[data-cy="contact-btn-submit"]').then((element) => {
            expect(element).to.not.have.attr('disabled');
        });
        cy.screenshot();
    });
});