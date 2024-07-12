describe('find', () => {
    it('should find elem', () => {
        cy.visit('http://localhost:5173/');
        cy.get('div.card').find('p');
    });
})