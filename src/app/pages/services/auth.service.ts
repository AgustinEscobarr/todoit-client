import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  get isLoggedIn():boolean{
    const user = JSON.parse(localStorage.getItem('userLoged') || '');
    console.log(`se obtiene info del local storage ${user}`);
    return user !==null ? true : false;
}
}