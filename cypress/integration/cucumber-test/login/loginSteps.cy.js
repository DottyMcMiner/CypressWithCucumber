import {Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginpage'

Given ('I open the login page', () => {
    //open login page
    //cy.visit('http://zero.webappsecurity.com/login.html')
    LoginPage.visitLoginPage()

})
    
When ('I enter a valid username {string}', username => {
    // fill username
    //cy.get('#user_login').type('username')
    LoginPage.fillUsername(username)
 })

 When ('I enter a valid password {string}', password => {
    // fill password
    //cy.get('#user_password').type('password')
    LoginPage.fillPassword(password)
 })

 When ('I click on the submit button', () => {
     // submit the form
    //cy.get('input[name="submit"]').click()
    LoginPage.submitForm()
 })

Then ('I should see the homepage', () => {
    // check homepage is displayed
    cy.get('#account_summary_tab').should('be.visible')
})

When ('I enter an invalid username {string}', username => {
    LoginPage.fillUsername(username)
})

When ('I enter an invalid password {string}', password => {
    LoginPage.fillPassword(password)
})

Then ('I should see the validation message {string}', (validation) => {
    LoginPage.showErrorMessage(validation)
})