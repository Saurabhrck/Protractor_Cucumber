@whole
Feature: Validate Angular Search page

    Feature to test angular search
    # These will fail and hence retry
    @Search
    Scenario Outline: Search for a <Search_Text>
        Given I open angular homepage
        When I type in "<Search_Text>"
        Then search result is visible

        Examples:
            | Search_Text |
            | Hello       |
            | component   |