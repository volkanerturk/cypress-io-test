context("Visit Facebook", () => {
    it("Sendkeys username and clear", () => {
        cy.visit("https://www.facebook.com");
        cy.get('[data-testid="royal_email"]').type("123456");
        cy.get('[data-testid="royal_email"]').clear();
    });
});