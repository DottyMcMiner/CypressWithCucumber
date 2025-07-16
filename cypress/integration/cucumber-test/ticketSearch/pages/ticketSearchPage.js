//import URL from '../e2e/fixtures/global'

// Import Day.js
const dayjs = require('dayjs');

//locators (could also go in a separate folder)
const URL = 'https://www.cp.pt/passageiros/en/buy-tickets'
const departureLoc = 'input[name="textBoxPartida"]'
const destinationLoc = 'input[name="textBoxChegada"]'
const departureDate = '#datepicker-first'
const returnDate = '#datepicker-second'
const submit = 'input[class="btn btn-primary btn-green pull-right"]'
const ticketPage = '#travelTerms'
const cancel = '#exitButton'

//function to find future date

function dateConverter (delay){
    const unformDate = dayjs().add(parseInt(delay), 'day');
    const formatedDate = unformDate.format('DD MMMM, YYYY');
    console.log(formatedDate);
    return formatedDate
}


//Main page class
class TicketSearchPage {

    //Navigate to URL
    static visitTicketSearchPage () {
        cy.visit(URL) 
    }

    //Enter departure location
    static setDepartureLocation (depLoc) {
        cy.get(departureLoc).type(depLoc + " ")
    }
    
    //Enter destination location
    static setDestinationLocation (destLoc) {
        cy.get(destinationLoc).type(destLoc + " ")
    }

    //Enter departure date
    static setDepartureDate (delay) {
        cy.get(departureDate).clear().type(dateConverter(delay))
    }

    //Enter destination date
    static setReturnDate (delay) {
        cy.get(returnDate).clear().type(dateConverter(delay))
    }

    //Click on submit button
    static submitForm () {
        cy.get(submit).click()
    }

    //Inpect ticket listing page is displayed
    static checkTLPage () {
        cy.get(ticketPage).should('exist')
    }

    //Click on the cancel button
    static cancelToMain () {
        cy.get(cancel).click()
    }

    //Inspect home page is displayed
    static checkMain () {
        cy.get(submit).should('exist')
    }

}

export default TicketSearchPage