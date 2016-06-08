import { BuyproductsPage } from './app.po';

describe('buyproducts App', function() {
  let page: BuyproductsPage;

  beforeEach(() => {
    page = new BuyproductsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('buyproducts works!');
  });
});
