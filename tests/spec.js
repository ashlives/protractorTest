describe('Testing Viu', function() {
    it('should have a title', function() {
        browser.get('https://viu.com');
        expect(browser.getTitle()).toEqual('Viu - Watch TV Shows & Movies Online');
    });
});

describe('Choosing Hindi option', function () {
    it('should select Hindi option', function () {
        element(by.xpath('//*[@id="ngdialog1"]/div/div[1]/div/div[1]')).click();
        element(by.css('[ng-click="saveSelection()"]')).click();
        expect(browser.getCurrentUrl()).toContain('in-hindi');
    })
});