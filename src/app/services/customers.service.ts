import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerModel} from "../models/customer.model";
import {ServerResponseModel} from "../models/server_response.model";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  public customer: CustomerModel = {};

  public customers(): Promise<CustomerModel[]> {
    return new Promise<CustomerModel[]>((resolve, reject) => {
      this.http.get<CustomerModel[]>("http://localhost:3000/customers").subscribe((customers) => {
        resolve(customers);
      }, (error) => {
        reject(error);
      })
    });
  }

  public create(): Promise<CustomerModel> {
    return new Promise<CustomerModel>((resolve, reject) => {
      this.http.post(`http://localhost:3000/customers`, this.customer).subscribe(response => {
        resolve(response);
      }, error => {
        reject(error);
      })
    })
  }

  public edit(): Promise<CustomerModel> {
    return new Promise<CustomerModel>((resolve, reject) => {
      this.http.put(`http://localhost:3000/customers/${this.customer.id}`, this.customer).subscribe(response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    })
  }

  public delete(id: number): Promise<ServerResponseModel> {
    return new Promise<ServerResponseModel>((resolve, reject) => {
      this.http.delete<ServerResponseModel>(`http://localhost:3000/customers/${id}`).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    })
  }

  constructor(private http: HttpClient) {
  }
}
