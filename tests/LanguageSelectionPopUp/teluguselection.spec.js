describe('Testing Viu', function() {
    beforeAll(function () {
        browser.get('https://viu.com');
    });

    it('Should select Telugu language', function () {
        element(by.xpath('.//*[@id="ngdialog1"]/div/div[1]/div/div[2]')).click();
        element(by.css('[ng-click="saveSelection()"]')).click();
        expect(browser.getCurrentUrl()).toContain('in-telugu');
    });
});