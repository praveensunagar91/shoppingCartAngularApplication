import { Routes,RouterModule } from "@angular/router";
import { AllProductsComponent } from "./all-products/all-products.component";
import { CartComponent } from "./cart/cart.component";
import { DashboardComponent } from "./dashboard.component";
import { SingleProductComponent } from "./single-product/single-product.component";

const arr : Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'allProducts',component:AllProductsComponent},
    {path:'singleProduct/:id',component:SingleProductComponent},
    {path:'cart',component:CartComponent}
  ]},
];
export const routing = RouterModule.forChild(arr);
