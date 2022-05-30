//const { faker } = require('@faker-js/faker');
const { assert } = require('chai');
const chai = require('chai');


let albumName = "Nuevo";

describe('Given I want to get an album', () => {
    before(() => {
        // Arrange
        cy.visit('http://localhost:3000/home/albums');
        
    })

    it ('The album should be visible in the list of albums', () => {
        //Assert
        cy.contains(albumName).should('exist')

    })

})