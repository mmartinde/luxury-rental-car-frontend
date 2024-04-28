import { RentService } from '../../../services/rent.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Rent } from '../../../interfaces/rent';
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
  rent: Rent[]=[]

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
  this.rentService.getRentbyId(userId).subscribe({
    next:(res:any)=>{
      this.rent=res as Rent[],
      this.rentForm.patchValue(this.rent)
    },
    error:(err:string)=>console.log('Error al obtner alquileres', err)
  })
}

onSubmit():void{
  const userId:any=localStorage.getItem("userId")
  if(this.rentForm.valid){
    console.log(this.rentForm.value)
    this.rentService.editRent(userId, this.rentForm.value).subscribe({
      next:(res:any)=> this.router.navigate(['user/rent']),
      error:(err:string)=>console.error('Error modificar renta', err)
    });
  }    
}
}
