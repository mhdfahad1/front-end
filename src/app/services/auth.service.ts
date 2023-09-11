import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIN(){
   return !!localStorage.getItem("admin_name")
  //  return true or false(!!)
  }
}
