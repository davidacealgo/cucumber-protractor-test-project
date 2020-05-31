var {defineSupportCode, setDefaultTimeout} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var loginPage = require('../src/pages/loginPage.js');

chai.use(chaiAsPromised);
var expect = chai.expect;
setDefaultTimeout(60 * 1000);

defineSupportCode(function ({Given, When, Then}) {

  Given('I launch {string}', function (string) {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    loginPage.get(string);
  });

  When('I enter {string} and {string}', function (string, string2) {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    loginPage.setCredentials(string, string2);
  });

  When('I click on login button', function () {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    loginPage.clickSignInButton();
  });

  Then('verify that the user is logged in', async() => {
    //expect(loginPage.getText()).to.eventually.equal("Signed in successfully.");
    expect(loginPage.validateIsLoggedIn()).to.eventually.equal(true);
  });
});
