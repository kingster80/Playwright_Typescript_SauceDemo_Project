//login.page.ts
import { expect, Locator, Page } from '@playwright/test';
export class SauceDemoLoginPage {
readonly url ="https://www.saucedemo.com/";
readonly page: Page;
readonly swaglabsLogo: Locator;
readonly username: Locator;
readonly password:Locator;
readonly loginbutton:Locator;
readonly errorbuttonwithcredentials:Locator;
readonly errorbuttonwithnocredentials:Locator;

constructor(page: Page) {
this.page = page;
this.swaglabsLogo = page.locator('.login_logo');
this.username = page.getByPlaceholder("Username");
this.password = page.getByPlaceholder("Password");
this.loginbutton = page.locator('input[type="submit"]');
this.errorbuttonwithcredentials = page.getByText('Epic sadface: Username and password do not match any user in this service');
this.errorbuttonwithnocredentials = page.getByText('Epic sadface: Username is required');
}

async goto(){
await this.page.goto(this.url);

}
// Method to perform login action with credentials
  async loginWithCredentials(username: string, password: string) { // Method accepts 'username' and 'password' strings
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginbutton.click();
}

// Method to perform login action with no credentials
  async loginWithNoCredentials() { 
    await this.loginbutton.click();
}

}