import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomersComponent} from './customers/customers.component';
import {HomeComponent} from "./home/home.component";
import {ServicesModule} from "../services/services.module";
import { CustomerFormComponent } from './customers/components/customer-form/customer-form.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import { WalletComponent } from './wallet/wallet.component';


@NgModule({
  declarations: [
    CustomersComponent,
    HomeComponent,
    CustomerFormComponent,
    WalletComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    NgbModule,
    FormsModule
  ]
})
export class PagesModule {
}
