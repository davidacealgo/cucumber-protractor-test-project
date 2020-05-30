import { browser, ExpectedConditions } from 'protractor';

var LoginPage = function () {

    var userEmail = element(by.id('user_email'));
    var password = element(by.id('user_password'));
    var signInButton = element(by.css('.submit'))

    this.loginToPage = function (email, password) {
        browser.wait(ExpectedConditions.visibilityOf(userEmail), 5000);
        userEmail.sendKeys(email);
        password.sendKeys(password);
    };

    this.clickSignInButton = function () {
        browser.wait(ExpectedConditions.elementToBeClickable(signInButton), 3000);
        signInButton.click();
    };
};

module.exports = new LoginPage();