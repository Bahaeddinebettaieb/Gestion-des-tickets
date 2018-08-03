import { Ticket } from './../models/ticket';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-ajout-ticket',
  templateUrl: './ajout-ticket.component.html',
  styleUrls: ['./ajout-ticket.component.css']
})
export class AjoutTicketComponent implements OnInit {
  add: any = 'http://localhost:3000/ajouttick';
  Ticket: any;
  constructor(private router: Router, private https: HttpClient) { }

  ngOnInit() {
  }
  ajout (form: NgForm ) {
    console.log(form.value);
    this.https.post(this.add, {
      label: form.value.label,
      description: form.value.description,
      statut: form.value.statut,
      responsable: form.value.responsable,
      demandeur: form.value.demandeur,
      dateouv: form.value.dateouv,
      datefer: form.value.datefer,
      urgence: form.value.urgence
    }).subscribe(resp => {
          console.log('Ajout avec succees');
          this.router.navigate(['/consulterliste']);
      }, err => {
        console.log('verif err');
     } ) ;

    }
  }
