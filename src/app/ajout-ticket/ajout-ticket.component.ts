import { ResetuserService } from './../services/resetuser.service';
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
  role: any;
  Ticket: any;
  Currentdate = new Date();

  nomDemandeur: any;
  email: any;
  id_ticket: any;
  constructor(private router: Router, private https: HttpClient, private userService: ResetuserService) {
  }


  ngOnInit() {
    this.email = localStorage.getItem('email');
    console.log(this.email);
    this.getAuthUser(this.email);

  }


  getAuthUser(email) {
    this.userService.getAuthUser(email).subscribe(res => {
      console.log('res: ', res);
      this.nomDemandeur = res[0].prenom;
    });
  }

  ajout (form: NgForm ) {
    console.log(form.value);
    this.https.post(this.add, {
      label: form.value.label,
      description: form.value.description,
      statut: form.value.statut,
      responsable: form.value.responsable,
      demandeur: form.value.demandeur,
      dateouv: form.value.dateouv.toString(),
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
