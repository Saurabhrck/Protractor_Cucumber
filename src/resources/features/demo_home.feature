@whole
Feature: Validate Angular Home page

    Feature to test angular home

    @Guide
    Scenario: Navigate to Guide page
        Given I open angular homepage
        When I navigate to documents
        And I click on first page
        Then I land on first page