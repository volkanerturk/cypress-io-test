context("Visit Meta231", () => {
    it("Sendkeys username", () => {
        cy.visit("https://www.facebook.com");
        cy.get('[data-testid="royal_email"]').type("123456");
        cy.get('[data-testid="royal_email"]').clear();
    });
});