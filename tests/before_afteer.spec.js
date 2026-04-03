// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }, testInfo) => {
  await page.goto('https://playwright.dev/');
  console.log("has title test check")
  // console.log(testInfo.workerIndex, process.pid)


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }, testInfo) => {
  console.log("get started link check")
  // console.log(testInfo.workerIndex, process.pid)


  // console.log(page)
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


// それぞれのテストの前に実行される
test.beforeEach("before", async({}, testInfo)=> {
  console.log("Hello Before")
  // console.log(testInfo.workerIndex, process.pid)
})

// それぞれのテストの後に実行される
test.afterEach("after", ({}, testInfo)=> {
  console.log("Hello after")
  // console.log(testInfo.workerIndex, process.pid)
})

// 全部のbeforeEachの前に走る
test.afterAll("afterAll", ()=> {
  console.log("after All Hello")
})

// 全部のafterEachの後に走る
test.beforeAll("beforeAll", ()=> {
  console.log("before All Hello")
})

// それぞれのテストの前に実行される
test.beforeEach("before222", ()=> {
  console.log("Hello Before22222")
})

// それぞれのテストの後に実行される
test.afterEach("after222", ()=> {
  console.log("Hello after2222")
})