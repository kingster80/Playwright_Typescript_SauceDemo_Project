import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../Fixtures/pages.fixture';
import testData from '../Data/AuthorizationFixtureData.json';

const { Given, When, Then } = createBdd(test);

const userData = testData.users[0];

Given('I am on the Sauce Demo login page', async ({ loginPage }) => {
  await loginPage.goto();
  await expect(loginPage.swaglabsLogo).toContainText('Swag Labs');
});

When('I login with valid username and valid password', async ({ loginPage }) => {
  await loginPage.loginWithCredentials(userData.validUserName, userData.validPassword);
});

When('I login with invalid username and invalid password', async ({ loginPage }) => {
  await loginPage.loginWithCredentials(userData.invalidUserName, userData.invalidPassword);
});

When('I click the login button with no credentials', async ({ loginPage }) => {
  await loginPage.loginWithNoCredentials();
});

When('I login with valid username and invalid password', async ({ loginPage }) => {
  await loginPage.loginWithCredentials(userData.validUserName, userData.invalidPassword);
});

When('I login with wrong case username and valid password', async ({ loginPage }) => {
  await loginPage.loginWithCredentials(userData.wrongCaseUsername, userData.validPassword);
});

When('I login with valid username and wrong case password', async ({ loginPage }) => {
  await loginPage.loginWithCredentials(userData.validUserName, userData.wrongCasePassword);
});

Then('I should see the products page', async ({ page }) => {
  await expect(page.getByText('Products')).toBeVisible();
});

Then('I should see an invalid credentials error message', async ({ loginPage }) => {
  await expect(loginPage.errorbuttonwithcredentials).toBeVisible();
});

Then('I should see a no credentials error message', async ({ loginPage }) => {
  await expect(loginPage.errorbuttonwithnocredentials).toBeVisible();
});

When('I add the Sauce Labs Backpack to the cart', async ({ productPage }) => {
  await productPage.clickBackPackAddToCartButton();
});

When('I click the shopping cart button', async ({ productPage }) => {
  await productPage.clickShoppingCartButton();
});

Then('I should see the cart page', async ({ page }) => {
  await expect(page.getByText('Your Cart')).toBeVisible();
});

Then('the Sauce Labs Backpack should be in the cart', async ({ cartPage }) => {
  await expect(cartPage.backpackInventoryLabel).toBeVisible();
});