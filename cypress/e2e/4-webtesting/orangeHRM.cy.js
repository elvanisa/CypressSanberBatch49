describe('template spec', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('orange_url'))
  })
  it('failed login', () => {
    cy.get('[name="username"]').type(Cypress.env('username'))
    cy.get('[type="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content').should('be.visible')
  })
  it('success login', () => {
    cy.get('[name="username"]').type('Admin')
    cy.get('[type="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.url().should('include', '/dashboard/index')
  })
})