/* eslint-disable no-undef */
var {defineSupportCode, setDefaultTimeout} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var homePage = require('../../pages/homePage.js');

chai.use(chaiAsPromised);
var expect = chai.expect;
setDefaultTimeout(60 * 1000);

defineSupportCode(function({When, Then}) {

    When('I am on the homepage', async () => {
        await expect (homePage.isHomePage()).to.eventually.equal('https://vacations-management.herokuapp.com/');
    });

    Then('I should see message of successfully logged in', async () => {
        await expect(homePage.successLoggedIn()).to.eventually.equal(true);
    });

    Then('I should see name user logged in', async () => {
        await expect(homePage.loggedUser()).to.eventually.equal(true);
    });

    Then('I should see the logo of GAP', async () => {
        await expect(homePage.homePageLogo()).to.eventually.equal(true);
    });
});