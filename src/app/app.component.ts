import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodPartner';
  checkVar:boolean=false;
  adminVar:boolean=false;
  constructor(){

  }
  ngOnInit(): void {
    if(sessionStorage.getItem('isLoggedIn')){
      this.checkVar=true;
      if(sessionStorage.getItem('role')=="ROLE_ADMIN"){
        this.adminVar=true;
      }
    }
  }
}
