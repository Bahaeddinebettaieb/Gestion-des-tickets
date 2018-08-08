import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }
  role: any;
  ngOnInit() {
  }
  logout() {
    console.log('Deconnecter avec succee');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.route.navigate(['']);
  }
  isAdmin() {
    if (localStorage.getItem('role') === 'admin') {
      return true;
    }
    return false;
  }
}
