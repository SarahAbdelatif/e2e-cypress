describe("Text box with max characters" , () => {
    it('displays the appropriate remaining characters count', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]').as("charsLeftSpan");
        cy.get('[data-cy="input-last-name"]').as("lastNameInput");


        cy.get('@charsLeftSpan').then($charsLeftSpan => {
            expect($charsLeftSpan.text()).to.equal('15');
        });

        cy.get('@lastNameInput').type('hello');

        cy.get('@charsLeftSpan').invoke('text').should('equal','10');

        cy.get('@lastNameInput').type('My  Freind');

        cy.get('@charsLeftSpan').invoke('text').should('equal','0');
    });

    it('prevents the user from typing more characters once max was exceded' , () => {

        cy.visit('http://localhost:3000/example-3');
        cy.get('[data-cy="input-last-name"]').as("lastNameInput");


        cy.get('@lastNameInput').type('hello world and my friends'); 

        cy.get('@lastNameInput').should('have.attr', 'value' , 'hello world and');
    });
});