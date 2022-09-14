import loginPage from '../pages/fbLoginPage.cy'

context("Login Test", () => {
    beforeEach(() => {
        cy.visit("https://facebook.com");

    });
        it("Click login buton and send user login form", () => {
            cy.visit("https://www.facebook.com");
            loginPage.sendTypeUsername();
            loginPage.sendTypePassword('123456789');
            loginPage.clickLoginBtn(); 
            loginPage.assertLogin();           
    });
});