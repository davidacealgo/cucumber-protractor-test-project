'use strict';

module.exports = {
        homePage: {
            logo: element(by.css('#logo')),
            successLogin: element(by.css('.flash_notice')),
            userLogged: element(by.css('#user_information'))
        },

        isHomePage: function() {
            var home = this.homePage;
            browser.wait(ExpectedConditions.visibilityOf(home.userLogged), 8000);
            browser.sleep(5000);
            return (browser.getCurrentUrl());
        },

        successLoggedIn: function() {
            var home = this.homePage;
            browser.wait(ExpectedConditions.visibilityOf(home.successLogin), 8000);
            return home.successLogin.isDisplayed();
        },

        loggedUser: function() {
            var home = this.homePage;
            browser.wait(ExpectedConditions.visibilityOf(home.userLogged), 8000);
            return home.userLogged.isDisplayed();
        },

        homePageLogo: function() {
            var home = this.homePage;
            browser.wait(ExpectedConditions.visibilityOf(home.logo), 8000);
            return home.logo.isDisplayed();
        },
};
