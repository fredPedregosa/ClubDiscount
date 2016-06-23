import { Component } from '@angular/core';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import 'rxjs/Rx';
//import 'rxjs/add/operator/toPromise';

@Component({
  moduleId: module.id,
  selector: 'cd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS,
              HTTP_PROVIDERS,
              ProductService
              ]
})
@Routes([
    { path: '/', component: WelcomeComponent },
    { path: '/welcome', component: WelcomeComponent },
    { path: '/products', component: ProductListComponent },
    { path: '/product/:id', component: ProductDetailComponent }
])
export class ClubDiscountAppComponent {
  title = 'buy products works great once you get it going-- if you can!!';
}
