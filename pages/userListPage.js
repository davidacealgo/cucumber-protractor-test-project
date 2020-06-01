/* eslint-disable no-undef */
'use strict';

var userListPage = function() {

    var employees = element.all(by.xpath('//tr'));

    this.deleteEmployee = async function(id) {
        var userRow = await this.getUserRow(id);
        await element(by.xpath(`//tr[${userRow}]/td[9]/a`)).click();
        browser.wait(ExpectedConditions.alertIsPresent(), 5000);
        await browser.switchTo().alert().accept();
    };

    this.searchEmployee = async function(id) {
        var userExists = await this.getUserRow(id);
        if (userExists != 0) {
            return true;
        } else {
            return false
        }
    };

    this.getUserRow = async function(id) {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        var length = await employees.count();
        var auxRow = 0;
        var row = 2;
        var content = '';
        for(row; row<=length; row++) {
            var del = element(by.xpath(`//tr[${row}]/td[3]`));
            content = await del.getText();
            if (content === id){
                auxRow = row;
                row=length+1;
            }
        } 
        return auxRow;
    }
}   
module.exports = new userListPage();