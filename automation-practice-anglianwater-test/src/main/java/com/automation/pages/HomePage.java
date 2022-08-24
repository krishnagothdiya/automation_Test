package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage (){
        PageFactory.initElements(driver,this);
    }

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//a[normalize-space()='Sign in']")
    WebElement signInLink;

    public void clickOnSignInLink(){
        log.info("Clicking on Sign InLink : " + signInLink.toString());
        clickOnElement(signInLink);
    }
}
