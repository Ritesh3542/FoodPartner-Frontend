import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  checkVar:boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('username'),"is logged in:"+sessionStorage.getItem('isLoggedIn'));
    console.log(sessionStorage.getItem('tableid'));
    console.log(sessionStorage.getItem('role'));
    if(sessionStorage.getItem('isLoggedIn')&&(sessionStorage.getItem('role')=="ROLE_CUSTOMER")){
      this.checkVar=true;
    }
    else if(sessionStorage.getItem('role')=="ROLE_ADMIN"){
      this.router.navigate(['adminhome']);
    }
  }

}
