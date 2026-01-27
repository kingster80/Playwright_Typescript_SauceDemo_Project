//shoppingcart.page.ts
import { expect, Locator, Page } from '@playwright/test';
export class SauceDemoShoppingCartPage {
readonly url ="https://www.saucedemo.com/";
readonly page: Page;
readonly swaglabsLogo: Locator;
readonly backpackInventoryLabel: Locator;
readonly shoppingCartTitle: Locator;

constructor(page: Page) {
this.page = page;
this.swaglabsLogo = page.locator('.app_logo');
this.backpackInventoryLabel = page.getByTestId('inventory-item-name').filter({ hasText: 'Sauce Labs Backpack' })
}

async goto(){
await this.page.goto(this.url);
}

// Method to click on the backpack add to cart button
  async isBackpackInCart() { 
    await this.backpackInventoryLabel.isVisible;
}

}