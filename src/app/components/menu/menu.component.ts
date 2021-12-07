import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  checkVar:boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('isLoggedIn')&&(sessionStorage.getItem('role')=="ROLE_CUSTOMER")){
      this.checkVar=true;
    }
    else if(sessionStorage.getItem('role')=="ROLE_ADMIN"){
      this.router.navigate(['adminhome']);
    }
  }

}
