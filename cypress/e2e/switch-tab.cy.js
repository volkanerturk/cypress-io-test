context("Switch tab test", () => {  
       /* it("Example 1 Failed ", () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get(".example > a")
        .click();
        cy.get("h3").should("have.text", "New Window") 
    });*/
    it("Example 2 Passed", () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get(".example > a")
        .invoke('removeAttr', 'target')
        .click();
        cy.get("h3").should("have.text", "New Window")
    });
});