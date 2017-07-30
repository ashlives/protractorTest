describe('Testing Viu', function() {
    beforeEach(function () {
        browser.get('https://viu.com');
    });
    
    it('should have a title', function() {
        expect(browser.getTitle()).toContain('Viu');
    });

    it('should select Hindi option', function () {
        element(by.xpath('//*[@id="ngdialog1"]/div/div[1]/div/div[1]')).click();
        element(by.css('[ng-click="saveSelection()"]')).click();
        expect(browser.getCurrentUrl()).toContain('in-hindi');
    })
});