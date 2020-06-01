/* eslint-disable no-undef */
var {defineSupportCode, setDefaultTimeout} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var loginPage = require('../login/loginPage.js');
var userListPage = require('./userListPage.js');

chai.use(chaiAsPromised);
var expect = chai.expect;
setDefaultTimeout(60 * 1000);

defineSupportCode(function({Given, When, Then}) {

    Given('I launch {string}', async (string) => {
        await loginPage.get(string);
    });
    
    Given('I enter {string} and {string}', async (email, pwd) => {
        await loginPage.setCredentials(email, pwd);
    });
    
    Given('I click on login button', async () => {
        await loginPage.clickSignInButton();
    });

    When('I go to {string}', async (string) => {
        await (loginPage.get(string));
    });

    When('I delete the employee with {string}', async (id) => {
        await userListPage.deleteEmployee(id);
    });

    //Considering that identification is unique
    Then('the employee with {string} does not appear in the employee table', async (id) => {
        expect (await userListPage.deleteEmployee(id)).to.equal('undefined');
    });

});