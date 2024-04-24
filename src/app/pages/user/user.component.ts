import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from '../../components/users/users.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgbNavModule, UsersComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  active =1 ;
}
