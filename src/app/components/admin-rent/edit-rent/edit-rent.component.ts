
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RentService } from '../../../services/rent.service';

@Component({
  selector: 'app-edit-rent',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-rent.component.html',
  styleUrl: './edit-rent.component.scss'
})
export class EditRentComponent implements OnInit {
  rentForm: FormGroup;
  rentId: string = '';

  constructor(
    private formbuilder: FormBuilder,
    private rentService: RentService,
    private route: ActivatedRoute,
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
    this.rentId = this.route.snapshot.params['id'];
    this.rentService.getRentbyId(this.rentId).subscribe((rent) => {
      this.rentForm.patchValue(rent);
    });
  }

  onSubmit(): void {
    if (this.rentForm.valid) {
      console.log(this.rentForm.value)
      this.rentService.editRent(this.rentId, this.rentForm.value).subscribe({
        next: (res: any) => this.router.navigate(['/adminRent']),
        error: (err) => console.error('Error modificando el coche: ', err),
      });
    }
  }
}
