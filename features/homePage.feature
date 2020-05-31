Feature: Go to homepage
    As a user
    I want to stay in the homepage
    
Scenario Outline: Verify that the user is in the homepage
    Given I launch "<url>"
    And I enter "<email>" and "<password>"
    And I click on login button
    When the system redirect me to homepage
    Then I should see message of successfully logged in
    And I should see name user logged in
    And I should see the logo of GAP

Examples:
    | url | email | password |
    | https://vacations-management.herokuapp.com/ | gap-automation-test@mailinator.com | 12345678 |