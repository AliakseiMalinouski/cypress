/// <reference types="Cypress" />  

describe(('contact fields tests'), () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('button submit as', () => {
        cy.get('[data-cy="contact-btn-submit"]').as('submitButton');
        cy.get('@submitButton').should('have.attr', 'type');
        cy.submitForm();
    });
    it('then method', () => {
        cy.get('[data-cy="contact-btn-submit"]').then((element) => {
            expect(element).to.not.have.attr('disabled');
        });
        cy.screenshot();
    });
});