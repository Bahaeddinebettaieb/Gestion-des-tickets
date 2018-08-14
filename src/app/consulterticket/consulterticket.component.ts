import { Ticket } from './../models/ticket';
import { Component, OnInit } from '@angular/core';
import { ResetuserService } from '../services/resetuser.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-consulterticket',
  templateUrl: './consulterticket.component.html',
  styleUrls: ['./consulterticket.component.css']
})
export class ConsulterticketComponent implements OnInit {
  ticket: Ticket;
  id: number;
  datefer: Date;
  status: String;
  Currentdate = new Date();
  constructor(public http: ResetuserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadTicket();
  }

  fermer() {
    this.http.updateTicket(this.id).subscribe();
  }

  isAdmin() {
    //  console.log(localStorage.getItem('role'));
    if (localStorage.getItem('role') === 'admin')  {
      return true;
    }
    return false;
  }

  loadTicket() {
    this.route.params.subscribe( (params) => {
      this.id = +params['id'];
    });

    this.http.getTicketById(this.id)
    .subscribe(res => {
      console.log(res[0].dateouv);
      this.ticket = res[0];
      console.log('ticket1 : ', this.ticket);
    });
  }
}
