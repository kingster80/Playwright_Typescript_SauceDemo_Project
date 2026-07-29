import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../Fixtures/pages.fixture';

const { When, Then } = createBdd(test);

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

When('I remove the Sauce Labs Backpack from the cart', async ({ cartPage }) => {
  await cartPage.removeBackpackFromCart();
});

Then('the Sauce Labs Backpack should not be in the cart', async ({ cartPage }) => {
  await expect(cartPage.backpackInventoryLabel).not.toBeVisible();
});
