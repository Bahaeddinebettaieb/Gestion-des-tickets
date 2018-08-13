import { RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Ticket } from '../models/Ticket';
import { Router } from '../../../node_modules/@angular/router';

@Injectable(
 //  providedIn: 'root'
)
export class ResetuserService {
  tick: any = 'http://localhost:3000/alltick';
  baseUrl: any = 'http://localhost:3000/all';
  verif: any = 'http://localhost:3000/verif';
  ajout: any = 'http://localhost:3000/ajout';
  userAuth: any = 'http://localhost:3000/getuseremail';
  gettick: any = 'http://localhost:3000/getticket';
  getstatut: any = 'http://locahost:3000/getstatut';
  n: any;
  constructor(private http: HttpClient, private router: Router) { }

  getAuthUser(email): Observable<User> {
    return this.http.post<any>(this.userAuth, {email: email});
  }

  getStatut(id): Observable<Ticket> {
    return this.http.post<any>(this.getstatut, {id: id});
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.tick);
  }

  getTicketById(id: number): Observable<Ticket> {
    return this.http.post<Ticket>(this.gettick, { id: id });
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
