// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('adding a new url adds it to the list', () => {
    cy.visit('/')

    cy.get('li').should('have.length', 3)

    cy.get('input').type('A new url{enter}').then;

    cy.get('li').should('have.length', 4)

  });

  it('deletes a link when clicking on the corresponding button', () => {
    cy.visit('/')

    cy.get('li').should('have.length', 3)

    cy.get('button.rm:first').click()

    cy.get('li').should('have.length', 2)

  });

  it('clears all URLs when clicking the button', () => {
    cy.visit('/')

    cy.get('li').should('have.length', 3)

    cy.get('button.rmAll').click()

    cy.wait(2000)

    cy.get('li').should('have.length', 0)

  });

})
