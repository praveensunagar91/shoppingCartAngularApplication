import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { AllProductsComponent } from "./all-products/all-products.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { routing } from "./dashboard.routing";
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { SingleProductComponent } from './single-product/single-product.component';
import { LoadingComponent } from "./loading/loading.component";
import { NgxPayPalModule } from 'ngx-paypal';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations:[
    DashboardComponent,
    AllProductsComponent,
    SingleProductComponent,
    LoadingComponent,
    CartComponent
  ],
  imports:[
    CommonModule,
    HttpClientModule,
    NgxSliderModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxPayPalModule,
    routing,

  ]
})
export class DashbaordModule {}
