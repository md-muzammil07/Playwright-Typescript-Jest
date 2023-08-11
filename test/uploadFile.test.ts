import { chromium } from 'playwright';

describe('upload file', () => {
    
    const filePath = 'videos/a.webm';
    const filePath1 = 'videos/b.webm';
    xtest('upload file using input files', async() => {
        const browser = await chromium.launch({
            headless: false
        })
       const context = await browser.newContext();
       const page = await context.newPage()
        
       await page.goto("https://www.sendgb.com/");
       await page.setInputFiles("input[name='qqfile']", filePath );
       //for multiple file upload , put in the []
    //    await page.setInputFiles("input[name='qqfile']", [filePath, filePath1] );

        
    })

    test('upload file using on function', async() => {  //upload file from pop up
        const browser = await chromium.launch({
            headless: false
        })
       const context = await browser.newContext();
       const page = await context.newPage()
        
       await page.goto("https://the-internet.herokuapp.com/upload");
       page.on("filechooser", async (filechooser)=>{
        // await filechooser.isMultiple();
        await filechooser.setFiles([filePath, filePath1]);
       })
     await page.click(".example + div#drag-drop-upload", {force: true})

     await context.close();
     await browser.close();
        
    })
    
    
})