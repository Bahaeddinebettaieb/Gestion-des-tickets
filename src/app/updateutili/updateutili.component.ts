import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Subscription } from '../../../node_modules/rxjs';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { NgForm } from '../../../node_modules/@angular/forms';
import { User } from '../models/user';


@Component({
  selector: 'app-updateutili',
  templateUrl: './updateutili.component.html',
  styleUrls: ['./updateutili.component.css']
})
export class UpdateutiliComponent implements OnInit {
  users: User;
  Maj: any = 'http://localhost:3000/updateuser';
  get: any = 'http://localhost:3000/getuser';
  sub: Subscription;
  nom: any;
  prenom: any;
  constructor( private https: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
              const id = params['id'];
             // console.log(id);
              if (id) {
                this.https.post(this.get, {
                  id: id
                }).subscribe(resp => {
                  console.log('modifier les informations necessaires');
                  this.users = resp[0];
                  console.log(this.users);
            });
          }
      });
    }
    update(form: NgForm) {
      console.log(form.value.iduser);
      this.https.post(this.Maj, {
        id: form.value.iduser,
        nom: form.value.nom,
        prenom: form.value.prenom,
        email: form.value.email,
        role: form.value.role,
        pwd: form.value.password,
        tel: form.value.tel,
        adr: form.value.adr
      }).subscribe(resp => {
        console.log('modifier avec succees');
        this.router.navigate(['/consulterutilisateur']);
        }, err => {
          console.log('verif err de modification');
      });
    }
  }
