import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private https: HttpClient, private router: Router, private route: ActivatedRoute) {}
  sub: Subscription;
  User: User;
  role: any;
  get: any = 'http://localhost:3000/email';
  ngOnInit() {
    console.log(localStorage.getItem('email'));
    this.role = localStorage.getItem('role');
  }
}
