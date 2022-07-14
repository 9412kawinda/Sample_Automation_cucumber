package PageActions;

import Utilities.SeleniumDriver;
import gherkin.lexer.Th;
import org.openqa.selenium.support.PageFactory;
import PageLocators.SearchPageLocators;

public class SearchPageActions {

    SearchPageLocators searchPageLocators;

    public SearchPageActions(){
        this.searchPageLocators = new SearchPageLocators();
        PageFactory.initElements(SeleniumDriver.getDriver(),searchPageLocators);
    }

    public void enterSearchName(String productName) throws InterruptedException{
        searchPageLocators.EnterSearchField.sendKeys(productName);
        Thread.sleep(5000);
    }

    public void clickSearchButton(){
        searchPageLocators.SearchButton.click();
    }
}
