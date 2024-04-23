import { Component } from '@angular/core';
import { FormFindUserComponent } from '../../components/adminUsers/form-find-user/form-find-user.component';
import { FormDeleteUserComponent } from '../../components/adminUsers/form-delete-user/form-delete-user.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [FormFindUserComponent, FormDeleteUserComponent, NgbNavModule ],
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.scss'
})
export class AdminUserComponent {
  active =1 ;
}
