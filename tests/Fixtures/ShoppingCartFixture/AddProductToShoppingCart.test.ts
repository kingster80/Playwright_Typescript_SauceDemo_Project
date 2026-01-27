// cart.test.ts
import { test, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../../../pages/login.page';
import { SauceDemoProductPage } from '../../../pages/products.page';
import { SauceDemoShoppingCartPage } from '../../../pages/shoppingcart.page';
import { UserData } from '../../Repositories/AuthorizationFixtureRepository';
import testData from '../../Data/AuthorizationFixtureData.json';

const userData: UserData = testData.users[0]; 

    test(`SauceDemo click on Add to cart for Sauce Labs Backpack and verify it is in the cart`, async ({ page }) => {
        
        const loginpage = new SauceDemoLoginPage(page);
        const productpage = new SauceDemoProductPage(page);
        const shoppingcartpage = new SauceDemoShoppingCartPage(page);

        await loginpage.goto();
        await expect(loginpage.swaglabsLogo).toContainText(["Swag Labs"]);
        await loginpage.loginWithCredentials(userData.validUserName, userData.validPassword);

        // Assertion to verify successful login
        await expect(page.getByText('Products')).toBeVisible()
        await productpage.clickBackPackAddToCartButton();
        await productpage.clickShoppingCartButton();

        // Assertion to verify the cart is visible
        await expect(page.getByText('Your Cart')).toBeVisible()

        // Assertion to verify the backpack is in the cart
        await shoppingcartpage.isBackpackInCart();
    });