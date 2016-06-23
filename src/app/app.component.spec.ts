import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ClubDiscountAppComponent } from '../app/app.component';

beforeEachProviders(() => [ClubDiscountAppComponent]);

describe('App: Buyproducts', () => {
  it('should create the app',
      inject([ClubDiscountAppComponent], (app: ClubDiscountAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'buyproducts works!\'',
      inject([ClubDiscountAppComponent], (app: ClubDiscountAppComponent) => {
    expect(app.title).toEqual('buyproducts works!');
  }));
});
