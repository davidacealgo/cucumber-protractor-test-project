var loginPage = function () {

    var logo = element(by.css('#logo_text'));
    var userEmail = element(by.id('user_email'));
    var userPassword = element(by.id('user_password'));
    var signInButton = element(by.css('.submit'));
    var successLogin = element(by.css('.flash_notice'));

    this.clickSignInButton = function() {
        browser.wait(ExpectedConditions.elementToBeClickable(signInButton), 5000);
        signInButton.click();
    };

    this.signUp = function(email, password) {
        browser.wait(ExpectedConditions.visibilityOf(userEmail), 5000);
        userEmail.sendKeys(email);
        browser.wait(ExpectedConditions.visibilityOf(userPassword), 5000);
        userPassword.sendKeys(password);
    };

    this.validateIsLoggedIn = function() {
        browser.wait(ExpectedConditions.visibilityOf(logo), 10000);
        browser.wait(ExpectedConditions.visibilityOf(successLogin), 5000);
        return successLogin.isDisplayed();
    };
};

module.exports = new loginPage();