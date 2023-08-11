import { chromium } from "playwright";

describe("Launch Browser", ()=> {
    
    test("open Letcode", async()=> {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext({  //https://playwright.dev/docs/videos
            recordVideo: {
                dir: "./videos/"
            }
        });
        const page = await context.newPage();
        await page.goto("https://letcode.in/");
        await page.click('"Log in"');
        await page.fill("input[name='email']","koushik350@gmail.com" );
        await page.fill("input[name='password']", "Pass123$");
        await page.click("//button[text()='LOGIN']");
        await page.click('"Sign out"');
        await context.close();
        await browser.close();
        
    })
})