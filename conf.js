
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/spec.js', './tests/spec2.js'],
    capabilities: {
        browserName: 'chrome'
    }
}