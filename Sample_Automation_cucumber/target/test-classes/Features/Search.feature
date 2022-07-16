@Search
  Feature: Search function testing in ebay website

    @Search-Positive
    Scenario Outline: Validate search function
      Given I am on the Home page "https://www.ebay.com/"
      When Get the page URL & verify if it is the correct page that open
#      Then Enter a valid product as "<product>" on the search field
      Then Enter a valid product as "<product>" on the search field
      And Click the search button

      Examples:
        | product |
        | watch   |