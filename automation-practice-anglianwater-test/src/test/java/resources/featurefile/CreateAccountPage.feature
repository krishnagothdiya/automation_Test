@CreateAccount
Feature: Create Account Page Test
  As user I want to Create Account in automation website

  Scenario: Verify user should Create Account successfully
    Given I am on homepage
    When I click on Signin link
    And I enter email for create account "kag54@gmail.com"
    And I click on Create an account button
    And I enter First name "Krish"
    And I enter Last name "Gotha"
    And I enter password for create account "kag123"
    And I enter address "Hello Street"
    And I enter city "Texas"
    And I select state "Texas"
    And I enter zipCode "32324"
    And I select country "United States"
    And I enter phone number "0785684545"
    And I enter adddress refrence "My Address"
    And I click Register button
    And I should verify My Account message
    And I click on singout
   Then I should verify sign in button



