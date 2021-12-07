import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  checkVar:boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('username'),"is logged in:"+sessionStorage.getItem('isLoggedIn'));
    console.log(sessionStorage.getItem('tableid'));
    console.log(sessionStorage.getItem('role'));
    if(sessionStorage.getItem('isLoggedIn')&&(sessionStorage.getItem('role')=="ROLE_ADMIN")){
      this.checkVar=true;
    }
    else if(sessionStorage.getItem('role')=="ROLE_CUSTOMER"){
      this.router.navigate(['home']);
    }
  }

}
