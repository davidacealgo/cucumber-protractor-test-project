/* eslint-disable no-undef */
var {defineSupportCode, setDefaultTimeout} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var homePage = require('./homePage.js');
var loginPage = require('../login/loginPage.js');

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

    When('the system redirect me to homepage', async () => {
        expect (await homePage.isHomePage()).to.eventually.equal('https://vacations-management.herokuapp.com/');
    });

    Then('I should see message of successfully logged in', async () => {
        expect(await homePage.successLoggedIn()).to.eventually.equal(true);
    });

    Then('I should see name user logged in', async () => {
        expect(await homePage.loggedUser()).to.eventually.equal(true);
    });

    Then('I should see the logo of GAP', async () => {
        expect(await homePage.homePageLogo()).to.eventually.equal(true);
    });
});