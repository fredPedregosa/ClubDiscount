export class BuyproductsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('buyproducts-app h1')).getText();
  }
}
