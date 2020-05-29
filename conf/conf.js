// To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
// An example configuration file
exports.config = {
    directConnect: true,

    capabilities: {
        "browserName": 'chrome'
    },

    framework: 'jasmine',

    specs: ['simple_test.js'],

    jasmineModeOpts: {
        defaultTimeoutInterval: 3000
    }
};