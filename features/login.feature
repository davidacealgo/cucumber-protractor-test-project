Feature: Login into vacation management GAP website
    As a user
    I want to login into vacations management GAp page

Background:
    Given I launch url

Scenario: Login with valid credentials 
    When I enter email and password as valid
    And I click on login button
    Then verify that the user is logged in
