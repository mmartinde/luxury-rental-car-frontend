import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form-find-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-find-user.component.html',
  styleUrl: './form-find-user.component.scss'
})
export class FormFindUserComponent implements OnInit {
  users: User[]=[]
  usersFiltered: User [] =[]

  searcherUser: FormGroup = this.FormBuilder.group({
    user: new FormControl(null, [Validators.required])
  })

  constructor (
    private UserService: UserService,
    private FormBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe({
      next:(res:any)=>{
        this.users=res as User[],
        console.log("Usuarios cargados", this.users)
      }, 
      error: (err:any)=>console.log ('Error al cargar usuarios')
    })
  }

  searchUser (){
    const nameFilter = this.searcherUser.get('user')?.value
    console.log ('Usuario filtrado', nameFilter)
    this.usersFiltered = this.users.filter ((i)=>i.name.toLocaleLowerCase().includes(nameFilter))
    console.log ('este es el usuario filtrado', this.usersFiltered)
  }
}
