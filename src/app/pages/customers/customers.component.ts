import {Component, OnInit} from '@angular/core';
import {CustomerModel} from "../../models/customer.model";
import {CustomersService} from "../../services/customers.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CustomerFormComponent} from "./components/customer-form/customer-form.component";
import Swal from "sweetalert2";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: CustomerModel[] = [];

  constructor(private customersService: CustomersService, private modalService: NgbModal) {
  }

  private openForm(action: "create" | "update") {
    const modalRef = this.modalService.open(CustomerFormComponent, {ariaLabelledBy: 'modal-basic-title'});
    modalRef.componentInstance.action = action;
    modalRef.result.then((result) => {
      if (result === 'saved') {
        this.getCustomers();
        Swal.fire({
          title: "Success",
          icon: "success",
          text: action === 'create' ? 'Customer created successfully' : 'Customer updated successfully'
        })
      }
    }, (_) => {
      this.getCustomers();
    });
  }

  public createCustomer() {
    this.customersService.customer = {};
    this.openForm("create")
  }


  public editCustomer(id: number) {
    let [customer] = this.customers.filter(customer => customer.id === id);

    this.customersService.customer = {...customer};

    this.openForm("update");
  }

  public async deleteCustomer(id: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.customersService.delete(id).then((response) => {
          this.getCustomers()
          Swal.fire(
            'Deleted!',
            'Customer deleted successfully',
            'success'
          )
        }, (_) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        });
      }
    })
  }

  ngOnInit(): void {
    this.getCustomers()
  }

  private async getCustomers() {
    try {
      this.customers = await this.customersService.customers()
    } catch (error) {
      this.customers = [];
      console.log(error)
    }
  }
}
