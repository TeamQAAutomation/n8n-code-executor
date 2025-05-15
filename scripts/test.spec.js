Certainly! Below is an example of a Playwright test written in JavaScript that opens `https://example.com` and checks the page title.

Make sure you have Playwright installed in your project. If you haven't done that yet, you can install it using npm:

```bash
npm install @playwright/test
```

Here’s a simple Playwright test that checks the title of the page:

```javascript
// Import the necessary modules from Playwright
const { test, expect } = require('@playwright/test');

// Define the test
test('check title of example.com', async ({ page }) => {
  // Navigate to the URL
  await page.goto('https://example.com');

  // Get the title of the page
  const title = await page.title();

  // Assert that the title is what we expect
  expect(title).toBe('Example Domain');
});
```

### Running the Test

1. Save the above code to a file named `example.test.js` (or any other name you prefer).
2. Open your terminal and execute the test with the following command:

```bash
npx playwright test example.test.js
```

This command will launch a browser, navigate to `https://example.com`, and check if the title of the page is "Example Domain". If the title matches, the test will pass; otherwise, it will fail.