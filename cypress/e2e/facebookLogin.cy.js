import loginPage from '../pages/fbLoginPage.cy'

context("Failed Login Test", () => {
    beforeEach(() => {
        cy.visit("https://facebook.com");

    });
        it("Click login buton and send user login form", () => {
            cy.request("https://www.facebook.com")
            .its('headers')
            .its('content-type')
            .should('include', 'text/html; charset="utf-8');
            loginPage.sendTypeUsername();
            loginPage.sendTypePassword();
            loginPage.clickLoginBtn(); 
            loginPage.assertLogin();           
    });
});