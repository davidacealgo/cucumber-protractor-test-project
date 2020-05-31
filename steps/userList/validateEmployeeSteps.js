/* eslint-disable no-undef */
var {defineSupportCode, setDefaultTimeout} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var createUserPage = require('../createUser/createUserPage.js');

chai.use(chaiAsPromised);
var expect = chai.expect;
setDefaultTimeout(60 * 1000);

defineSupportCode(function({Then}) {

    Then('I validate the row of new employee with {string}', async (id) => {
        expect (createUserPage.searchEmployee(id).to.eventually.equal(true));
        await createUserPage.getUserRow(id);
    });

});