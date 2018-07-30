import { Component, OnInit } from '@angular/core';
import { ResetuserService } from '../services/resetuser.service';
// import { User } from '../models/user';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-consulter-utilisateur',
  templateUrl: './consulter-utilisateur.component.html',
  styleUrls: ['./consulter-utilisateur.component.css']
})
export class ConsulterUtilisateurComponent implements OnInit {
 users: any;
 delete: any = 'http://localhost:3000/removeuser';
 Maj: any = 'http://localhost3000/updateuser';

  constructor(public http: ResetuserService,  private https: HttpClient, private router: Router) {
    this.users = http.getUsers();
  }
  ngOnInit() {
  }
  remove(idutilisateur) {
    this.https.post(this.delete, {
       id: idutilisateur
      }).subscribe(resp => {
          localStorage.removeItem(idutilisateur);
          console.log('supression avec succee');
          this.router.navigate(['/dashboard']);
        }, err => {
          console.log('verif err');
        } ) ;
  }

  update(idutilisateur) {
    this.https.post(this.Maj, {
        id: idutilisateur
      }).subscribe(resp => {
          console.log('update');
          this.router.navigate(['/dashboard']);
        }, err => {
          console.log('verif err');
        } ) ;
  }
}
