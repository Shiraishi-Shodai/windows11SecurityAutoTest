import { test, expect } from '@playwright/test';
import path from 'path'; // ★ パスを組み立てるために追加

const timestamp = new Date().toISOString().replace(/[:.]/g, '-')

test('has title', async ({ page },testInfo) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  const savePath = path.join('test-results', testInfo.title, timestamp,
      'screenshot2.png');
  console.log(testInfo.title, testInfo.titlePath, savePath)
  await page.screenshot({ path: savePath });
  await expect(page).toHaveScreenshot()
  console.log(`幅 ${page.viewportSize().width}, 高さ ${page.viewportSize().height}`)

});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test('check main text visibility', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page.getByText('Playwright enables reliable web automation for testing, scripting, and AI agents.')).toBeVisible();
// });  