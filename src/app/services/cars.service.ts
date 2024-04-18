import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private http: HttpClient,
    private cookies:CookieService
  ) { }

  url: string = 'http://localhost:3000/api/cars'

  getAllCars(){
    return this.http.get(`${this.url}`)
  }
}
