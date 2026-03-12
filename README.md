# Playwright_Typescript_SauceDemo_Project

A TypeScript test automation framework built from the ground up using **Playwright** and **TypeScript**, featuring custom fixtures for authentication and shopping cart validation against the [Sauce Demo](https://www.saucedemo.com) test environment. Tests are executed automatically via **GitHub Actions** within a CI/CD pipeline.

---

## 🛠 Tech Stack

| Tool | Description |
|---|---|
| Playwright | End-to-end testing framework |
| TypeScript | Strongly typed JavaScript |
| Node.js | Runtime environment |
| GitHub Actions | CI/CD pipeline for automated test execution |
| VS Code | Recommended code editor |

---

## 📁 Project Structure

```
Playwright_Typescript_SauceDemo_Project/
├── tests/
│   ├── auth/
│   │   └── authorization.fixture.ts    # Authentication test cases
│   └── cart/
│       └── shoppingCart.fixture.ts     # Shopping cart test cases
├── playwright.config.ts                # Playwright configuration
├── package.json                        # Project dependencies
└── .github/
    └── workflows/                      # GitHub Actions CI/CD pipeline
```

---

## ⚙️ Prerequisites

- [Node.js LTS](https://nodejs.org/en/download) — Playwright requires Node.js to run
- [Visual Studio Code](https://code.visualstudio.com/download) — Recommended code editor
- [Playwright Test for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) — Official Microsoft extension

---

## 🔧 Installation

**Step 1 — Install the Playwright VS Code extension:**
```
Open VS Code
→ Extensions (Ctrl+Shift+X)
→ Search "Playwright"
→ Install "Playwright Test for VSCode" by Microsoft
```

**Step 2 — Clone the repository:**
```bash
git clone https://github.com/kingster80/Playwright_Typescript_SauceDemo_Project.git
```

**Step 3 — Navigate to the project folder:**
```bash
cd C:/Playwright_Typescript_SauceDemo_Project
```

**Step 4 — Install project dependencies:**
```bash
npm install
npx playwright install
```

---

## ▶️ Running the Tests

Run tests in headed mode (visible browsers):
```bash
npx playwright test --headed
```

Run tests in headless mode:
```bash
npx playwright test
```

Run a specific fixture:
```bash
npx playwright test auth
npx playwright test cart
```

---

## 🧪 Test Cases

| Fixture | Description |
|---|---|
| **Authorization Fixture** | Executes multiple test cases for authenticating into the SauceDemo environment |
| **Shopping Cart Fixture** | Validates adding products to the cart and verifies their functionality |

---

## 🚀 CI/CD Pipeline

Tests are automatically executed via **GitHub Actions** on every push and pull request. The pipeline runs the full test suite in headless mode and reports results directly in GitHub.

---

## 🏗 Design Patterns

- **Custom Fixtures** — Authentication and shopping cart logic encapsulated in reusable Playwright fixtures
- **TypeScript** — Strongly typed codebase for improved reliability and IDE support
- **CI/CD Integration** — Automated test execution on every code change via GitHub Actions

---

## BDD Testing with playwright-bdd

This project uses [playwright-bdd](https://github.com/vitalets/playwright-bdd) to write and run BDD-style tests using Gherkin feature files alongside Playwright's test runner.

### Tech Stack

- **playwright-bdd** v8.4.2 — BDD layer for Playwright
- **@cucumber/cucumber** v11.3.0 — Gherkin parser
- **@playwright/test** v1.57.0 — Test runner
- **TypeScript**

### BDD Project Structure
```
tests/
├── features/
│   ├── login.feature            # Login scenarios (6 scenarios)
│   └── shopping_cart.feature    # Shopping cart scenarios (1 scenario)
├── step-definitions/
│   └── login.steps.ts           # Step implementations for all features
└── Data/
    └── AuthorizationFixtureData.json  # Test data
pages/
├── login.page.ts                # Login page object
├── products.page.ts             # Products page object
└── shoppingcart.page.ts         # Shopping cart page object
```

### How It Works

playwright-bdd generates Playwright spec files from `.feature` files using `bddgen`, then runs them with the standard Playwright test runner.

Step definitions use `createBdd()` from `playwright-bdd` — **not** `@cucumber/cucumber` directly:
```typescript
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();
```

### Running Tests
```bash
# Run all tests (all browsers)
npm test

# Run on a specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

### Test Results

**21 tests** across 3 browsers (chromium, firefox, webkit):

| Feature | Scenarios | Tests |
|---|---|---|
| Sauce Demo Login | 6 | 18 |
| Sauce Demo Shopping Cart | 1 | 3 |
| **Total** | **7** | **21** |

### Feature Files

**login.feature** — covers:
- Successful login with valid credentials
- Invalid username and password
- No credentials
- Valid username with invalid password
- Wrong case username
- Wrong case password

**shopping_cart.feature** — covers:
- Add Sauce Labs Backpack to cart and verify it appears in the cart

## 📚 Useful Links

- [Playwright Documentation](https://playwright.dev/docs/getting-started-vscode)
- [Sauce Demo Test Environment](https://www.saucedemo.com)

---

## 👤 Author

**kingster80** — [GitHub](https://github.com/kingster80)
