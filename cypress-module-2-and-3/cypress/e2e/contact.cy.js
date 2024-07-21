describe(('contact fields tests'), () => {
    it('button submit as', () => {
        cy.visit('/');
        cy.get('[data-cy="contact-btn-submit"]').as('submitButton');
        cy.get('@submitButton').should('have.attr', 'type');
    });
    it('then method', () => {
        cy.visit('/');
        cy.get('[data-cy="contact-btn-submit"]').then((element) => {
            expect(element).to.not.have.attr('disabled');
        });
        cy.screenshot();
    });
});