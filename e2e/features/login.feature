Feature: Login into vacation management GAP website
    As a user
    I want to login into vacations management Gap page and validate that I am logged in

Scenario Outline: Login with valid credentials 
    Given I launch "<url>"
    When I enter "<email>" and "<password>"
    Then I click on login button

Scenario Outline: Verify that homepage appears if user is logged in 
    Given I launch "<url>"
    And I enter "<email>" and "<password>"
    And I click on login button
    When I am on the homepage
    Then I should see message of successfully logged in
    And I should see name user logged in
    And I should see the logo of GAP

Examples:
    | url | email | password |
    | https://vacations-management.herokuapp.com/ | gap-automation-test@mailinator.com | 12345678 |
