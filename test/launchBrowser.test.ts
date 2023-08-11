import { chromium } from "playwright";

describe("Launch Browser", ()=> {
    
    test("open Letcode", async()=> {
        const browser = await chromium.launch({    //return browser
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage(); //creating new tab within a browser
        await page.goto("https://letcode.in/");
        await browser.close();
        
    })
})