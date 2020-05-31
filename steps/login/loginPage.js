'use strict';

module.exports = {

    loginPage: {
        signInButton: element(by.css('.submit')),
        userEmail: element(by.id('user_email')),
        userPassword: element(by.id('user_password'))
    },

    get: function(url) {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.get(url);
    },

    setCredentials: function(email, password) {
        var login = this.loginPage;
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        login.userEmail.sendKeys(email);
        login.userPassword.sendKeys(password);
    },

    clickSignInButton: function() {
        var login = this.loginPage;
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.wait(ExpectedConditions.elementToBeClickable(login.signInButton), 50000);
        login.signInButton.click();
    }
};
