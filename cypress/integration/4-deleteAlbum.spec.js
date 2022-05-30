describe('Given I want to delete an album', () => {
    before(() => {
        // Arrange
        cy.visit('http://localhost:3000/home/albums');

    })

    it ('The book should be eliminated and not be visible in the list of albums', () => {
        //Arrange
        cy.get('#Cambio').click();

        //
        cy.wait(2000)
        cy.reload();
        
        //Assert
        cy.contains('Cambio').should('not.exist')

    })

})