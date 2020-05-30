var {defineSupportCode, setDefaultTimeout} = require('cucumber');
var loginPage = require('../pages/loginPage.js');
setDefaultTimeout(60 * 1000);

defineSupportCode(function ({Given, When, Then}) {

    Given('I launch url', async () => {
        return await browser.get("https://vacations-management.herokuapp.com/");
      });

      When('I enter email and password as valid', function (dataTable) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

    When('I click Sign in button', function() {
        return loginPage.clickSignInButton();
    });

    Then('verify that the user is logged in', async() => {
        expect(loginPage.validateIsLoggedIn()).to.eventually.to.equal(true);
    });
});
