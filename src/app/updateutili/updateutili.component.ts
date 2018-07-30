import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Subscription } from '../../../node_modules/rxjs';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-updateutili',
  templateUrl: './updateutili.component.html',
  styleUrls: ['./updateutili.component.css']
})
export class UpdateutiliComponent implements OnInit {
  users: any;
  Maj: any = 'http://localhost:3000/updateuser';
  get: any = 'http://localhost:3000/getuser';
  sub: Subscription;
  constructor( private https: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
              const id = params['id'];
              console.log(id);
              if (id) {
                this.https.post(this.get, {
                  id: id
                }).subscribe(resp => {
                  console.log('err');
                  this.users = resp[0];
                /* if (users) {
                    this.users = users;
                  }*/
            });
          }
      });
    }
  }
