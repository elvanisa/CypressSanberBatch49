class LoginPage {

    username = '[data-test="username"]'
    passw = '[data-test="password"]'
    loginBtn = '[data-test="login-button"]'
    errorMsg = '[data-test="error"]'
    title = '.title'

    inputUsername(username) {
      cy.get(this.username).type(username)
    }
  
    inputPassword(password) {
      cy.get(this.passw).type(password)
    }
  
    clickLoginButton() {
      cy.get(this.loginBtn).click()
    }
    
    verifyProduct(title) {
        cy.get(this.title).should('have.text', title)
    }

}

    
  
export default new LoginPage()