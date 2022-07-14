package Steps;

import Utilities.SeleniumDriver;
import cucumber.api.java.Before;

public class BeforeAction {

    @Before
    public static void setup(){
        SeleniumDriver.setUpDriver();
    }
}