Feature: Sauce Demo Shopping Cart

  Scenario: Add Sauce Labs Backpack to cart
    Given I am on the Sauce Demo login page
    When I login with valid username and valid password
    Then I should see the products page
    When I add the Sauce Labs Backpack to the cart
    And I click the shopping cart button
    Then I should see the cart page
    And the Sauce Labs Backpack should be in the cart

  Scenario: Remove Sauce Labs Backpack from cart
    Given I am on the Sauce Demo login page
    When I login with valid username and valid password
    Then I should see the products page
    When I add the Sauce Labs Backpack to the cart
    And I click the shopping cart button
    Then I should see the cart page
    And the Sauce Labs Backpack should be in the cart
    When I remove the Sauce Labs Backpack from the cart
    Then the Sauce Labs Backpack should not be in the cart