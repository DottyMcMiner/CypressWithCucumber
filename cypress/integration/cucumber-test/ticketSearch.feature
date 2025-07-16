Feature: ticketSearch

    As a valid user
    I would like to be able to view the tickets that are available between two locations at a given date

    Scenario: Ticket Search
     Given I navigate to the ticket webpage
     When I enter the departure location as "Lagos"
     And I enter the destination location as "Porto Campanha"
     And I enter the return date as "5" days from today
     And I enter the departure date as "3" days from today
     And the submit button is clicked
     Then the user shall be redirected to the ticket page

    Scenario: Cancelling out after ticket Search
     Given I navigate to the ticket webpage
     When I enter the departure location as "Lagos"
     And I enter the destination location as "Porto Campanha"
     And I enter the return date as "5" days from today
     And I enter the departure date as "3" days from today
     And the submit button is clicked
     And the user shall be redirected to the ticket page
     And the user clicks on the cancel button
     Then the user will be redirected back to the homepage