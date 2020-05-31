var {defineSupportCode, setDefaultTimeout} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var loginPage = require('../src/pages/loginPage.js');

chai.use(chaiAsPromised);
var expect = chai.expect;
setDefaultTimeout(60 * 1000);

defineSupportCode(function ({Given, When, Then}) {
  Given('I launch {string}', function (string, next) {
    loginPage.get(string);
    next();
  });

  When('I enter {string} and {string}', function (string, string2, next) {
    loginPage.setCredentials(string, string2);
    next();
  });

  When('I click on login button', function (next) {
    loginPage.clickSignInButton();
    next();
  });

  Then('verify that the user is logged in', function(next) {
    expect(loginPage.validateIsLoggedIn()).to.eventually.equal(true).and.notify(next);
  });
});
