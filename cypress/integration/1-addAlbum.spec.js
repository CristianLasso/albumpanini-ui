//const { faker } = require('@faker-js/faker');
const { assert } = require('chai');
const chai = require('chai');


let albumName = "Nuevo";
let albumname2 = "Nuevo-2"
let laminas = "500";

describe('Given I want to register a new album with laminas', () => {
    before(() => {
        // Arrange
        cy.visit('http://localhost:3000/home/albums');
        cy.contains('Agregar album').click();
        cy.get('[placeholder="Nombre del Album"]').click();
        cy.get('[placeholder="Nombre del Album"]').type(albumName);
        cy.get('[placeholder="Cantidad de laminas"]').click();
        cy.get('[placeholder="Cantidad de laminas"]').type(laminas);

        // Act
        cy.contains('Crear').click();

        //
        cy.wait(4000)
        cy.reload();
        

    })

    it ('The new album should be visible in the list of albums', () => {
        //Assert
        cy.contains(albumName).should('exist')

    })

})

describe('Given I want to register a new album without laminas', () => {
    before(() => {
        // Arrange
        cy.visit('http://localhost:3000/home/albums');
        cy.contains('Agregar album').click();
        cy.get('[placeholder="Nombre del Album"]').click();
        cy.get('[placeholder="Nombre del Album"]').type(albumname2);

        // Act
        cy.contains('Crear').click();

        //
        cy.wait(4000)
        cy.reload();
        

    })

    it ('The new album should be visible in the list of albums', () => {
        //Assert
        cy.contains(albumName).should('exist')

    })

})

describe('Given I want to register a new album empty', () => {
    before(() => {
        // Arrange
        cy.visit('http://localhost:3000/home/albums');
        cy.contains('Agregar album').click();

        // Act
        cy.contains('Crear').click();

        //
        cy.wait(4000)
        cy.reload();

    })

    it ('The album should not be visible in the list of albums', () => {

        cy.get('#list').find('li').should('have.length', 1);

    })

})