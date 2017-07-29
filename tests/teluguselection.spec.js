
describe('Testing Viu', function() {
    it('should have a title', function() {
        browser.get('https://viu.com');
        expect(browser.getTitle()).toEqual('Viu - Watch TV Shows & Movies Online');
    });
});

describe('Selecting Telugu Language', function () {
    it('Should select Telugu language', function () {
        element(by.xpath('.//*[@id="ngdialog1"]/div/div[1]/div/div[2]')).click();
        element(by.css('[ng-click="saveSelection()"]')).click();
        expect(browser.getCurrentUrl()).toContain('in-telugu');
    })

});