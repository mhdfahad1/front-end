import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSchema } from '../modules/users/users.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  // get admin details
  adminDetails() {
    // api call to http://localhost:3000/users/1
    return this.http.get(`${this.base_url}/users/1`)
  }

  getallUsers() {
    // api call to http://localhost:3000/users
    return this.http.get(`${this.base_url}/users`)
  }
  // addUser
  addUser(user: UserSchema) {
    // api call to http://localhost:3000/users
    return this.http.post(`${this.base_url}/users`, user)
  }
  // getexistinguser
  getExistingUser(id: any) {
    // api call to http://localhost:3000/users/id
    return this.http.get(`${this.base_url}/users/${id}`)

  }
  // updatuser
  updateuser(id: any, data: UserSchema) {
    // api call to http://localhost:3000/users/id
    return this.http.put(`${this.base_url}/users/${id}`, data)
  }
  // deleteuser
  deleteuser(id: any) {
    // api call to http://localhost:3000/users/id
    return this.http.delete(`${this.base_url}/users/${id}`)

  }
  //update admin
  updateAdmin(adminBody: UserSchema) {
    // api call to http://localhost:3000/users/id

    return this.http.put(`${this.base_url}/users/1`, adminBody)

  }
}
