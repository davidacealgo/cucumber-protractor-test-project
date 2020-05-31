Feature: Login into vacation management GAP website
    As a user
    I want to login into vacations management GAp page

Scenario Outline: Login with valid credentials 
    Given I launch "<url>"
    When I enter "<email>" and "<password>"
    And I click on login button
    Then verify that the user is logged in

Examples:
    | url| email | password |
    | https://vacations-management.herokuapp.com/ | gap-automation-test@mailinator.com | 12345678 |
