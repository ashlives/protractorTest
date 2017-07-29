describe('Testing Google', function() {
    it('should have a title', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://google.com');
        expect(browser.getTitle()).toEqual('Google');
    });
});