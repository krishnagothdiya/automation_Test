$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccountPage.feature");
formatter.feature({
  "line": 2,
  "name": "Create Account Page Test",
  "description": "As user I want to Create Account in automation website",
  "id": "create-account-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CreateAccount"
    }
  ]
});
formatter.before({
  "duration": 16183836200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should Create Account successfully",
  "description": "",
  "id": "create-account-page-test;verify-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Signin link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email for create account \"kag54@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter First name \"Krish\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Last name \"Gotha\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password for create account \"kag123\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter address \"Hello Street\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter city \"Texas\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select state \"Texas\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter zipCode \"32324\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select country \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter phone number \"0785684545\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter adddress refrence \"My Address\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should verify My Account message",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on singout",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should verify sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 110902000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 16191496200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kag54@gmail.com",
      "offset": 34
    }
  ],
  "location": "CreateAcconutSteps.iEnterEmailForCreateAccount(String)"
});
formatter.result({
  "duration": 118364500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAcconutSteps.iClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 74483100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Krish",
      "offset": 20
    }
  ],
  "location": "CreateAcconutSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 16388283700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gotha",
      "offset": 19
    }
  ],
  "location": "CreateAcconutSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 93752900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kag123",
      "offset": 37
    }
  ],
  "location": "CreateAcconutSteps.iEnterPasswordForCreateAccount(String)"
});
formatter.result({
  "duration": 102026300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello Street",
      "offset": 17
    }
  ],
  "location": "CreateAcconutSteps.iEnterAddress(String)"
});
formatter.result({
  "duration": 119151900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Texas",
      "offset": 14
    }
  ],
  "location": "CreateAcconutSteps.iEnterCity(String)"
});
formatter.result({
  "duration": 100005700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Texas",
      "offset": 16
    }
  ],
  "location": "CreateAcconutSteps.iSelectState(String)"
});
formatter.result({
  "duration": 157688600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32324",
      "offset": 17
    }
  ],
  "location": "CreateAcconutSteps.iEnterZipCode(String)"
});
formatter.result({
  "duration": 78885600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 18
    }
  ],
  "location": "CreateAcconutSteps.iSelectCountry(String)"
});
formatter.result({
  "duration": 87339200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0785684545",
      "offset": 22
    }
  ],
  "location": "CreateAcconutSteps.iEnterPhoneNumber(String)"
});
formatter.result({
  "duration": 87262400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Address",
      "offset": 27
    }
  ],
  "location": "CreateAcconutSteps.iEnterAdddressRefrence(String)"
});
formatter.result({
  "duration": 91826300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAcconutSteps.iClickRegisterButton()"
});
formatter.result({
  "duration": 12841100600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAcconutSteps.iShouldVerifyMyAccountMessage()"
});
formatter.result({
  "duration": 43983500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAcconutSteps.iClickOnSingout()"
});
formatter.result({
  "duration": 12135405300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAcconutSteps.iShouldVerifySignInButton()"
});
formatter.result({
  "duration": 17945842300,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d104.0.5112.102)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-ET865OO\u0027, ip: \u0027192.168.0.206\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c17792f767acd226873664aae23d567f, findElement {using\u003dxpath, value\u003d//span[normalize-space()\u003d\u0027Sign in\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.102, chrome: {chromedriverVersion: 104.0.5112.79 (3cf3e8c8a07d..., userDataDir: C:\\Users\\kgoth\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52443}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52443/devtoo..., se:cdpVersion: 104.0.5112.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c17792f767acd226873664aae23d567f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.automation.utility.Utility.verifyThatElementIsDisplayed(Utility.java:284)\r\n\tat com.automation.pages.SignInPage.verifySigninButton(SignInPage.java:101)\r\n\tat com.automation.cucumber.steps.CreateAcconutSteps.iShouldVerifySignInButton(CreateAcconutSteps.java:88)\r\n\tat ✽.Then I should verify sign in button(CreateAccountPage.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4797300,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d104.0.5112.102)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-ET865OO\u0027, ip: \u0027192.168.0.206\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c17792f767acd226873664aae23d567f, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.102, chrome: {chromedriverVersion: 104.0.5112.79 (3cf3e8c8a07d..., userDataDir: C:\\Users\\kgoth\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52443}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52443/devtoo..., se:cdpVersion: 104.0.5112.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c17792f767acd226873664aae23d567f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.automation.utility.Utility.getScreenshot(Utility.java:335)\r\n\tat com.automation.cucumber.Hooks.tearDown(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.uri("SignPage.feature");
formatter.feature({
  "line": 2,
  "name": "SignPage Test",
  "description": "As user I want to login and search product",
  "id": "signpage-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@signinpage"
    }
  ]
});
formatter.before({
  "duration": 16900536700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should verify LogIn SuccessFully With Valid Credentials, search product, add to cart and confirm order",
  "description": "",
  "id": "signpage-test;user-should-verify-login-successfully-with-valid-credentials,-search-product,-add-to-cart-and-confirm-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Signin link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter username \"kag54@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"kag123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should verify sign out link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should search Summer Dress in Blue",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select blue colour",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select payment method",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I confirm my order",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify message order is complete",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
