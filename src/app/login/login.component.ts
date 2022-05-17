import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdserviceService } from '../prodservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logIn:FormGroup;
  submitted=false;
  constructor(private fb:FormBuilder,private api:ProdserviceService,private router:Router) { }

  ngOnInit(): void {
    this.logIn = this.fb.group({
      username : new FormControl(null,[Validators.required]),
      password : new FormControl(null,[Validators.required])
    })
  }

  get fcontrol(){
    return this.logIn.controls;
  }
  checkSubmit(event){
    if(event.target.checked){
      console.log('clicked');
    }
    else{
      console.log('unchecked');
    }
  }

  submitLogin(){
    this.submitted=true;
    if(this.logIn.invalid){
      return;
    }
    else{
      this.api.logIn(this.logIn.value).subscribe({
        next:(data:any)=>{
          if(data.token !== null){
            console.log(data.token);
            this.submitted=false;
            this.logIn.reset();
            localStorage.setItem('tokan',data.token);
            this.router.navigate(['/']).then(()=>window.location.reload());
          }
          else{
            alert('something went wrong')
          }
        },
        error:(error:any)=>{
          console.log(error);
        }
      });
    }
  }

}
