
// //$ is used to find the locator, it can be id, css, xpath

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
        await page.goto("https://letcode.in/edit");

    })

    test('should first', async() => {
        await page.type("id=fullName", "koushik Chatterjee")
        // const text = await page.getAttribute("id=fullName","value"); 
        // console.log(text);
        const name = await page.$("#fullName")
        if(name!=null){
            name.type("")
        }
        await name?.type("koushik chatterjee")  //? = optional chaininig
        
        
     })

     test('append a text and press keyboard tab', async() => {      //append the text at the end
        const join = await page.$("#join")
        await join?.focus();  //focus on the element
        await page.keyboard.press("End");
        await join?.type(" QA Engineer");
     })

     test('What is inside the text box', async() => { 
        const text = await page.getAttribute("id=getMe", "value");
        console.log(text);
      })

      test('Clear the text', async() => { 
        await page.fill("#clearMe", "")
       })

     afterAll( async() => {
        await page.close()
        await context.close()
        await browser.close();
        await page.close()

     })
})
