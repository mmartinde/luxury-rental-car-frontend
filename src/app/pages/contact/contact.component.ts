import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RentService } from '../../services/rent.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  rentForm: FormGroup;
  carId: string = '';
  userId: string = '';

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private rentService: RentService
  ) {
    this.rentForm = this.formBuilder.group({
      dateIn: ['', Validators.required],
      dateOut: [''],
      user: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadUserId();
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.carId = id;
    } else {
      console.error('No existe ID de coche en los parametros de ruta');
      this.router.navigate(['/error']); // Crearemos una pagina de error, o lo redirige a un 404?
    }
  }

  loadUserId(): void {
    const storedUserId = localStorage.getItem('id');
    if (storedUserId !== null) {
      this.userId = storedUserId;
    }
  }

  submitRentRequest() {
    if (this.rentForm.valid) {
      const rentDetails = {
        ...this.rentForm.value,
        car: this.carId,
      };
      this.rentService
        .createRent(rentDetails)
        .subscribe(() => this.router.navigate(['/requestSent']));
    }
  }
}
