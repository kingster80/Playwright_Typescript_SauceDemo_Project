I developed this Playwright TypeScript automation framework from the ground up. It includes an Authorization Fixture that executes multiple test cases for authenticating into the SauceDemo test environment. Additionally, the framework features a Shopping Cart Fixture to validate adding products to the cart and verifying their functionality.

Core Prerequisites

Node.js: Playwright runs on Node.js, so you must have the current LTS version installed on your computer. Visual Studio Code: The code editor itself, which provides a smooth development experience.

Installation Steps and Required Components

The simplest way to set up the environment is by using the official VS Code extension: Install the Playwright Test for VS Code extension: Open the Extensions view in VS Code (Ctrl+Shift+X or Cmd+Shift+X), search for "Playwright", and install the official extension from Microsoft. 

In the Visual Studio Code terminal (Go to the top menu and select Terminal > New Terminal), clone the repository using this command: "git clone https://github.com/kingster80/Playwright_Typescript_SauceDemo_Project.git"

Navigate to the project folder where ever it was installed using this command: example: "cd C:/Playwright_Typescript_SauceDemo_Project"

Install Project Dependancies using this command: "npm install" and "npx playwright install"

In the Visual Studio Code Terminal, run this command to see the automation test cases come up in the browsers: npx playwright test --headed

https://playwright.dev/docs/getting-started-vscode

https://code.visualstudio.com/download

https://nodejs.org/en/download

https://www.saucedemo.com/

