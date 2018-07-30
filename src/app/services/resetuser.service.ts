import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '../../../node_modules/@angular/router';

@Injectable(
 //  providedIn: 'root'
)
export class ResetuserService {
  baseUrl: any = 'http://localhost:3000/all';
  verif: any = 'http://localhost:3000/verif';
  ajout: any = 'http://localhost:3000/ajout';
  n: any;
  constructor(private http: HttpClient, private router: Router) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  logins(email: string, password: number) {
  console.log('je suis dans le login');
  console.log(email);
    this.http.post(this.verif, {
      email: email,
      password: password
      // }).subscribe((resp: any) => {
  }).subscribe(resp => {
    console.log(resp[0].found);
    this.n = resp[0].found;
   }, err => {
      console.log('verif err');
   } ) ;
 // console.log(this.n);
  return this.n;
  }

  insert(nom: string, prenom: String, email: String, etat: String, role: String, password: number) {
    console.log('je vais ajouter un nouveau utilisateur');
    this.http.post(this.ajout, {
      nom: nom,
      prenom: prenom,
      email: email,
      etat: etat,
      role: role,
      password: password
    }).subscribe(resp => {
      console.log(resp[0].found);
      this.n = resp[0].found;
    }) ;
    // console.log(this.n);
    return this.n;
  }
}
