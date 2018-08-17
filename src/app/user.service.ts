import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  register(user) {
    return this.http.post(`${window.location.origin}/users/register`, user);
  }

  login(user) {
    return this.http.post(`${window.location.origin}/users/login`, user);
  }

  constructor(private http: HttpClient) {

  }
}
