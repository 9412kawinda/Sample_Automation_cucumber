$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 2,
  "name": "Search function testing in ebay website",
  "description": "",
  "id": "search-function-testing-in-ebay-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate search function",
  "description": "",
  "id": "search-function-testing-in-ebay-website;validate-search-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Search-Positive"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the Home page \"https://www.ebay.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Get the page URL \u0026 verify if it is the correct page that open",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#      Then Enter a valid product as \"\u003cproduct\u003e\" on the search field"
    }
  ],
  "line": 9,
  "name": "Enter a valid product as \"\u003cproduct\u003e\" on the search field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click the search button",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "search-function-testing-in-ebay-website;validate-search-function;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 13,
      "id": "search-function-testing-in-ebay-website;validate-search-function;;1"
    },
    {
      "cells": [
        "watch"
      ],
      "line": 14,
      "id": "search-function-testing-in-ebay-website;validate-search-function;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3273800001,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate search function",
  "description": "",
  "id": "search-function-testing-in-ebay-website;validate-search-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    },
    {
      "line": 4,
      "name": "@Search-Positive"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the Home page \"https://www.ebay.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Get the page URL \u0026 verify if it is the correct page that open",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#      Then Enter a valid product as \"\u003cproduct\u003e\" on the search field"
    }
  ],
  "line": 9,
  "name": "Enter a valid product as \"watch\" on the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click the search button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ebay.com/",
      "offset": 23
    }
  ],
  "location": "SearchSteps.i_am_on_the_home_page_something(String)"
});
formatter.result({
  "duration": 4970344600,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.get_the_page_url_verify_if_it_is_the_correct_page_that_open()"
});
formatter.result({
  "duration": 13147101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "watch",
      "offset": 26
    }
  ],
  "location": "SearchSteps.enter_a_valid_product_as_something_on_the_search_field(String)"
});
formatter.result({
  "duration": 5148301100,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.click_the_search_button()"
});
formatter.result({
  "duration": 8051724800,
  "status": "passed"
});
formatter.after({
  "duration": 4990953599,
  "status": "passed"
});
});