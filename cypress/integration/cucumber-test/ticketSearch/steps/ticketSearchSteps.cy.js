import {Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import TicketSearchPage from '../pages/ticketSearchPage'

Given ('I navigate to the ticket webpage', () => {
    TicketSearchPage.visitTicketSearchPage()
})


When ('I enter the departure location as {string}', (depLoc) => {
    TicketSearchPage.setDepartureLocation(depLoc)
})

When ('I enter the destination location as {string}', (destLoc) => {
    TicketSearchPage.setDestinationLocation(destLoc)
})

When ('I enter the departure date as {string} days from today', (delay) => {
    TicketSearchPage.setDepartureDate(delay)
})

When ('I enter the return date as {string} days from today', (delay) => {
    TicketSearchPage.setReturnDate(delay)
})

When ('the submit button is clicked', () => {
    TicketSearchPage.submitForm()
})

Then ('the user shall be redirected to the ticket page', () => {
    TicketSearchPage.checkTLPage()
})

When ('the user shall be redirected to the ticket page', () => {
    TicketSearchPage.checkTLPage()
})

When ('the user clicks on the cancel button', () => {
    TicketSearchPage.cancelToMain()
})

Then ('the user will be redirected back to the homepage', () => {
    TicketSearchPage.checkMain()
})