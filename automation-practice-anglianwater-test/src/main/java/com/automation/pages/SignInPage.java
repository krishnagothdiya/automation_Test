package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;

public class SignInPage extends Utility {
    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());


    public SignInPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailField;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement passwordField;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//span[normalize-space()='Sign in']")
    WebElement signInbtn;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement signOutLink;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement clicksignOutLink;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//span[normalize-space()='Sign in']")
    WebElement verifysignInbtn;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(id = "search_query_top")
    WebElement searchbar;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[2]/form[1]/button[1]")
    WebElement search;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//a[@id='color_20']")
    WebElement printedbluedress;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//span[contains(text(),'Add to cart')]")
    WebElement addtocart;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//body[1]/div[1]/div[1]/header[1]/div[3]/div[1]/div[1]/div[4]/div[1]/div[2]/div[4]/a[1]/span[1]")
    WebElement summarycheckout;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/p[2]/a[1]/span[1]")
    WebElement signincheckout;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/form[1]/p[1]/button[1]/span[1]")
    WebElement addresscheckout;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/p[1]/button[1]/span[1]")
    WebElement shippingcheckout;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(id = "cgv")
    WebElement terms;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]/div[3]/div[2]/div[1]/p[1]/a[1]")
    WebElement paybycheck;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/form[1]/p[1]/button[1]/span[1]")
    WebElement confirmmyorder;
    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//p[contains(text(),'Your order on My Store is complete.')]")
    WebElement textverify;

    public void enterEmail(String text){
        log.info("enter email" + emailField.toString());
        sendTextToElement(emailField,text);
    }
    public void enterpassword(String password){
        log.info("enter password" + passwordField.toString());
        sendTextToElement(passwordField,password);
    }
    public void clickonSignInBtn(){
        clickOnElement(signInbtn);
    }

    public String verifySignOutLink(){
        log.info("verify signOut Link "+ signOutLink.toString());
        verifyThatElementIsDisplayed(signOutLink);
        return getTextFromElement(signOutLink);
    }
    public void clickOnSignOutLink(){
        log.info("click on sign out link "+ clicksignOutLink.toString());
        clickOnElement(clicksignOutLink);
    }
    public String verifySigninButton(){
        log.info("verify signin button "+ verifysignInbtn.toString());
        verifyThatElementIsDisplayed(verifysignInbtn);
        return getTextFromElement(verifysignInbtn);
    }
    public void searchbar(){
        log.info("search bar" +searchbar.toString());
        sendTextToElement(searchbar, "summer dress in blue");
        clickOnElement(search);
    }
    public void clickOnPrintedBlueDress(){
        log.info("Printed Blue Dress" +printedbluedress.toString());
        clickOnElement(printedbluedress);
    }
    public void clickOnAddtocart(){
        log.info("Add to cart" +addtocart.toString());
        clickOnElement(addtocart);
    }
    public void clickOnSummaryCheckout(){
        log.info("Summary Check Out " + summarycheckout.toString());
        clickOnElement(summarycheckout);
    }
    public void clickOnSigninCheckout(){
        log.info("Sign in Check Out " + signincheckout.toString());
        clickOnElement(signincheckout);
    }
    public void clickOnAddressCheckout(){
        log.info("Address Check Out " + addresscheckout.toString());
        clickOnElement(addresscheckout);
    }
    public void clickOnShippingCheckout(){
        log.info("Shipping Check Out " + shippingcheckout.toString());
        clickOnElement(terms);
        clickOnElement(shippingcheckout);
    }
       public void clickOnpaybycheck(){
        log.info("paybycheck " + paybycheck.toString());
        clickOnElement(paybycheck);
    }
    public void clickOnConfirmMyOrder(){
        log.info("Confirm my order " + confirmmyorder.toString());
        clickOnElement(confirmmyorder);
    }
    public String verifyTextMyStoreComplete() {
        log.info("verify Text " +textverify .toString());
        return getTextFromElement(textverify);
    }

}
