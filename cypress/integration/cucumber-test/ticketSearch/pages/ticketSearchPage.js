import { URL, departureLoc, destinationLoc, departureDate, returnDate, submit, ticketPage, cancel, actualDates, dateConverterMain, dateConverterResults } from "../../../../fixtures/locators"

// variables to store departure/return dates for future use so we only need to use the get date function once
var departureDateStorage = ""
var returnDateStorage = ""

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
        departureDateStorage = dateConverterMain(delay)
        cy.get(departureDate).clear().type(departureDateStorage)
    }

    //Enter return date
    static setReturnDate (delay) {
        returnDateStorage = dateConverterMain(delay)
        cy.get(returnDate).clear().type(returnDateStorage)
    }

    //Click on submit button
    static submitForm () {
        cy.get(submit).click()
    }

    //Inpect ticket listing page is displayed
    static checkTLPage () {
        cy.get(ticketPage).should('exist')
        cy.get(actualDates).contains(dateConverterResults(departureDateStorage))
        cy.get(actualDates).contains(dateConverterResults(returnDateStorage))
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