import { Before } from "@cucumber/cucumber";
import { POManager } from "../../Pages/POManager";
import playwright from 'playwright';


Before({timeout : 60000}, async function(){
    
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);

})
