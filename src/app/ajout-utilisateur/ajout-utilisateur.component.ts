import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ResetuserService } from '../services/resetuser.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.css']
})
export class AjoutUtilisateurComponent implements OnInit {
  add: any = 'http://localhost:3000/ajout';


  constructor(private router: Router, private https: HttpClient) { }

  ngOnInit() {
  }
  ajout (form: NgForm ) {
    console.log(form.value);
    this.https.post(this.add, {
      nom: form.value.nom,
      prenom: form.value.prenom,
      email: form.value.email,
      role: form.value.role,
      pass: form.value.pwd,
      tel: form.value.tel,
      adr: form.value.adr
    }).subscribe(resp => {
          console.log('Ajout avec succees');
          this.router.navigate(['/consulterutilisateur']);
      }, err => {
        console.log('verif err');
     } ) ;
  }

}
