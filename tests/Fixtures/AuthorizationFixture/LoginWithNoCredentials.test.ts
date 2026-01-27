// login.test.ts
import { test, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../../../pages/login.page';
import { UserData } from '../../Repositories/AuthorizationFixtureRepository';
import testData from '../../Data/AuthorizationFixtureData.json';

const userData: UserData = testData.users[0]; 

    test(`SauceDemo login with no credentials`, async ({ page }) => {
       
        const loginpage = new SauceDemoLoginPage(page);

        await loginpage.goto();
        await expect(loginpage.swaglabsLogo).toContainText(["Swag Labs"]);
        await loginpage.loginWithNoCredentials();

        // Assertion to verify unsuccessful login
        await expect(loginpage.errorbuttonwithnocredentials).toContainText(["Epic sadface: Username is required"]);
    });



