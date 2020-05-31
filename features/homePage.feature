Feature: Go to homepage
    As a user
    I want to stay in the homepage

Scenario: Verify that the user is in the homepage
    Given I am logged in
    When the system redirect me to homepage
    Then I should see message of successfully signed in
    And I should see name user signed in
    And I sould see the logo of GAP
