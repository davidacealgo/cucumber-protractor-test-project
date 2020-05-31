var loginPage = function () {

    var logo = element(by.css('#logo_text'));
    var userEmail = element(by.id('user_email'));
    var userPassword = element(by.id('user_password'));
    var signInButton = element(by.css('.submit'));
    var successLogin = element(by.css('.flash_notice'));

    this.get = function(url) {
        return browser.get(url);
    };

    this.setCredentials = function(email, password) {
        browser.sleep(5000);
        browser.wait(ExpectedConditions.visibilityOf(userEmail), 50000);
        userEmail.sendKeys(email);
        userPassword.sendKeys(password);
    }

    this.clickSignInButton = function() {
        browser.wait(ExpectedConditions.elementToBeClickable(signInButton), 50000);
        browser.sleep(5000);
        return signInButton.click();
    };

    this.validateIsLoggedIn = function() {
        browser.wait(ExpectedConditions.visibilityOf(logo), 50000);
        browser.wait(ExpectedConditions.visibilityOf(successLogin), 50000);
        return successLogin.isDisplayed();
    };

    this.getText = function() {
        return successLogin.getText();
    };
};

module.exports = new loginPage();