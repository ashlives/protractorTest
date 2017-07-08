/**
 * Created by Ashish on 07-07-2017.
 */

describe('Protractor Testing', function() {
    it('should open google page', function() {
        browser.ignoreSynchronization=true; // This is to be added if your application is non-angular
        browser.get('http://www.google.com');
        expect(browser.getTitle()).toEqual('Google');
        //element(by.css('input.gsfi')).sendKeys('Hello testing')
    });

    it('will search for keyword: Hello Testing', function () {
        element(by.css('input.gsfi')).sendKeys('Hello testing')
    });
});

describe('Protractor Testing 2', function(){
    it('should open the linkedin page', function() {
        browser.get('http://www.linkedin.com');
        expect(browser.getTitle()).toEqual('LinkedIn: Log In or Sign Up');
    });
});

describe('shit test', function () {
    it('should open facebook page', function () {
        browser.get('http://facebook.com');
        expect(browser.getTitle()).toEqual('Facebook – log in or sign up');
    });
});