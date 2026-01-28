//products.page.ts
import { expect, Locator, Page } from '@playwright/test';
export class SauceDemoProductPage {
readonly url ="https://www.saucedemo.com/";
readonly page: Page;
readonly swaglabsLogo: Locator;
readonly backpackAddToCartButton: Locator;
readonly shoppingCartButton: Locator;

constructor(page: Page) {
this.page = page;
this.swaglabsLogo = page.locator('.app_logo');
this.backpackAddToCartButton = page.locator('button[name="add-to-cart-sauce-labs-backpack"]');
this.shoppingCartButton = page.locator('.shopping_cart_link')
}

async goto(){
await this.page.goto(this.url);
}

// Method to click on the backpack add to cart button
  async clickBackPackAddToCartButton() { 
    await this.backpackAddToCartButton.click();
}

// Method to click on shopping cart button
  async clickShoppingCartButton() { 
    await this.shoppingCartButton.click();
}

}