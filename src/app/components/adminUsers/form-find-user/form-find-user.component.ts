import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';


@Component({
  selector: 'app-form-find-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-find-user.component.html',
  styleUrl: './form-find-user.component.scss'
})
export class FormFindUserComponent implements OnInit {
  users: User[]=[]
  usersFiltered: User [] =[]
  searchControl= new FormControl('')

  searcherUser: FormGroup = this.FormBuilder.group({
  user: new FormControl(null, [Validators.required])
  })

  constructor (
    private UserService: UserService,
    private FormBuilder: FormBuilder, 
    private route:Router
  ){}

  ngOnInit(): void {
    this.fetchAllUsers()
    this.setupSearch()
  }

  //Cargar todos los usuarios
  fetchAllUsers(): void {
    this.UserService.getAllUsers().subscribe({
      next:(res:any)=>{
        this.users=res as User[],
        this.usersFiltered =res
      }, 
      error: (err:any)=>console.log ('Error al cargar usuarios', err)
    })
  }

  //escucha de cambios al escribir en la barra de busqueda
  setupSearch(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((value)=> value||'')
    )
    .subscribe((term)=>{
      this.filterUsers(term as string)
    })
  }

  filterUsers(searchTerm:string):void{
    if (!searchTerm){
      this.usersFiltered = this.users
    }else{
      const lowerTerm = searchTerm.toLowerCase()
      this.usersFiltered = this.users.filter(
        (user)=> 
          user.name.toLowerCase().includes(lowerTerm) || 
          user.surname.toLowerCase().includes(lowerTerm) ||
          user.license.toLowerCase().includes(lowerTerm) ||
          user.email.toLowerCase().includes(lowerTerm)
      ) 
    }
  }

  navigateToEditUser(userId:any):void{
    this.route.navigate([`/adminUsers/editUser/${userId}`])
  }

  deleteUser(userId:any): void{
    this.UserService.deleteUser(userId).subscribe({
      next:(res)=>{
        this.fetchAllUsers()
      },
      error:(err) =>
        console.error ('Error borrado usuasrio:', err)
      })
    }


}
