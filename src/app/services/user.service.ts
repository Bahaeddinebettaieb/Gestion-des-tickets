import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  nom: String;
  etat: boolean;
  constructor() { }
  getState() {
    return this.etat;
  }
  setState() {
    return this.etat = true;
  }
  getNom() {
    return this.nom;
  }
}
