import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './form-edit-user.component.html',
  styleUrl: './form-edit-user.component.scss'
})
export class FormEditUserComponent implements OnInit {
  userForm: FormGroup
  userId: string =''

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      license: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      role: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id']
    this.userService.getUserById(this.userId).subscribe((user) =>{
    this.userForm.patchValue(user)
    })
  }

  onSubmit() :void{
    if (this.userForm.valid){
      console.log(this.userForm.value)
      this.userService.updateUser(this.userId, this.userForm.value).subscribe({
        next:(res:any)=>this.router.navigate(['/adminUsers']),
        error:(err)=>console.error('Error modificar usuario: ', err)
      })
    }
  }
}
