import { Ticket } from './../models/ticket';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ResetuserService } from '../services/resetuser.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-consulterliste',
  templateUrl: './consulterliste.component.html',
  styleUrls: ['./consulterliste.component.css']
})
export class ConsulterlisteComponent implements OnInit {
  ticket: any;
  Currentdate = new Date();
  Ticket: Ticket;
  delete: any = 'http://localhost:3000/removeticket';
  update: any = 'http://localhost:3000/updateticket';
  constructor(public http: ResetuserService,  private https: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.ticket = http.getTickets();
  }
  ngOnInit() {
  }

  remove(id_ticket) {
    this.https.post(this.delete, {
      id: id_ticket
     }).subscribe(resp => {
         localStorage.removeItem(id_ticket);
         console.log(id_ticket);
         console.log('supression avec succee');
         this.router.navigate(['/dashboard']);
       }, err => {
         console.log('verif err');
       } ) ;
 }
 Maj(id_ticket) {
  this.https.post(this.update, {
      id: id_ticket
    }).subscribe(resp => {
        console.log('update');
        this.router.navigate(['/dashboard']);
      }, err => {
        console.log('verif err');
      } ) ;
}

}
