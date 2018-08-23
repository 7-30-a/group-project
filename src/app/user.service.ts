import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  register(user) {
    console.log("User Service Was Hit");
    return this.http.post(`${window.location.origin}/users/register`, user);
  }
 
  login(user) {
    console.log("Login Was Hit!");
    return this.http.post(`${window.location.origin}/users/login`, user);
  }


  getUsers(){
    return this.http.get<string[]>(`${window.location.origin}/users/`);
  }

  countUsers() {
    return this.http.get<number>('/users/count');
  }

  addUser(user) {
    return this.http.post('/user', user);
  }

  getUser(user) {
    return this.http.get(`/user/${user._id}`,user);
  }

  editUser(user) {
    return this.http.put(`/user/${user._id}`, user, { responseType: 'text' });
  }

  deleteUser(user) {
    return this.http.delete(`/user/${user._id}`, { responseType: 'text' });
  }

  constructor(private http: HttpClient) {

  }
}
