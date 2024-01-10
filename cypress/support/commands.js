Cypress.Commands.add('visitHome', () => {
    cy.visit("/")
    cy.url().should("contain", "https://sweetshop.netlify.app/")
    // Banner specific for home page
    cy.get('img[src="img/sale.gif"]').should("be.visible")
})