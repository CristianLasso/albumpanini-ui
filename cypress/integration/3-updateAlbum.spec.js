//const { faker } = require('@faker-js/faker');
const { assert } = require('chai');
const chai = require('chai');


let albumName = "Cambio";
let laminas = "100";

describe('Given I want to edit an album name', () => {
    before(() => {
        // Arrange
        cy.visit('http://localhost:3000/home/albums');
        cy.get('#edit-Nuevo').click();
        cy.get('[placeholder="Nombre del Album"]').click();
        cy.get('[placeholder="Nombre del Album"]').type(albumName);

        // Act
        cy.contains('Editar').click();

        //
        cy.wait(4000)
        cy.reload();
        

    })

    it ('The album with the new name should be visible in the list of albums', () => {
        //Assert
        cy.contains(albumName).should('exist')

    })

})

describe('Given I want to edit the album laminas', () => {
    before(() => {
        // Arrange
        cy.visit('http://localhost:3000/home/albums');
        cy.get('#edit-Nuevo-2').click();
        cy.get('[placeholder="Cantidad de laminas"]').click();
        cy.get('[placeholder="Cantidad de laminas"]').type(laminas);

        // Act
        cy.contains('Editar').click();

        //
        cy.wait(4000)
        cy.reload();
        

    })

    it ('The album with the new laminas should be visible in the list of albums', () => {
        //Assert
        cy.contains(laminas).should('exist')

    })

})