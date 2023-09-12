import loginPage from '../../support/pageObject/userPage'
const userr = require('../../fixtures/user.json')

describe('test saucedemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })
  it('C3 multiple failed login', () => {
    cy.fixture('fail-user.json').then((user) => {
      user.failed_login.forEach((datauser) => {
        cy.login(datauser.username,datauser.password)
        cy.get('[data-test="error"]').should('be.visible')
      })
    })
  })
  it('C17 success login with POM', () => {
    loginPage.inputUsername(userr[0].username)
    loginPage.inputPassword(userr[0].password)
    loginPage.clickLoginButton()
    loginPage.verifyProduct(userr[0].title)
  })
  it('C18 success login with fixtures', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user[0];
      cy.login(datauser.username,datauser.password)
      cy.get('.title').should('have.text', 'Products')
    })
  })
  it('C19 success login with custom command', () => {
    cy.login('standard_user','secret_sauce')
    cy.get('.title').should('have.text', 'Products')
  })
  it('C1 success login', () => {
    //cy.get('[data-test="username"]').type('standard_user')
    cy.ketik('[data-test="username"]', 'standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    //cy.get('[data-test="login-button"]').click()
    cy.klik('[data-test="login-button"]')
    cy.get('.title').should('have.text', 'Products')
  })
  it('C2 failed login - wrong credentials', () => {
    cy.get('[data-test="username"]').should('be.visible').type('salah user')
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    //cy.get('[data-test="error"]').should('contain.text', 'do not match')
    cy.verifyContain('[data-test="error"]','do not match')
  })
  it('C4 failed login - user locked out', () => {
    cy.get('[data-test="username"]').should('be.visible').type('locked_out_user')
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain.text', 'locked out')
  })
  //baru
  it.skip('failed login - empty username', () => {
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain.text', 'Username is required')
  })

})