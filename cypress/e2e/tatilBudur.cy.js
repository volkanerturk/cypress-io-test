Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
context('Switch tab test', function () {
    it("Visit tatil budur", () => {
        cy.visit('https://www.tatilbudur.com/');
    });
    it('Invoke delete and click hotel', function () {
        cy.contains("Siam Elegance Hotels Spa")
        .invoke('removeAttr', 'target');
        cy.wait(2000);
        cy.contains("Siam Elegance Hotels Spa")
        .click();
    })
    it('Assertion continue test', function () {
        cy.location()
        cy.wait(2000)
        cy.get('.mobile-bread-crumb')
        .should('have.text','    arama sonuçlarına geri dön')      
    })
})