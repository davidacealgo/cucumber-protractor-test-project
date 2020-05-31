/* eslint-disable no-undef */
'use strict';

var userListPage = function() {


    this.delete = async function() {
        var del = element(by.xpath('//*[@id="content"]/table/tbody/tr[2]/td[9]/a'));
        var i=0;
        while(i < 100){
            await del.click();
            browser.wait(ExpectedConditions.alertIsPresent(), 5000);
            await browser.switchTo().alert().accept();
            i++;
            browser.wait    (ExpectedConditions.visibilityOf(del), 2000);
        }
}
module.exports = new userListPage();