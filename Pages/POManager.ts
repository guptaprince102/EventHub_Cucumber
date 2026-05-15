import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { EventPage } from "./EventPage";
import { BookingPage } from "./BookingPage";
import { MyBookingPage } from "./MyBookingPage";
import {BookingDetailPage} from "./BookingDetailPage"

export class POManager{
    loginPage: LoginPage;
    homePage : HomePage;
    eventPage : EventPage;
    bookingPage : BookingPage;
    myBookingPage : MyBookingPage;
    bookingDetailPage : BookingDetailPage;
    

    constructor(page:Page){
        
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.eventPage = new EventPage(page);
        this.bookingPage = new BookingPage(page);
        this.myBookingPage = new MyBookingPage(page);
        this.bookingDetailPage = new BookingDetailPage(page);
    }
    getLoginPage(){
        return this.loginPage;
    }
    getHomePage(){
        return this.homePage;
    }
    getEventPage(){
        return this.eventPage;
    }
    getBookingPage(){
        return this.bookingPage;
    }
    getMyBookingPage(){
        return this.myBookingPage;
    }
    getBookingDetailPage(){
        return this.bookingDetailPage;
    }

}