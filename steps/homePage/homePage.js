/* eslint-disable no-undef */
'use strict';

var homePage = function() {
    var createUserButton = element(by.css('#content > p > a'));
    var logo = element(by.css('#logo'));
    var successLogin = element(by.css('.flash_notice'));
    var userLogged = element(by.css('#user_information'));


    this.isHomePage = async function() {
        browser.wait(ExpectedConditions.visibilityOf(successLogin), 8000);
        return (browser.getCurrentUrl());
    };

    this.successLoggedIn = async function() {
        browser.wait(ExpectedConditions.visibilityOf(successLogin), 8000);
        return successLogin.isDisplayed();
    };

    this.loggedUser = async function() {
        browser.wait(ExpectedConditions.visibilityOf(userLogged), 8000);
        return userLogged.isDisplayed();
    };

    this.homePageLogo = async function() {
        browser.wait(ExpectedConditions.visibilityOf(logo), 8000);
        return logo.isDisplayed();
    },
    
    this.openCreateUser = async function() {
        await createUserButton.click();
    }

    this.delete = async function() {
        var del = element(by.xpath('//*[@id="content"]/table/tbody/tr[2]/td[9]/a'));
        var i=0;
        while(i < 100){
            await del.click();
            browser.wait(ExpectedConditions.alertIsPresent(), 5000);
            await browser.switchTo().alert().accept();
            i++;
            browser.wait(ExpectedConditions.visibilityOf(del), 2000);
        }
    }
};
module.exports = new homePage();
