import { Browser, BrowserContext, chromium, Page } from "playwright";

describe("first", () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;
  beforeAll(async () => {
    browser = await chromium.launch({
      headless: false,
    });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://letcode.in/dropdowns");
  });

  test('Select dropdown based on value', async() => { 

   const fruits =  await page.$("#fruits");
    await fruits?.selectOption("2");
    const msg = await page.$(".subtitle");
    
    if (msg) {
        expect(await msg.textContent()).toContain("Orange")
    }


   })

   test('Select multiple', async() => { 

    const hero = await page.$("");
    hero?.selectOption([
        {label: "batman"}, {value: "bp"}, {index: 7}
    ])


    })

    test.only("get selected text", async () => {
        await page.selectOption("#country", "India");
        const text = await page.$eval<string, HTMLSelectElement>("#country", ele => ele.value)  //https://github.com/microsoft/playwright/issues/6229
        console.log(text);
        expect(text).toBe("India");
    })

    afterAll( async () => {
        await page.close();
        await context.close();
        await browser.close();

    })


});
