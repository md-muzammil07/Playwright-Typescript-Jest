//simple alert: that will come only with 1 button, confirm alert: 2 button ok & cancel, prompt alert: where we have text box and also ok & cancel button, modern alert: it's basically html element and close action button
import { Browser, BrowserContext, chromium, Page } from "playwright";

describe ("Learn how to handle input fields", ()=> {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    beforeAll(async ()=> {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto("https://letcode.in/alert");

    })

    test("Handle dialogs", async()=> { //use listner(page.on) first then trigger action
        const ele = await page.$("#prompt");
        page.on("dialog", (dialog)=> {
            console.log('Message: ', + dialog.message()); //it will return the msg
            console.log('Default value: ' + dialog.defaultValue()); //return the default value
            console.log('Type: ', + dialog.type()); //will return the type of alert
            // dialog.accept(); //or click on the ok button
            dialog.accept("Hello muzammil");
            // dialog.dismiss() //cancel 
        })
        await ele?.click();
    })


     afterAll( async() => {
        await page.close()
        await context.close()
        await browser.close();

     })
})