import { Injectable } from '@angular/core';
import axios from 'axios';
import { Customer } from '../pages/customers/customers.component';



@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  url = 'http://localhost:5000/customers'
  constructor() { }

  public getAllCustomers(): Promise<Customer[]> {
      return axios.get(this.url)
        .then(response => response.data);
  }

  public getOneCustomer( id : string): Promise<Customer> {
      return axios.get(this.url + '/' + id)
        .then(response => response.data);
  }

  public createOneCustomer(customer : Customer): Promise<Customer> {
      return axios.post(this.url, customer)
        .then(response => response.data);
  }

  public editOneCustomer(customer : Customer): Promise<Customer> {
      return axios.put(this.url + '/' + customer._id, customer  )
        .then(response => response.data);
  }

  public removeOneCustomer(customer : Customer): Promise<any> {
      return axios.delete(this.url + '/' + customer._id   )
        .then(response => response.data);
  }


}
