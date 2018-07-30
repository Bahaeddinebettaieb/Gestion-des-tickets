import { Component } from '@angular/core';
import { ResetuserService } from './services/resetuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = {
    id_Utilisateur: 1,
    nom: '',
    prenom: '',
    email: '',
    etat: '',
    role: ''
  };
    user: any;
    constructor(private rest: ResetuserService ) {
      this.user = rest.getUsers();
    }
}
