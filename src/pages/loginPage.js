'use strict';
module.exports = {

    loginPage: {
        logo: element(by.css('#logo_text')),
        userEmail: element(by.id('user_email')),
        userPassword: element(by.id('user_password')),
        signInButton: element(by.css('.submit')),
        successLogin: element(by.css('.flash_notice'))
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
        browser.wait(ExpectedConditions.elementToBeClickable(login.signInButton), 50000);
        login.signInButton.click();
    },

    validateIsLoggedIn: function() {
        var login = this.loginPage;
        browser.wait(ExpectedConditions.visibilityOf(login.logo), 50000);
        browser.wait(ExpectedConditions.visibilityOf(login.successLogin), 50000);
        return login.successLogin.isDisplayed();
    }
};
