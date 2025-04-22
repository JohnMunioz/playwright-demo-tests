import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

test.describe("Test Suite", async() => {
  test('User go to Playright page', async ({ page }) => {
    
    await test.step('User go to url', async () => {
      await page.goto('https://playwright.dev/java/');
    });

    await test.step("Then the user can see the page", async () => {
      await expect(page).toHaveTitle(/Playwright/);
      await page.screenshot({ path: "./captures/" + Date.now() + ".screenshot.jpg" });
    });
  });

  test('get started link', async ({ page }) => {

    await test.step('User go to url', async () => {
    await page.goto('https://playwright.dev/java/');
    });

    // Click the get started link.
    await test.step('And the User Click the get started link', async () => {
    await page.getByRole('link', { name: 'Get Started' }).click();
    });

    // Expect page to have a heading with the name of Installation.
    await test.step('Then the User expects page to have a heading with the name of Installation', async () => {
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });
  });
});
