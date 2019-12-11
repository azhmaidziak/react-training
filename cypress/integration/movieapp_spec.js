describe('My First Test', function() {
    beforeEach(() => {
        cy.visit('localhost:5555')
    });

    it('Visits the Kitchen Sink', function() {
        cy.get('#site-search').type("Hello")
    });

    it('Change Order', function() {
        cy.get("label[for='201']").click();
        cy.get('div[class*=src-components-renders-MoviesResultPane-module__MoviesResultPane-] :first-child img')
            .should('have.attr', 'src')
            .should('include',"https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg");

        cy.get("label[for='200']").click();
        cy.get('div[class*=src-components-renders-MoviesResultPane-module__MoviesResultPane-] :first-child img')
            .should('have.attr', 'src')
            .should('include',"https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg");
    });
});