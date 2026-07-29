// Generated from: tests\features\shopping_cart.feature
import { test } from "../../../tests/Fixtures/pages.fixture.ts";

test.describe('Sauce Demo Shopping Cart', () => {

  test('Add Sauce Labs Backpack to cart', async ({ Given, When, Then, And, cartPage, loginPage, page, productPage }) => { 
    await Given('I am on the Sauce Demo login page', null, { loginPage }); 
    await When('I login with valid username and valid password', null, { loginPage }); 
    await Then('I should see the products page', null, { page }); 
    await When('I add the Sauce Labs Backpack to the cart', null, { productPage }); 
    await And('I click the shopping cart button', null, { productPage }); 
    await Then('I should see the cart page', null, { page }); 
    await And('the Sauce Labs Backpack should be in the cart', null, { cartPage }); 
  });

  test('Remove Sauce Labs Backpack from cart', async ({ Given, When, Then, And, cartPage, loginPage, page, productPage }) => { 
    await Given('I am on the Sauce Demo login page', null, { loginPage }); 
    await When('I login with valid username and valid password', null, { loginPage }); 
    await Then('I should see the products page', null, { page }); 
    await When('I add the Sauce Labs Backpack to the cart', null, { productPage }); 
    await And('I click the shopping cart button', null, { productPage }); 
    await Then('I should see the cart page', null, { page }); 
    await And('the Sauce Labs Backpack should be in the cart', null, { cartPage }); 
    await When('I remove the Sauce Labs Backpack from the cart', null, { cartPage }); 
    await Then('the Sauce Labs Backpack should not be in the cart', null, { cartPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\shopping_cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the Sauce Demo login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I login with valid username and valid password","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the products page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I add the Sauce Labs Backpack to the cart","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I click the shopping cart button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the cart page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And the Sauce Labs Backpack should be in the cart","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I am on the Sauce Demo login page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I login with valid username and valid password","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the products page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I add the Sauce Labs Backpack to the cart","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And I click the shopping cart button","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see the cart page","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And the Sauce Labs Backpack should be in the cart","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I remove the Sauce Labs Backpack from the cart","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then the Sauce Labs Backpack should not be in the cart","stepMatchArguments":[]}]},
]; // bdd-data-end