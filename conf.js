
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites:{
        LanguageSelectionPopup: 'tests/LanguageSelectionPopUp/*.js'
    },
    restartBrowserBetweenTests: true,
    capabilities: {
        browserName: 'chrome'
    }
};

