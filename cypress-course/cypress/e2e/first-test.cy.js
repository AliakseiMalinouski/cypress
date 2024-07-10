/// <reference types="Cypress" />

describe('template spec', () => {
  it('visit test', () => {
    cy.visit('http://localhost:5173/');
  });
  
  it('should have div container', () => {
    cy.get('div').should('have.length', 1);
  });

  it('should have button element inside card block', () => {
    cy.get('div.card button').should('have.length', 1);
  });
})