import { Rent } from './../../../interfaces/rent';
import { UserService } from './../../../services/user.service';
import { RentService } from '../../../services/rent.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-rental-user',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './form-rental-user.component.html',
  styleUrl: './form-rental-user.component.scss'
})
export class FormRentalUserComponent implements OnInit{
  userId: string | undefined
  rentForm: FormGroup
  rents: Rent[]=[]

constructor(
  private rentService:RentService,
  private formBuilder: FormBuilder,
  private router: Router
){
  this.rentForm=this.formBuilder.group({
    car:['', Validators.required],
    user:['', Validators.required],
    dateIn:['', Validators.required],
    dateOut:[''],
    price:[''],
    status:['', Validators.required],
  })
}


ngOnInit(): void {
  const userId:any = localStorage.getItem('userId')
  this.rentService.getRentByUserId(userId).subscribe({
    next:(res:any)=>{
      console.log (res)
      this.rents=res as Rent[],
      this.rentForm.patchValue(this.rents)
      console.log (this.rents)
    },
    error:(err:string)=>console.log('Error al obtener alquileres', err)
  })
  
}

getStatusDescription(status: Number): String {
  switch (status) {
    case 1:
      return 'Solicitado';
    case 2:
      return 'Rentado';
    default:
      return 'Disponible';
  }
}

}
