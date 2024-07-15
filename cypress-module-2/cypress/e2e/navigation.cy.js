/// <reference  types="Cypress"/>

describe('pages navigation', () => {
    it('should navigate between pages', () => {
        cy.visit('http://localhost:5173/');
        cy.get('[data-cy="header-about-link"]').click();
        cy.location('pathname').should('equal', '/about');
        cy.go('back').location('pathname').should('equal', '/');
    });
});