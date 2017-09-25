import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app.routing.module';
import {routingComponents} from './app.routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, AppRoutingModule,ReactiveFormsModule, FormsModule],
  declarations: [ AppComponent,routingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

