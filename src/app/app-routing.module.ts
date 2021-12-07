import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
    { path:'table/:id',component:LoginPageComponent},
    { path:'',component:HomePageComponent},
    { path:'adminhome',component:AdminHomePageComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }