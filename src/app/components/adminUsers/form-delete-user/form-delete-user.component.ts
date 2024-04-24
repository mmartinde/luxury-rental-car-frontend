import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

interface Alert{
  type:string;
  message:string;
}

const ALERTS: Alert[] = [
  {
    type: 'success',
    message: 'This is an success alert',
  }
]

@Component({
  selector: 'app-form-delete-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-delete-user.component.html',
  styleUrl: './form-delete-user.component.scss'
})
export class FormDeleteUserComponent {
    alerts: Alert[] = Array.from(ALERTS);
    eraserUser: FormGroup=this.FormBuilder.group({
    id: new FormControl(null,[Validators.required]),
  })

  constructor(
    private FormBuilder: FormBuilder,
    private UserService: UserService,
  ){
    this.reset();
	}

	close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

	reset() {
		this.alerts = Array.from(ALERTS);
	}

  deleteUser(){
    const id: string =this.eraserUser.get('id')?.value
    this.UserService.deleteUser(id).subscribe({
      next:(res:any)=>{
        ALERTS
        console.log(res)
      },
      error: (err)=>console.log('error al borrar el usuario'),
    })
  }
}
