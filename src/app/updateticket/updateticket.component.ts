import { Ticket } from './../models/ticket';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { Subscription } from '../../../node_modules/rxjs';
import { NgForm } from '../../../node_modules/@angular/forms';
import { ResetuserService } from '../services/resetuser.service';

@Component({
  selector: 'app-updateticket',
  templateUrl: './updateticket.component.html',
  styleUrls: ['./updateticket.component.css']
})
export class UpdateticketComponent implements OnInit {
  sub: Subscription;
  get: any = 'http://localhost:3000/getticket';
  Maj: any = 'http://localhost:3000/updateticket';
  Ticket: Ticket;
  id_ticket: any;
  Currentdate = new Date();
  constructor(private https: HttpClient, private router: Router, private route: ActivatedRoute, private userService: ResetuserService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
      if (id) {
        this.https.post(this.get, {
          id: id
        }).subscribe(resp => {
          console.log('modifier les informations necessaires');
          this.Ticket = resp[0];
          console.log(this.Ticket);
        });
      }
    });
  }

    update(form: NgForm) {
      // console.log(form.value.idticket);
      this.https.post(this.Maj, {
        id: form.value.idticket,
        label: form.value.label,
        description: form.value.description,
        statut: form.value.statut,
        demandeur: form.value.demandeur,
      // responsable: form.value.responsable,
        urgence: form.value.uregnce,
        dateouv: form.value.dateouv,
        // datefer: form.value.datefer
      }).subscribe(resp => {
        console.log('modifier avec succees');
        this.router.navigate(['/consulterliste']);
        }, err => {
          console.log('verif err de modification');
      });
    }
}
