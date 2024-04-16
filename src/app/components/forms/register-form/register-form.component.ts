import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})

export class RegisterFormComponent {
                 
  registerForm: FormGroup = this.formBuilder.group({
    name: new FormControl(null),
    surname: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    addres: new FormControl(null),
    phone: new FormControl(null),
    dob: new FormControl(null),
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router : Router
  ){}
  

}
