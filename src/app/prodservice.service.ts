import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {

  baseUrl:string="https://fakestoreapi.com/";
  constructor(private http:HttpClient) { }

  setHeaders(){
    return new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  logIn(data){
    let body = JSON.stringify(data);
    return this.http.post(`${this.baseUrl}auth/login`,body,{headers:this.setHeaders()});
  }
  loggedIn(){
    return localStorage.getItem('tokan');
  }
  getProduct(){
    return this.http.get(`${this.baseUrl}products`,{headers:this.setHeaders()});
  }
  singleProduct(id){
    return this.http.get(`${this.baseUrl}products/${id}`,{headers:this.setHeaders()});
  }
}
