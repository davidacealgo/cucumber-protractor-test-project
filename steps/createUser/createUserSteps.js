var {defineSupportCode, setDefaultTimeout} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var createUSerPage = require('./createUserPage.js');
var homePage = require('../homePage/homePage.js');
var loginPage = require('../login/loginPage.js');

chai.use(chaiAsPromised);
var expect = chai.expect;
setDefaultTimeout(60 * 1000);

defineSupportCode(function({Given, When, Then}) {

    Given('I am logged in', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    });
       
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

    Given('I am on homepage', function (next) {
        expect (homePage.isHomePage()).to.eventually.equal('https://vacations-management.herokuapp.com/').and.notify(next);
    });

    When('I go to create user', function (next) {
        createUSerPage.OpenCreateUser();
        next();
    });

    When('I create a user with {string} and {string} and {string} and {string} and {string}', function (string, string2, string3, string4, string5) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    });

    When('I select start working in {string} and {string} and {string}', function (string, string2, string3) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    });

    When('I click create Employee button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    });

    Then('user is logged in', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    });
    
});