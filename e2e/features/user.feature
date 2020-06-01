Feature: Actions to a new user
    As a user
    I want to delete  a new user of vacations management Gap page

Scenario Outline: Delete employee
    Given I launch "<url>"
    And I enter "<email>" and "<password>"
    And I click on login button
    And I go to "<homepage>"
    When I validate the row of new employee with "<id>"
    And I delete the employee with "<id>"
    Then the employee with "<id>" does not appear in the employee table

Examples:
    | url | email | password | id | homepage |
    | https://vacations-management.herokuapp.com/ | gap-automation-test@mailinator.com | 12345678 | 1234567890 | https://vacations-management.herokuapp.com/employees |
