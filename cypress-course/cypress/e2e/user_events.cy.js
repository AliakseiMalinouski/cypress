describe('user events', () => {
    it('button click test', () => {
        cy.visit('http://localhost:5173/');
        cy.get('div.card button').click();
    });
    it('input change test', () => {
        cy.visit('http://localhost:5173/');
        cy.get('div.card input').focus();
        cy.get('div.card input').should('have.focus', 1);
    });
});