//Element Locator;

class loginPage {
    DATA={
        'username':'volkan@test.com',
        'password':'123456'
    }
    elements = {
        emailInput: ()=> cy.get('[data-testid="royal_email"]'),
        passwordInput: ()=> cy.get('[data-testid="royal_pass"]'),
        loginBtn: ()=> cy.get('[data-testid="royal_login_button"]'),
        loginFailed: ()=> cy.get('.uiHeaderTitle')
    }
//Function--
    sendTypeUsername(){
        this.elements.emailInput()
        .should('be.visible')
        .type(this.DATA.username)
    }
    sendTypePassword(){
        this.elements.passwordInput()
        .should('be.visible')
        .type(this.DATA.password)
    }
    clickLoginBtn(){
        this.elements.loginBtn()
        .should('be.visible')
        .click()
    }
    assertLogin(){
        this.elements.loginFailed()
        .should('be.visible')
    }
}
module.exports = new loginPage();