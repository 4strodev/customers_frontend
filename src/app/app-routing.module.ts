import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import {CustomersComponent} from "./pages/customers/customers.component";
import {WalletComponent} from "./pages/wallet/wallet.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'wallet', component: WalletComponent},
  {path: '**', redirectTo: 'home'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
