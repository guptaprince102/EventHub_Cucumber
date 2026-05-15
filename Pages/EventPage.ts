import {Locator, Page} from "@playwright/test";

export class EventPage{
    page : Page;
    eventCard : Locator;

    constructor(page : Page){
        this.page = page;
        this.eventCard = page.getByTestId("event-card");
        
    }

    async clickOnBookNowButton(i:number){
        await this.eventCard.nth(i).getByTestId("book-now-btn").click();
    }

   

    
    
}