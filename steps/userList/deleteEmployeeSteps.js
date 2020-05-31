/* eslint-disable no-undef */
var {defineSupportCode, setDefaultTimeout} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var createUserPage = require('../createUser/createUserPage.js');

chai.use(chaiAsPromised);
var expect = chai.expect;
setDefaultTimeout(60 * 1000);

defineSupportCode(function({When, Then}) {

    When('I delete the employee with {string}', async (id) => {
        await createUserPage.deleteEmployee(id);
    });

    Then('the employee does not appear in the employee table', async (id) => {
        expect (createUserPage.searchEmployee(id).to.eventually.equal(false));
    });

});