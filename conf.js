// To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
// An example configuration file
exports.config = {
    directConnect: true,

    getPageTimeOut: 10000,
    allScriptsTimeout: 30000,

    capabilities: {
        "browserName": 'firefox'
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    params: {
        testEnv: 'test'
    },

    specs: { //Define shich tests should execute
        login: 'features/login.feature'
    },
    logLevel: 'verbose',
    coloredLogs: true,

    cucumberOpts: {
        require: 'features/stepDefinitions/loginSteps.js',
        format: 'pretty',
        'no-source': true,
        profile: false,
        tags: false
    }
};