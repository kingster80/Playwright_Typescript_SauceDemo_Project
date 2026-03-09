// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Sauce Demo Login', () => {

  test('Successful login with valid credentials', async ({ Given, When, Then, page }) => { 
    await Given('I am on the Sauce Demo login page', null, { page }); 
    await When('I login with valid username and valid password', null, { page }); 
    await Then('I should see the products page', null, { page }); 
  });

  test('Unsuccessful login with invalid username and invalid password', async ({ Given, When, Then, page }) => { 
    await Given('I am on the Sauce Demo login page', null, { page }); 
    await When('I login with invalid username and invalid password', null, { page }); 
    await Then('I should see an invalid credentials error message', null, { page }); 
  });

  test('Unsuccessful login with no credentials', async ({ Given, When, Then, page }) => { 
    await Given('I am on the Sauce Demo login page', null, { page }); 
    await When('I click the login button with no credentials', null, { page }); 
    await Then('I should see a no credentials error message', null, { page }); 
  });

  test('Unsuccessful login with valid username and invalid password', async ({ Given, When, Then, page }) => { 
    await Given('I am on the Sauce Demo login page', null, { page }); 
    await When('I login with valid username and invalid password', null, { page }); 
    await Then('I should see an invalid credentials error message', null, { page }); 
  });

  test('Unsuccessful login with wrong case username', async ({ Given, When, Then, page }) => { 
    await Given('I am on the Sauce Demo login page', null, { page }); 
    await When('I login with wrong case username and valid password', null, { page }); 
    await Then('I should see an invalid credentials error message', null, { page }); 
  });

  test('Unsuccessful login with wrong case password', async ({ Given, When, Then, page }) => { 
    await Given('I am on the Sauce Demo login page', null, { page }); 
    await When('I login with valid username and wrong case password', null, { page }); 
    await Then('I should see an invalid credentials error message', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the Sauce Demo login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I login with valid username and valid password","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the products page","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the Sauce Demo login page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I login with invalid username and invalid password","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should see an invalid credentials error message","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I am on the Sauce Demo login page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I click the login button with no credentials","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see a no credentials error message","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given I am on the Sauce Demo login page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I login with valid username and invalid password","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see an invalid credentials error message","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given I am on the Sauce Demo login page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When I login with wrong case username and valid password","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then I should see an invalid credentials error message","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given I am on the Sauce Demo login page","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When I login with valid username and wrong case password","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then I should see an invalid credentials error message","stepMatchArguments":[]}]},
]; // bdd-data-end