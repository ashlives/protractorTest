describe('Testing Viu', function() {
    it('should have a title', function() {
        browser.get('https://viu.com');
        expect(browser.getTitle()).toEqual('Viu - Watch TV Shows & Movies Online');
    });
});