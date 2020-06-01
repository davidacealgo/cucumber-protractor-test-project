/* eslint-disable no-undef */
'use strict';

var userListPage = function() {

    //var del = element(by.xpath('//*[@id="content"]/table/tbody/tr[2]/td[9]/a'));

    this.deleteEmployee = async function(id) {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        //console.log(employees);
        //var employee = employees.findElement(by.css(''))
        //console.log(employees);
        var del = element(by.xpath('//*[@id="content"]/table/tbody/tr[2]/td[9]/a'));
        await del.click();
        browser.wait(ExpectedConditions.alertIsPresent(), 5000);
        await browser.switchTo().alert().accept();
        //browser.wait(ExpectedConditions.visibilityOf(del), 2000);
    };

    this.searchEmployee = async function(id) {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        var employee = await element(by.xpath(`//td[.="${id}"]`));
        return employee.isDisplayed();
    };
}   
module.exports = new userListPage();