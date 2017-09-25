import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators,RequiredValidator, Form } from '@angular/forms'
import {NgForm, FormsModule} from '@angular/forms';

@Component({
    selector: 'guestlogin',
    templateUrl:`./guestlogin.component.html`,
    styles:[`
    input-ng-invalid{border-left: 5px solid red;}
    input-ng-valid{border-left: 5px solid green;}`
]
})

export class guestlogin {
    public guestloginForm = this.gl.group({
        name: ["", Validators.required],
        number: ["", Validators.required],
        email: ["", Validators.required],
        lname:[""]
      });
      constructor(public gl: FormBuilder) {}
      guestLogin(event) {
        console.log(event);
        console.log(this.guestloginForm.value);
      }
    }
    