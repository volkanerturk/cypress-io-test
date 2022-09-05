context("Login Test", () => {
    beforeEach(() => {
        cy.visit("https://www.facebook.com");
    });
    it("Click login buton and send user login form", () => {
        cy.get('[data-testid="royal_email"]').type("123456");
        cy.get('[data-testid="royal_email"]').clear();
});
});