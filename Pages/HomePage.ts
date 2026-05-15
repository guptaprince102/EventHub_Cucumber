import {Locator, Page} from "@playwright/test";

export class HomePage{
    page : Page;
    eventButton : Locator;
    myBookingButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.eventButton = page.getByTestId('nav-events');
        this.myBookingButton = page.getByTestId('nav-bookings');
        
    }

    async goToEventPage(){
        await this.eventButton.click();
    }
     async goToMyBookings(){
        await this.myBookingButton.click();
    }

    
    
}