import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
etat: boolean;
  constructor() { }
  getState() {
    return this.etat;
  }
  setState() {
    return this.etat = true;
  }
}
