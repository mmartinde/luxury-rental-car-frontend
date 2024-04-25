
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  userId: string | undefined; // Variable para almacenar el userId
  

  constructor (
    private userService: UserService,
    private cookies: CookieService,
    private FormBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    // Acceder al userId desde el servicio UserService
    const userDataCookie = this.cookies.get('userData'); // Obtener el valor de la cookie
  const userData = JSON.parse(userDataCookie); // Analizar el valor JSON de la cookie

// Verificar si userData contiene el _id y guardarlo en una variable
const userId = userData && userData._id ? userData._id : undefined;

console.log(userId); // Imprimir el _id del usuario

  
  }

}
