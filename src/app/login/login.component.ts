import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service';
import { ResetuserService } from '../services/resetuser.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  verif: any = 'http://localhost:3000/verif';
  check: any;
  constructor(private router: Router, public userservice: UserService, public http: ResetuserService, private https: HttpClient) {
  }

  ngOnInit() {
  }
    // methode statique
 /*loginorg(form: NgForm ) {
    console.log(form.value);
    console.log(form.value.email === 'admin@iss.com');
    if (form.value.email === 'admin@iss.com' && form.value.password === '123123') {
      console.log('Bienvenue dans notre site');
      localStorage.setItem('email' , form.value.email);
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Verifier vos coordonnes');
    }
  }*/

    // methode dynamique
  /*login(form: NgForm ) {
    console.log(form.value);
    if (form.value.email === '' || form.value.password === '' ) {
      console.log('Entrer votre email ou password');
    } else {
      // call function service ,2 parametres , retrun json 0 ou 1
        //this.check = this.http.logins(form.value.email, form.value.password);
         //console.log(this.check);
        if ((this.http.logins(form.value.email, form.value.password))  )  {
          localStorage.setItem('email' , form.value.email);
          this.router.navigate(['/dashboard']);
        } else {
          console.log('Verifier vos coordonnes');
        }
    }
    if (form.value.email === 'admin@iss.com' && form.value.password === '123123') {
      console.log('Bienvenue dans notre site');
      localStorage.setItem('email' , form.value.email);
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Verifier vos coordonnes');
    }
    }*/

    // Methode Dynamique avec le node js
    login(form: NgForm ) {
      console.log(form.value);
      if (form.value.email === '' || form.value.password === '' ) {
        console.log('Entrer votre email ou password');
      } else {
        this.https.post(this.verif, {
          email: form.value.email,
          password: form.value.password
      }).subscribe(resp => {
        console.log(resp);
        // this.n = resp[0].found;
        localStorage.setItem('email' , form.value.email);
        localStorage.setItem('role' , resp[0].role);
        console.log('Bienvenue dans notre site');
        if (resp[0].role === 'admin') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/dashboard']);
          console.log('client');
        }
       }, err => {
          console.log('verif err');
       } ) ;
      }
  }
}

