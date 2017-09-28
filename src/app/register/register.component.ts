import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators,RequiredValidator, ReactiveFormsModule, Form } from '@angular/forms'
import {NgForm, FormsModule} from '@angular/forms';
import { dataService } from "app/dataservice.service";

@Component({
    selector: 'registration',
    templateUrl:`./register.component.html`,
    styles:[`
    input-ng-invalid{border-left: 5px solid red;}
    input-ng-valid{border-left: 5px solid green;}`
]
})

export class register implements OnInit{
    
    public regForm = this.reg.group({
        email: ["", Validators.required],
        username: ["", Validators.required],
        password: ["", Validators.required],
        name: ["", Validators.required],
        lname:[""],
        date: ["", Validators.required],
      });
      constructor(public reg: FormBuilder, private dataservice : dataService) {}
      doReg(event) {
        console.log(event);
        console.log(this.regForm.value);
      }
    
    ngOnInit(){
        this.regForm.valueChanges.subscribe(
         (formData)=>{
             this.dataservice.onDataChangeinregForm(formData.regForm)

         },
         error => console.error("couldn't send data to service", error)
        ) ;
     }
 
    }