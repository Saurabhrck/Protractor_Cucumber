@whole
Feature: Validate juice shop order page

    Feature to test juice shop

    @Order
    Scenario: Navigate to order history
        Given I open juice shop
        When I login to the application with username "test@test.com" and password "password"
        And I navigate to order history page
        Then I can see order history page