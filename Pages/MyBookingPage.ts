import {Locator, Page} from "@playwright/test";

export class MyBookingPage{
    page : Page;
    bookingCards : Locator;
    bookingRef1 : Locator;
    viewDetailButton : Locator;


    constructor(page : Page){
        this.page = page;
        this.bookingCards = page.locator('#booking-card');
        this.bookingRef1 = this.bookingCards.locator('.booking-ref');
        this.viewDetailButton = page.getByRole("link",{name:"View Details"});
        

    }
    
    async giveBookingRef(i : number){
        return await this.bookingRef1.nth(i).textContent();
    }
    async goToBookingDetails(i:number){
        await this.viewDetailButton.nth(i).click();
    }

    async isBookingsVisible(){
        return this.bookingCards.first().isVisible();
    }

    async isMyEventBooked(eventId : string){
        await this.bookingCards.first().waitFor();
        let isMyEventBooked = false;
        for(let i=0; i < await this.bookingCards.count(); i++){
            
            if((await this.bookingRef1.nth(i).textContent())?.includes(eventId)){
                isMyEventBooked = true;
            }
            
        }
        
        return isMyEventBooked;
    }

   
   


    
   
    

    
}