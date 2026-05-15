import {Locator, Page} from "@playwright/test";

export class BookingDetailPage{
    page : Page;
    bookingInfo : Locator;
    bookingRef : Locator;
    eventHead : Locator;
    refundButton : Locator;
    refundSpinner : Locator;
    refundResult : Locator;
    

    constructor(page : Page){
        this.page = page;
        this.bookingInfo = page.getByText("Booking Information");
        this.bookingRef = this.page.locator("span.font-mono.font-bold");
        this.eventHead = page.locator("h1");
        this.refundButton = page.getByTestId("check-refund-btn");
        this.refundSpinner = page.locator('#refund-spinner');
        this.refundResult = page.locator("#refund-result");
        
    }
    async isBookingInfoVisible(){
        await this.bookingInfo.waitFor();
        return await this.bookingInfo.isVisible();
    }



   

    
    
}