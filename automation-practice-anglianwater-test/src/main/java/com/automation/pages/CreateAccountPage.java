package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(CreateAccountPage.class.getName());

    public CreateAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement createanAccnewEmail;

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath ="//span[normalize-space()='Create an account']")
    WebElement clickcreataccount;

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(id = "customer_firstname")
    WebElement firstName;

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(id = "customer_lastname")
    WebElement lastName;

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//input[@id='email']")
    WebElement email;

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(id = "passwd")
    WebElement password;

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(id = "address1")
    WebElement address;

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(id = "city")
    WebElement city;

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(id = "id_state")
    WebElement state;

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath= "//input[@id='postcode']")
    WebElement zipcode;

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//select[@id='id_country']")
    WebElement countryName;

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement phoneNumber;

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy(xpath = "//input[@id='alias']")
    WebElement reference;

    @CacheLookup //to store element in memory to run tests quickerv
    @FindBy(xpath = "//span[normalize-space()='Register']")
    WebElement registerbtn;

    @CacheLookup //to store element in memory to run tests quicker
    @FindBy (xpath = "//h1[contains(text(),'My account')]")
    WebElement verifyMyAccount;


    public void emailForCreateNewAccount(String email){
        log.info("enter email for create new account "+ createanAccnewEmail.toString());
        sendTextToElement(createanAccnewEmail,email);
    }

    public void clickCreatAccount(){
        log.info("Clicking CreatAccount : " + clickcreataccount.toString());
        clickOnElement(clickcreataccount);
    }

    public void enterFirstName(String text) {
        log.info("enter First Name " + firstName.toString());
        sendTextToElement(firstName, text);
    }

    public void enterLastName(String text) {
        log.info("enter LastName : " + lastName.toString());
        sendTextToElement(lastName, text);
    }
    public void enterPassword(String text) {
        log.info("enter password " + password.toString());
        sendTextToElement(password, text);
    }

    public void enterAddress(String text) {
        log.info("Enter address " + address.toString());
        sendTextToElement(address, text);
    }

    public void enterCity(String text) {
        log.info("enter city " + city.toString());
        sendTextToElement(city, text);
    }

    public void selectState(String text) {
        log.info("select state " + state.toString());
        sendTextToElement(state, text);
    }

    public void enterZipCode(String text) {
        log.info("enter Zip code " + zipcode.toString());
        sendTextToElement(zipcode, text);
    }

    public void selectCountry(String country){
        log.info("select country name : "+ countryName.toString());
        sendTextToElement(countryName,country);
    }

    public void enterPhoneNumber(String text) {
        log.info("enter Phone Number " + phoneNumber.toString());
        sendTextToElement(phoneNumber, text);
    }

    public void enterReference(String text) {
        log.info("enter Reference " + reference.toString());
        sendTextToElement(reference, text);
    }

    public void clickOnRegisterBtn() {
        clickOnElement(registerbtn);
    }

    public String verifyMyAccountText() {
       log.info("verify Text " + verifyMyAccount.toString());
        return getTextFromElement(verifyMyAccount);
    }

}
