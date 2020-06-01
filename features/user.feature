Feature: Actions to a new user
    As a user
    I want to delete  a new user of vacations management Gap page

Scenario Outline: Validate employee created
    Given I launch "<url>"
    And I enter "<email>" and "<password>"
    And I click on login button
    When I go to "<homepage>"
    Then I validate the row of new employee with "<id>"

Scenario Outline: Delete employee
    Given I launch "<url>"
    And I enter "<email>" and "<password>"
    And I click on login button
    When I go to "<homepage>"
    And I delete the employee
    Then the employee with "<id>" does not appear in the employee table

Examples:
    | url | email | password | id | homepage |
    | https://vacations-management.herokuapp.com/ | gap-automation-test@mailinator.com | 12345678 | 123456789 | https://vacations-management.herokuapp.com/employees |
