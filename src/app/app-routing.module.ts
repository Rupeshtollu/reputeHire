import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { LoginComponent } from './layouts/login/login.component';
import { SignUpComponent } from './layouts/sign-up/sign-up.component';
import { ForgotComponent } from './layouts/forgot/forgot.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
 {
  path:'login',
  component:LoginComponent
 },
 {
  path:'sign-up',
 component:SignUpComponent
 },
 {
  path:'forgot',
  component:ForgotComponent
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
