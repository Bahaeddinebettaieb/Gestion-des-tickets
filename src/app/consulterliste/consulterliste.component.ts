import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ResetuserService } from '../services/resetuser.service';

@Component({
  selector: 'app-consulterliste',
  templateUrl: './consulterliste.component.html',
  styleUrls: ['./consulterliste.component.css']
})
export class ConsulterlisteComponent implements OnInit {
  ticket: any;
  constructor(public http: ResetuserService,  private https: HttpClient) {
    this.ticket = http.getTickets();
  }
  ngOnInit() {
  }
}
