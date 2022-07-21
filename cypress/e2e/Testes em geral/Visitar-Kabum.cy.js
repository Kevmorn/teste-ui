context('Visitar a porra do site para colher dados.', () => {
    it('Vistita essa poprra', () => {
        cy.visit('https://www.kabum.com.br/computadores/notebooks/notebook-dell?page_number=1&page_size=80&facet_filters=&sort=most_searched')
    });
});