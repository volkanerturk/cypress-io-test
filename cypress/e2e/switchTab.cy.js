Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
context.only('Switch tab test', function () {
    it("Visit tatil budur", () => {
        cy.visit('https://www.tatilbudur.com/yurtici-oteller', { timeout: 30000 });
    });
    it('Invoke delete and click hotel', function () {
        cy.contains("Bodrum View Resort")
        .invoke('removeAttr', 'target');
        cy.wait(2000);
        cy.contains("Bodrum View Resort")
        .click();
    })
    it('Assertion continue test', function () {
        cy.location()
        cy.wait(2000)
        cy.get('.mobile-bread-crumb')
        .should('have.text','    arama sonuçlarına geri dön')      
    })
})