describe('My tests', () => {
  it('Зайти на сайт', () => {
    cy.visit('https://example.cypress.io/')

    


   })
   it('Перейти на страницу Utilities', () => {

    cy.visit('https://example.cypress.io/')

    cy.contains('Utilities').click()

    cy.contains('Sweaters').click().should('have.class', 'active')


   })
   it('Перейти на страницу Cypress API', () => {

    cy.visit('https://example.cypress.io/')

    cy.contains('Cypress API').click()

    cy.contains('I\'m visible!')


   })

   it('Перейти на главную страницу', () => {

    cy.visit('https://example.cypress.io/')

    cy.contains('get').click()

    cy.get('#inputName').type('Nikita').should('have.value', 'Nikita')
    cy.get('#inputEmail').type('Fake@email.com').should('have.value', 'Fake@email.com')
    cy.get('#inputPassword').type('Test123').should('have.value', 'Test123')
   })

   it('Выбрать команду из выпадающего списка в меню', () => {

    cy.visit('https://example.cypress.io/')

    cy.contains('Commands').click()
    cy.contains('Aliasing').click()

    cy.get('tbody button').first().click().should('have.class', 'btn-success')
    
   })

   it('Выбрать команду из выпадающего списка в меню', () => {

    cy.visit('https://example.cypress.io/')

    cy.contains('Commands').click()
    cy.contains('Waiting').click()

    cy.get('.wait-input1').type('Test text').should('have.value', 'Test text')

    cy.get('button.btn').click()

    cy.contains('laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium')

   })
})
