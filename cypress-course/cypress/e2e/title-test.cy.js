/// <reference  types="Cypress"/>

describe('title', () => {
    it('should have title', () => {
        cy.visit('http://localhost:5173/');
        cy.get('h1').contains('Vite + React')
    });
}); 