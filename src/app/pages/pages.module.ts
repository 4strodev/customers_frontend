import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomersComponent} from './customers/customers.component';
import {HomeComponent} from "./home/home.component";
import {ServicesModule} from "../services/services.module";
import { CustomerFormComponent } from './customers/components/customer-form/customer-form.component';


@NgModule({
  declarations: [
    CustomersComponent,
    HomeComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    ServicesModule
  ]
})
export class PagesModule {
}
