// https://docs.cypress.io/api/introduction/api.html

describe('Todo app', () => {
  it('adding a new todo adds it to the list', () => {
    cy.visit('/')

    cy.get('li').should('have.length', 3)

    cy.get('input').type('A new url{enter}').then;

    cy.get('li').should('have.length', 4)

  });

  it('deletes a todo when clicking on the corresponding button', () => {
    cy.visit('/')

    cy.get('li').should('have.length', 3)

    cy.get('button.rm:first').click()

    cy.get('li').should('have.length', 2)

  });

  it('clears all todos when clicking the button', () => {
    cy.visit('/')

    cy.get('li').should('have.length', 3)

    cy.get('button.rmAll').click()

    cy.wait(2000)

    cy.get('li').should('have.length', 0)

  });

})
