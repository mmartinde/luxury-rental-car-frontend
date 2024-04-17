import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgbCollapseModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isCollapsed = true;
}


