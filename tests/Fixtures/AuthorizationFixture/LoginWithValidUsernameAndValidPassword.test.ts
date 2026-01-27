// login.test.ts
import { test, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../../../pages/login.page';
import { UserData } from '../../Repositories/AuthorizationFixtureRepository';
import testData from '../../Data/AuthorizationFixtureData.json';

const userData: UserData = testData.users[0]; 

    test(`SauceDemo successful login page verification with valid username and valid password`, async ({ page }) => {
        
        const loginpage = new SauceDemoLoginPage(page);

        await loginpage.goto();
        await expect(loginpage.swaglabsLogo).toContainText(["Swag Labs"]);
        await loginpage.loginWithCredentials(userData.validUserName, userData.validPassword);

        // Assertion to verify successful login
        await expect(page.getByText('Products')).toBeVisible()
    });