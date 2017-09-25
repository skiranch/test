import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {login} from './login/login.component';
import {register} from './register/register.component';
import {guestlogin} from './guestlogin/guestlogin.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

const routes: Routes=[ 
    {path:'login',component:login},
    {path:'register',component:register},
    {path:'guestlogin',component:guestlogin}
  ];

  @NgModule({
    imports:      [  
      RouterModule.forRoot (routes),ReactiveFormsModule, FormsModule],
      exports:[
          RouterModule
      ]
    })
    export class AppRoutingModule{}
    export const routingComponents=[login,register,guestlogin]