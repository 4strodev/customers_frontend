import { Component, OnInit } from '@angular/core';
import { CustomerModel } from "../../models/customer.model";
import {CustomersService} from "../../services/customers.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: CustomerModel[] = [];

  constructor(private customersService: CustomersService) { }

  public editCustomer(id: number) {
    console.log(`Editing customer ${id}`);
  }

  public deleteCustomer(id: number) {
    console.log(`Deleting customer ${id}`);
  }

  ngOnInit(): void {
    this.customersService.customers().then(customers => {
      this.customers = customers;
    })
  }

}
