import { pageObjectHome } from "../support/page-objects/PageObjectHome"
import { pageObjectLogin } from "../support/page-objects/PageObjectLogin"
import { pageObjectAccount } from "../support/page-objects/PageObjectAccount"

describe('Login tests', () => {
  it('Successful login', () => {
    const preRegisteredUserEmail = "my@email.cz"
    const preRegisteredUserPassword = "mypassword"
    cy.visitHome()

    pageObjectHome.clickLogin()

    pageObjectLogin.typeEmail(preRegisteredUserEmail)
    pageObjectLogin.typePassword(preRegisteredUserPassword)
    pageObjectLogin.clickLogin()

    // Test currently failing due to user login not working correctly
    pageObjectAccount.assertUserLoggedIn(preRegisteredUserEmail)

  })
})