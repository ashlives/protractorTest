
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/spec.js', './tests/teluguselection.spec.js'],
    restartBrowserBetweenTests: true,
    capabilities: {
        browserName: 'chrome'
    }
};

