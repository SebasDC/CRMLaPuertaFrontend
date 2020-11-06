import { Component, OnInit } from '@angular/core';
import axios from 'axios';


export interface Customer {
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


  constructor() {

   }

  ngOnInit(): void {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.data )
      .then(customers => {
        this.customers = customers;
      })
  }


}
