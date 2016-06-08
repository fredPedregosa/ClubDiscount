import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BuyproductsAppComponent } from '../app/buyproducts.component';

beforeEachProviders(() => [BuyproductsAppComponent]);

describe('App: Buyproducts', () => {
  it('should create the app',
      inject([BuyproductsAppComponent], (app: BuyproductsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'buyproducts works!\'',
      inject([BuyproductsAppComponent], (app: BuyproductsAppComponent) => {
    expect(app.title).toEqual('buyproducts works!');
  }));
});
