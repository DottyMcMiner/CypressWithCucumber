Feature: login

    As a valid user
    I want to log in into the Application
    As an invalid user
    I cannot log into the Application

    Scenario: Invalid login
     Given I open the login page
     When I enter an invalid username "invalid username"
     And I enter an invalid password "invalid password"
     And I click on the submit button
     Then I should see the validation message "Login and/or password are wrong."
    
    Scenario: Valid login
     Given I open the login page
     When I enter a valid username "username"
     And I enter a valid password "password"
     And I click on the submit button
     Then I should see the homepage

    