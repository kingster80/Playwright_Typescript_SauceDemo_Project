// login.test.ts
import { test, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../../../pages/login.page';
import { UserData } from '../../Repositories/AuthorizationFixtureRepository';
import testData from '../../Data/AuthorizationFixtureData.json';

const userData: UserData = testData.users[0]; 

    test(`SauceDemo unsuccessful login with wrong case username`, async ({ page }) => {
       
        const loginpage = new SauceDemoLoginPage(page);

        await loginpage.goto();
        await expect(loginpage.swaglabsLogo).toContainText(["Swag Labs"]);
        await loginpage.loginWithCredentials(userData.wrongCaseUsername, userData.validPassword);

        // Assertion to verify unsuccessful login
        await expect(loginpage.errorbuttonwithcredentials).toContainText(["Epic sadface: Username and password do not match any user in this service"]);
    });



