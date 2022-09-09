Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a Tauri error about the window
    // and don't want to fail the test so we return false
    if (err.message.includes('window.__TAURI_IPC__ is not a function')) {
      return false;
    }
    // we still want to ensure there are no other unexpected
    // errors, so we let them fail the test
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