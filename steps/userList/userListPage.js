/* eslint-disable no-undef */
'use strict';

var userListPage = function() {

    var employees = element.all(by.xpath('//tr'));

    this.deleteEmployee = async function(id) {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        var i = await employees.count();
        
        for(let k=1; k<=i; k++) {
            var del = element(by.xpath(`//*[@id="content"]/table/tbody/tr["${i}"]/td[.="${id}"]`));
            console.log(await del.getText());
        }
        await del.click();
        browser.wait(ExpectedConditions.alertIsPresent(), 5000);
        await browser.switchTo().alert().accept();
    };

    this.searchEmployee = async function(id) {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        var employee = await element(by.xpath(`//td[.="${id}"]`));
        return employee;
    };
}   
module.exports = new userListPage();