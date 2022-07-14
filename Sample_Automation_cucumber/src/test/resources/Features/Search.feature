@Search
  Feature: Search function testing in ebay website

    @Search-Positive
    Scenario: Validate search function
      Given I am on the Home page "https://www.ebay.com/"
      When Get the page URL & verify if it is the correct page that open
      And Enter a valid "productName" on the search field
      And Click the search button

      #Examples:
      |productName|
      |Watch      |