@signinpage
Feature: SignPage Test
  As user I want to login and search product

  Scenario: User should verify LogIn SuccessFully With Valid Credentials, search product, add to cart and confirm order
    Given I am on homepage
    When I click on Signin link
    And I enter username "kag54@gmail.com"
    And I enter password "kag123"
    And I click on signIn button
    And I should verify sign out link
    And I should search Summer Dress in Blue
    And I select blue colour
    And I add to cart
    And I proceed to checkout
    And I select payment method
    And I confirm my order
    Then I verify message order is complete





