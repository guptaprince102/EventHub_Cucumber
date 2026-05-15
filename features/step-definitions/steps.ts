import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";



const URL = 'https://eventhub.rahulshettyacademy.com/';

Given('Login with valid user {string} and {string}', { timeout: 60000 }, async function (email, password) {

    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo(URL);
    await loginPage.login(email, password);
    await expect(this.page.getByText('Browse Events').first()).toContainText('Browse Events');

});

When('User book an event with {int} ticket',{ timeout: 60000 }, async function (ticketCount) {
    
    this.homePage = this.poManager.getHomePage();
    await this.homePage.goToEventPage();

    const eventPage = this.poManager.getEventPage();
    await eventPage.clickOnBookNowButton(1);

    const bookingPage = this.poManager.getBookingPage();
    await bookingPage.fillBookingForm(ticketCount);


});


Then('User is able to see its booking in Booking section',{ timeout: 60000 }, async function () {

    
    await this.homePage.goToMyBookings();
    await this.page.locator('#booking-card').first().waitFor();
    expect(await this.page.url()).toBe(URL+"bookings");
    await expect(this.page).toHaveURL(URL+"bookings");

    const myBookingPage = this.poManager.getMyBookingPage();
    await myBookingPage.goToBookingDetails(0);

    this.bookingDetailPage = this.poManager.getBookingDetailPage();
    await this.bookingDetailPage.bookingInfo.waitFor();
    expect(this.bookingDetailPage.isBookingInfoVisible()).toBeTruthy();

    
    await this.bookingDetailPage.bookingRef.first().waitFor();
    // await this.page.locator("span.font-mono.font-bold").waitFor();
    expect((await this.bookingDetailPage.bookingRef.innerText()).charAt(0)).toBe((await this.bookingDetailPage.eventHead.innerText()).charAt(0));


});
Then('User is able to check if the booking is eligible for a refund',{ timeout: 60000 }, async function () {

    const refndbutton = this.bookingDetailPage.refundButton;
    await refndbutton.click();
    
    const refndSpinner = this.bookingDetailPage.refundSpinner;
    await expect(refndSpinner).toBeVisible();
    await expect(refndSpinner).not.toBeVisible({ timeout: 6000 });
    
    const result = this.bookingDetailPage.refundResult;
    await result.waitFor();
    await expect(result).toBeVisible();
    await expect(result).toContainText(/Eligible for refund|Not eligible for refund/i);

});