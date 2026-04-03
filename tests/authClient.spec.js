import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';
import 'dotenv/config'

// npx playwright test authClient.spec.js --headed --project="edge"

test("jikken", async({page})=> {
    await page.goto("https://github.com/login")
    await expect(page.getByRole("button", {name : `Go to ${process.env.USER_NAME} dashboard`})).toBeVisible()
})


beforeEach("a", ({}, testInfo)=> {
    console.log(testInfo.project.name)
})