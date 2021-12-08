import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dishes } from 'src/app/classes/dishes';
import { MenuService } from 'src/app/Services/menu.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCardComponent } from './dialog-card/dialog-card.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  AllDishes: Dishes[] = [];
  checkVar: boolean = false;
  constructor(private router: Router, private service: MenuService, private dialog: MatDialog) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('isLoggedIn') && (sessionStorage.getItem('role') == "ROLE_CUSTOMER")) {
      this.checkVar = true;
    }
    else if (sessionStorage.getItem('role') == "ROLE_ADMIN") {
      this.router.navigate(['adminhome']);
    }

    this.getdishes();
  }

  getdishes() {
    this.service.getDishes(sessionStorage.getItem('username'), sessionStorage.getItem('password')).subscribe(data => {
      this.AllDishes = data;
      console.log(this.AllDishes);

    },
      error => {
        console.log(error);
      });
  }

  openDialog(d: Dishes) {
    this.dialog.open(DialogCardComponent, {
      height: '80%',
      width: '90%',
      data: d
    });
  }

}



