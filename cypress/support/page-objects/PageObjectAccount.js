class PageObjectAccount {
    assertUserLoggedIn(email) {
        cy.get('p[class="lead"]').contains(email).should("be.visible")
    }
}

export const pageObjectAccount = new PageObjectAccount()