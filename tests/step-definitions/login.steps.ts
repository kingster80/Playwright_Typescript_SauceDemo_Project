import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../../pages/login.page';
import { SauceDemoProductPage } from '../../pages/products.page';
import { SauceDemoShoppingCartPage } from '../../pages/shoppingcart.page';
import testData from '../Data/AuthorizationFixtureData.json';

const { Given, When, Then } = createBdd();

const userData = testData.users[0];

let loginPage: SauceDemoLoginPage;
let productPage: SauceDemoProductPage;
let cartPage: SauceDemoShoppingCartPage;

Given('I am on the Sauce Demo login page', async ({ page }) => {
  loginPage = new SauceDemoLoginPage(page);
  productPage = new SauceDemoProductPage(page);
  cartPage = new SauceDemoShoppingCartPage(page);
  await loginPage.goto();
  await expect(loginPage.swaglabsLogo).toContainText('Swag Labs');
});

When('I login with valid username and valid password', async ({ page }) => {
  await loginPage.loginWithCredentials(userData.validUserName, userData.validPassword);
});

When('I login with invalid username and invalid password', async ({ page }) => {
  await loginPage.loginWithCredentials(userData.invalidUserName, userData.invalidPassword);
});

When('I click the login button with no credentials', async ({ page }) => {
  await loginPage.loginWithNoCredentials();
});

When('I login with valid username and invalid password', async ({ page }) => {
  await loginPage.loginWithCredentials(userData.validUserName, userData.invalidPassword);
});

When('I login with wrong case username and valid password', async ({ page }) => {
  await loginPage.loginWithCredentials(userData.wrongCaseUsername, userData.validPassword);
});

When('I login with valid username and wrong case password', async ({ page }) => {
  await loginPage.loginWithCredentials(userData.validUserName, userData.wrongCasePassword);
});

Then('I should see the products page', async ({ page }) => {
  await expect(page.getByText('Products')).toBeVisible();
});

Then('I should see an invalid credentials error message', async ({ page }) => {
  await expect(loginPage.errorbuttonwithcredentials).toBeVisible();
});

Then('I should see a no credentials error message', async ({ page }) => {
  await expect(loginPage.errorbuttonwithnocredentials).toBeVisible();
});

When('I add the Sauce Labs Backpack to the cart', async ({ page }) => {
  await productPage.clickBackPackAddToCartButton();
});

When('I click the shopping cart button', async ({ page }) => {
  await productPage.clickShoppingCartButton();
});

Then('I should see the cart page', async ({ page }) => {
  await expect(page.getByText('Your Cart')).toBeVisible();
});

Then('the Sauce Labs Backpack should be in the cart', async ({ page }) => {
  await expect(cartPage.backpackInventoryLabel).toBeVisible();
});