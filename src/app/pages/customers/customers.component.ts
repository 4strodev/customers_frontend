import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CustomerModel } from "../../models/customer.model";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<CustomerModel>('http://localhost:3000/customers').subscribe((data: CustomerModel) => {
      console.log(data);
    })
  }

}
