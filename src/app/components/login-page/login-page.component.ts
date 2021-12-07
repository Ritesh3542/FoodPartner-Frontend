import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodUser } from 'src/app/classes/food-user';
import { AfterLoggedinService } from 'src/app/Services/after-loggedin.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  tableId: string | null |undefined;
  checkVar: boolean = false;
  username!: string;
  password!: string;
  user!: FoodUser;
  message: string = "WELCOME";

  constructor(private service: AfterLoggedinService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("in login ");
    this.tableId = (this.route.snapshot.paramMap.get('id'));
    console.log(this.route.snapshot.paramMap.get('id'));
    
    if (this.tableId !== null && this.tableId !== "null") {
      sessionStorage.setItem('tableid', this.tableId);
      this.checkVar = true;
    }
  }

  doLogin() {
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('password', this.password);
    this.service.getUser(this.username, this.password).subscribe(data => {
      this.user = data;
      sessionStorage.setItem('username', this.user.username);
      sessionStorage.setItem('isLoggedIn', "true");
      sessionStorage.setItem('role', this.user.role);
      this.router.navigate(['']);
    },
      error => {
        console.log(error);
        this.message = "BAD CREDENTIALS";
      });
  }

  doAdminLogin() {
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('password', this.password);
    this.service.getAdmin(this.username, this.password).subscribe(data => {
      this.user = data;
      sessionStorage.setItem('username', this.user.username);
      sessionStorage.setItem('isLoggedIn', "true");
      sessionStorage.setItem('role', this.user.role);
      this.router.navigate(['adminhome']);
    },
      error => {
        console.log(error);
        this.message = "BAD CREDENTIALS";
      });
  }


}
