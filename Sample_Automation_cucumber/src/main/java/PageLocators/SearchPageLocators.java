package PageLocators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SearchPageLocators {

//    search field
    @FindBy(how = How.XPATH,using = "//*[@id='gh-ac']")
    public WebElement EnterSearchField;

//    search button
    @FindBy(how = How.ID,using = "gh-btn")
    public WebElement SearchButton;
}
