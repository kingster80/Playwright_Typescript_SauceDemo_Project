Feature: Sauce Demo Login

  Scenario: Successful login with valid credentials
    Given I am on the Sauce Demo login page
    When I login with valid username and valid password
    Then I should see the products page

  Scenario: Unsuccessful login with invalid username and invalid password
    Given I am on the Sauce Demo login page
    When I login with invalid username and invalid password
    Then I should see an invalid credentials error message

  Scenario: Unsuccessful login with no credentials
    Given I am on the Sauce Demo login page
    When I click the login button with no credentials
    Then I should see a no credentials error message

  Scenario: Unsuccessful login with valid username and invalid password
    Given I am on the Sauce Demo login page
    When I login with valid username and invalid password
    Then I should see an invalid credentials error message

  Scenario: Unsuccessful login with wrong case username
    Given I am on the Sauce Demo login page
    When I login with wrong case username and valid password
    Then I should see an invalid credentials error message

  Scenario: Unsuccessful login with wrong case password
    Given I am on the Sauce Demo login page
    When I login with valid username and wrong case password
    Then I should see an invalid credentials error message