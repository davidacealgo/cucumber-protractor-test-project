var {defineSupportCode, setDefaultTimeout} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var loginPage = require('../pages/loginPage.js');

chai.use(chaiAsPromised);
var expect = chai.expect;
setDefaultTimeout(60 * 1000);

defineSupportCode(function ({Given, When, Then}) {

    Given('I launch url', async () => {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        return await browser.get("https://vacations-management.herokuapp.com/");
      });

    When('I enter email and password as valid', function() {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        loginPage.signUp("gap-automation-test@mailinator.com", "12345678");
    });

    When('I click on login button', function () {
        browser.waitForAngularEnabled(false);
        loginPage.clickSignInButton();
      });

    Then('verify that the user is logged in', async() => {
        expect(loginPage.validateIsLoggedIn()).to.eventually.to.equal(true);
    });
});
