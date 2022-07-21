context('Visitar a porra do site para colher dados.', () => {
    it('Vistita essa poprra', () => {
        cy.visit('https://accounts.google.com/signup')
    });
});