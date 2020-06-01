/* eslint-disable no-undef */
var {defineSupportCode, setDefaultTimeout} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var loginPage = require('../../pages/loginPage.js');

chai.use(chaiAsPromised);
setDefaultTimeout(60 * 1000);

defineSupportCode(function ({Given, When, Then}) {
    Given('I launch {string}', async (string) => {
        await loginPage.get(string);
    });

    When('I enter {string} and {string}', async (string, string2) => {
        await loginPage.setCredentials(string, string2);
    });

    Then('I click on login button', async () => {
        await loginPage.clickSignInButton();
    });
});
