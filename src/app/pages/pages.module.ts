import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./home/home.component";



@NgModule({
  declarations: [
    CustomersComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class PagesModule { }
