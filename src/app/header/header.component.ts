import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdserviceService } from '../prodservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logStatus=false;
  constructor(private api:ProdserviceService,private router:Router) { }

  ngOnInit(): void {
    this.checkLogIn();
  }

  checkLogIn(){
     const login = this.api.loggedIn();
    if(login){
      this.logStatus=true;
    }
    else{
      this.logStatus=false;
    }

  }

  logOut(){
    localStorage.removeItem('tokan');
    localStorage.clear();
    this.router.navigate(['/login']).then(()=>window.location.reload());
  }

}
