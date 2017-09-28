import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `<h1>Routing Application</h1>
  <ul>
  <li><a [routerLink] = "['/']"> Home</a><li>
  <li><a [routerLink] = "['/login']">Login</a></li>
  <li><a [routerLink] = "['/register']">Register</a></li>
  <li><a [routerLink] = "['/guestlogin']">GuestLogin</a></li>
</ul>
<router-outlet></router-outlet>

`})
export class AppComponent { }
