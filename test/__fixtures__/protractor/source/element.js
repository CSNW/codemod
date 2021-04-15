$('.parent').getWebElement();
element(by.css('.parent')).getWebElement();
browser.driver.findElement(by.css('.parent'));
browser.findElement(by.css('.parent'));

element(by.css('body')).allowAnimations(false);
$('body').allowAnimations(false);

(async () => {
    await $('body').allowAnimations(false);
})();

// Using getDriver to find the parent web element to find the cat li
var liDog = element(by.css('.dog')).getWebElement();
var liCat = liDog.getDriver().findElement(by.css('.cat'));
var lis = liDog.getDriver().findElements(by.css('li'));

var li = element(by.xpath('//ul/li/a'));
expect(element(by.tagName('a')).getText()).toBe('Google');
var doge = element(by.partialLinkText('Doge'));
var dog = element(by.name('dog_name'));
var wideElement = element(by.js(function() {
    var spans = document.querySelectorAll('span');
    for (var i = 0; i < spans.length; ++i) {
        if (spans[i].offsetWidth > 100) {
            return spans[i];
        }
    }
}));
expect(element(by.linkText('Google')).getTagName()).toBe('a');
var allOptions = element.all(by.options('c for c in colors'));
element(by.partialButtonText('Save'));
element(by.buttonText('Save'));

let list = element.all(by.css('.items li'));
expect(list.count()).toBe(3);
