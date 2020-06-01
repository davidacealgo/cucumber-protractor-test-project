/* eslint-disable no-undef */
var {defineSupportCode, setDefaultTimeout} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var loginPage = require('../../pages/loginPage.js');
var userListPage = require('../../pages/userListPage.js');

chai.use(chaiAsPromised);
var expect = chai.expect;
setDefaultTimeout(60 * 1000);

defineSupportCode(function({Given,When, Then}) {

    Given('I launch {string}', async (string) => {
        await loginPage.get(string);
    });

    Given('I enter {string} and {string}', async (string, string2) => {
        await loginPage.setCredentials(string, string2);
    });

    Given('I click on login button', async () => {
        await loginPage.clickSignInButton();
    });

    Given('I go to {string}', async (string) => {
        await (loginPage.get(string));
    });

    When('I validate the row of new employee with {string}', async (id) => {
        expect (await userListPage.searchEmployee(id)).to.equal(true);
        expect (await userListPage.getUserRow(id)).to.not.equal(0);
    });

    When('I delete the employee with {string}', async (id) => {
        await userListPage.deleteEmployee(id);
    });

    //Considering that identification is unique
    Then('the employee with {string} does not appear in the employee table', async (id) => {
        expect (await userListPage.searchEmployee(id)).to.equal(false);
    });

});