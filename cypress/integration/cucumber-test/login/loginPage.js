const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'
const VALIDATIONMESSAGE = '.alert-error'

class LoginPage{

    //visit webpage
    static visitLoginPage() {
        cy.visit(URL)
    }

    //fill username
    static fillUsername(username) {
        cy.get(USERNAME_INPUT).type(username)
    }

    //fill password
    static fillPassword(password) {
        cy.get(PASSWORD_INPUT).type(password)
    }

    //submit form
    static submitForm() {
        cy.get(SUBMIT_BUTTON).click()
    }

    //validation message
    static showErrorMessage() {
        cy.get(VALIDATIONMESSAGE).contains(validation)
    }
}

export default LoginPage