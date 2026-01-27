I developed this Playwright TypeScript automation framework from the ground up. It includes an Authorization Fixture that executes multiple test cases for authenticating into the SauceDemo test environment. Additionally, the framework features a Shopping Cart Fixture to validate adding products to the cart and verifying their functionality.

Core Prerequisites

Node.js: Playwright runs on Node.js, so you must have the current LTS version installed on your computer. Visual Studio Code: The code editor itself, which provides a smooth development experience.

Installation Steps and Required Components

The simplest way to set up the environment is by using the official VS Code extension: Install the Playwright Test for VS Code extension: Open the Extensions view in VS Code (Ctrl+Shift+X or Cmd+Shift+X), search for "Playwright", and install the official extension from Microsoft. Run the installation command: Once the extension is installed, open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P), type "Install Playwright", and select the Test: Install Playwright command. Select TypeScript and browsers: The installer will prompt you to select your preferred language (TypeScript is selected by default) and the browser binaries you want to use (Chromium, Firefox, and WebKit). The extension will automatically handle the installation of the necessary Node.js packages (@playwright/test, typescript, ts-node) and the browser binaries in your project's node_modules folder.

In the Visual Studio Code Terminal, run this command to see the automation test cases come up in the browsers: npx playwright test --headed

https://playwright.dev/docs/getting-started-vscode
https://code.visualstudio.com/download
https://nodejs.org/en/download

