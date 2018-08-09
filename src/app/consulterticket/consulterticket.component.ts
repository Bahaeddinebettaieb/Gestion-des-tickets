import { Ticket } from './../models/ticket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulterticket',
  templateUrl: './consulterticket.component.html',
  styleUrls: ['./consulterticket.component.css']
})
export class ConsulterticketComponent implements OnInit {
  Currentdate = new Date();
  Ticket: Ticket;
  constructor() { }

  ngOnInit() {
  }

}
