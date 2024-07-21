describe('pages navigation', { browser: 'firefox', defaultCommandTimeout: 5000 }, () => {
    it('should navigate between pages', () => {
        cy.visit('/');
        cy.get('[data-cy="header-about-link"]').click();
        cy.location('pathname').should('equal', '/about');
        cy.go('back').location('pathname').should('equal', '/');
    });
});