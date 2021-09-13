@whole
Feature: Validate Angular Home page

    Feature to test angular home and search

    @Guide
    Scenario: Navigate to Guide page
        Given I open angular homepage
        When I navigate to documents
        And I click on first page
        Then I land on first page

    @Search
    Scenario Outline: Search for a <Search_Text>
        Given I open angular homepage
        When I type in "<Search_Text>"
        Then search result is visible

        Examples:
            | Search_Text |
            | Hello       |
            | component   |