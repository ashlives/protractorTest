/**
 * Created by Ashish on 07-07-2017.
 */

describe('Protractor Testing', function() {
    it('should open google page', function() {
        browser.ignoreSynchronization=true; // This is to be added if your application is non-angular
        browser.get('http://www.google.com');
        expect(browser.getTitle()).toEqual('Google');
        element(by.css('input.gsfi')).sendKeys('Hello testing')
    });
});