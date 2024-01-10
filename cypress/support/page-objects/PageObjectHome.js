class PageObjectHome {
    clickLogin() {
        cy.get('a[href="/login"]').click()
        cy.get('input[type="email"]').should("be.visible")
    }
}

export const pageObjectHome = new PageObjectHome()