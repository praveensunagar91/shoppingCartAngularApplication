import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/cake-home/product';
import { ProdserviceService } from 'src/app/prodservice.service';
import { Options } from '@angular-slider/ngx-slider';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products:Product[]=[];
  loading=false;
  name:string="";
  value: string  = "0";
  options: Options = {
    floor: 0,
    ceil: 1000
  };
  config: any;
  collection:Product[]=[];
  constructor(private api : ProdserviceService,private router: Router) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.collection.length
    };
   }

  ngOnInit(): void {

    this.fetchAllProducts();

  }


  fetchAllProducts(){
    this.loading=true;
    this.api.getProduct().subscribe({
      next:(data:any)=>{
        this.loading=false;
        this.products=data;
        console.log(this.products);
      },
      error:(error:any)=>{
        console.log(error);
      }
    });
  }

  clickSlider(){
    console.log(this.value)
    this.products = this.products.filter(result=>{
      return result.price <= this.value;
    })
    console.log(this.products)
  }

  productById(id){
    this.router.navigate(['/dashboard/singleProduct',id]);
  }

  pageChanged(event){
    this.config.currentPage = event;
    this.router.navigate(['/dashboard/allProducts'],{queryParams:{Page:event},queryParamsHandling:'merge'});
  }
}
