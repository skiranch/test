import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators,RequiredValidator, Form } from '@angular/forms'
import {NgForm, FormsModule} from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl:`./login.component.html`,
    styles:[`
    input-ng-invalid{border-left: 5px solid red;}
    input-ng-valid{border-left: 5px solid green;}`
]
})

export class login {
    public loginForm = this.fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
      });
      constructor(public fb: FormBuilder) {}
      doLogin(event) {
        console.log(event);
        console.log(this.loginForm.value);
      }
    }
