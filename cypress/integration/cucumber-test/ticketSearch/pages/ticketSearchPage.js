import { URL, departureLoc, destinationLoc, departureDate, returnDate, submit, ticketPage, cancel, dateConverter } from "../../../../fixtures/locators"

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