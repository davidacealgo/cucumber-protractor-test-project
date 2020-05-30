var {defineSupportCode} = require('cucumber');
var loginPage require('../pages/loginPage.js');
defineSupportCode(function ({Given, When, Then}) {

    Given('I navigate to {stringDoubleQuotes} page', function (url, callback) {
        browser.get(url);

    });
});
