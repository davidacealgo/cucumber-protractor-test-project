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

Scenario Outline: Validate employee created
    Given I launch "<url>"
    And I enter "<email>" and "<password>"
    And I click on login button
    When I am on homepage
    Then I validate the row of new employee with "<id>"

#Scenario Outline: Delete employee
#    Given I launch "<url>"
#    And I enter "<email>" and "<password>"
#    And I click on login button
#    And I am on homepage
#    When I delete the employee with "<id>"
#    Then the employee does not appear in the employee table


Examples:
    | url | email | password | firstName| lastName | email | identification | leaderName | day | month | year |
    | https://vacations-management.herokuapp.com/ | gap-automation-test@mailinator.com | 12345678 | James | Smith | jamess@g.co | 1234567890 | James | 21 | 1 | 2015 |
