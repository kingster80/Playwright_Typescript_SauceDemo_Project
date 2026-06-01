// tests/Fixtures/pages.fixture.ts
import { test as base } from 'playwright-bdd';
import { SauceDemoLoginPage } from '../../pages/login.page';
import { SauceDemoProductPage } from '../../pages/products.page';
import { SauceDemoShoppingCartPage } from '../../pages/shoppingcart.page';

type PageFixtures = {
  loginPage: SauceDemoLoginPage;
  productPage: SauceDemoProductPage;
  cartPage: SauceDemoShoppingCartPage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new SauceDemoLoginPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new SauceDemoProductPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new SauceDemoShoppingCartPage(page));
  },
});