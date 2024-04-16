import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister } from '../interfaces/forms-data/user-register';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,

  ) { }

  url: string = 'http://localhost:3000/api/user'

  register(data:UserRegister){
    return this.http.post(`${this.url}`,data)
  }
}
