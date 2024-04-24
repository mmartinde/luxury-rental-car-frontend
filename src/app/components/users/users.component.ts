import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  

  constructor (
    private userService: UserService,
    private FormBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    console.log ( )
  
  }

}
