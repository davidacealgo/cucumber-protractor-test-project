var loginPage = require ('../pages/loginPage.js');

describe('login into website', () => {
    it('Success login', () => {
        loginPage.get();
        loginPage.setEmail("dfdfdsfsdf");
        loginPage.setPassword("123435");
        loginPage.clickSignInButton();
        //browser.wait(ExpectedConditions.visibilityOf(element(by.css('#logo_text'))), 5000);
        //browser.wait(ExpectedConditions.visibilityOf(element(by.css('.flash_notice'))), 5000);
    })
})