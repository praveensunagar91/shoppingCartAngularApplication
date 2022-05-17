import { Component, OnInit } from '@angular/core';
import {IPayPalConfig,ICreateOrderRequest} from 'ngx-paypal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public payPalConfig ? : IPayPalConfig;
response:any;
clear=false;

  constructor() { }

  ngOnInit(): void {

   this.response = {
    title : localStorage.getItem('title'),
    image :localStorage.getItem('image'),
    price : localStorage.getItem('price'),
    }

    this.initConfig();
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
                    value: this.response.price,
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value:this.response.price
                        }
                    }
                },
                items: [{
                    name: this.response.title,
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: this.response.price,
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

  clearCart(){
  this.clear=true;
   this.response={};
  }

}
