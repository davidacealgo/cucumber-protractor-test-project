/* eslint-disable no-undef */
'use strict';

var loginPage = function() {
    
    var signInButton =  element(by.css('.submit'));
    var userEmail = element(by.id('user_email'));
    var userPassword = element(by.id('user_password'));

    this.get = async function(url) {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        await browser.get(url);
    };

    this.setCredentials = async function(email, password) {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        await userEmail.sendKeys(email);
        await userPassword.sendKeys(password);
    };

    this.clickSignInButton = async function() {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        await browser.wait(ExpectedConditions.elementToBeClickable(signInButton), 5000);
        await browser.sleep(5000).then(function() {
            signInButton.click();
        });
    }
};
module.exports = new loginPage();
