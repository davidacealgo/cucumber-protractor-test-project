// To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
// An example configuration file
exports.config = {
    directConnect: true,

    capabilities: {
        "browserName": 'chrome'
    },

    framework: 'jasmine',

    suites: {
        createUser: '../tests/CreateUser/Spec.js',
        homepage: '../tests/HomePage/Spec.js',
        login: '../tests/Login/Spec.js',
        userList: '../tests/UserList/Spec.js'
    },

    jasmineModeOpts: {
        defaultTimeoutInterval: 3000,
        showColors: true
    }
};