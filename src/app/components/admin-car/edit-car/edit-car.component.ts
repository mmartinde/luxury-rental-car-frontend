import { CarsService } from './../../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-car',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './edit-car.component.html',
  styleUrl: './edit-car.component.scss',
})
export class EditCarComponent implements OnInit {
  carForm: FormGroup;
  carId: string = '';

  constructor(
    private formbuilder: FormBuilder,
    private carsService: CarsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.carForm = this.formbuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      plate: ['', Validators.required],
      year: ['', Validators.required],
      hp: ['', Validators.required],
      cc: ['', Validators.required],
      colour: ['', Validators.required],
      seats: ['', Validators.required],
      price: ['', Validators.required],
      transmission: ['', Validators.required],
      description: ['',],
    });
  }

  ngOnInit(): void {
    this.carId = this.route.snapshot.params['id'];
    this.carsService.getCarById(this.carId).subscribe((car) => {
      this.carForm.patchValue(car);
    });
  }

  onSubmit(): void {
    if (this.carForm.valid) {
      console.log(this.carForm.value)
      this.carsService.editCar(this.carId, this.carForm.value).subscribe({
        next: (res: any) => this.router.navigate(['/adminCars']),
        error: (err) => console.error('Error modificando el coche: ', err),
      });
    }
  }
}
