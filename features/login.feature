Feature: Login into vacation management GAP website
    As a user
    I want to login into vacations management GAp page

Background:
    Given I navigate to "https://vacations-management.herokuapp.com/"

Scenario: Login with valid credentials 
    When I enter email and password as valid
        | email | gap-automation-test@mailinator.com |
        | password | 12345678 |
    And I click on login button
    Then I am able to login



    