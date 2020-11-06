import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';


export interface Customer {
  _id : string,
  name: string,
  email: string,
  lastName: string
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  public customers: Customer[] = [];

  constructor(private customersService: CustomersService  ) {

  }

  ngOnInit(): void {
    this.customersService.getAllCustomers()
      .then(customers => this.customers = customers)
  }



}
