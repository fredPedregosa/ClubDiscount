import { Component } from '@angular/core';
import { ProductsComponent } from './+products';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'buyproducts-app',
  templateUrl: 'buyproducts.component.html',
  styleUrls: ['buyproducts.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/products', component: ProductsComponent}
])
export class BuyproductsAppComponent {
  title = 'buyproducts works!';
}
