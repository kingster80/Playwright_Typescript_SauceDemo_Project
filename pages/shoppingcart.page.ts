//shoppingcart.page.ts
import { expect, Locator, Page } from '@playwright/test';
export class SauceDemoShoppingCartPage {
readonly url ="https://www.saucedemo.com/";
readonly page: Page;
readonly swaglabsLogo: Locator;
readonly backpackInventoryLabel: Locator;
readonly shoppingCartTitle: Locator;
readonly removeBackpackButton: Locator;

constructor(page: Page) {
this.page = page;
this.swaglabsLogo = page.locator('.app_logo');
this.backpackInventoryLabel = page.locator('.inventory_item_name').filter({ hasText: 'Sauce Labs Backpack' });
this.removeBackpackButton = page.locator('button[name="remove-sauce-labs-backpack"]');
}

async goto(){
await this.page.goto(this.url);
}

// Method to check if the backpack is in the cart
  async isBackpackInCart() { 
    return await this.backpackInventoryLabel.isVisible();
}

// Method to click the remove button for the backpack in the cart
  async removeBackpackFromCart() {
    await this.removeBackpackButton.click();
}

}