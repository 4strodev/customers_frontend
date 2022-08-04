import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {CustomersService} from "../../../../services/customers.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  public action: "create" | "update" = "create";

  public isInvalid = false;

  constructor(public activeModal: NgbActiveModal, public customerService: CustomersService) {
  }

  public async saveChanges(action: "create" | "update") {

    const name = this.customerService.customer.name;
    if (name === "" || name === undefined) {
      this.isInvalid = true;
      return;
    }

    if (action === "create") {
      try {
        await this.customerService.create();
        this.activeModal.close('saved');
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    } else {
      try {
        await this.customerService.edit();
        this.activeModal.close('saved');
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    }
  }

  ngOnInit(): void {
  }

}
