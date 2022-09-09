//Element Locator;

class loginPage {
    elements = {
        emailInput: ()=> cy.get('[data-testid="royal_email"]'),
        passwordInput: ()=> cy.get('[data-testid="royal_pass"]'),
        loginBtn: ()=> cy.get('[data-testid="royal_login_button"]'),
        loginFailed: ()=> cy.get('.uiHeaderTitle')
    }
//Type;
    sendTypeUsername(username){
        this.elements.emailInput().type(username);
    }
    sendTypePassword(password){
        this.elements.passwordInput().type(password)
    }
    clickLoginBtn(){
        this.elements.loginBtn().click()
    }
    assertLogin(){
        this.elements.loginFailed().should('be.visible')
    }
}

module.exports = new loginPage();