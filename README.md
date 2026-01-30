I developed this Playwright TypeScript automation framework from the ground up. It includes an Authorization Fixture that executes multiple test cases for authenticating into the SauceDemo test environment. Additionally, the framework features a Shopping Cart Fixture to validate adding products to the cart and verifying their functionality. Tests are executed via GitHub Actions within the CI/CD pipeline.

### **Core Prerequisites**

Node.js: Playwright runs on Node.js, so you must have the current LTS version installed on your computer. 
https://nodejs.org/en/download

Visual Studio Code: The code editor itself, which provides a smooth development experience.
https://code.visualstudio.com/download

### **Installation Steps and Required Components:**

**1.** The simplest way to set up the environment is by using the official VS Code extension: Install the Playwright Test for VS Code extension: Open the Extensions view in VS Code (Ctrl+Shift+X or Cmd+Shift+X), search for "Playwright", and install the official extension from Microsoft. 

**2.** In the Visual Studio Code terminal (Go to the top menu and select Terminal > New Terminal), clone the repository using this command: "git clone https://github.com/kingster80/Playwright_Typescript_SauceDemo_Project.git"

**3.** Navigate to the project folder where ever it was installed using this command: example: "cd C:/Playwright_Typescript_SauceDemo_Project"

**4.** Install Project Dependancies using these commands: "npm install" and "npx playwright install"

### **Run the tests**

Run this command to see the automation test cases come up in the browsers: "npx playwright test --headed"

https://playwright.dev/docs/getting-started-vscode

https://www.saucedemo.com/

