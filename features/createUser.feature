Feature: Create a new user
    As a user
    I want to create a new user into vacations management Gap page

Scenario Outline: Create a new employee 
    Given I launch "<url>"
    And I enter "<email>" and "<password>"
    And I click on login button
    And I am on homepage
    When I go to create user
    And I create a user with "<firstName>" and "<lastName>" and "<email>" and "<identification>" and "<leaderName>"
    And I select start working in "<day>" and "<month>" and "<year>"
    And I click create Employee button
    Then user is created

Examples:
| url | email | password | firstName| lastName | email | identification | leaderName | day | month | year |
| https://vacations-management.herokuapp.com/ | gap-automation-test@mailinator.com | 12345678 | James | Smith | jamess@g.co | 123456789 | James | 21 | 1 | 2015 |
