import { Cars } from './../../../interfaces/cars';
import { CarsService } from './../../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RentService } from '../../../services/rent.service';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-add-rent',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-rent.component.html',
  styleUrl: './add-rent.component.scss',
})
export class AddRentComponent implements OnInit {
  rentForm: FormGroup;
  cars: Cars[] = [];
  users: User[] = [];

  constructor(
    private formbuilder: FormBuilder,
    private rentService: RentService,
    private carsService: CarsService,
    private userService: UserService,
    private router: Router
  ) {
    this.rentForm = this.formbuilder.group({
      car: ['', Validators.required],
      user: ['', Validators.required],
      dateIn: ['', Validators.required],
      dateOut: ['', Validators.required],
      price: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.fetchAllCars();
    this.fetchAllUsers();
  }

  onSubmit(): void {
    if (this.rentForm.valid) {
      console.log(this.rentForm.value);
      this.rentService.createRent(this.rentForm.value).subscribe({
        next: (res: any) => this.router.navigate(['/adminCars']),
        error: (err) =>
          console.error('No se pudo añadir renta a Base de Datos: ', err),
      });
    }
  }
  fetchAllCars() {
    this.carsService.getAllCars().subscribe({
      next: (res: any) => {
        this.cars = res as Cars[];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  fetchAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (res: any) => {
        this.users = res as User[];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
