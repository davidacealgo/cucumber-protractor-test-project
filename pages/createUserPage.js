/* eslint-disable no-undef */
'use strict';

var createUserPage = function() {
    var dayN = element(by.id('employee_start_working_on_3i'));
    var newEmail = element(by.id('employee_email'));
    var firstN = element(by.id('employee_first_name'));
    var id = element(by.id('employee_identification'));
    var lastN = element(by.id('employee_last_name'));
    var leaderN = element(by.id('employee_leader_name'));
    var monthN = element(by.id('employee_start_working_on_2i'));
    var newEmployeeButton = $('input[name="commit"]');
    var successCreated = element(by.id('notice'));
    var yearN = element(by.id('employee_start_working_on_1i'));


    this.fillFormNewEmployee = async function(firstName, lastName, email, identification, leaderName) {
        browser.wait(ExpectedConditions.visibilityOf(firstN), 8000);
        await firstN.sendKeys(firstName);
        await lastN.sendKeys(lastName);
        await newEmail.sendKeys(email);
        await id.sendKeys(identification);
        await leaderN.sendKeys(leaderName);
    };

    this.setDateEmployee = async function(day, month, year) {
        browser.wait(ExpectedConditions.visibilityOf(yearN), 8000);
        var days =  element(by.xpath(`//select[@id="employee_start_working_on_3i"]//option[@value="${day}"]`));
        var months = element(by.xpath(`//select[@id="employee_start_working_on_2i"]//option[@value="${month}"]`));
        var years = element(by.xpath(`//select[@id="employee_start_working_on_1i"]//option[@value="${year}"]`));
        await yearN.click();
        await years.click();
        await monthN.click();
        await months.click();
        await dayN.click();
        await days.click();
    },

    this.clickEmployeeButton = async function() {
        browser.wait(ExpectedConditions.visibilityOf(newEmployeeButton), 8000);
        await newEmployeeButton.click();
    },

    this.userCreated = async function() {
        await browser.wait(ExpectedConditions.visibilityOf(successCreated), 8000);
        return successCreated.isDisplayed();
    }
}
module.exports = new createUserPage();