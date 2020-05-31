Feature: Login into vacation management GAP website
    As a user
    I want to login into vacations management Gap page

Scenario Outline: Login with valid credentials 
    Given I launch "<url>"
    When I enter "<email>" and "<password>"
    Then I click on login button

Examples:
    | url | email | password |
    | https://vacations-management.herokuapp.com/ | gap-automation-test@mailinator.com | 12345678 |
