import { Browser, BrowserContext, chromium, Page } from "playwright";

describe("Iframes handling concept", () => {

  let browser: Browser;
  let context: BrowserContext;
  let page: Page;
  beforeAll(async () => {
    browser = await chromium.launch({
      headless: false,
    });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://letcode.in/frame");
  });

  test("interact with iframes", async () => {
    const frame = page.frame({ name: "firstFr" });

    if (frame != null) {
      await frame.fill("input[name='fname']", "Muhammed");
      await frame.fill("input[name='lname']", "Muzammil");


      const childframes = frame.childFrames(); //no. of frames are stored in variable

      if(childframes != null) 
        await childframes[0].fill("input[name='email']","muzammil@gmail.com");
       else {
        console.log("wrong childframes")
      }

      const parent = childframes[0].parentFrame();

      await parent?.fill("input[name='lname']", "sheikh");

    } else throw new Error("No such frame");


  });
});
