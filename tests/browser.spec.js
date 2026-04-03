import { test, expect } from '@playwright/test';

test("ブラウザーの名前とバージョンを取得", async({page, browser}, testInfo)=> {
    await page.goto('https://playwright.dev/');
    // console.log(testInfo.workerIndex, process.pid)
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    const browserVersion = await browser.version();
    console.log(`browserName: ${testInfo.project.name}`)
    console.log(`browserVersion ${browserVersion}`)
})


import path from "path"

const authFile = path.join(__dirname, '../playwright/.auth/user.json')

test("authenticate", async({page})=> {
    await page.goto("https://github.com/login")
    await page.getByLabel("Username or email address").fill("Shiraishi-Shodai")
    await page.getByLabel("Password").fill("QyE4hNu8XQhGguR")
    await page.getByRole("button", {name: "Sign in"}).click()

    await page.waitForURL("https://github.com/")
    await expect(page.getByRole("button", {name : "View profile and more"})).toBeVisible()

    await page.context().storageState({path: authFile})
})