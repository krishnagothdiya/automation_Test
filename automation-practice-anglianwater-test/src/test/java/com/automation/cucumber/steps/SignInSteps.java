package com.automation.cucumber.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SignInSteps {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on Signin link$")
    public void iClickOnSigninLink() {
        new HomePage().clickOnSignInLink();
    }
    @And("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String name) {
        new SignInPage().enterEmail(name);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new SignInPage().enterpassword(password);
    }

    @And("^I click on signIn button$")
    public void iClickOnSignInButton() {
        new SignInPage().clickonSignInBtn();
    }

    @Then("^I should verify sign out link$")
    public void iShouldVerifySignOutLink() {
        Assert.assertEquals("Sign out link not display", "Sign out", new SignInPage().verifySignOutLink());
    }

    @And("^I should search Summer Dress in Blue$")
    public void iShouldSearchSummerDressInBlue() {
        new SignInPage().searchbar();
    }

    @And("^I select blue colour$")
    public void iSelectBlueColour() {
        new SignInPage().clickOnPrintedBlueDress();
    }

    @And("^I add to cart$")
    public void iAddToCart() {
        new SignInPage().clickOnAddtocart();
    }

    @And("^I proceed to checkout$")
    public void iProceedToCheckout() {
        new SignInPage().clickOnSummaryCheckout();
        new SignInPage().clickOnSigninCheckout();
        new SignInPage().clickOnAddressCheckout();
        new SignInPage().clickOnShippingCheckout();
        }

    @And("^I select payment method$")
    public void iSelectPaymentMethod() {
        new SignInPage().clickOnpaybycheck();
    }

    @And("^I confirm my order$")
    public void iConfirmMyOrder() {
        new SignInPage().clickOnConfirmMyOrder();
    }

    @Then("^I verify message order is complete$")
    public void iVerifyMessageOrderIsComplete() {
        new SignInPage().verifyTextMyStoreComplete();
    }
}
