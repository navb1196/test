import { Component, OnInit } from '@angular/core';
import {Customer} from './Customer'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }
   custobj:Customer=new Customer(); 
   customers=new Array<Customer>();
   custEntity:string="customersData";
   ngOnInit(): void {
  }

  Add()
  {
    //console.log("hi");
    this.customers.push(this.custobj);
    this.customers = this.customers.slice();
    //console.log(this.customers);
    this.custobj=new Customer();

  }
  Delete(cust:Customer)
    {
      for (var i =0; i <this.customers.length ;i++){
          if (this.customers[i].customerName === cust.customerName) {
            this.customers.splice(i,1);
              break;
          }

    }
  }
  
  Select(cust:Customer)
  {
    
    this.custobj= Object.assign({}, cust) ;
  }

}
