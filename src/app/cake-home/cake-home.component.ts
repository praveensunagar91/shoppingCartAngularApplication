import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProdserviceService } from '../prodservice.service';
import { Product } from './product';

@Component({
  selector: 'app-cake-home',
  templateUrl: './cake-home.component.html',
  styleUrls: ['./cake-home.component.css']
})
export class CakeHomeComponent implements OnInit {

  productData:Product[]=[];
  currentRate = 0;
  loading=false;
  logStatus=false;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  cakeOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    items:6,
    navSpeed: 700,
    margin:30,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  flowerOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots:false,
    navSpeed: 700,
    margin:30,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }


  constructor(private api:ProdserviceService,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.checkLogIn();
    this.fetchProductDetails();
  }

  checkLogIn(){
    const login = localStorage.getItem('tokan');
    if(login){
      this.logStatus=true;
    }
    else{
      this.logStatus=false;
    }
  }

  fetchProductDetails(){
    this.loading=true;
    this.api.getProduct().subscribe({
      next:(data:any)=>{
        this.loading=false;
        this.productData=data;
        console.log(this.productData)
      },
      error:(error:any)=>{
        console.log(error);
      }
    })
  }

  login(){
    console.log('hello')
    this.router.navigate(['/login']);
  }

  getProductId(id){
    this.router.navigate(['/dashboard/singleProduct',id]);
  }

}
