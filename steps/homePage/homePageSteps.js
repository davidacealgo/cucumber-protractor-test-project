var {defineSupportCode, setDefaultTimeout} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var homePage = require('./homePage.js');
var loginPage = require('../login/loginPage.js');

chai.use(chaiAsPromised);
var expect = chai.expect;
setDefaultTimeout(60 * 1000);

defineSupportCode(function({Given, When, Then}) {

    Given('I launch {string}', function (string, next) {
        loginPage.get(string);
        next();
    });
    
    Given('I enter {string} and {string}', function (email, pwd, next) {
        loginPage.setCredentials(email, pwd);
        next();
    });
    
    Given('I click on login button', function (next) {
        loginPage.clickSignInButton();
        next();
    });

    When('the system redirect me to homepage', function (next) {
        expect (homePage.isHomePage()).to.eventually.equal('https://vacations-management.herokuapp.com/').and.notify(next);
    });

    Then('I should see message of successfully logged in', function (next) {
        expect(homePage.successLoggedIn())
            .to.eventually.equal(true).and.notify(next);
    });

    Then('I should see name user logged in', function (next) {
        expect(homePage.loggedUser())
            .to.eventually.equal(true).and.notify(next);
    });

    Then('I should see the logo of GAP', function (next) {
        expect(homePage.homePageLogo())
            .to.eventually.equal(true).and.notify(next);
    });
});