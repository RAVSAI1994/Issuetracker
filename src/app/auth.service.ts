import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;

  constructor() {
   }
   login() {
    localStorage.setItem('isLoggedIn','true')
    this.isLoggedIn = true
   }
   logout() {
    localStorage.removeItem('isLoggedIn')
    this.isLoggedIn = false
   }
}