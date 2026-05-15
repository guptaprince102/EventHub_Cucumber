import {Locator, Page} from "@playwright/test";

export class BookingPage{
    page : Page;
    ticketCount : Locator;
    fullName : Locator;
    email : Locator;
    phoneNumber : Locator;
    confirmButton : Locator;
    bookingRef : Locator;
    tickerIncreaser : Locator;
    


    constructor(page : Page){
        this.page = page;
        this.tickerIncreaser = page.locator(`button:has-text("+")`);
        this.ticketCount = page.locator('#ticket-count');
        this.fullName = page.getByLabel('Full Name');
        this.email = page.getByLabel('Email');
        this.phoneNumber = page.getByLabel('Phone Number');
        this.confirmButton = page.locator('.confirm-booking-btn').first();
        this.bookingRef = page.locator('.booking-ref');

    }

    async fillBookingForm(ticketCount:number){
        for(let i=1 ; i<ticketCount ; i++){
            await this.tickerIncreaser.click();
        }
        await this.fullName.fill('Test user');
        await this.email.fill('test@gmail.com');
        await this.phoneNumber.fill('1234567890');
        await this.confirmButton.click();
    }
    async isBookingSuccessful(){
        return await this.bookingRef.first().isVisible();
    }
    async getBookingRef(){
        return await this.bookingRef.first().textContent();
    }
   
    

    
}