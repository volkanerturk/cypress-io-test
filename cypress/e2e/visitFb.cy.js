context("Visit Metax", () => {
    beforeEach(() => {
        cy.visit("https://www.facebook.com");
    });
    it("Sendkeys username", () => {
        cy.get('[data-testid="royal_email"]').type("123456");
        cy.get('[data-testid="royal_email"]').clear();
});
});