import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //create an array of sales person object

  salesPersonList: SalesPerson[] = [new SalesPerson("Tony","Stark","tonystark@gmail.com",5000),
  new SalesPerson("Steve","Rogers","steverogers@gmail.com",6000),
  new SalesPerson("Peter","Parker","peterparket@gmail.com",4000),
  new SalesPerson("Natasha","Romanoff","natasharomanoff@gmail.com",2000)];
}
