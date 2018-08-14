import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { ResetuserService } from '../services/resetuser.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-consultutilisateur',
  templateUrl: './consultutilisateur.component.html',
  styleUrls: ['./consultutilisateur.component.css']
})
export class ConsultutilisateurComponent implements OnInit {

  constructor(public http: ResetuserService, private route: ActivatedRoute) { }
  id: number;
  user: User;
  ngOnInit() {
    this.loadUser();
  }
  loadUser() {
    this.route.params.subscribe( (params) => {
      this.id = +params['id'];
    });

    this.http.getUserById(this.id)
    .subscribe(res => {
      this.user = res[0];
      console.log('user1 : ', this.user);
    });
  }
}
