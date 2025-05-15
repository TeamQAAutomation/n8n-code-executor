const { test, expect } = require('@playwright/test');

test('check page title', async ({ page }) => {
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Example Domain');
});

