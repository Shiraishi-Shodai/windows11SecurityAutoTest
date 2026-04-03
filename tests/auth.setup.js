import { test as setup, expect } from '@playwright/test';
import * as readline from "readline"
import 'dotenv/config'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// 認証コードを入力
const inputTwoFactorCode = async(question)=> {
    return new Promise((resolve) => {
        rl.question(question, resolve)
    })
}

setup("authenticate", async({page}, testInfo)=> {
    const authFile =`${testInfo.project.outputDir}/.auth/user.json`
    console.log(authFile)

    await page.goto("https://github.com/login")
    await page.getByLabel("Username or email address").fill(process.env.USER_NAME)
    await page.getByLabel("Password").fill(process.env.PASSWORD)
    await page.getByRole("button", {name: "Sign in"}).click()

    await page.waitForURL("https://github.com/")
    await expect(page.getByRole("button", {name : `Go to ${process.env.USER_NAME} dashboard`})).toBeVisible()

    await page.context().storageState({path: authFile})
})
