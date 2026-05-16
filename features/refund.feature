Feature: Event Booking with Single Ticket

Scenario Outline: Book One Ticket and Valid the booking is eligible for Refund
Given Login with valid user "prince.gupta@gmail.com" and "Prince@123"
When User book an event with <ticketCount> ticket
Then User is able to see its booking in Booking section
Then User is able to check if the booking is eligible for a refund

 Examples:
        | ticketCount  |
        | 1            |
        | 4            |
        | 5            |




