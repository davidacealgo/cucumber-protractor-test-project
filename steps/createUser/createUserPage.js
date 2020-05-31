'use strict';

module.exports = {
    createUserPage: {
        createUserButton: element(by.css('#content > p > a'))
    },

    OpenCreateUser: function() {
        var createUser = this.createUserPage;
        createUser.createUserButton.click();
        browser.sleep(5000);
    }

};
