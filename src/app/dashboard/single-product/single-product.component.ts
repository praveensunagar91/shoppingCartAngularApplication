import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdserviceService } from 'src/app/prodservice.service';
import {IPayPalConfig,ICreateOrderRequest} from 'ngx-paypal';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  prodId:any;
  productDetails:any;
  loading=false;
  productPrice :any;
  toatalPrice:any;
  public payPalConfig ? : IPayPalConfig;
  quantity:any;
  constructor(private api:ProdserviceService,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.prodId = this.activated.snapshot.params['id'];
    console.log(this.prodId);
    this.getProductDetails(this.prodId);
    this.initConfig();
  }

  getProductDetails(id){
    this.loading=true;
    this.api.singleProduct(id).subscribe(
      (data:any)=>{
        this.loading=false;
        this.productDetails=data;
        this.productPrice=this.productDetails['price'];
        console.log(this.productDetails)
        console.log(this.productPrice)
      }
    );
  }

  selectPrice(event){
    this.quantity=event.target.value;
     this.toatalPrice = this.productPrice*event.target.value;
     console.log(this.toatalPrice)
  }

   initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        clientId: 'AUulljquUjEyjHnxVHp8cUCXTy7d5JoUKqu1ArYJQaUUD3rzXIL4vNauUHoaqZg1-arRWX-usWZvLecc',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: this.productDetails?.price,
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value:this.productDetails?.price
                        }
                    }
                },
                items: [{
                    name: this.productDetails?.title,
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: this.productDetails?.price,
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then(details => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);

        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);


        },
        onError: err => {
            console.log('OnError', err);

        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);

        }
    };

    console.log(this.payPalConfig);
}

addToCart(){
  var req ={
    title:this.productDetails.title,
    price:this.productDetails.price,
    image:this.productDetails.image
  }
console.log(req);
localStorage.setItem('title',req.title)
localStorage.setItem('image',req.image)
localStorage.setItem('price',req.price)
Swal.fire('','Item is added to cart','success')
}

}
