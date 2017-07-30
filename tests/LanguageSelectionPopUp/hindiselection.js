describe('Testing Viu', function() {
    beforeAll(function (){
        browser.get('https://viu.com');
    });

    it('should select Hindi option', function () {
        element(by.xpath('//*[@id="ngdialog1"]/div/div[1]/div/div[1]')).click();
        element(by.css('[ng-click="saveSelection()"]')).click();
        expect(browser.getCurrentUrl()).toContain('in-hindi');
    });
});