import { Before, After } from "@cucumber/cucumber";
import { POManager } from "../../Pages/POManager";
import playwright from 'playwright';

// For local execution, set HEADLESS=false for headed mode
// For Azure Playwright Service execution, run: npm run regression-service

let browser: any;
let context: any;

Before({timeout : 60000}, async function(){
    
    browser = await playwright.chromium.launch({
        headless: process.env.HEADLESS !== 'false'
    });
    context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);

})

After(async function(){
    if (context) {
        await context.close();
    }
    if (browser) {
        await browser.close();
    }
})
