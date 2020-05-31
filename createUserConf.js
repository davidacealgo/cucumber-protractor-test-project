// To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
// An example configuration file
exports.config = {
    directConnect: true,

    getPageTimeOut: 20000,
    allScriptsTimeout: 50000,

    capabilities: {
        "browserName": 'chrome',
        chromeOptions: {
            args: ['--no-sandbox']
        }
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
       './features/createUser.feature',
    ],
    coloredLogs: true,

    cucumberOpts: {
        require: [
            './steps/createUser/createUserSteps.js'
        ],
        profile: false,
        tags: false
    },
    seleniumServerStartTimeout: 9000
};