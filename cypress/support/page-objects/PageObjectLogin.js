class PageObjectLogin {
    typeEmail(email) {
        cy.get('input[type="email"]').clear().type(email)
    }

    typePassword(password) {
        cy.get('input[type="password"]').clear().type(password)
    }

    clickLogin() {
        cy.get('button[type="submit"]').click()
    }
}

export const pageObjectLogin = new PageObjectLogin()