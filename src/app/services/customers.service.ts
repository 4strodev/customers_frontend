import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerModel} from "../models/customer.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  public customers(): Promise<CustomerModel[]> {
    return new Promise<CustomerModel[]>((resolve, reject) => {
      this.http.get<CustomerModel[]>("http://localhost:3000/customers").subscribe((customers) => {
        resolve(customers);
      })
    });
  }

  constructor(private http: HttpClient) {
  }
}
