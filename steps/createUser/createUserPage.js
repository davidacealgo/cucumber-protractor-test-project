/* eslint-disable no-undef */
'use strict';

var createUserPage = function() {
    var dayN = element(by.id('employee_start_working_on_3i'));
    //var days =  element.all(by.css('#employee_start_working_on_3i option'));
    var newEmail = element(by.id('employee_email'));
    var firstN = element(by.id('employee_first_name'));
    var id = element(by.id('employee_identification'));
    var lastN = element(by.id('employee_last_name'));
    var leaderN = element(by.id('employee_leader_name'));
    var monthN = element(by.id('employee_start_working_on_2i'));
    //var months = element.all(by.css('#employee_start_working_on_2i option'));
    var newEmployeeButton = $('input[name="commit"]');
    var successCreated = element(by.id('notice'));
    var yearN = element(by.id('employee_start_working_on_1i'));
    //var years = element.all(by.css('#employee_start_working_on_1i option'));


    this.fillFormNewEmployee = async function(firstName, lastName, email, identification, leaderName) {
        browser.wait(ExpectedConditions.visibilityOf(firstN), 8000);
        await firstN.sendKeys(firstName);
        await lastN.sendKeys(lastName);
        await newEmail.sendKeys(email);
        await id.sendKeys(identification);
        await leaderN.sendKeys(leaderName);
        await browser.sleep(5000);
    };

    this.setDateEmployee = async function(year, month, day) {
        browser.wait(ExpectedConditions.visibilityOf(yearN), 8000);
        var drpOpt = element(by.css(`option[value=${year}]`));
        var drpOpt1 = element(by.css(`option[value=${month}]`));
        var drpOpt2 = element(by.css(`option[value=${day}]`));
        await yearN.click().then(function(){
            browser.actions().mouseMove(drpOpt).click().perform();
        });
        /*if(.years.get(0).getText() ==  year){
            .years.get(0).click().perform();
        }*/
        await monthN.click();
        /*console.log(.months.get(0).getText());
        if(.months.get(0).getText() ==  month){
            .months.get(0).click().perform();
        }*/
        await dayN.click();
        /*console.log(.months.get(0).getText());
        if(.days.get(20).getText() ==  day){
            .days.get(20).click().perform();
        }*/
    },

    this.clickEmployeeButton = async function() {
        browser.wait(ExpectedConditions.visibilityOf(newEmployeeButton), 8000);
        await newEmployeeButton.click();
        browser.sleep(5000);
    },

    this.userCreated = async function() {
        await browser.wait(ExpectedConditions.visibilityOf(successCreated), 8000);
        return successCreated.isDisplayed();
    }
}
module.exports = new createUserPage();