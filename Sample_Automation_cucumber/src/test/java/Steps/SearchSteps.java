package Steps;


import Utilities.SeleniumDriver;
import PageActions.SearchPageActions;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

import static org.junit.Assert.assertEquals;

public class SearchSteps {

    SearchPageActions searchPageActions = new SearchPageActions();

    @Given("^I am on the Home page \"([^\"]*)\"$")
    public void i_am_on_the_home_page_something(String url) throws Throwable {
        System.out.println("Redirect to the URL");
        SeleniumDriver.openPage(url);
    }

    @When("^Get the page URL & verify if it is the correct page that open$")
    public void get_the_page_url_verify_if_it_is_the_correct_page_that_open() throws Throwable {
        String ActualURL1 = SeleniumDriver.getDriver().getCurrentUrl();
        System.out.println("The Current Web Home URL is " + ActualURL1);

        String ExpectedURL = "https://www.ebay.com/";
        assertEquals(ActualURL1, ExpectedURL);
        System.out.println("The Page URL Assertion Success");
    }

    @And("^Enter a valid \"([^\"]*)\" on the search field$")
    public void enter_a_valid_something_on_the_search_field(String productName) throws InterruptedException {
        searchPageActions.enterSearchName(productName);
        System.out.println("Entered product name success");
    }

    @And("^Click the search button$")
    public void click_the_search_button() throws Throwable {
        searchPageActions.clickSearchButton();
    }
}
